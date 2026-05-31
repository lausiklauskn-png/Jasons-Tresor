# Jasons-Tresor

Von außen ein **Tresor**, drinnen eine **Jasons-Bibliothek** — und zugleich ein echter
**SBKIM-Endknoten** mit eigener Identität.

Zwei Dinge in einem:

1. **Tresor / Bibliothek** (`index.html`, eine offline-taugliche Einzeldatei) — beliebige
   `.json`-Dateien und SBKIM-Schlüssel **laden, benennen, ordnen, suchen, exportieren, wieder
   einlesen** und mit **Passwort verschlüsseln** (AES-256-GCM / PBKDF2-SHA256 600k, WebCrypto).
   Kein Konto, kein Server, kein Netz nötig. Läuft komplett im Browser.
2. **Endknoten** — eine echt signierte **Ed25519-Spore** (`sbkim/spore.json`), mit der
   Jasons-Tresor wie SB-KIMTool-Point an das **Sage-Protokoll** andockt. So kann Klaus 1:1
   mit dem Tresor kommunizieren (gemeinsames Format + Andock-Postfach `sbkim/AUSTAUSCH.md`).

> **Ehrlichkeit zuerst:** Die App läuft echt im Browser, aber **Klaus' eigener Browser-Lauf
> steht noch aus** (Datei-Auswahl, Download, Passwort-Eingabe). Der headless Beweis ist
> `npm test`. Die Knoten-`nodeId` ist **provisorisch** (flüchtiger Schlüssel), bis Klaus den
> Schlüssel als Secret `SBKIM_NODE_KEY` hinterlegt — siehe `docs/SCHLUESSEL.md` und
> `status.json` für den Real-Anteil.

## Schnellstart

```bash
npm test        # headless Smoke-Test (Beweis): Tresor-Logik (16) + Andock-Krypto (5) = 21/21
npm run demo    # erzeugt sbkim/spore.json neu (mit SBKIM_NODE_KEY = stabile nodeId)
npm run verify  # verifiziert die eigene Spore reziprok -> ✔ VALID
```

Kern ohne Abhängigkeiten. Node ≥ 20 (Ed25519/SHA-256 über `node:crypto`,
AES-GCM/PBKDF2 über WebCrypto, `node --test`).

## Herkunft — kopieren, nicht klonen

Jasons-Tresor baut sich aus den **getesteten Originalen** von
[SB-KIMTool-Point](https://github.com/lausiklauskn-png/SB-KIMTool-Point) (öffentlich lesbar
über `raw.githubusercontent.com/lausiklauskn-png/SB-KIMTool-Point/main/<pfad>`). 1:1 kopiert,
nur die öffentliche Knoten-Identität (`scripts/generate_spore.mjs` KONFIG) ist angepasst.
SB-KIMTool-Point kann dieses Repo **nicht** fernsteuern.

## Aufbau

```
index.html              # die App (Tresor/Bibliothek) — Wurzel, damit GitHub Pages sie zeigt
jasons-bibliothek/      # 1:1-Spiegel der App (der headless Test schneidet hier den Kern)
test/                   # der Beweis (npm test): jason_lib.test.js + andock.test.js
scripts/                # generate_spore.mjs, verify_foreign_spore.mjs, open_node_key.mjs
web/tools/sbkim-spore.js  # SBKIM Modul 02 (Spore) 1:1 aus Sage/Point
sbkim/                  # spore.json (Identität), AUSTAUSCH.md (Postfach), sage_inbox.json
docs/                   # SCHLUESSEL, ANDOCK, JASONS-BIBLIOTHEK, sessions/ (Brief-Kette)
status.json             # ehrlicher Real-Anteil
```

## Datenverträge

- **Tresor-Umschlag** (`kind: "jason-tresor"`, v2): identisch zu Modul 02 `exportBackup` und
  `sbkim/node_key.enc.json` — eine Tür liest beide. Siehe `docs/JASONS-BIBLIOTHEK.md`.
- **Eintrag/Bibliothek** (`jason-eintrag` / `jason-bibliothek`): `docs/JASONS-BIBLIOTHEK.md`.
- **Spore / Andock**: `docs/ANDOCK.md`.

## Prinzipien

- **Echte Krypto, nichts vortäuschen.** Real vs. Demo immer klar getrennt.
- **Passwort vergessen = Inhalt weg** (kein Hintertürchen). Export ist die echte Sicherung.
- **Merge entscheidet Klaus.**

Details in `docs/`.
