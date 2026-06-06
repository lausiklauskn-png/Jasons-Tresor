# BRIEF — Identitätswechsel: neue nodeId + echter domainVector

Stand: 2026-06-06 · Von: Sitzung 40 · An: nächste Sitzung / Klaus

> Unsere SBKIM-Identität wurde **neu erzeugt**, weil der alte Schlüssel (nodeId `7F_zNop…`)
> ein verlorener Demo-Schlüssel war (Passwort nie gesichert). Neue, dauerhafte nodeId
> `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM` **mit echtem 384-dim domainVector** (L2 = 1,
> kein `_demo`). Spore ✔ VALID, `npm test` 53/53. Die Nachbarn müssen die **neue** nodeId
> übernehmen — Briefe liegen in den Postfächern.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag Sitzung 40).
3. **Dieser Brief** (neuester).
4. `status.json` — ehrlicher Real-Anteil (Feld `identitaet_ehrlichkeit` erklärt den Wechsel).
5. `docs/SCHLUESSEL.md`, `werkzeuge/LIESMICH.md`, `sbkim/AUSTAUSCH*.md`, `scripts/verify_foreign_spore.mjs`.

## Was passiert ist (ehrlich, fürs Protokoll)
- Die nodeId `7F_zNop…` war faktisch **Wegwerf**: das Passwort zu `node_key.enc.json` wurde nie
  gesichert → der Schlüssel ließ sich nicht öffnen, nicht neu signieren. Die Datei wurde als tot
  **aus dem Repo entfernt**.
- Klaus hat im Browser (`werkzeuge/andock.html`) **Teil A** (neue Identität) + **Teil B**
  (echter Vektor + Signatur) gefahren. Ergebnis-Spore unabhängig geprüft → **✔ VALID**.

## Aktueller Identitäts-Stand
- **nodeId:** `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`
- **publicKey.x:** `LStaFlc68SLZwhrUgSfY8YrdIcnjuN_2fzrnbRgF10M`
- **domainVector:** echt, 384-dim (`Xenova/multilingual-e5-small`, L2 = 1) — **kein `_demo`**.
- **sporeUrl:** `https://raw.githubusercontent.com/lausiklauskn-png/Jasons-Tresor/main/sbkim/spore.json`

## Was diese Sitzung im Repo gemacht hat
- `sbkim/spore.json` ersetzt (neue Identität + echter Vektor); alte `node_key.enc.json` gelöscht.
- Alte nodeId an allen **Live**-Stellen → neue: `SIGNAL.json` (seq 3→4), `status.json`,
  `werkzeuge/andock.html` (Hinweis + Match-Prüfung), `werkzeuge/LIESMICH.md`,
  `index.html` + `jasons-bibliothek/index.html` (Anzeige), `docs/SCHLUESSEL.md`.
  *Datierte Verlaufseinträge (alte PULS-/Brief-Einträge) bleiben als Geschichte stehen.*
- Übergabe-Meldungen in die Postfächer: `AUSTAUSCH.md` §8, `AUSTAUSCH-SBKIMTool.md` §5,
  `AUSTAUSCH-MeinTresor.md` §5 — jeweils „alte Registrierung ersetzen, jetzt verified-match möglich".

## Offen — wartet auf Klaus
1. **`node_key.enc.json` der neuen Identität ins Repo legen** (ohne Passwort; ohne Passwort
   wertlos) **und das Passwort dauerhaft sichern**. Sonst beim nächsten Mal erneut Identitätsverlust.
2. **Re-Registrierung anstoßen:** die drei Postfach-Meldungen rübertragen → Sage / SB-KIMTool-Point /
   Mein-Tresor tragen die **neue** nodeId ein (`verified-spore`) und rechnen den Score (`verified-match`).
3. **Pages-Auslieferung** der neuen Spore nach Hard-Reload (Ctrl+Shift+R) bestätigen.

## Datenverträge (nicht brechen)
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`); die neue
  Spore trägt diese + echten `domainVector` (384, L2 = 1), kein `_demo`.
- `node_key.enc.json`: AES-256-GCM / PBKDF2-SHA256 600k — Passwort/Schlüssel nie ins Repo.
- Briefkasten `sbkim/SIGNAL.json`: `seq` +1 pro Bau; `nodeId`-Feld trägt jetzt die neue Identität.

## Akzeptanzkriterien
- `npm test` grün (53/53); `verify_foreign_spore.mjs sbkim/spore.json` → ✔ VALID;
  `id == base64url(SHA256(pubkey))`, domainVector 384/L2 = 1, kein `_demo`.
- Keine **Live**-Stelle nennt mehr die alte nodeId als aktuelle Identität.
- Passwort/privater Schlüssel nicht im Repo.

## Offene Fragen an Klaus
- Schickst du die neue `node_key.enc.json` (ohne Passwort), damit das Backup wieder im Repo liegt?
- Sollen wir die drei Nachbarn aktiv anstoßen, oder wartest du auf deren nächsten Sitzungsstart?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
