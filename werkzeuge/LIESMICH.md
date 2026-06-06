# Werkzeug: SBKIM-Andock (`andock.html`)

> Browser-Werkzeug, um unsere Spore mit einem **echten** Themen-Vektor (`domainVector`)
> neu zu signieren — **mit demselben Schlüssel**, damit unsere nodeId
> `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs` **gleich bleibt** (keine neue Identität,
> keine zerrissenen Registrierungen bei Sage / SB-KIMTool-Point / Mein-Tresor).
>
> 1:1 aus der Schwester **Mein-Tresor** kopiert; nur unsere Werte (Name, Domäne, Endpoint,
> die erwartete nodeId) sind eingesetzt. Der Krypto-Kern ist unverändert.

## Wann brauche ich das?

Unsere `sbkim/spore.json` trägt aktuell einen **Demo-Vektor** (`_demo`). Dieses Werkzeug
ersetzt ihn durch den echten 384-dim-Vektor (Modul: `Xenova/multilingual-e5-small`).
**Nur Klaus** kann das tun — es braucht **deinen Browser** und **dein Passwort** für die
Schlüssel-Sicherung. Claude kann das nicht (headless, kein Passwort).

## So geht's (nur Knöpfe, kein Terminal)

1. **Seite öffnen** über die veröffentlichte Adresse (Pages, `https://…`):
   `https://lausiklauskn-png.github.io/Jasons-Tresor/werkzeuge/andock.html`
   *(WebCrypto braucht `https` — nicht per Doppelklick als Datei öffnen.)*
   Beim ersten Lauf lädt die Seite einmalig das Sprachmodell aus dem Netz.

2. **Teil B, Schritt ①** — „Identität aus Sicherung laden":
   deine Datei **`node_key.enc.json`** wählen + **Passwort** eingeben.
   ✔ Es muss erscheinen: **„passt zur registrierten nodeId"** mit
   `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`.
   ⚠ Steht dort „nodeId weicht ab" → **abbrechen** (falsche Datei/Passwort), nicht weitermachen.

3. **Teil B, Schritt ②** — „domainVector erzeugen":
   warten, bis **384 Floats, Länge (L2) ≈ 1** gemeldet werden.

4. **Teil B, Schritt ③** — „Spore neu signieren":
   die Seite zeigt **✔ VALID** und bietet die neue Datei zum **Herunterladen** an.

5. Die heruntergeladene Datei ist die neue **`spore.json`** (echter Vektor, kein `_demo`).
   Gib sie an Claude (oder lege sie als `sbkim/spore.json` ab). Claude finalisiert dann:
   `npm test` grün · `verify_foreign_spore.mjs` → ✔ VALID · `SIGNAL.json` seq +1.

## Sicherheit

- Dein **Passwort** und der **private Schlüssel** verlassen den Browser **nie** und kommen
  **nie** ins Repo. `node_key.enc.json` ist ohne Passwort wertlos.
- **Teil A** („frische Identität") **NICHT** benutzen — das erzeugt eine **neue** nodeId und
  zerreißt alle bestehenden Registrierungen. Wir wollen Teil B (gleicher Schlüssel).
