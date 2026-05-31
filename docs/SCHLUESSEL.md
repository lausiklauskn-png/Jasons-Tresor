# SCHLÜSSEL — Knoten-Identität von Jasons-Tresor

Stand: 2026-05-31

> Re-Skin von `SB-KIMTool-Point/docs/SCHLUESSEL.md`. Rezept und Sicherheitsregeln 1:1;
> nur die konkrete nodeId/der Schlüssel sind hier (noch) andere.

## Worum geht's

Unser Knoten unterschreibt seine Spore mit einem **privaten Ed25519-Schlüssel**
(`SBKIM_NODE_KEY`, base64 PKCS8-PEM). Daraus leitet sich die dauerhafte **nodeId**
`base64url(SHA256(roher Pubkey))` ab. Solange wir denselben Schlüssel behalten, bleibt die
nodeId gleich — Sage muss uns nicht neu registrieren.

## ⚠ Aktueller Stand: nodeId ist PROVISORISCH

In dieser Sitzung war **kein** `SBKIM_NODE_KEY` gesetzt. `scripts/generate_spore.mjs` hat
darum eine **flüchtige** Identität erzeugt (klar markiert „⚠ UNGESICHERT / NUR TEST"). Die
nodeId in `sbkim/spore.json` **wechselt bei jedem Lauf ohne Secret** und ist deshalb **nicht**
die endgültige Identität. Die Spore ist trotzdem **echt signiert und ✔ VALID** — sie beweist,
dass die Andock-Pipeline funktioniert.

**Damit die Identität dauerhaft wird, muss Klaus den Schlüssel einmalig sichern** (siehe
unten). Solange das aussteht, bitte Sage **noch nicht** um eine feste Registrierung der
provisorischen nodeId — sonst muss bei jedem Re-Sign neu registriert werden.

## Schlüssel dauerhaft machen (einmalig, durch Klaus)

1. **Frischen Schlüssel erzeugen** (ohne Secret) und die `nodeId` notieren:
   ```
   node scripts/generate_spore.mjs        # druckt nodeId + ⚠ UNGESICHERT
   ```
   Den **privaten** Schlüssel (PKCS8-PEM, base64) dabei abgreifen — der Generator selbst legt
   ihn nicht offen; erzeuge ihn alternativ einmal kontrolliert und behalte den base64-PEM.
2. **Sofort sichern — beide Wege, mind. einer muss greifen:**
   - **Umgebungs-Secret `SBKIM_NODE_KEY`** in der Claude-Code-Umgebung hinterlegen (am
     bequemsten). Wenn gesetzt, nutzt `generate_spore.mjs` es automatisch.
   - **Passwort-Tresor im Repo** — `sbkim/node_key.enc.json`: verschlüsselt mit
     **AES-256-GCM**, Schlüssel via **PBKDF2 (600k, SHA-256)** aus Klaus' Passwort. Ohne
     Passwort wertlos; das **Passwort steht nirgends im Repo**. Öffnen:
     ```
     SBKIM_KEY_PW='<Klaus-Passwort>' node scripts/open_node_key.mjs
     ```
3. **Re-Sign ab dann mit Secret/Tresor → nodeId bleibt stabil:**
   ```
   SBKIM_NODE_KEY="$(SBKIM_KEY_PW='<Passwort>' node scripts/open_node_key.mjs)" \
     node scripts/generate_spore.mjs
   ```

## Re-Sign-Ablauf (wenn Vektor/Kategorien sich ändern)

1. Schlüssel beschaffen (Tresor öffnen ODER Secret gesetzt).
2. `node scripts/generate_spore.mjs` → schreibt `sbkim/spore.json` neu.
3. **Kontrolle:** Ausgabe muss die **dauerhafte** nodeId zeigen (nicht eine neue). Weicht sie
   ab → falscher/fehlender Schlüssel → **stoppen**, Klaus fragen.
4. `node scripts/verify_foreign_spore.mjs sbkim/spore.json` → ✔ VALID; `npm test` grün.

## Wenn das Passwort verloren geht

Dann ist der Tresor nicht mehr zu öffnen. Lösung: **neue Identität erzeugen** (frischer
Schlüssel sichern, neuer Tresor) und Sage um **Neu-Registrierung** bitten.

## Sicherheitsregeln (unverändert)

- Der **private** Schlüssel (Klartext base64/PEM) und das **Passwort** kommen **nie** ins
  Repo, nie in Commits, nie in gepushte Chat-Artefakte.
- Nur der **öffentliche** Teil (nodeId, `publicKey.x`) darf nach außen / in `sbkim/spore.json`.
- Der verschlüsselte Tresor `node_key.enc.json` **darf** ins Repo (ohne Passwort wertlos).
