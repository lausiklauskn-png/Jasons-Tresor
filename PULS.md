# PULS — Jasons-Tresor

> Übergabe-Herzschlag. Jede Sitzung schreibt hier fort: Datum · was getan · was offen ·
> nächste Schritte. Klaus liest zuerst den Chat, dann diese Datei.

## 2026-06-01 — Schwelle entschleunigt + PR #8 gemergt (Sitzung 8)

**Getan (`npm test` 27/27 grün, Kern unberührt):**
- **PR #8 gemergt** (Klaus: „mergen ansehen") → `main` hat jetzt Schwelle (Szene 1) +
  Muster-Buch. Pages baut automatisch: https://lausiklauskn-png.github.io/Jasons-Tresor/
- **Schwelle nach Klaus' Feedback überarbeitet:**
  - **Erklär-Text + großer „Tür öffnen"-Knopf entfernt** (nahm die Spannung; der Maus-Zeiger
    zeigt schon, dass man klickt). Nur noch dezentes „überspringen" unten rechts.
  - **Deutlich entschleunigt:** Tür-Zoom 4,2 s; Schloss-Frames blenden je ~1,2 s **weich
    ineinander** (Kreuz-Überblendung statt hartem Wechsel), Abstände ~1,4 s; Gesamtablauf
    jetzt ~11–12 s (vorher ~2,7 s). Schwere Tür öffnet bedächtig; Schluss-Ausblendung 1,4 s.
- **Honesty-Hinweis** „Theater ≠ Schloss" bleibt erhalten (Muster-Buch + Footer), nur von der
  dramatischen Tür entfernt.

**Offen / ehrlich:**
- **Browser-Look weiter ungeprüft** — wartet auf Klaus (Timing evtl. nachjustieren).
- Muster-Buch-Feinschliff (Titel/Tempo/Größe) + danach Ausrollen auf echte Einträge.

**Manual-Check:** Headless 27/27 grün. Schwelle/Tempo im Browser **ungeprüft** — wartet auf Klaus.

---

## 2026-06-01 — Schwelle gebaut: Tür → Aufschließ-Sequenz → offene Bibliothek (Sitzung 7)

**Getan (headless bewiesen, `npm test` 27/27 grün — Kern unberührt):**
- **Komplette Phase-1-Serie von Klaus' externer Bild-KI** in `assets/erlebnis/bilder/`:
  `tuer-zu.png` (geschlossene Tür, 1672×941), `schloss-frame-1…5.png` (Aufschließ-Sequenz
  1536×1024: Türkis lädt → goldener Blitz → Gold flutet), `tuer-offen.png` (Tür offen,
  Bibliothek/Schatzkammer, 1672×941), `licht-blitz.png` (Prompt 9, transparenter Funken-
  Blitz) und `tuer-fluegel.png` (Prompt 8, freigestellter Türflügel). PNG-Transparenz exakt
  dekodiert/geprüft (Blitz + Flügel minAlpha 0). (`schluessel-im-schloss.png` = Reserve.)
- **Schwelle als Erlebnis-Schale** in `index.html` gebaut (+ Spiegel `jasons-bibliothek/`):
  Overlay `#threshold` — Tür → Klick/Enter → Zoom aufs Schlüsselloch → **5-Frame-Aufschließ-
  Sequenz** → **goldener Funken-Blitz** (`licht-blitz.png`, additiv) → ruhige Überblendung in
  die **Bibliothek** (`tuer-offen.png`) → in die App blenden (~2,7 s). Knöpfe „🔑 Tür öffnen" /
  „überspringen", Esc; einmal pro Sitzung (`sessionStorage`); `prefers-reduced-motion`
  respektiert; Timer bei Skip sauber gestoppt. **Ehrlicher Hinweis im Bild:** „Diese Tür ist
  nur die Begrüßung — das echte Schloss ist dein Passwort." (Theater ≠ Schloss).
- **Türflügel-Schwung wieder entfernt (Klaus, 2026-06-01):** `tuer-fluegel.png` sieht eher
  wie ein Buch aus → aus der Schwelle herausgenommen. Datei bleibt liegen als **Buch-Kandidat
  für Szene 2**. Funken-Blitz bleibt.
- **Kein Eingriff in den `JasonLib`-Kern:** Schale liegt komplett außerhalb der Marker;
  Kern in Wurzel und Spiegel **byte-identisch** (geprüft). Nur der Bildpfad unterscheidet
  sich (`assets/…` vs. `../assets/…`). **Keine Daten angefasst** (Lösch-Schutz-Regel gewahrt).

**Offen / ehrlich:**
- **Schwelle im Browser UNGEPRÜFT** — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).
- `tuer-offen.png` dient als Schluss-Frame und taugt zugleich als **Szene-1-Hintergrund**
  (Bibliothek) — der eigentliche Bibliotheks-Raum (Szene 1) ist aber noch nicht gebaut.
- **Szene 2 begonnen — Muster-Buch (Klaus: „erst ein Muster-Buch"):** Knopf „📚 Muster-Buch"
  öffnet ein isoliertes Vorschau-Overlay `#bookdemo` — ein Buch (`buch-zu.png`) → antippen →
  öffnet sich (`buch-auf.png` + Goldschein) → Platzhalter-Inhalt + ehrlicher Hinweis. **Keine
  echten Daten, kein Eingriff in `JasonLib`.** Nächster Schritt nach Klaus' OK: Look auf echte
  Einträge ausrollen (Regal-Ansicht mit Umschalter).
- `tuer-fluegel.png` bleibt als zusätzlicher Buch-Kandidat liegen (nicht eingebaut).
- PWA-Service-Worker (Offline-Cache der Bilder) noch nicht gebaut.

**Manual-Check:** Headless 27/27 grün. **App-Schwelle im Browser ungeprüft** — wartet auf Klaus.

---

## 2026-06-01 — Gestaltungsplan „Tresor-Erlebnis" + Bild-Prompts (Sitzung 6, NUR Doku)

**Getan (kein Code — Plan-vor-Code, kein Freibrief):**
- **Vorbilder studiert:** Sage-Einladung `docs/einladung/vendor/img/scene-5-door.webp` (warme
  Goldtür, Chiaroscuro, Palette #08081A/#6EE7D3/#F4B435/#8B5CF6, „Tür fadet auf Nähe ein →
  Klick → warmer Blitz"); SB-KIMTool-Point `assets/observatorium-truhe.png` (glühender türkiser
  Schlüssel im Schloss) + `assets/tool-symbols/*.svg` (15 Membran, 16 Siegel, 07 Apoptose).
- **Plan geschrieben:** `docs/sessions/PLAN_tresor-erlebnis.md` — 4 Szenen (Schwelle/Tür →
  Bibliothek → Spielfenster → Tresorräume) + Steampunk-HUD; **Daten-Mapping** (Buch = Sammlung,
  Buch zu = `jason-tresor` v2, Passwort = AES-Schlüssel) hält die Verträge heil; Einbau der
  Werkzeugkiste (Membran 15/Siegel 16/Apoptose 07 + Shamir-Aufteilen/gestufte Fächer/Köder/Panik).
- **19 Bild-Prompts** (Phasen 1–4) mit gemeinsamem Stil-Anker, je mit Dateiname/Format/Platzierung.
- **Brief-Kette:** `docs/sessions/BRIEF_tresor-erlebnis.md` neu.

**Entschieden (Klaus, 2026-06-01):** offline **installierbar wie PWA**; alles in EINEM klar
benannten Ordner **`assets/erlebnis/`** (Bilder unter `assets/erlebnis/bilder/`, Schutz-Hinweis
`_BITTE-NICHT-LOESCHEN.md`); **harte Regel „nichts versehentlich löschen"** (Daten nie
zerstörend anfassen, Löschen nur Zwei-Schritt); **Material = flüssiges Spiegel-Metall**
(„Glas und doch nicht Glas") + **Indiana-Jones-Abenteuer** (Jason→Jones), steampunk nur
angehaucht, stiller Werttresor (kein Köder); Start = erst Phase 1; Schlüssel = Klick.
Stil-Anker im Plan §4 verfeinert. **Klaus: „mergen" → PR #7 gemergt.**

**Offen / ehrlich:**
- **Keine Bilder generiert** — Phase-1-Bilder kommen von Klaus, dann baue ich die Schwelle.
- **Theater ≠ Schloss** festgehalten: Tür/Schlüssel = Navigation; echtes Schloss = Passwort + AES.
- `JasonLib`-Kern bleibt unverändert; Erlebnis ist eine Schale obendrauf.

**Manual-Check:** Kein neuer Code → `npm test` unverändert grün (27/27). App-Erlebnis noch nicht
gebaut → nichts im Browser zu prüfen außer dem bisherigen Stand.

---

## 2026-05-31 — Drei-Knoten-Netz + Briefkasten quittiert (Sitzung 5)

**Getan (verifiziert, `npm test` 27/27 grün):**
- **Sage seq 8 gelesen + quittiert** → `ack["Sage-Protokol"]=8` (Sages Bau „Wächter/Briefkasten
  in die Vorteilspack-Truhe" — kein Aktionsbedarf bei uns).
- **SB-KIMTool-Point ist jetzt im Netz** (`SIGNAL.json` seq 2 live): **reziprok verifiziert** →
  `sbkim/point_inbox.json` ✔ VALID (nodeId `CyunQ…`); neuer Test-Fall in `test/andock.test.js`.
  `ack["SB-KIMTool-Point"]=2`. **Drei-Knoten-Netz von unserer Seite vollständig** (Tresor
  verifiziert Sage **und** SB-KIMTool-Point).
- **Briefkasten gepflegt:** eigene `sbkim/SIGNAL.json` auf **seq 2**; Postfächer `AUSTAUSCH.md`
  (Sage) + `AUSTAUSCH-SBKIMTool.md` (A) mit Lese-Quittung/Verifikations-Quittung fortgeschrieben.
- Wächter live: **📭 nichts Neues** (beide Nachbarn quittiert).

**Offen / ehrlich (optional, nicht blockierend):**
- **`verified-match`** braucht echtes `domainVector`-Embedding (Modul 03 im Browser) → Re-Sign.
- **Gegenseitigkeit:** Sage hat uns `verified-spore` (ack 1); SB-KIMTool-Point listet uns als
  `verified-spore`, hat uns aber im Briefkasten noch nicht geackt (`ack["Jasons-Tresor"]` offen) —
  ihre Seite, nicht blockierend.
- **Klaus' Browser-Lauf** der App inkl. 📬-Knopf steht weiter aus.

**Manual-Check:** App/📬-Knopf **ungeprüft im Browser** — wartet auf Klaus' Browser-Lauf.
Headless alles grün; Andock-Krypto (Sage + SB-KIMTool-Point) beidseitig von uns aus VALID.

---

## 2026-05-31 — Briefkasten-Sync §11.6 (Sitzung 4)

**Getan (verifiziert, `npm test` 26/26 grün):**
- **Aushang:** `sbkim/SIGNAL.json` (seq 1, `forNodes:["*"]`, `mailboxes`).
- **Quittiert:** Sages Postfach + `SIGNAL.json` (**seq 7**) gelesen → `ack["Sage-Protokol"]=7`;
  Lese-Quittung §7 + Status-Kopf + Log in `sbkim/AUSTAUSCH.md`.
- **Auto-Sync (1:1 aus Sage):** Wächter `.github/sbkim-watch.mjs` (CONFIG: SELF/PEERS),
  Workflow `.github/workflows/sbkim-watch.yml`, **📬-Knopf** in `index.html` (zero-dependency;
  Auto-Check beim Laden still/Badge-only).
- Wächter live geprüft: Sage = nichts Neues (quittiert), SB-KIMTool-Point = noch kein SIGNAL (404).

**Offen / ehrlich (optional):** `verified-match` (echter `domainVector` via Modul 03);
SB-KIMTool-Points `SIGNAL.json` (kommt automatisch, sobald da); Klaus' Browser-Lauf inkl. 📬-Knopf.

**Manual-Check:** 📬-Knopf **ungeprüft im Browser** — wartet auf Klaus' Browser-Lauf. Headless grün.

---

## 2026-05-31 — Dauerhafte Identität eingelöst + Andock-Quittungen (Sitzung 3)

**Getan (headless bewiesen, `npm test` 26/26 grün):**
- **Dauerhafte Identität erzeugt:** Klaus' Passwort geliefert → `make_node_key.mjs` →
  `sbkim/node_key.enc.json` (Passwort-Tresor, AES-256-GCM/PBKDF2 600k). **Stabile nodeId
  `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`** (über zwei Läufe gleich). Spore neu
  signiert → `verify` ✔ VALID. Kein Passwort/Klartext-Schlüssel im Tresor (grep-geprüft).
- **GitHub Pages aktiviert** (durch Klaus, Screenshot): Deploy from branch `main` / `(root)`.
- **SB-KIMTool-Point hat unsere 4 Fragen beantwortet** → Postfach `sbkim/AUSTAUSCH-SBKIMTool.md`
  (Bug bestätigt + upstream gefixt; Scheibe 3 kanonisch; Drei-Knoten-Netz zugesagt).
- **Sage-Postfach** (`AUSTAUSCH.md` §6) + `status.json` + `docs/SCHLUESSEL.md` auf die
  dauerhafte nodeId + Pages fortgeschrieben. Real-Anteil ~60 %.

**Offen / ehrlich:**
- **sporeUrl liefert 200 erst nach Merge + Pages-Deploy** — UNGEPRÜFT, wartet auf Klaus'
  Sichtprüfung im Browser.
- **Scheibe-3-Re-Copy** (4 Dateien von SB-KIMTool-Point/main) anerkannt, aber **noch offen**
  (berührt Haupt-App-Datei → eigener Schritt mit Klaus' OK).
- **`domainVector` weiter Demo** (`_demo`) → nur `verified-spore`, noch kein Match.
- **App-Browser-Lauf** weiter ungeprüft.

**Manual-Check:** App + sporeUrl **ungeprüft im Browser** — wartet auf Klaus. Headless 26/26.

## 2026-05-31 — Werkzeug für dauerhafte Identität (Sitzung 2)

**Getan (headless bewiesen, `npm test` 26/26 grün — +5 neu):**
- **Werkzeug-Lücke geschlossen:** `scripts/make_node_key.mjs` **1:1** aus dem getesteten
  Original (SB-KIMTool-Point) geholt — legt den Knoten-Schlüssel-Tresor `node_key.enc.json`
  **an** (Gegenstück zu `open_node_key.mjs`). Erzeugt frischen Ed25519-Schlüssel, zeigt die
  **dauerhafte nodeId**, verschlüsselt mit AES-256-GCM / PBKDF2-SHA256 600k. Gibt
  privaten Schlüssel/Passwort **nie** aus; überschreibt vorhandenen Tresor nicht (außer
  `SBKIM_KEY_FORCE=1`).
- **Modul 01 ergänzt:** `web/tools/sbkim-storage.js` **1:1** (Modul 02 verlangt es: „lade
  01_storage.js vor 02_spore.js").
- **Neuer headless-Test `test/node_key.test.js` (5 Fälle):** Rundlauf `make → open` ergibt
  dieselbe nodeId (stabile Identität), falsches Passwort fällt durch (AES-GCM-Auth-Tag),
  Klartext-Schlüssel/Passwort **nicht** im Umschlag, zu kurzes Passwort abgewiesen, zwei
  Läufe → verschiedene Identitäten. **Wegwerf-Passwort im Test — kein echter Schlüssel im Repo.**
- **Doku konkretisiert:** `docs/SCHLUESSEL.md` Schritt 1 verweist jetzt auf `make_node_key.mjs`
  (statt vager „behalte den base64-PEM"). `package.json`: neuer Befehl `npm run key`.

**Offen / ehrlich (wartet weiter auf Klaus — die EINE unvermeidbare Aktion):**
- **Dauerhafte nodeId noch nicht erzeugt:** Weder `SBKIM_KEY_PW` noch `SBKIM_NODE_KEY` ist in
  dieser Umgebung gesetzt. Den einen Tresor-Lauf kann ich **nicht** ohne Klaus' Passwort
  fahren (ein selbst erfundenes Passwort würde Klaus aussperren und dürfte nicht ins
  Repo/in den Chat). **Werkzeug + Beweis stehen jetzt bereit** — sobald Klaus `SBKIM_KEY_PW`
  als Umgebungs-Secret setzt (oder den Lauf selbst startet), entsteht die stabile nodeId.
- nodeId in `sbkim/spore.json` bleibt **provisorisch** (flüchtiger Schlüssel), bis o. g. läuft.
- `domainVector` weiter Demo (`_demo`); Pages noch nicht aktiv; Klaus' Browser-Lauf offen.

**Manual-Check:** App **ungeprüft im Browser** — wartet auf Klaus' Browser-Lauf. Headless 26/26.

**Nächste Schritte:** siehe neuesten Brief `docs/sessions/BRIEF_werkzeug-tresor-anlegen.md`.

## 2026-05-31 — Gründung (Sitzung 1)

**Getan (headless bewiesen, `npm test` 21/21 grün):**
- **Grundgerüst:** `package.json` (`type:module`, `test`/`demo`/`verify`), `.nojekyll`,
  `.gitignore`, `README.md`, re-geskinnte `CLAUDE.md`.
- **Produkt (1:1 aus SB-KIMTool-Point, nach PR #44 = `jason`-Benennung):** die Tresor/
  Bibliothek-App nach `index.html` (Wurzel, für Pages) **und** `jasons-bibliothek/index.html`
  (der Test schneidet hier den Kern). Test `test/jason_lib.test.js` 1:1. **16/16 grün.**
- **Eigene Identität (1:1):** `web/tools/sbkim-spore.js` (Modul 02, byte-identisch),
  `scripts/{generate_spore,verify_foreign_spore,open_node_key}.mjs`. Nur die KONFIG in
  `generate_spore.mjs` auf Jasons-Tresor angepasst (Name/Domäne/Endpoint/Kategorien).
- **Spore erzeugt + verifiziert:** `sbkim/spore.json` echt signiert, `verify` → ✔ VALID.
- **Andock vorbereitet:** Sages Live-Spore reziprok verifiziert (`sbkim/sage_inbox.json` →
  ✔ VALID), Postfach `sbkim/AUSTAUSCH.md` angelegt, neuer Test `test/andock.test.js` (5/5).
- **Doku re-geskinnt:** `docs/SCHLUESSEL.md`, `docs/ANDOCK.md`; `docs/JASONS-BIBLIOTHEK.md`
  1:1; `status.json` (ehrlicher Real-Anteil ~45 %); Brief-Kette (`docs/sessions/`).

**Offen / ehrlich (wartet auf Klaus):**
- **nodeId provisorisch** — kein `SBKIM_NODE_KEY` in dieser Umgebung → flüchtiger Schlüssel
  (nodeId wechselt pro Lauf). Schlüssel sichern (Secret + `node_key.enc.json`) macht sie
  dauerhaft. Rezept: `docs/SCHLUESSEL.md`.
- **`domainVector` ist Demo** (`_demo`) — echtes Embedding via Modul 03 im Browser fehlt.
- **GitHub Pages** noch nicht aktiviert → Endpoint liefert noch keine 200.
- **Klaus' Browser-Lauf** der App steht aus (Datei-Auswahl/Download/Passwort/Dialog).
- **Sage-Registrierung** noch nicht erbeten (erst nach stabiler nodeId + Pages).

**Manual-Check:** App **ungeprüft im Browser** — wartet auf Klaus' Browser-Lauf. Headless
ist alles grün.

**Nächste Schritte:** siehe neuesten Brief `docs/sessions/BRIEF_*.md` (§ nächste Schritte).
