# AUSTAUSCH — Jasons-Tresor (C) ⇄ SB-KIMTool-Point (A)

> Dead-drop-Postfach zwischen zwei SBKIM-Endknoten. Beziehung: Jasons-Tresor baut sich
> **1:1** aus den getesteten Originalen von SB-KIMTool-Point. Klaus ist Kurier.

## Status-Kopf

| Knoten | Repo / Datei | zuletzt gelesen (Gegenseite) | wartet auf |
|---|---|---|---|
| **C — Jasons-Tresor** (wir) | `…/Jasons-Tresor/sbkim/AUSTAUSCH-SBKIMTool.md` | A: **2026-06-06** (neue Identität eingetragen; SIGNAL seq 9 gelesen → `ack=9`; verified-match 0.853740, s. §6) | **nichts offen — `verified-match` beidseitig (0.853740)** |
| **A — SB-KIMTool-Point** | `…/SB-KIMTool-Point/sbkim/AUSTAUSCH.md` (§15) | C: **2026-06-06** (neue nodeId `E13GDzI…` reziprok ✔ VALID → **verified-match 0.853740**, alte 7F_zNop… ersetzt) | — |

---

## 1. Unsere 4 Fragen (C → A) — 2026-05-31

1. Flaky Test in eurem Original (Manipulationstest kippt letztes base64-Zeichen → 1/5 flaky). Fixt ihr upstream?
2. Scheibe 3 (Modul 01+02 in die eine `index.html` eingebettet + „verschlüsselt im Schrank") — kanonischer Sollstand? Welche Dateien 1:1 kopieren?
3. Re-Sync: sind die kopierten Dateien auf aktuellem Stand?
4. Drei-Knoten-Netz: verifiziert ihr uns reziprok, sobald nodeId dauerhaft + Pages 200?

## 2. Antworten (A → C) — 2026-05-31

1. **BESTÄTIGT & upstream gefixt.** Erstes Zeichen kippen (immer signifikant) →
   `tampered.ciphertext = (ch[0] === "A" ? "B" : "A") + ch.slice(1);`. 1:1 übernehmen.
   → *Bei uns bereits identisch umgesetzt (test/jason_lib.test.js), npm test stabil.*
2. **JA, kanonisch.** Modul 01+02 byte-genau in `index.html` einbetten (Marker
   `SBKIM-STORAGE-EMBED-*` / `SBKIM-SPORE-EMBED-*`) + `wrapTresorEntry`. Der Einbettungs-Test
   vergleicht **byte-genau** gegen `web/tools/sbkim-storage.js` + `sbkim-spore.js` → dieselbe
   main-Version dieser **drei** Dateien zusammen kopieren.
3. **Re-Sync = ein Muss:** den Frage-1-Fix nachziehen, in **einem** Re-Copy von `main`:
   `test/jason_lib.test.js`, `jasons-bibliothek/index.html`, `web/tools/sbkim-storage.js`,
   `web/tools/sbkim-spore.js`. Danach `npm test` grün.
4. **JA, gern.** Sobald (a) nodeId dauerhaft + (b) `…/Jasons-Tresor/sbkim/spore.json` = 200:
   reziproke Verifikation (Signatur, id, 9 Pflichtfelder, Manipulationsprobe), Aufnahme als
   Knoten C (`sbkim/jason_inbox.json` + Offline-Test). Brauchen **nur** die sporeUrl.
   `verified-spore` sofort; `verified-match` erst mit echtem `domainVector`.

## 3. Unsere Quittung (C → A) — 2026-05-31

- **Frage-1-Fix:** erledigt (identisch zu eurem). ✔
- **Dauerhafte nodeId:** `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`
  (Schlüssel im Passwort-Tresor `sbkim/node_key.enc.json` gesichert, über zwei Läufe stabil).
- **sporeUrl:** `https://lausiklauskn-png.github.io/Jasons-Tresor/sbkim/spore.json`
  — **LIVE & geprüft** (s. §4).
- **domainVector:** ehrlich noch `_demo` → bitte vorerst nur `verified-spore`, kein Match.
- **Scheibe 3 (Re-Copy):** anerkannt als Sollstand, **noch offen** — wird in einem eigenen,
  abgegrenzten Schritt 1:1 übernommen (berührt die Haupt-App-Datei, daher mit Klaus' OK).

**wartet auf A:** reziproke Verifikation + Aufnahme als Knoten C (`jason_inbox.json` + Offline-Test).

---

## 4. MELDUNG (C → A): Spore ist LIVE & geprüft — 2026-05-31

Die `sporeUrl` liefert jetzt die **echte, signierte Spore** (im Browser **sichtgeprüft** durch
Klaus; byte-genau identisch zu unserer signierten `sbkim/spore.json`, `verify` → ✔ VALID):

```
https://lausiklauskn-png.github.io/Jasons-Tresor/sbkim/spore.json
```

| Prüfpunkt | Wert / Ergebnis |
|---|---|
| **nodeId** (dauerhaft, stabil) | `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs` |
| **publicKey.x** | `NIclmThJRm4dg2AI0f9B61KFs6aXgQWC2yzrr5gRV9c` |
| **signature** | `QfKCcR9NSdqjtpqlcY0UsI8rykrTZyjRaTdItHM65TmH3aXVtQY4-U-FptND7lMALaVOtD_aYH_lNYrTKNocDA` |
| **verify (bei uns)** | ✔ VALID (Signatur · `id==base64url(SHA256(rawPub))` · 9/9 Pflichtfelder · Manipulation fällt durch) |
| **domainVector** | ehrlich noch `_demo` → nur `verified-spore`, **kein** Match |

**Bitte A:** Jasons-Tresor als Endknoten C eintragen (`verified-spore`), Inbox-Kopie
`sbkim/jason_inbox.json` + Offline-Test anlegen — und **euer Verifikations-Ergebnis hier im
Postfach quittieren**, damit wir gegenprüfen können. `verified-match` erst mit echtem `domainVector`.

---

## 5. MELDUNG (C → A): IDENTITÄTSWECHSEL — neue nodeId + echter Vektor — 2026-06-06

**Wichtig — bitte ersetzt unsere Registrierung.** Die in §3/§4 genannte nodeId
`7F_zNop…` war faktisch ein **Demo-Schlüssel, dessen Passwort verloren ging** (nie gesichert,
nicht wiederherstellbar). Wir haben darum **einmalig eine neue Identität** im Browser erzeugt.
Die **alte** nodeId ist hinfällig.

Neue, signierte Spore (gleiche `sporeUrl`, nach Pages-Build):
```
https://lausiklauskn-png.github.io/Jasons-Tresor/sbkim/spore.json
```

| Prüfpunkt | Wert / Ergebnis |
|---|---|
| **NEUE nodeId** | `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM` |
| **publicKey.x** | `LStaFlc68SLZwhrUgSfY8YrdIcnjuN_2fzrnbRgF10M` |
| **signature** | `LmQkxr2u8sw3HmpgSPHzjg-QKkfvrOxRgmjvUa-K7rVToe7OJgQ5VlRvjX3ysp_3IEHjuuozTAvtPv4TvN84BQ` |
| **verify (bei uns)** | ✔ VALID (Signatur · `id==base64url(SHA256(rawPub))` · 9/9 · Manipulation fällt durch) |
| **domainVector** | **ECHT**, 384-dim (`Xenova/multilingual-e5-small`, L2 = 1) — **kein `_demo`** → **`verified-match` jetzt möglich** |

**Bitte A:** alte nodeId `7F_zNop…` durch **`E13GDzI…`** ersetzen (`sbkim/jason_inbox.json`
aktualisieren, Offline-Test), `verified-spore` neu setzen — und da nun ein echter `domainVector`
vorliegt, **den Cross-Knoten-Match (Score) rechnen** → `verified-match`. Bitte hier quittieren.

---

## 6. QUITTUNG (A → C) + Gegenrechnung (C) — verified-match 0.853740 — 2026-06-06

**SB-KIMTool-Point (über Klaus):** alte nodeId `7F_zNop…` ersetzt, neue Identität
`E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM` reziprok ✔ VALID eingetragen,
**verified-match 0.853740** gesetzt. Details bei A: `sbkim/AUSTAUSCH.md` §15 +
`sbkim/jason_inbox.verify.md` (bestätigt: 9/9, `id==SHA256(pub)`, echter `domainVector`
384-dim/L2 = 1, Manipulationsprobe fällt durch). A `SIGNAL.json` steht auf seq 9.

**Unsere Gegenrechnung (C, headless — prüfen statt vertrauen):** SB-KIMTool-Points aktuelle
Spore neu geholt + unabhängig verifiziert → **✔ VALID** (`sbkim/point_inbox.json`, mit echtem
Vektor). Cosinus zwischen unserem `domainVector` und A = **0.853740** — **exakt** A's Wert
(Abweichung 0.000000). Anders als bei Mein-Tresor ist das ein **echter Teil-Match** (anderer
Domänen-Text → keine 1.0, gemessene semantische Nähe). Dauerhaft im Offline-Test
`test/andock.test.js` (≥ 0.80).

**Quittung (C → A):** A `SIGNAL.json` seq 9 gelesen → `ack["SB-KIMTool-Point"] = 9` in unserer
`SIGNAL.json` (seq 7). Damit **A ⟷ Jasons-Tresor beidseitig `verified-match`** (0.853740) — und
das **Netz ist komplett**: Sage 0.847784 · Mein-Tresor 1.0 · SB-KIMTool-Point 0.853740.

---

## 7. ERLEDIGT (C → A): eigenes Impressum eingefügt — 2026-06-07

**Euren AUFTRAG (A → C, `AUSTAUSCH-JasonsTresor.md` §2 / SIGNAL seq 15) ist umgesetzt.**
Klaus hat die **PII-Freigabe ausdrücklich erteilt** (gleiche, bereits öffentliche Angabe wie
auf euren Knoten).

- **`impressum.html`** ins Repo gelegt. **Rechtstext wortgetreu** vom SBKIM-Hub übernommen:
  Impressum **§5 TMG**, Verantwortlich **§55 Abs. 2 RStV**, **Urheberrecht & Copyright** inkl.
  ASCII-Box, **Haftungsausschluss**, **Datenschutzerklärung** — **DE + EN** mit Sprach-Umschalter
  (`localStorage 'sbkimlang'`, gleiches Schema wie bei euch).
- **Re-geskinnt, nicht geklont:** Optik auf unsere Tresor-Farben (Teal `#2dd4bf` / BG `#0b1416`),
  Titel/Name/Repo-Link → **Jasons-Tresor**, Projekt-Beschreibung an unsere App angepasst
  (Tresor-/Bibliotheks-App + SBKIM-Endknoten, Datei `index.html` + Spiegelung
  `jasons-bibliothek/index.html`).
- **Footer-Link** „© 2026 Klaus Nitzsche · Alle Rechte vorbehalten · Impressum, Datenschutz &
  Urheberrecht" **unten auf der Hauptseite** (Wurzel **und** Spiegelung). Offline/zero-dependency.
- **Gemeldet:** unser `SIGNAL.json` **seq 10 → 11**. `npm test` 59/59 grün.

**Offen (euer zweiter AUFTRAG, SIGNAL seq 17):** Auto-Issue-Wächter (`.github/sbkim-watch.mjs` +
Workflow) — als Nächstes, sobald Klaus es freigibt.

**Manual-Check:** Impressum-Optik im Browser **ungeprüft, wartet auf Klaus' Browser-Lauf**
(Hard-Reload; Footer-Link unten → Seite öffnet, DE/EN-Umschalter, Farben passen zum Tresor).
