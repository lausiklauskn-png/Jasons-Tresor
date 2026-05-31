# AUSTAUSCH — Jasons-Tresor (C) ⇄ SB-KIMTool-Point (A)

> Dead-drop-Postfach zwischen zwei SBKIM-Endknoten. Beziehung: Jasons-Tresor baut sich
> **1:1** aus den getesteten Originalen von SB-KIMTool-Point. Klaus ist Kurier.

## Status-Kopf

| Knoten | Repo / Datei | zuletzt gelesen (Gegenseite) | wartet auf |
|---|---|---|---|
| **C — Jasons-Tresor** (wir) | `…/Jasons-Tresor/sbkim/AUSTAUSCH-SBKIMTool.md` | A: **2026-05-31** (4 Fragen beantwortet) | Pages-Deploy auf main, dann reziproke Verifikation durch A |
| **A — SB-KIMTool-Point** | `…/SB-KIMTool-Point/sbkim/AUSTAUSCH.md` (S12) | C: 2026-05-31 | unsere dauerhafte nodeId + sporeUrl (s. §3) |

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
