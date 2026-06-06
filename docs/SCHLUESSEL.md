# SCHLÜSSEL — Knoten-Identität von Jasons-Tresor

Stand: 2026-05-31

> Re-Skin von `SB-KIMTool-Point/docs/SCHLUESSEL.md`. Rezept und Sicherheitsregeln 1:1;
> nur die konkrete nodeId/der Schlüssel sind hier (noch) andere.

## Worum geht's

Unser Knoten unterschreibt seine Spore mit einem **privaten Ed25519-Schlüssel**
(`SBKIM_NODE_KEY`, base64 PKCS8-PEM). Daraus leitet sich die dauerhafte **nodeId**
`base64url(SHA256(roher Pubkey))` ab. Solange wir denselben Schlüssel behalten, bleibt die
nodeId gleich — Sage muss uns nicht neu registrieren.

## ✓ Aktueller Stand: NEUE Identität (2026-06-06), Sicherung bei Klaus

**Identitätswechsel:** Die frühere nodeId `7F_zNop…` war faktisch ein **verlorener
Demo-Schlüssel** — das Passwort wurde nie gesichert, der Tresor ließ sich nicht öffnen, die
alte `node_key.enc.json` wurde aus dem Repo **entfernt**. Im Browser (`werkzeuge/andock.html`,
Teil A) wurde eine **neue** Identität erzeugt:

- **dauerhafte nodeId:** `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`
- Spore `sbkim/spore.json` echt signiert + ✔ VALID, **mit echtem 384-dim domainVector** (L2 ≈ 1).

**Sicherung wieder im Repo:** Die verschlüsselte `node_key.enc.json` der neuen Identität liegt
**jetzt im Repo** (von Klaus im Browser erzeugt; Format geprüft, nodeId stimmt überein,
AES-256-GCM / PBKDF2-SHA256 600k — ohne Passwort wertlos). **Das Passwort hält Klaus getrennt
und dauerhaft** — genau das war beim alten Schlüssel das Problem (Passwort nie gesichert →
Identität verloren). Mit Datei **und** Passwort ist künftiges Neu-Signieren wieder möglich.

Sage / SB-KIMTool-Point / Mein-Tresor müssen die **neue** nodeId übernehmen (die alte ist
hinfällig). Re-Sign (z. B. wenn
der echte `domainVector` dazukommt) hält die nodeId gleich, solange derselbe Schlüssel benutzt
wird (Rezept unten). **Passwort gut aufbewahren** — Verlust = neue Identität nötig.

## Schlüssel dauerhaft machen (einmalig, durch Klaus)

> Ein einziger Lauf genügt. `scripts/make_node_key.mjs` erzeugt den frischen Schlüssel,
> zeigt die **dauerhafte** nodeId und legt ihn **sofort verschlüsselt** als
> `sbkim/node_key.enc.json` ab — der private Schlüssel/das Passwort werden dabei **nie**
> ausgegeben. (Headless bewiesen in `test/node_key.test.js`: Rundlauf `make → open`,
> falsches Passwort fällt durch.)

1. **Schlüssel erzeugen + Tresor anlegen** (Passwort nur über die Umgebungsvariable,
   **nie** als Argument — sonst steht es in der Prozessliste):
   ```
   SBKIM_KEY_PW='<dein-Passwort>' node scripts/make_node_key.mjs
   ```
   → schreibt `sbkim/node_key.enc.json` und druckt die **dauerhafte nodeId**. Das Passwort
   sicher merken (Passwort-Manager) — es steht **nirgends** im Repo. Ein vorhandener Tresor
   wird **nicht** überschrieben (Identitätsschutz), außer `SBKIM_KEY_FORCE=1` ist gesetzt.
2. **Optional zusätzlich als Umgebungs-Secret `SBKIM_NODE_KEY`** hinterlegen (bequemstes
   Re-Sign ohne Passwort-Eingabe). Wenn gesetzt, nutzt `generate_spore.mjs` es automatisch:
   ```
   SBKIM_NODE_KEY="$(SBKIM_KEY_PW='<Passwort>' node scripts/open_node_key.mjs)"
   ```
3. **Spore signieren — mit genau diesem Schlüssel → nodeId bleibt stabil:**
   ```
   SBKIM_NODE_KEY="$(SBKIM_KEY_PW='<Passwort>' node scripts/open_node_key.mjs)" \
     node scripts/generate_spore.mjs
   ```
   **Kontrolle:** Die gedruckte nodeId muss die **dauerhafte** aus Schritt 1 sein.

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
