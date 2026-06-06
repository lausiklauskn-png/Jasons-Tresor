# PULS — Jasons-Tresor

> Übergabe-Herzschlag. Jede Sitzung schreibt hier fort: Datum · was getan · was offen ·
> nächste Schritte. Klaus liest zuerst den Chat, dann diese Datei.

## 2026-06-06 — SITZUNGSABSCHLUSS

**Netz:** komplett — alle drei Nachbarn beidseitig `verified-match`, von uns selbst nachgerechnet
(Sage 0.847784 · Mein-Tresor 1.0 · SB-KIMTool-Point 0.853740). `npm test` **55/55**.

**App (Wurzel + Spiegelung identisch):** HUD-📬-Briefkasten als Live-Verbund (① Spore · ② Match live ·
③ Sync · ④ Brief→MD), reicher Siegel-Dialog (Module + lebendes Dokument), Siegel-Band „JASONS-TRESOR",
„Regale einrichten" verborgen, ANDOCK §9 (Werkzeug-Souveränität) erfüllt.

**Postfach Mein-Tresor:** §7 (Briefkasten-Bauanleitung, von ihnen bereits übernommen), §8 (Anfrage:
Doku ihrer Synchronisations-Vereinbarung — Antwort offen).

**Offen / nächste Schritte:**
1. **Klaus' Browser-Lauf** — Siegel-Dialog, Briefkasten, Spiegelung optisch bestätigen (einziger „grün"-Punkt).
2. **Kombinations-Briefkasten vollenden**, sobald Mein-Tresor §8 beantwortet (Bau-Meldung je Nachbar ergänzen).
3. Details im neuen Brief `docs/sessions/BRIEF_briefkasten-kombination.md`.

---

## 2026-06-06 — Spiegelung vollständig auf Wurzel-Stand (Sitzung 50)

**Getan:** Die Spiegelung `jasons-bibliothek/index.html` war stark veraltet (alter 2-Nachbar-
Briefkasten; `sbkim/`-Links sogar kaputt, weil `../` fehlte). Jetzt **byte-genau aus der Wurzel-
`index.html` erzeugt** + ein einziges **`<base href="../">`** im Kopf. Dadurch lösen ALLE relativen
Pfade (assets, sbkim, werkzeuge — auch JS-erzeugte) sauber auf den Repo-Stamm auf, ohne einzelne
Pfade umzuschreiben. Vorbedingung war: keine `#`-Anker, keine `<script src>`, keine `/`-Absolutpfade
in der Wurzel → `<base>` ist gefahrlos.

- Verifiziert: Spiegelung == Wurzel (außer base-Block); keine doppelten `../`; Briefkasten-JS Syntax OK;
  alle neuen Features in der Spiegelung (HUD-Briefkasten, Mein-Tresor-Nachbar, 3+1-Ebenen, reicher
  Siegel-Dialog, Siegel-Band JASONS-TRESOR). `npm test` 55/55.
- **Manual-Check:** optisch ungeprüft, wartet auf Klaus' Browser-Lauf (beide Seiten sollten nun gleich
  aussehen: `…/Jasons-Tresor/` und `…/Jasons-Tresor/jasons-bibliothek/`).

## 2026-06-06 — Reicher Siegel-Dialog + Briefe immer sichtbar (Sitzung 49)

**Getan (Klaus wählte beides):**
- **Reicher Siegel-Dialog** (Klick aufs Siegel, `#andock` ausgebaut, Verdrahtung unverändert) — wie
  Mein-Tresors: Erklärung „was bedeutet das?", Link zum eigenen Werkzeug, **Andock-Block**
  (Endknoten/Endpunkt/nodeId/Spore ✔ VALID), **Pflicht-Module-Status** (01 Storage · 02 Spore ·
  03 Embedding · 04 Match · 05 Anastomose · 07 Apoptose · 15 Membran), **„Lebendes Dokument"/Aspekte**
  (Identität · Vektor · Verbund 3/3), Ehrlich-Notiz (npm test 55/55, Browser ungeprüft).
- **Briefe immer sichtbar:** Briefkasten-Karte bekam eine vierte Zeile **„④ Brief öffnen ↗"** — das
  Postfach (MD) ist jetzt **dauerhaft** anklickbar, nicht nur bei ungelesenen Bauten.
- Syntax OK, `npm test` 55/55.

**Manual-Check:** **optisch ungeprüft, wartet auf Klaus' Browser-Lauf.**

**OFFEN — ehrlich: Spiegelung `jasons-bibliothek/index.html` ist veraltet.** Sie hat noch den ALTEN
2-Nachbar-Briefkasten (ohne Mein-Tresor, ohne 3-Ebenen/Live-Match, ohne HUD-Knopf, ohne reichen
Siegel-Dialog). Nur Einzelfixe (#regal-edit, §9-Link) wurden mitgezogen. **Vorschlag:** Spiegelung in
einem eigenen Schritt vollständig auf den Stand der Wurzel-`index.html` bringen (Pfade `../` beachten).

## 2026-06-06 — Werkzeug-Souveränität §9 + Briefkasten-Befund (Sitzung 48)

**Getan:**
- **ANDOCK §9 voll erfüllt:** Der „SBKIM-Werkzeug öffnen"-Link im Andock-Fenster zeigte auf
  SB-KIMTool-Points gehostete Seite (Fremd-Host). Jetzt auf **unser eigenes** `werkzeuge/andock.html`
  (Spiegelung: `../werkzeuge/…`). Wir besitzen ohnehin alle Werkzeuge (`werkzeuge/andock.html`,
  `web/tools/*`, `scripts/*`) und laden **keinen** Fremd-Code — Souveränität/Offline gewahrt.

**Befund (Mein-Tresors Briefkasten gelesen, raw/main):** Mein-Tresors Briefkasten ist **byte-genau
unser Code** — sie haben ihn aus unserem §7-Brief gebaut. `sbkimMailboxCheck`, `sbkimCosine`, die drei
Ebenen ①②③ und der „Postfach ↗"-Link (offener Brief → MD) sind identisch. **Unser Briefkasten kann
das also längst.** Die „offenen Briefe" erscheinen, sobald es ungelesene Bauten gibt; wir stehen
gerade auf „alles synchron", darum sind sie aktuell verborgen.

**Offen / Vorschlag:** Mein-Tresor hat zusätzlich einen reicheren **Siegel-Dialog** (Pflicht-Module-
Status + „lebendes Dokument"/Aspekte + Andock). Das könnten wir nachbauen, falls gewünscht.

## 2026-06-06 — Brief an Mein-Tresor: Bauanleitung Live-Verbund-Briefkasten (Sitzung 47)

**Getan:** In `sbkim/AUSTAUSCH-MeinTresor.md` **§7** geschrieben — vollständige 1:1-Bauanleitung,
damit Mein-Tresor unseren Live-Verbund-Briefkasten (drei Ebenen + Siegel-Kopf) selbst nachbauen
kann: Voraussetzung (Inbox je Nachbar **mit** `domainVector`), Config (Mein-Tresor-Sicht), Cosinus-
Helfer + `sbkimMailboxCheck` (byte-treu aus unserer `index.html`), Hinweis gegen doppelten Siegel-
Kopf, Badge-Hinweis, erwartetes Ergebnis. **Wir bauen NICHT in deren Repo** — reiner Brief.

**Geprüft (live):** Mein-Tresors Briefkasten im Bild ist echt live (Nachbar-seqs Sage 15/Point 9/
Jasons-Tresor 7 = aktuelle `SIGNAL.json`). „3 ungelesen" = Mein-Tresors eigenes `ack` hängt nach
(deren Seite). Unsere Änderungen (Siegel-Band JASONS-TRESOR, HUD-Knopf, Live-Briefkasten, Regale-
einrichten versteckt) sind alle auf `main` (= Pages-Quelle) bestätigt. Hinweis: dieses Environment
darf `github.io` nicht direkt abfragen — Prüfung daher gegen `main` (raw).

## 2026-06-06 — Siegel trägt den Tresor-Namen + „Regale einrichten" ausgeblendet (Sitzung 46)

**Getan (Klaus' Wünsche):**
- **Siegel-Band** (unten im Wappen) von „SELF-INSCRIBING" auf **„JASONS-TRESOR"** geändert —
  genau wie Mein-Tresor sein Band auf „MEIN-TRESOR" gesetzt hat. Damit gehört das Siegel sichtbar
  diesem Tresor. SBKIM/SIEGEL/„OFFIZIELLE BESTÄTIGUNG" bleiben (wie bei Mein-Tresor).
- **„📐 Regale einrichten"** ausgeblendet (`#regal-edit{display:none}`) — in `index.html` **und** der
  Spiegelung `jasons-bibliothek/index.html`. Das Siegel-SVG ist geteilt (`../assets`), gilt also für beide.
- SVG wohlgeformt, `npm test` 55/55.

**Manual-Check:** **optisch ungeprüft, wartet auf Klaus' Browser-Lauf** (Hard-Reload; Siegel oben
links + im Briefkasten-Kopf zeigt nun „JASONS-TRESOR", „Regale einrichten" ist weg).

## 2026-06-06 — Briefkasten-Knopf in der Szene sichtbar (Sitzung 45)

**Problem (Klaus' Browser-Lauf, Screenshots):** Der 📬-Briefkasten war in der App nicht
auffindbar — der Knopf saß nur im `<header>` der **Listen**-Ansicht (Bibliothek), nicht in der
immersiven **Regal-Szene**, wo Klaus sich aufhält. Mein-Tresor hat den Knopf in seiner Raumleiste.

**Getan:** 📬-Briefkasten-Knopf in die **fixe HUD-Leiste** (`#hud`, oben links, immer sichtbar —
Lampe · Siegel · 📬 · Notfall) gesetzt → in jeder Szene erreichbar. Eigenes Badge `hud-mailbox-badge`;
Zähler bedient jetzt beide Badges (HUD + Listenkopf). Syntax OK, `npm test` 55/55.

**Manual-Check:** Logik bewiesen; **optische Sichtbarkeit wartet auf Klaus' nächsten Browser-Lauf**
(Hard-Reload → 📬 oben links neben dem Siegel).

## 2026-06-06 — Briefkasten als Live-Verbund (Sitzung 44)

**Getan:**
- Den 📬-Briefkasten in `index.html` zu einem **Live-Verbund** ausgebaut (wie bei Mein-Tresor
  gewünscht). Pro Nachbar jetzt **drei Ebenen**: ① Spore ✔ (verified-spore), ② **verified-match —
  Cosinus wird live im Browser** aus eigener ⟷ Nachbar-Spore neu gerechnet, ③ Synchron-Stand
  (ihr SIGNAL-seq ↔ unser `ack`). Siegel-Kopf (Wappen + nodeId + verified-spore) oben im Dialog.
- **Mein-Tresor als dritten Nachbarn ergänzt** (fehlte bisher ganz). Config: `selfSpore` + je
  Nachbar `inbox`/`mailbox`/`signal`.
- Headless geprüft: Briefkasten-JS Syntax OK; dieselbe Cosinus-Logik wie im Browser ergibt exakt
  Sage 0.8478 · Mein-Tresor 1.0 · SB-KIMTool-Point 0.8537. `npm test` 55/55.

**Manual-Check:** **ungeprüft, wartet auf Klaus' Browser-Lauf** — die rechnerische Logik ist
bewiesen, das *optische* Rendern des Dialogs hat Klaus noch nicht gesehen (Hard-Reload Ctrl+Shift+R).

**Offen:** Klaus' Browser-Lauf (Briefkasten-Optik + App allgemein); Pages-Auslieferung der neuen Spore.

## 2026-06-06 — SB-KIMTool-Point: verified-match 0.853740 — NETZ KOMPLETT (Sitzung 43)

**Getan (headless, `npm test` grün):**
- **SB-KIMTool-Point hat die neue Identität eingetragen** (`E13GDzI…` reziprok ✔ VALID, alte
  `7F_zNop…` ersetzt) und **verified-match 0.853740** gesetzt (Details bei A: `AUSTAUSCH.md` §15
  + `jason_inbox.verify.md`).
- **Selbst nachgerechnet:** A's aktuelle Spore (mit echtem Vektor) geholt + verifiziert → ✔ VALID
  (`point_inbox.json` aktualisiert); Cosinus = **0.853740**, exakt. **Echter Teil-Match** (anderer
  Domänen-Text → keine 1.0). Offline-Test ergänzt.
- **Eingetragen:** `SIGNAL.json` seq 7 + `ack["SB-KIMTool-Point"]=9`; Postfach §6; `status.json`.

**🎉 NETZ KOMPLETT — alle drei Nachbarn beidseitig `verified-match`, jeweils von uns unabhängig
nachgerechnet:** Sage **0.847784** · Mein-Tresor **1.0** (byte-identisch, gewollt) ·
SB-KIMTool-Point **0.853740**.

**Offen:** Pages-Auslieferung der neuen Spore + Klaus' Browser-Lauf der App (ungeprüft).

## 2026-06-06 — Mein-Tresor: verified-match 1.0 (Sitzung 42)

**Getan (headless, `npm test` grün):**
- **Mein-Tresor hat unsere neue Identität quittiert** (`E13GDzI…` reziprok ✔ VALID, `jason_inbox`
  ersetzt) **und** führt jetzt selbst einen echten `domainVector`.
- **Mein-Tresors aktuelle Spore geholt + unabhängig verifiziert** → ✔ VALID; `meintresor_inbox.json`
  jetzt **mit** Vektor. **Cosinus selbst nachgerechnet = 1.000000** — Vektoren **byte-identisch**.
- **Ehrlich zur 1.0:** gewollt/erwartbar (Domänen-Text byte-gleich → identisches Embedding) →
  Identität der Eingaben, kein „entdeckter" Treffer. Gültig (≥ 0.80), so vermerkt. Offline-Test ergänzt.
- **Eingetragen:** `SIGNAL.json` seq 6 + `ack["Mein-Tresor"]=6`; Postfach `AUSTAUSCH-MeinTresor.md` §6;
  `status.json`. Damit Mein-Tresor ⟷ Jasons-Tresor **beidseitig verified-match**.

**Netz-Stand:** Sage ✅ verified-match 0.847784 · Mein-Tresor ✅ verified-match 1.0 ·
SB-KIMTool-Point ⏳ neue nodeId noch übernehmen (Brief liegt).

## 2026-06-06 — Sage: verified-match 0.847784 (Sitzung 41)

**Getan (headless, `npm test` 54/54 grün):**
- **Sage hat den Identitätswechsel verarbeitet** (Antwort über Klaus): neue nodeId `E13GDzI…`
  reziprok ✔ VALID, alte `7F_zNop…` → `previousNodeIds`, **verified-match 0.847784** (Modul 04),
  Sage `SIGNAL.json` seq 15.
- **Selbst nachgerechnet (prüfen statt vertrauen):** Cosinus zwischen unserem `domainVector`
  und Sages (`sage_inbox.json`) = **0.847784**, **exakt** Sages Wert (Abweichung 0.000000).
  Als Offline-Test `test/andock.test.js` dauerhaft gesichert (≥ 0.80).
- **Eingetragen:** `SIGNAL.json` seq 5 + `ack["Sage-Protokol"]=15`; Postfach `AUSTAUSCH.md` §9
  (Sages Quittung + unsere Gegenrechnung); `status.json` (Sage = verified-match).

**Offen:** SB-KIMTool-Point + Mein-Tresor sollen die neue nodeId noch übernehmen (Briefe liegen).

## 2026-06-06 — Identitätswechsel: neue nodeId + echter domainVector (Sitzung 40)

**Anlass (ehrlich):** Die bisherige nodeId `7F_zNop…` war faktisch ein **Demo-Schlüssel,
dessen Passwort nie gesichert wurde** → nicht wiederherstellbar. Statt langer Suche: bewusst
**neue Identität** erzeugt. Die alte `node_key.enc.json` (für 7F_zNop…) wurde als tot
**aus dem Repo entfernt**.

**Getan (headless, `npm test` 53/53 grün; Spore ✔ VALID):**
- **Neue Identität + echter Vektor** (Klaus im Browser, `werkzeuge/andock.html` Teil A + B):
  neue nodeId `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`, Pubkey
  `LStaFlc68SLZwhrUgSfY8YrdIcnjuN_2fzrnbRgF10M`, **echter 384-dim domainVector** (L2 = 1,
  **kein `_demo`**). Unabhängig verifiziert: `id==SHA256(pubkey)`, 9/9, Signatur, Manipulation fällt durch.
- **`sbkim/spore.json` ersetzt**; alte nodeId an allen Live-Stellen → neue
  (`SIGNAL.json` seq 3→4, `status.json`, `werkzeuge/andock.html` + `LIESMICH.md`,
  `index.html` + `jasons-bibliothek/index.html` Anzeige, `docs/SCHLUESSEL.md`).
- **Drei Übergabe-Meldungen** in die Postfächer geschrieben (Sage §8, SB-KIMTool-Point §5,
  Mein-Tresor §5): „alte Registrierung 7F_zNop… → neue E13GDzI…, jetzt mit echtem Vektor
  → `verified-match` möglich".

**Nachgereicht (in dieser Sitzung):** Klaus hat die **`node_key.enc.json` der neuen Identität**
geschickt → liegt jetzt im Repo (Format geprüft, nodeId E13GDzI… stimmt überein, kein
Klartext-Geheimnis). Das **Passwort** bewahrt Klaus getrennt auf → Backup vollständig.

**Offen / wartet auf Klaus:**
- **Re-Registrierung durch die drei Nachbarn** (sie tragen die neue nodeId ein) — Klaus trägt
  die Briefe (Postfächer §8/§5/§5) rüber.
- Pages-Auslieferung der **neuen** Spore nach Hard-Reload bestätigen.

**Manual-Check:** Krypto headless grün (✔ VALID, 53/53). App/Pages ungeprüft im Browser.

## 2026-06-06 — Andock-Werkzeug für echten domainVector vorbereitet (Sitzung 39)

**Getan (headless, `npm test` 53/53 grün):**
- **AUFGABE 1 re-verifiziert:** Mein-Tresors Spore ist **unverändert** (gleiche nodeId, weiter
  ohne `domainVector`); `sbkim/meintresor_inbox.json` → **✔ VALID** erneut bestätigt. Bereits auf
  `main` registriert (SIGNAL seq 3, `mailboxes["Mein-Tresor"]` + `ack["Mein-Tresor"]: 4`) — **kein
  Leer-Bau**, nur Bestätigung.
- **AUFGABE 2 vorbereitet (Werkzeug, kein Neu-Signieren durch Claude):** `werkzeuge/andock.html`
  + `web/tools/sbkim-embedding.js` **1:1 aus Mein-Tresor** kopiert; nur unsere Werte gesetzt
  (CONFIG `nodeName/domain/endpoint`, Titel, erwartete nodeId `7F_zNop…` in Hinweis + Match-Prüfung).
  Krypto-Kern unverändert. Kurz-Anleitung `werkzeuge/LIESMICH.md`.
- **Ehrliche Grenze dokumentiert:** Das Neu-Signieren (Teil B ①②③) ist **Klaus' Browser-Schritt** —
  es braucht den Browser **und** das Passwort zu `node_key.enc.json`. Claude kann/soll das **nicht**
  (headless, kein Passwort, nichts fälschen). nodeId bleibt erhalten (Teil B = gleicher Schlüssel).

**Offen (wartet auf Klaus' Browser-Lauf):**
- `werkzeuge/andock.html` öffnen → Teil B ①②③ → neue `sbkim/spore.json` (echter 384-Vektor, kein
  `_demo`). Danach Finalisierung: `npm test` · `verify_foreign_spore.mjs` ✔ VALID · `SIGNAL` seq +1.

**Manual-Check:** Werkzeug **browser-ungeprüft** — wartet auf Klaus' Browser-Lauf. Headless grün.

## 2026-06-06 — Schwester Mein-Tresor reziprok als verified-spore (Sitzung 38)

**Getan (headless bewiesen, Andock-Tests grün, in `main`-Stand integriert):**
- **Reziproke Verifikation:** Mein-Tresors Live-Spore gezogen und mit **unserer** kanonischen
  Form (ANDOCK §4) geprüft → **✔ VALID**. nodeId `wRsGQouOYPVBOLzAB3nBteRvyvJ-AGv461WTJMKtkS0`
  unabhängig nachgerechnet (== base64url(SHA256(roher Pubkey))), 9/9 Pflichtfelder, Signatur
  gültig, Manipulationsprobe fällt durch. **Vierter Peer** im Netz (neben Sage + SB-KIMTool-Point).
- **Inbox + Offline-Test:** `sbkim/meintresor_inbox.json` (byte-treue Momentaufnahme) +
  zwei neue Fälle in `test/andock.test.js` (VALID inkl. erwarteter nodeId + ehrlich: kein domainVector).
- **Postfach:** `sbkim/AUSTAUSCH-MeinTresor.md` angelegt (Quittung + Fragen + Status-Kopf).
- **Briefkasten-Aushang:** `sbkim/SIGNAL.json` fortgeschrieben — `mailboxes["Mein-Tresor"]` +
  `ack["Mein-Tresor"]: 4` (Mein-Tresors SIGNAL seq 4 gelesen) ergänzt, **seq 2 → 3** (Sage=8,
  SB-KIMTool-Point=2 weiter quittiert).
- **Merge-Integration:** dieser Branch fußte auf dem alten Gründungsstand; vor dem Merge `origin/main`
  eingezogen und Konflikte aufgelöst (dauerhafte nodeId `7F_zNop…3hCs`, 3-Knoten-Netz, Pages — alles
  von `main` behalten, nur Mein-Tresor ergänzt).

**Ehrlich / offen:**
- **Mein-Tresor trägt (noch) KEINEN `domainVector`** in der Live-Spore — entgegen der
  ursprünglichen Aufgaben-Erwartung („echt, 384-dim"). Deckt sich mit Mein-Tresors **eigener**
  `SIGNAL.json` („domainVector folgt (verified-match spaeter)"). Darum: **verified-spore ja,
  verified-match nein** (kein semantischer Match möglich, bis der echte Vektor da ist).
- **Gegen-Registrierung:** unsere Identität ist dauerhaft + Pages aktiv → Mein-Tresor kann uns
  reziprok eintragen (im Postfach erbeten).

**Manual-Check:** Andock-Krypto **headless grün** (`npm test`). App weiter ungeprüft im Browser.

## 2026-06-05 — Bootstrap-Brief für Schwester-Repo „Mein-Tresor" (Planung) (Sitzung 37)

**Klaus' Vision (eigene Sitzung/Repo):** „Mein-Tresor" = design-vereinfachte Schwester (gleiche
Funktion, neues Gesicht: futuristischer Dreh-Safe-Eingang → ein Tresorraum mit 20 nummerierten
Fächern, beide Orientierungen, Offline-PWA, eigener SBKIM-Endknoten + Briefkasten + Sync). Plan-Modus:
ausführlich erkundet (Eingangs-Sequenz, Vault-Krypto, Koordinaten-System, SBKIM/Andock/Mailbox,
Bootstrap-URLs) + 4 Entscheidungen mit Klaus geklärt.

**Getan (reine Planung/Doku, kein App-Code, `npm test` unverändert grün):**
- **Neuer Brief `docs/sessions/BRIEF_mein-tresor-bootstrap.md`** geschrieben — eine **eigenständige
  Bootstrap-Anweisung**, mit der die erste KI-Sitzung im neuen Repo sich **selbst baut**: holt die
  getesteten Originale aus Jasons-Tresor über **öffentliche raw-URLs** (Kern 1:1, Vault-Logik, Andock,
  Briefkasten), baut nur die neue Schale (Dreh-Safe + 20-Fächer-Raster) + **4 Bild-Prompts** +
  **Koordinaten-Spec** + **SBKIM-Andock** + **Briefkasten/Synchronisation** (SIGNAL.json/AUSTAUSCH/Watcher,
  Details in Sage-Protokol + SB-KIMTool-Point).
- **Repos geprüft:** `lausiklauskn-png/Mein-Tresor` existiert (public, Branch `main`, leer),
  Endpoint `https://lausiklauskn-png.github.io/Mein-Tresor/`. **Jasons-Tresor ist noch privat → muss
  public werden**, damit die raw-Bootstrap-URLs greifen.

**Klaus' Entscheidungen:** Fächer per App-Raster platzieren · Drehräder nur Inszenierung · 20 Fächer
(4×5/5×4 responsiv) · beide Orientierungen (Beschnitt okay) · jetzt nur Prompts+Spec (App-Bau im neuen Repo).

**Nächste Schritte:** 1. Jasons-Tresor public schalten. 2. Brief ins Repo `Mein-Tresor` legen
(als `CLAUDE.md`/`BRIEF_start.md`). 3. Klaus erzeugt die 4 Bilder. 4. Neue Sitzung im Mein-Tresor-Repo
startet den Bootstrap (Kern+Tests, Andock, Schale).

---

## 2026-06-05 — Ebenen-Caption entdoppelt (Klaus) (Sitzung 36)

**Klaus:** Die Beschriftungs-Zeile wiederholte Wörter, die schon im Ebenen-Balken stehen
(„Ankunft", „Übergang", „Kern"). Caption vereinfacht: **Ebene-1-Ansichten → „Ebene 1"**, Ebene 2 →
**„Ebene 2"**, Ebene 3 → **„Ebene 3 · nicht von dieser Welt"** („Der Kern" entfernt). Nur die 5
`VIEWS`-cap-Texte geändert; Balken-Knöpfe unverändert. `npm test` 51/51 grün; Kern byte-identisch.
(Auf demselben Branch wie PR #79/Punkt 3.)

---

## 2026-06-05 — Große Dateien (>2 MB) extern verschlüsselt speichern (Punkt 3 von 3) (Sitzung 35)

**Getan (`npm test` 51/51 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff nur 32 Bildpfad-Zeilen — reine Schale):**
- Bei Dateien **>2 MB** kommt jetzt (in Chrome/Edge) die Nachfrage **„verschlüsselt in einen externen
  Ordner speichern?"** statt nur „zu groß". Gemeinsamer Helfer **`window.jtSaveFileExtern(file)`**:
  Passwort 2× → `showSaveFilePicker` → Datei als verschlüsselter **`<name>.tresor.json`** auf die Platte
  (umgeht das Browser-Speicher-Limit). **Zurückholen:** „＋ Datei laden" mit der .tresor.json + Passwort
  → die Datei erscheint mit „⤓ Herunterladen" (nutzt die bestehende Tresor-Einlese-Kette).
- Greift in **beiden** Ladern: Buch (`addRawFile`) **und** Freie Liste (`ingestRawFile`). In anderen
  Browsern ohne File System Access: ehrlicher Hinweis + „trotzdem laden?".
- Echte Krypto über den Kern (`encryptTresor`); der Rundlauf (Datei verschlüsselt → entschlüsselt
  byte-genau) ist bereits durch `test/datei.test.js` belegt; der Datei-Picker selbst ist browser-only.

**Damit alle 3 Klaus-Wünsche dieser Runde umgesetzt:** Punkt 2 (alle Formate), Punkt 1 (leere Bücher +
„＋ Neues Buch"), Punkt 3 (große Dateien extern).

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Extern-Speichern im Browser ungeprüft (Chrome) — wartet auf Klaus' Browser-Lauf.**

---

## 2026-06-05 — Bibliothek: leere/benannte Bücher + „＋ Neues Buch" (Punkt 1 von 3) (Sitzung 34)

**Getan (`npm test` 51/51 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff nur 32 Bildpfad-Zeilen — reine Schale):**
- **Benannte (noch leere) Bücher erscheinen jetzt** in „Deine Bücher im Tresor": `renderVaultOverview`
  listet die **Vereinigung** aus `jt-vaults` + `jt-booknames` (gefiltert auf Inhalt/Name/Kategorie;
  TESTBUCH `1-0-0` ausgelassen). Leere zeigen „leer", verschlossene 🔒.
- **„＋ Neues Buch"-Knopf** in der Bibliothek: fragt Namen → sucht den **nächsten freien Regal-Platz**
  (`window.jtFreeBookSlot`, frontale Ebenen 1/3/4, TESTBUCH übersprungen) → schreibt Name (Schild +
  `jt-booknames`) → öffnet das Buch direkt zum Füllen + Verschließen. Erscheint auch im Regal.
- **Verwaltung leerer Bücher:** Kategorie legt bei Bedarf einen Datensatz an; der Lösch-Knopf ist bei
  leeren Büchern **„🗑 Entfernen"** (nimmt das Buch ganz aus der Liste), bei vollen weiter „🗑 Inhalt"
  (nur Inhalt, Buch bleibt leer).

**Offen (nächste Scheibe):** Punkt 3 (große Dateien >2 MB extern verschlüsselt anbieten — Chrome).

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Browser-ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Freie Liste nimmt alle Dateiformate (Punkt 2 von 3) (Sitzung 33)

**Klaus' 3 Wünsche, in Scheiben (Plan-vor-Code, Entscheidungen abgestimmt):** (1) leere/benannte
Bücher in der Bibliothek + „＋ Neues Buch"; (2) Freie Liste auf alle Formate; (3) große Dateien
(>2 MB) extern verschlüsselt anbieten. **Hier Scheibe = Punkt 2.**

**Getan (`npm test` 51/51 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff nur 32 Bildpfad-Zeilen — reine Schale):**
- **Freie Liste / Haupt-App nimmt jede Datei** (nicht nur JSON): `ingestFile` zweigt ab — `.json`
  läuft wie bisher (Bibliothek/Tresor), alles andere wird als **Datei-Eintrag** abgelegt
  (`payload {kind:'jt-datei', filename, mimeType, size, dataurl}`); **mehrere Dateien** auf einmal.
- **Anzeige:** Datei-Einträge bekommen **„⤓ Herunterladen"** (statt „Ansehen"/„Bearbeiten"); Export/
  Verschenken/Löschen bleiben. Beim „Verschlüsselt sichern" werden die Dateien mitverschlüsselt.
- **Wortlaut entjsont:** Untertitel, „＋ Datei laden (alle Formate)", Leer-Hinweis, Meta-Description.

**Offen (nächste Scheiben):** Punkt 1 (leere/benannte Bücher + „＋ Neues Buch"), Punkt 3 (große
Dateien extern verschlüsselt — Chrome). 

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Browser-ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Bugfix „Schließen" (loadNames out of scope) + Diagnose entfernt (Sitzung 32)

**Diagnose-Fenster (Sitzung 31) lieferte die Ursache** — Klaus' Klick-Log zeigte:
`Uncaught ReferenceError: loadNames is not defined` beim Laden. `renderVaultOverview()` (im
**Buch-Skript-IIFE**) rief `loadNames()` auf, das aber erst im **Regal-Skript-IIFE** definiert ist
→ ReferenceError beim Init-Aufruf brach das Buch-Skript ab, **bevor** die `bd-close`/Backdrop-
Verdrahtung lief. Folge: „Schließen" (und Hintergrund-Klick, sowie Gesamt-Sicherung/Auto-Sync,
die dahinter verdrahtet werden) ohne Handler → Klick bewegt den Knopf, schließt aber nicht.

**Getan (`npm test` 51/51 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff nur 32 Bildpfad-Zeilen — reine Schale):**
- **Fix (1 Zeile):** `renderVaultOverview` liest die Buchnamen jetzt **lokal** aus `jt-booknames`
  (statt das fremde `loadNames` aufzurufen). Damit läuft das Buch-Skript wieder vollständig durch →
  `bd-close`/Backdrop wieder verdrahtet → **Schließen schließt** und führt zurück ins Regal.
  Nebenbei wieder aktiv: Gesamt-Sicherung-Knöpfe + Auto-Sync (hingen an derselben Stelle).
- **Temporäres Diagnose-Fenster (#jt-debug) wieder vollständig entfernt** (HTML + Skript + Haken in
  `hide`/`tryClose`).

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei; keine Debug-Reste.
**„Schließen" im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — TEMP: Klick-Diagnose für „Schließen" (Sitzung 31, wieder entfernt)

**Klaus meldet:** „Schließen" im Buch-Overlay funktioniert nicht mehr (Knopf bewegt sich beim Klick,
schließt aber nicht). Aus dem Code allein nicht reproduzierbar (z-index 900 > Balken 40; Handler
sauber). Auf Klaus' Wunsch ein **temporäres Diagnose-Fenster** eingebaut (oben, `#jt-debug`): loggt je
Klick `target`, das **wirklich obenauf liegende** Element (`elementFromPoint`), `#bookdemo` hidden/
display vor + 300 ms nach Klick, globale Fehler, sowie `tryClose()`/`hide()`-Eintritt + `dirty`.
Klaus klickt „Schließen", kopiert den Text zurück → dann sehen wir die Ursache und bauen den echten
Fix. **`npm test` 51/51 grün; Kern byte-identisch; reine Schale.** **MUSS nach der Diagnose wieder raus.**

---

## 2026-06-05 — Ebenen-Balken unten + in der Ebene bleiben (Sitzung 30)

**Neue Arbeitsregel (Klaus):** erst überlegen + Rücksprache, dann bauen. Hier befolgt: Plan +
2 Entscheidungen (Beschriftung = Namen; zusätzlich „in der Ebene bleiben"; obere Knöpfe weglassen).
Die kurz gebaute obere „Ebene 1/2/3"-Variante (PR #74) wurde auf Klaus' Wunsch **verworfen**
(Branch sauber auf `main` zurückgesetzt) und durch den unteren Balken ersetzt.

**Getan (`npm test` 51/51 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **Schmaler, dezent halb-durchsichtiger Balken unten** im Regal mit **5 benannten Knöpfen**
  (Eingang links · Ankunft · rechts · Übergang · Kern) — **jede Ansicht direkt** anwählbar; aktiver
  Knopf hervorgehoben. Reiner Ansichtswechsel über die vorhandene `render()`-Logik (`jumpTo` setzt
  nur den Index `i`). Im Einricht-Modus ausgeblendet, während Übergang gesperrt. Fackeln/Pfeiltasten
  bleiben. Beschriftungs-Zeile etwas nach oben gerückt (Platz für den Balken).
- **In der Ebene bleiben:** der gewählte Ansichts-Index wird in `jt-regal-view` gemerkt und beim
  nächsten Öffnen wiederhergestellt (nur Anzeige, keine Daten/Bücher berührt).

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Balken/Persistenz im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).
Position/Optik des Balkens nach Sicht ggf. nachjustieren.**

---

## 2026-06-05 — Schritt 2b-2: Auto-Sync in festen Ordner (Chrome) (Sitzung 29)

**Getan (`npm test` 51/51 grün [unverändert — Folder-Sync ist browser-only, genutzte Krypto schon
getestet], Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke fehlerfrei,
Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **„📂 Festen Ordner verbinden & Auto-Sync aktivieren"** in der Gesamt-Sicherung (nur Chrome/Edge,
  File System Access): einmal Ordner wählen + Super-Passwort → die App schreibt **genau eine** Datei
  `jasons-tresor-gesamt.tresor.json` in den Ordner und aktualisiert sie **in-place** bei jeder Änderung
  (kein Backup-Stapel — Klaus' Sync-Prinzip). Auslöser: `saveVaults`/`saveNames` rufen ein
  **entprelltes** `scheduleSync()` (800 ms).
- **Ehrlich/Sicherheit:** Super-Passwort lebt **nur im Speicher** (nie gespeichert), beim Pausieren
  sofort gelöscht. Der **Ordner-Zugriff** wird in **IndexedDB** gemerkt (übersteht Reloads); nach
  Daten-Reset einmal neu freigeben. Nur Chromium; sonst Hinweis + Export/Einlese-Weg (2b-1) als Rückfall.
- **Status-Zeile** zeigt verbunden/aktiv/pausiert/Fehler. „⏸ Auto-Sync pausieren" entfernt das
  Super-Passwort aus dem Speicher.

**Offen:** Schritt 3 (je Buch Ebene 1–4 → Buchrücken). Optional: auch Änderungen der „Freien Liste"
in den Sync einbeziehen (derzeit triggert Sync auf Buch-Daten; das geschriebene Bündel enthält aber
immer den Gesamtstand).

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Auto-Sync im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Chrome, Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Schritt 2b-1: Gesamt-Sicherung mit Super-Passwort + 3-von-5 (Sitzung 28)

**Klaus' Entscheidung:** Super-Passwort = **Schlüssel zur Gesamt-Sicherung** (Bücher behalten
zusätzlich ihr eigenes Passwort — sicherer). Plan-vor-Code befolgt (Plan + 1 Entscheidung gezeigt).

**Getan (`npm test` 51/51 grün [+3], Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale, Krypto nur aus dem Kern):**
- **Neue Sektion „🛡️ Gesamt-Sicherung (Super-Passwort)"** in der Bibliothek:
  - **Erstellen:** ganze Bibliothek (`jt-vaults` + Namen + freie Liste + Layout/Shelves) → **ein**
    Bündel `jt-gesamtsicherung` v1 → mit **Super-Passwort** AES-256-verschlüsselt → Download
    `jasons-tresor-gesamt.tresor.json`. Doppel-Schutz: die Bücher darin bleiben einzeln verschlüsselt.
  - **Einlesen:** Datei + Super-Passwort → entschlüsseln → Bücher zurück in den lokalen Speicher
    (gleiche ID überschreibt; Übersicht aktualisiert). Überlebt App-Löschung.
  - **Super-Passwort → 5 Codes (3 von 5)** und **aus 3 Codes wiederherstellen** (Shamir-Kern,
    schon getestet); Ergebnis erscheint in einem auswählbaren Feld (nicht gespeichert).
- **Headless-Test `test/gesamtsicherung.test.js` (3 Fälle):** Bündel verschlüsselt→entschlüsselt
  **deckungsgleich** (inneres Buch bleibt durch sein eigenes Passwort geschützt); falsches
  Super-Passwort scheitert; 3 von 5 Codes ergeben das Super-Passwort, 2 nicht.

**Offen (Rest von Schritt 2/3):**
- **2b-2:** fester **Ordner** (Chrome/File System Access), in den genau diese eine Sicherung
  **automatisch in-place** geschrieben wird (kein Backup-Stapel — Klaus' Sync-Prinzip).
- **3:** je Buch **Ebene 1–4 wählen → Buchrücken** in der Ebene.

**Manual-Check:** Headless 51/51 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Gesamt-Sicherung im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Schritt 2a: beliebige Dateiformate in Bücher laden (Sitzung 27)

**Klaus' Schritt-2-Vision** (groß: separater Ordner, Super-Passwort, 3-von-5-Wiederherstellung,
speichersparend) — **ehrlich eingeordnet** (Browser-Grenze: dauerhafter Ordner nur via
File-System-Access [Chrome] oder Export-Dateien; localStorage wird beim App-Löschen mitgelöscht).
**Klaus' Wahl:** Speicher-Weg = **beides** (fester Ordner Chrome + Export-Rückfall); **zuerst
beliebige Dateien laden**. Diese Scheibe (2a) gebaut; Super-Passwort/Ordner/Shamir folgen.

**Getan (`npm test` 48/48 grün [+3], Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **„＋ Datei laden (alle Formate)"** im offenen Buch: JSON läuft wie bisher (Bibliothek/Tresor);
  **jede andere Datei** wird als verschlüsselter Datei-Eintrag abgelegt
  (`payload {kind:'jt-datei', filename, mimeType, size, encoding:'dataurl', data}`), inkl.
  **selbstgebauter Formate** (opake Bytes). **Mehrere Dateien** auf einmal möglich.
- **Anzeige:** Datei-Einträge zeigen Typ + Größe und einen **„⤓ Herunterladen"**-Knopf
  (rekonstruiert die Originaldatei aus der DataURL). JSON-Einträge behalten „Ansehen".
- **Ehrliche Größen-Warnung** ab 2 MB (localStorage fasst nur wenige MB; große Dateien kommen mit
  dem festen Ordner in Scheibe 2b).
- **Datenvertrag additiv:** Datei-Eintrag ist ein normaler `jason-eintrag` mit Datei-Payload —
  verschlüsselt sich mit dem Buch-Passwort wie alles andere.
- **Headless-Test `test/datei.test.js` (3 Fälle):** Datei-Eintrag überlebt encrypt→decrypt
  **byte-genau**; mehrere Dateien + falsches Passwort scheitert; selbstgebautes Format bleibt opak erhalten.

**Offen (nächste Scheiben):**
- **2b:** Super-Passwort + dauerhafte verschlüsselte Sicherung **auf die Platte** (fester Ordner Chrome
  via File System Access **und** Export-Rückfall) + **3-von-5-Wiederherstellung** des Super-Passworts
  (Shamir-Kern ist da). Damit überleben Daten das App-Löschen; großen Dateien bekommen Platz.
  **Sync in-place (Klaus 2026-06-05):** beim festen Ordner wird **EIN** Speicher **automatisch
  aktualisiert**, sobald etwas hinzukommt — **keine vielfachen großen Backup-Ordner**, die Platz
  fressen. Exporte bleiben bewusste Einzel-Schnappschüsse.
- **3:** je Buch **Ebene 1–4 wählen → Buchrücken** in der Ebene.

**Manual-Check:** Headless 48/48 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Datei-Laden im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — „Bibliothek": zentrale Buch-Verwaltung (Name/Kategorie/Löschen) (Sitzung 26)

**Klaus' Vision** (groß, in Schritten — Plan-vor-Code, Klaus hat Reihenfolge + Lösch-Sicherheit
gewählt): Die „Liste" wird zur **Bibliothek** = Schaltzentrale aller Bücher. **Schritt 1** (von Klaus
zuerst gewählt) gebaut; Schritt 2 (alle Dateiformate) + Schritt 3 (Ebene wählen → Buchrücken) folgen.

**Getan (`npm test` 45/45 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **Umbenannt:** Knopf „☰ Liste" → **„☰ Bibliothek"**.
- **Zentrale Verwaltung je Buch** (in der Bibliothek-Übersicht, ohne jedes Buch zu öffnen):
  **Name** + **Kategorie** direkt eintragen (Name führt das Regal-Schild via `jtRenameBook` mit;
  Kategorie additiv in `rec.category`), **Öffnen**, **Löschen** (1 Rückfrage, entfernt nur die
  lokale Kopie; Exporte bleiben; Regal-🔒 weg via `jtMarkVault`).
- **„🗑 Gesamten Tresor-Inhalt löschen"** (1 Rückfrage) — entfernt alle Bücher (`jt-vaults`) lokal;
  Exporte bleiben. Erscheint nur, wenn Bücher da sind.
- **Deniability gewahrt:** weiterhin **kein** Tarnfach-Hinweis in der Übersicht.
- **Korrektur (Klaus):** „Buch löschen" heißt **nur Inhalt** — das 🗑 leert jetzt nur den Inhalt
  (echter Umschlag + evtl. Tarnfach), **Name/Kategorie bleiben**, das Buch bleibt als **leeres** Buch
  in der Bibliothek (Marke „leer" statt 🔒) und kann neu gefüllt werden. Erst wenn auch Name + Kategorie
  leer sind, verschwindet der Eintrag ganz. (Globales „alles löschen" bleibt der volle Reset.)

**Offen (nächste Schritte des großen Plans):**
- **Schritt 2:** beliebige **Dateiformate** (nicht nur JSON) verschlüsselt in Bücher laden (Base64).
  Ehrliche Grenze: localStorage fasst nur wenige MB → große Dateien später via IndexedDB.
- **Schritt 3 (großer Umbau):** je Buch **Ebene 1–4 wählen → erscheint als Buchrücken** in der Ebene.
  Bücher werden von festen Regal-Plätzen zu frei platzierbaren Büchern.

**Manual-Check:** Headless 45/45 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Bibliothek-Verwaltung im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Liste = Übersicht aller Regal-Bücher (Klaus' Browser-Frage) (Sitzung 25)

**Klaus' Frage:** Die „☰ Liste"-Ansicht war leer, obwohl im Regal Bücher stehen — „Soll das die
Bibliothek sein?" Geklärt: Regal-Bücher (`jt-vaults`, verschlüsselt) und die alte flache Liste
(`jasons-bibliothek-v1`) waren **zwei getrennte Bereiche**. Klaus' Entscheidung: **Die Liste soll
die Übersicht aller Regal-Bücher zeigen.**

**Getan (`npm test` 45/45 grün, Kern byte-identisch [17997 B], beide Dateien je 8 Skriptblöcke
fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **Neue Sektion „📚 Deine Bücher im Tresor"** oben in der Listen-Ansicht: listet **alle echten
  Tresor-Bücher** (aus `jt-vaults`, gefiltert auf `isTresor`) als anklickbare Textzeilen (🔒 + Name,
  alphabetisch). Klick öffnet das Buch wie im Regal (`openBook({id})` → Passwort) — funktioniert auch
  ohne Regal-Element (`curEl` wird nirgends ausgelesen).
- **Bewusst KEIN Tarnfach-Hinweis** in der Übersicht (Deniability — niemand soll an der Liste sehen,
  welches Buch ein Tarnfach hat).
- **Alte flache Liste bleibt** darunter, jetzt klar getrennt benannt: „🗂️ Freie Liste — einzelne Jasons,
  unabhängig vom Tresor". Keine Funktion entfernt.
- **Aktualisierung:** Übersicht rendert beim Laden, beim Wechsel auf „☰ Liste" und nach dem Schließen
  eines Buchs (`hide()` ruft `renderVaultOverview`).

**Manual-Check:** Headless 45/45 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Übersicht im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf:** zeigt „☰ Liste" jetzt deine Bücher? Öffnet ein Klick das richtige Buch?
2. **PWA installierbar** (Manifest + Service-Worker) — der noch offene große Brief-Punkt.
3. Optional: Liste↔Regal-Umschalt-Hänger; freie Liste evtl. ganz ausblenden, wenn ungenutzt.

---

## 2026-06-05 — Honigtopf/Tarnfach scharf: zweites Passwort → Schein-Bibliothek (Sitzung 24)

**Wichtige Ehrlichkeits-Korrektur vorab:** Die Brief-Einleitung behauptete „Honigtopf ist gebaut" —
das stimmte **nicht**. Prüfung ergab: kein `decoy`/Tarnfach im Code, nie committet, `status.json`
führte ihn als „geplant". Klaus offen gesagt → **Klaus' Freigabe, ihn jetzt zu bauen, pro Buch (opt-in).**

**Getan (`npm test` 45/45 grün [+6], Kern byte-identisch [17997 B, Wurzel & Spiegel], beide Dateien
je 8 Skriptblöcke fehlerfrei, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen):**
- **Kern (JasonLib):** neue, exportierte, **getestete** Funktion `openVault(rec, pw)` — probiert zuerst
  den echten Umschlag (`rec.tresor`), dann — falls vorhanden — das Tarnfach (`rec.decoy`). Liefert
  `{mode:'real'|'decoy', plain}`; wirft bei falschem Passwort (AES-GCM-Auth-Tag). Echte Krypto, kein PII.
- **Datenvertrag erweitert (additiv):** Buch-Datensatz in `jt-vaults` kann jetzt **`rec.decoy`** tragen
  (eigener `jason-tresor` v2-Umschlag, eigenes Köder-Passwort). Alt-Bücher ohne decoy verhalten sich
  unverändert. **Wichtiger Bugfix nebenbei:** Verschließen überschrieb bisher den ganzen Datensatz
  (hätte ein Tarnfach gelöscht) — jetzt wird nur das jeweilige Fach aktualisiert.
- **Schale (Buch-Overlay):** neuer Knopf **„🪤 Tarnfach"**. Im echten Buch: Köder-Passwort 2× (mind. 8,
  ≠ echtes Passwort) → harmlose Schein-Bibliothek (Einkaufsliste/Apfelkuchen/Urlaubsideen/Lesetipps)
  als `rec.decoy`. Existiert schon ein Tarnfach → Knopf bietet **Entfernen**. Öffnen mit dem
  Köder-Passwort zeigt die Fassade (mode decoy); „Verschließen" sichert dann **nur den Köder** (echtes
  Buch bleibt) → Köder ist personalisierbar. Im Tarnfach selbst ist der Knopf gesperrt (kein Köder im Köder).
- **Headless-Test `test/decoy.test.js` (6 Fälle):** echtes PW → echte Daten; Köder-PW → Schein-Bibliothek
  (enthält **kein** echtes Datum); falsches PW scheitert; ohne Tarnfach öffnet ein zweites PW **nicht**;
  decoy = eigener AES-256-GCM-Umschlag (andere salt/iv/ciphertext).

**Manual-Check:** Headless 45/45 grün; Kern byte-identisch; beide Skripte fehlerfrei.
**Tarnfach-UI im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

**So aktivierst du es (Klaus):** Buch im Regal mit deinem **echten** Passwort öffnen → unten
**„🪤 Tarnfach"** → Köder-Passwort 2× eingeben. Danach: echtes Passwort zeigt deine Daten, Köder-Passwort
zeigt die harmlose Bibliothek. Ehrliche Grenze: stark gegen neugierige Blicke, schwächer gegen Kenner.

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf** des Tarnfachs (am besten im 🧪 Test-Buch gefahrlos üben).
2. **PWA installierbar** (Manifest + Service-Worker) — der noch offene Brief-Punkt.
3. Optional: Liste↔Regal-Umschalt-Hänger (Layout beim Zurückkehren neu berechnen).

---

## 2026-06-05 — Buchname & Regal-Schilder lesbar (Klaus' Browser-Feedback) (Sitzung 23)

**Klaus im Browser (Screenshot):** WebP-Optik **top**. Zwei Text-Wünsche:
- Im **Buch-Öffnen-Fenster** stand der Name **oben** und wurde vom Schlüssel verdeckt; darunter der
  Hinweis „mit dem Passwort öffnen" — **dasselbe** wie das Formular „Passwort eingeben, um das Buch
  zu öffnen" (doppelte Aussage).
- Die **Namens-Schilder unter den Regal-Büchern** liefen bei längeren Namen ineinander.

**Getan (`npm test` 39/39 grün, Kern unangetastet, beide Dateien je 8 Skriptblöcke fehlerfrei,
Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen — reine Schale):**
- **Buchname unter den Schlüssel** verschoben (`.bd-title` von `top:13%` → `bottom:7%`), wo vorher der
  Hinweis stand. Der **doppelte Hinweis** `.bd-hint` ist entfernt (`display:none`) — das Formular sagt
  es bereits. Gilt für **alle** Bücher (Regal-Buch + Muster-Buch).
- **Regal-Schilder: ein Wort pro Zeile.** Neue Hilfsfunktion `spineLines()` bricht nach jedem Wort um;
  `.sb-label` jetzt `white-space:pre`, `width:max-content` (max 200 %) statt einzeiliger, abgeschnittener
  210%-Box. **Wichtig:** der echte Name (mit Leerzeichen) bleibt in **`data-name`** erhalten und wird
  beim Öffnen als Titel genutzt — die Umbrüche sind nur Anzeige (kein kaputter Name im Overlay).

**Nachtrag (Klaus' Browser-Feedback):** Schild-Schrift war zu groß (skalierte seit dem
`width:max-content`-Wechsel nicht mehr mit der Buchgröße → riesig auf entfernten Ebenen).
Behoben: Grundgröße halbiert (`fitSpineText` 27→13 px, min 14→7) **und** buch-relative Breite
(`width:150%`) zurück, damit das automatische Einpassen wieder greift (kleinere Bücher → kleinere
Schilder). Der Liste↔Regal-Umschalt-Hänger ist Klaus „nicht so schlimm" → später.

**Manual-Check:** Headless 39/39 grün; Kern unangetastet; beide Skripte fehlerfrei.
**Optik browser-ungeprüft — wartet auf Klaus' nächsten Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

---

## 2026-06-05 — Bilder zu WebP: App ~87 % kleiner (Ladezeit/PWA-Größe) (Sitzung 22)

**Klaus' Vision aus dem Brief umgesetzt — erst gemessen, dann gemeinsam entschieden, dann
sparsam gebaut (Plan-vor-Code).** Reine Größen-/Ladezeit-Optimierung; **keine Funktion,
keine Krypto, kein Datenvertrag verändert.**

**Ehrliche Messung (vorher):** `assets/` = **~74 MB**, davon ~99 % in **26 PNGs** (je 1,8–3,8 MB,
1536×1024 / 1672×941). Der App-Code (`index.html`) ist nur ~136 KB. → Die **Bilder** waren der
ganze Brocken, nicht der Code (Brief-Hypothese bestätigt).

**Klaus' Entscheidungen (per Frage-Knöpfe):** (1) **WebP verlustarm** (q82) erlaubt; (2) **erst nur
Größe senken**, PWA/Service-Worker als Folgeschritt; (3) **alle** Bilder umwandeln, auch die 3
ungenutzten Reserve-Bilder.

**Getan (`npm test` 39/39 grün, Kern unangetastet, Wurzel/Spiegel-Diff weiter nur 32 Bildpfad-Zeilen):**
- **Alle 26 PNG → WebP** (verlustarm, q82, libvips/sharp **nur als Bau-Werkzeug**, wieder entfernt;
  die App bleibt **abhängigkeitsfrei**). Ergebnis: **74 MB → 9,9 MB (−87 %)**, je Bild 83–94 % kleiner.
- **Referenzen** in `index.html` **und** Spiegel `jasons-bibliothek/index.html` von `.png` auf `.webp`
  umgestellt (21 je Datei); **alle referenzierten WebP existieren**, alle 26 dekodieren sauber (geprüft).
- **PNG-Originale entfernt** (durch WebP ersetzt; bleiben in der Git-Historie erhalten).
- **Schale, kein Kerneingriff:** der `JasonLib`-Kern erscheint nicht im Diff; die einzige Differenz
  Wurzel↔Spiegel bleiben die 32 Bildpfad-Zeilen (`assets/` ↔ `../assets/`).
- `_BITTE-NICHT-LOESCHEN.md` um den WebP-Hinweis ergänzt (Motive unverändert, nur Format).

**Offen / ehrlich:**
- **Optik browser-ungeprüft** — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R): sehen Tür,
  Schloss-Sequenz, Regale, Bücher, Schlüssel **unverändert** aus? Bei sichtbarem Verlust an einer
  Stelle kann ich dieses Bild gezielt höher (q90+) oder verlustfrei neu rechnen.
- **PWA/Service-Worker** bewusst noch nicht gebaut (Klaus: erst Größe). Logischer nächster Schritt.
- Tarnfach-Browser-Test weiter offen (Klaus wollte selbst testen).

**Manual-Check:** Headless 39/39 grün; Kern unangetastet; alle WebP-Referenzen aufgelöst + dekodiert.
**Bild-Optik im Browser ungeprüft — wartet auf Klaus' Browser-Lauf.**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf**: sieht alles unverändert aus? (sonst nenne mir das Bild → ich rechne es schärfer neu).
2. **PWA/Service-Worker** sauber aufsetzen (offline + schneller 2. Start) — jetzt lohnt sich's (App ist klein).
3. **Lazy-Load** tieferer Regal-Ebenen (erst laden beim Hinblättern) als Feinschliff.

---

## 2026-06-05 — Shamir-UI von Klaus im Browser gesehen ✓ (Sitzung 20)

**Klaus' Browser-Lauf erfolgt — Schritt A aus dem Brief erfüllt.** Kein Code geändert (nur
Ehrlichkeits-Buchhaltung): `status.json` + dieser PULS.

**Was Klaus gemacht hat (nur Knöpfe, keine echten Daten):**
- 🧪 **Test-Buch** geöffnet → **„Shamir üben: aufteilen"** → 5 Codes + Selbsttest erschienen.
- **3 von 5** Codes in **„Shamir üben: wiederherstellen"** eingefügt → es kam das Übungs-Passwort
  **`ÜBUNG-Beispiel-Passwort-3von5`** byte-genau zurück. (Im Code bestätigt: index.html:1817 in
  Wurzel & Spiegel — genau dieses feste Übungs-Passwort, kein eigenes Geheimnis.)
- Kurze Verwunderung „das ist nicht mein Passwort" → aufgeklärt: das Test-Buch nutzt **absichtlich**
  sein eigenes Beispiel-Passwort, damit nie ein echtes im Spiel ist. **Ergebnis = grün.**

**Damit ehrlich fortgeschrieben:** die Shamir-UI ist nicht mehr „browser-ungeprüft" — sie ist
**von Klaus im Browser gesehen (2026-06-05)**. Der headless-Beweis (`npm test` 39/39, 11 Shamir-
Fälle) bleibt unberührt; jetzt zusätzlich der Augen-Beweis.

**Offen / nächste Schritte:**
1. **Honigtopf / Köder (eigene Scheibe, Plan-vor-Code):** Brief liegt bereit
   (`docs/sessions/BRIEF_honigtopf-koeder.md`). Klaus' Entscheidungen schon fest: Inhalt =
   „harmloser Alltag" (belanglose Rezepte/Notizen), Teil-Format Text-Code. Offene Frage: Reichweite
   **pro Buch (opt-in)** oder **globaler Schalter**? → kurz an Klaus, dann bauen.
2. **Später optional:** QR-Codes / `.txt`-Download je Shamir-Teil (offline obendrauf).
3. **Auch noch browser-offen** (eigene Läufe): Buch-Tresor-Fluss + Not-Aus Stufe 3 (Sitzungen 17/19).

**Manual-Check:** Shamir-UI **von Klaus im Browser gesehen ✓ (2026-06-05)**. Headless weiter 39/39 grün.

---

## 2026-06-04 — Shamir 3-von-5 scharf: echter Kern + Tests + UI (Sitzung 19)

**Plan-vor-Code befolgt** (kein Freibrief, echte Krypto + berührt Daten): Pflichtlektüre durch →
Plan + 3 Entscheidungen an Klaus → **Klaus' OK**:
- **Shamir-Kern zuerst**, dann UI; Honigtopf eigene Folge-Sitzung.
- **Teil-Format: Text-Code** (Datei/QR später).
- **Alle drei Sicherheits-Extras** eingebaut: Selbsttest nach dem Aufteilen, Prüfziffer je Teil,
  Probelauf im Test-Buch.

**Getan (`npm test` 39/39 grün [+11], Kern byte-identisch [Hash gleich Wurzel & Spiegel], alle 8
Skriptblöcke je Datei `node --check` ok, Schale nach P-Normalisierung identisch):**
- **Shamir-Kern im JasonLib-Kern** (zwischen den Markern, exportiert): `splitSecret` / `combineShares`.
  Echte Mathematik über **GF(256)** (Polynom 0x11b, Generator 3), Lagrange-Interpolation bei x=0;
  **K=3, N=5**. Jedes Byte ein eigenes Polynom Grad 2 (höchster Koeffizient ≠ 0 erzwungen → Grad
  genau 2, „3 nötig"). Zufall aus **WebCrypto `getRandomValues`**.
- **Teil-Format** `JT3v5-<i>-<base64url>` mit **CRC32-Prüfziffer** (Tippfehler genau am Teil),
  **4-Byte-SHA-256-Fingerabdruck** + zufälliger **Split-ID** (erkennt fremde/manipulierte Teile beim
  Zusammensetzen). Ehrliche Fehlermeldungen (verschrieben / zu wenige / doppelt / gehören nicht zusammen).
- **11 headless-Testfälle (`test/shamir.test.js`):** alle 10 „3-aus-5"-Kombinationen == Original;
  2 Teile scheitern; manipuliertes/verschriebenes Teil fällt auf; fremde Aufteilung erkannt; doppeltes
  Teil erkannt; UTF-8 byte-genau (Umlaute/Emoji/Sonderzeichen, 1..512 B); **GF(256) selbst geprüft**
  (AES-Bekanntwert `0x53·0xCA=0x01`, jedes Element invertierbar, Distributivität); Zufall belegt.
- **UI (Buch-Overlay, Schale; browser-ungeprüft):** Knopf **„🗝️ Passwort aufteilen (3 von 5)"** (nutzt
  das echte Buch-Passwort) → Panel mit 5 Text-Codes + Kopier-Knopf + **Selbsttest** („✓ 3 Teile ergeben
  wieder dein Passwort") + ehrliche Grenze. **„Passwort vergessen? Aus 3 Teilen wiederherstellen"** am
  Passwort-Feld → Panel mit 5 Feldern → Wiederherstellen → zeigt Passwort + „🔓 Buch jetzt öffnen".
  Im **🧪 Test-Buch** zwei gefahrlose Probelauf-Knöpfe (Demo-Passwort, keine echten Daten).
- **Nichts zerstörend:** Shamir erzeugt nur **zusätzlich** die 5 Teile; Buch/Passwort/Daten unberührt.
  Codes/Passwort erscheinen nur im Speicher/DOM, werden beim Schließen geleert, nie gespeichert.

**Manual-Check:** Headless 39/39 grün; Kern byte-identisch (Hash gleich); Skripte `node --check` ok;
Wurzel/Spiegel nur P-Diff. **Shamir-UI im Browser ungeprüft — wartet auf Klaus' Browser-Lauf
(Hard-Reload Ctrl+Shift+R).**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf** der Shamir-UI: 🧪 Test-Buch → „Shamir üben: aufteilen" → 3 Codes kopieren →
   „Shamir üben: wiederherstellen" → einfügen → Passwort kommt zurück? Selbsttest grün?
2. **Honigtopf/Köder (eigene Sitzung):** falsches Passwort → glaubhafte Schein-Bibliothek; ehrlich
   etikettiert. Inhalt der Schein-Bibliothek von Klaus zu wählen.
3. **Später optional:** QR-Codes je Teil (offline obendrauf), `.txt`-Download je Teil.

---

## 2026-06-04 — Not-Aus scharf: Panik Stufe 3 „Retten & Löschen" (Auftrag B) (Sitzung 19)

**Freibrief von Klaus für diese Scheibe** (Not-Aus bauen). **Klaus' Entscheidung:** Stufe 2
„Verbergen" **bewusst weglassen** (nur Stufe 1 + Stufe 3) — der echte **Honigtopf/Köder** kommt als
eigene **Shamir-Sitzung** (braucht eigenes „Gesicht"). Stufe 3 = **Retten & Löschen** (empfohlen,
von Klaus gewählt). *(Hinweis: eine einfache Verbergen-Abdeckung war kurz gebaut, auf Klaus' Wunsch
wieder entfernt — Stufe 2 steht jetzt ehrlich auf „folgt als Honigtopf".)*

**Getan (`npm test` 28/28 grün, Kern byte-identisch [9673 B, Wurzel & Spiegel],
Panik-Skript `new Function`-geprüft in beiden Dateien, Rettungs-Rundlauf simuliert ✔):**
- **Stufe 2 „Verbergen" bewusst NICHT aktiv:** Knopf bleibt sichtbar, ehrlich beschriftet
  („folgt als Honigtopf/Köder in eigener Sitzung").
- **Panik Stufe 3 „Retten & Löschen" scharf (Drei-Schritt):** ① lädt eine **Rettungs-Datei**
  herunter (`jason-tresor-rettung` v1: die **verschlüsselten** `jt-vaults` + offene Liste + Schilder)
  → ② Zwei-Schritt-Bestätigung → ③ löscht **nur die lokale Kopie** (`jt-vaults`, `jasons-bibliothek-v1`,
  `jt-booknames`), entfernt 🔒-Marken, zurück zur Tür. Ehrlicher Hinweis: **Exporte überleben**.
- **„↻ Rettung einlesen"** (im Notfall-Dialog): spielt die Rettungs-Datei **additiv** zurück
  (gleiche Buch-IDs überschreiben, sonst hinzufügen; fragt vor Überschreiben). Macht „Retten" echt
  umkehrbar — nicht zerstörend.
- **Membran-15-Hinweis** als ehrliche Lese-/Warn-Zeile im Dialog („warnt nur, zerstört nichts").
- **Alles Schale** (Panik-Block, CSS, Dialog) — Kern (`JasonLib`) unberührt, in Wurzel & Spiegel
  byte-identisch. Krypto kommt weiter nur aus dem Kern; die Rettung verschiebt nur fertige Umschläge.

**Offen / ehrlich:**
- **Browser-Lauf nötig:** der Not-Aus (Retten→Download, Zwei-Schritt-Löschen, Rettung-Einlesen)
  ist im Browser **ungeprüft — wartet auf Klaus**.
- **Stufe 2 „Verbergen" = Honigtopf/Köder + Shamir 3-von-5** offen → **eigene nächste Sitzung** (echte Krypto,
  mit Tests). Siegel-16-Bezeugung ebenfalls offen.
- Die Rettungs-Datei ist **nicht zusätzlich passwortgeschützt**: die Bücher bleiben verschlüsselt,
  aber offene Liste + Schilder liegen darin im Klartext (Klaus' eigene lokale Sicherung).

**Manual-Check:** Headless 28/28 grün; Kern byte-identisch (Hash gleich); Panik-Skript syntaxgeprüft;
Rettungs-Rundlauf (Bündeln→Löschen→Einlesen) simuliert ✔. **Not-Aus im Browser ungeprüft — wartet
auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf** des Not-Aus: 🛑 Notfall → Stufe 3
   (lädt Rettung? Zwei-Schritt? Bücher weg, Tür wieder zu?) → „↻ Rettung einlesen" (Bücher zurück?).
2. **Shamir-Sitzung (#optional):** echte 3-von-5-Aufteilung des Buch-Passworts + **Honigtopf/Köder**
   als Stufe-2-Alternative — eigener Plan-vor-Code-Schritt, echte Krypto mit Tests.
3. **SBKIM-Bezeugung (#3):** voller Modul-Chain 1:1 (Siegel echt bronze/gold).

---

## 2026-06-04 — Bücher bild-relativ verankert (Resize/Split-Screen-Fix) (Sitzung 18)

**Klaus (Browser):** Bei geteiltem/verzogenem/minimiertem Fenster verrutschen die Bücher — bei
Vollbild sitzt alles. Ursache gefunden: Hintergrund `object-fit:cover`; bei anderem Seiten-
verhältnis wird das Bild anders beschnitten, die Bücher waren aber **fenster-relativ** (% des
Viewports) verankert, nicht **bild-relativ**.

**Getan (`npm test` 28/28 grün, Kern byte-identisch, beide Regal-Skripte syntaxgeprüft, Schale nur P-Diff):**
- **`fitBooksToImage()`** legt `#regal-books` exakt auf das **angezeigte Bild-Rechteck** (cover-
  Berechnung aus `bg.naturalWidth/Height`), inkl. Überlauf (von `#regal` geclippt). Alle Reihen/
  Bücher-Prozente sind jetzt relativ zum **Bild**, nicht zum Fenster.
- `applyRowStyle` + `rowDown` rechnen die Eck-Offsets/Drags relativ zu **`#regal-books`**
  (Bild-Rechteck) statt zum Viewport → konsistent beim Einrichten und Anzeigen.
- Neuberechnung bei **resize** und nach **Bild-`load`** (`reapplyRows` ruft zuerst `fitBooksToImage`).
- `#regal-books`-CSS: `inset:0` entfernt (Größe/Lage setzt JS). Eingebackene Werte bleiben gültig
  (bei Vollbild ist Bild-Rechteck = Fenster). Reiner Layout-Fix, keine Krypto/Daten berührt.

**Manual-Check:** Headless 28/28 grün; Kern byte-identisch; beide Regal-Skripte `node --check` ok.
**Resize/Split-Verhalten im Browser ungeprüft — wartet auf Klaus** (Fenster teilen/ziehen → Bücher
sollen jetzt auf den Brettern bleiben).

---

## 2026-06-04 — Tresor scharf: jedes Buch ein echter AES-Tresor (Auftrag A) (Sitzung 17)

**Plan-vor-Code befolgt** (kein Freibrief, berührt echte Krypto + echte Daten): Pflichtlektüre
durch → Plan + 3 Entscheidungen an Klaus → **Klaus' OK**:
- **Jedes Buch = eigener Tresor**, **eigenes Passwort je Buch**, **diese Sitzung nur A**
  (Panik 2/3 = eigene Folge-Sitzung).

**Getan (`npm test` 28/28 grün [+1], Kern byte-identisch [9673 B, gleicher Hash Wurzel & Spiegel],
alle 8 Skriptblöcke `node --check` ok, Schale nur P-Diff [32 Bildpfad-Zeilen]):**
- **Demo-Code „1234" ENTFERNT.** Buch-Klick im Regal → **echtes Passwort** → `JasonLib.decryptTresor`
  → Öffnen-Sequenz (Schlüssel versinkt + Energie) → Inhalt via `payloadToEntries`. Falsches
  Passwort wirft (AES-GCM-Auth-Tag) → Shake; **Fehlversuch-Sperre 2× → 1 Min global bleibt 1:1**.
- **Pro Buch ein echter Tresor:** neue lokale Ablage **`jt-vaults`** (Buch-ID → `jason-tresor` v2-
  Umschlag + Klartext-Name). **Zu = verschlüsselt gespeichert; auf = nur im Speicher entschlüsselt**
  (Klartext/Passwort **nie** in localStorage, nie geloggt). Beim Schließen wird der Klartext
  aus dem Speicher geworfen.
- **Inhalt rein:** „＋ Jason laden (.json)" ins offene Buch über die **bestehende** Bibliothek-Logik
  (`validateAndParse`/`parseLibraryImport`/`mergeEntries`, auch verschachtelte Tresore) — **additiv**.
- **Verschließen:** „🔒 Verschließen" → `encryptTresor(buildLibraryExport(…))` → an das Buch
  (neues Passwort 2× bestätigen; bei offenem Buch das bekannte wiederverwenden).
- **Verschenken/Sichern:** lädt den **verschlüsselten** Umschlag als `*.tresor.json` herunter.
- **Echte Tresor-Bücher tragen ein kleines 🔒** im Regal (`has-vault`), Deko-Bücher nicht.
- **🧪 Testbuch (für Klaus' Probelauf):** ein einziges Buch (oben links Ebene 1, ID `1-0-0`,
  `TESTBOOK_IDS`) öffnet ohne Passwort die **Test-Werkzeuge** — **Reset-Knopf** „Probelauf
  zurücksetzen" (Zwei-Schritt, entriegelt nur die lokalen Test-Schlösser `jt-vaults`; Exporte
  bleiben) + ehrlicher **Angreifer-Prüfstand**-Hinweis (heute aktiv: Fehlversuch-Sperre; der Rest
  = Auftrag B). Bewusst **an einer Stelle** entfernbar (alle Stellen mit „TESTBUCH" markiert).
- **Lösch-Schutz gewahrt:** alle Aktionen additiv/umkehrbar; Schließen mit ungespeichertem Inhalt
  fragt nach (kein versehentlicher Verlust); nichts zerstörend angefasst.
- **Krypto nur über den Kern** (`L.encryptTresor`/`decryptTresor`), kein `subtle.*` in der Schale.
- **Neuer headless-Test:** „Buch-Tresor: verschließen → öffnen gibt dieselbe Sammlung zurück"
  (genau die Aufrufkette des Buchs; falsches Buch-Passwort scheitert).

**Offen / ehrlich:**
- **Browser-Lauf nötig:** der ganze Buch-Tresor-Fluss (öffnen/füllen/verschließen/verschenken,
  Sperre, 🔒-Markierung, Schließen-Warnung) ist im Browser **ungeprüft — wartet auf Klaus**.
- **Auftrag B** (Panik Stufe 2 „Verbergen" + 3 „Löschen" scharf, Zwei-Schritt, nur lokale Kopie;
  Membran-15-Hinweis) bewusst **nicht** gebaut → eigene Sitzung (Klaus' Entscheidung „erst nur A").
- Siegel-16-Bezeugung, Shamir/Fächer/Köder weiter offen (nur auf Freigabe).

**Manual-Check:** Headless 28/28 grün; Kern byte-identisch (Hash gleich); Skripte `node --check` ok.
**Buch-Tresor im Browser ungeprüft — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf** des Buch-Tresors: ein Regal-Buch öffnen → „＋ Jason laden" → „🔒 Verschließen"
   (Passwort) → schließen → erneut öffnen (Passwort) → Inhalt da? Sperre nach 2× falsch? 🔒 sichtbar?
2. **Auftrag B (Sicherheits-Sitzung #2):** Panik 2/3 scharf (Zwei-Schritt, nur lokale Kopie),
   Membran-15-Hinweis — eigener Plan-vor-Code-Schritt.
3. **SBKIM-Bezeugung (#3):** voller Modul-Chain 1:1 (Siegel echt bronze/gold).

---

## 2026-06-03 — Linien-Editor + Export/Import; alle 5 Regalböden kalibriert & eingebacken (Sitzung 16)

**Klaus hat live im Browser kalibriert** — und das Ergebnis ist jetzt fest im Repo.

**Getan (`npm test` 27/27 grün, Kern byte-identisch, Skripte syntaxgeprüft, Schale nur P-Diff):**
- **Linien-Editor** („📐 Regale einrichten"): je Boden goldene Oberlinie + cyane Unterlinie,
  4 frei ziehbare Endpunkte (matrix3d-Homographie). +/− Boden, Reset, **Export/Import**.
- **Bug behoben (wichtig):** Reihen wurden vermessen, während `#regal-books` noch `display:none`
  war → matrix3d-Verzerrung übersprungen, Reihen sprangen erst beim Anfassen. Fix: `has-books`
  VOR `renderBooks`, danach `reapplyRows()` im rAF. **Kein** Stale-Storage-Problem.
- **Navigation (Fackeln + Pfeiltasten) im Einricht-Modus gesperrt**, nach „Fertig" wieder aktiv.
- **Alle 5 Ansichten kalibriert & eingebacken** (`BAKED` 0–4, je 5 Böden, aus Klaus' Export):
  links · Mitte · rechts · Übergang · Kern. Priorität: localStorage > BAKED > Auto-Aufteilung.
  `BAKED` in Wurzel & Spiegel **identisch**; als JSON geprüft.
- **Export/Import** ist der saubere Übergabeweg (Klaus' localStorage → mir → fest eingebacken),
  ohne Mess-Ungenauigkeit von Screenshots.

**Offen / ehrlich:**
- **Browser-Feinschliff:** einzelne Böden evtl. noch minimal verschoben — Klaus exportiert neu,
  ich tausche die Werte. (Übergang Boden 2 hat großen Versatz — von Klaus so belassen.)
- AES-Verschluss, SBKIM-Bezeugung, Szene-2-Inhalt weiter offen (eigene Sitzungen).

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; beide Regal-Skripte syntaxgeprüft.
**Von Klaus im Browser kalibriert (alle 5 Ansichten); eingebackene Werte 1:1 aus seinem Export.**

**Nächste Schritte (priorisiert):**
1. **Klaus' Sichtprüfung** der eingebackenen 5 Ansichten (zur Kontrolle „↺ zurücksetzen" je Ebene,
   damit nicht localStorage, sondern BAKED greift); bei Bedarf neuer Export → ich tausche Werte.
2. **Sicherheits-Sitzung (#1):** Bücher an den echten AES-Tresor; Panik 2/3 scharf.
3. **SBKIM-Bezeugung (#2):** Modul-Chain 1:1.
4. **Szene-2-Inhalt (#4):** echte Detail-/Bearbeiten-Ansicht im Buch.

---

## 2026-06-03 — Linien-Editor: Klaus richtet je Boden 2 Linien (Ober-/Unterkante) ein (Sitzung 15)

**Klaus:** Auto-Treffen der Böden gelingt mir grafisch nicht zuverlässig (Brettdicke/Kante nicht
messbar). Lösung: **er** legt je Boden zwei Linien fest (oben/unten), je 2 frei ziehbare
Endpunkte; ich fülle die Bücher automatisch dazwischen und skaliere sie.

**Getan (`npm test` 27/27 grün, Kern byte-identisch, Skripte syntaxgeprüft, Schale nur P-Diff):**
- **Linien-Editor** zurück (Knopf „📐 Regale einrichten"): je Boden eine **goldene Oberlinie**
  und **cyane Unterlinie** (= die Reihen-Borders der matrix3d-Quad), mit **4 frei ziehbaren
  Endpunkten** (tl/tr/bl/br). Drag eines Endpunkts verschiebt nur diesen (Höhe+Seite), die
  anderen bleiben. Bücher stehen auf der Unterlinie, Größe = Abstand der Linien.
- **Speicherung je Ansicht** (`jt-shelves2`), Default = bisherige SHELVES-Aufteilung. Werkzeuge
  **„+ Boden / − Boden / Diese Ebene zurücksetzen"**. Außerhalb des Modus alles unsichtbar.
- Auto-Verteilung (SHELVES) bleibt als **Startwert**; Klaus' Einrichtung gilt vorrangig.

**Offen / ehrlich:**
- **Browser-Lauf:** Klaus richtet die Böden je Ansicht ein (einmalig, bleibt gespeichert).
- AES-Verschluss, SBKIM-Bezeugung, Szene-2-Inhalt weiter offen.

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; beide Regal-Skripte syntaxgeprüft.
**Linien-Editor im Browser ungeprüft — wartet auf Klaus.**

---

## 2026-06-03 — Automatische Bücher-Verteilung je Boden; „Regal einrichten" entfernt (Sitzung 14)

**Klaus:** Bücher von Hand ausrichten ist eine Katastrophe — kein Nutzer will das. Bücher sind
nur noch Symbole; sie sollen **automatisch mittig von Boden zu Boden** sitzen, perspektivisch
(kleiner werdender Boden → kleineres Buch). „Regal einrichten" komplett raus; Einzel-Nachjustieren
(verschieben/kippen/drehen) bleibt.

**Getan (`npm test` 27/27 grün, Kern byte-identisch, beide Skripte syntaxgeprüft, Schale nur P-Diff):**
- **`SHELVES` je Ansicht** (aus den Hintergrundbildern abgelesen): ein Boden-Viereck (4 Eckpunkte
  in %), frontale = Rechteck, schräge (links/rechts) = Trapez. `shelfRows()` teilt es in n Böden
  und gibt je Boden eine perspektivisch verzerrte Reihe (matrix3d-Homographie aus PR #40 bleibt).
- **Bücher automatisch** je Boden verteilt, **vertikal mittig zwischen den zwei Böden**
  (`align-items:center`, Buch-Höhe 85 %); perspektivisch kleiner, wo der Boden kleiner wird.
- **„Regal einrichten" komplett entfernt** (Knopf, Werkzeugleiste, Reihen-Drag, Eck-Griffe,
  `jt-shelfrows`). Einzel-Nachjustieren der Bücher (Drag/Kippen/Drehen, `jt-booklayout`) bleibt.
- **Einmalige Umstellung** beim Laden: alte `jt-shelfrows`/`jt-booklayout` werden geleert
  (Versionsflag `jt-shelf-v=2`) — nur Anzeige-Layout, KEINE Tresor-/Jason-Daten.

**Offen / ehrlich:**
- **Browser-Lauf nötig:** `SHELVES`-Werte sind aus den Bildern **abgeschätzt** — sitzen die
  Böden noch nicht perfekt (v. a. schräge Ansichten), sage mir „Ebene X, Boden Y zu hoch/tief"
  und ich justiere die Konstanten. Kein Hand-Ausrichten mehr nötig.
- **Drehen beim 2. Klick** (früherer Wunsch) entfällt mit dem Editor; Einzel-Drehen je Buch bleibt.
- AES-Verschluss, SBKIM-Bezeugung, Szene-2-Inhalt weiter offen.

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; beide Regal-Skripte syntaxgeprüft.
**Automatische Verteilung im Browser ungeprüft — wartet auf Klaus.**

---

## 2026-06-03 — Reihen mit freier Eck-Verzerrung (Free-Distort) + Bücher-Modi (Sitzung 13)

**Klaus (Screenshots):** Perspektive läuft oft diagonal (bergauf/bergab) — eine Achse reicht
nicht. Lösung: **freie Eck-Verzerrung je Reihe** wie im Vektorprogramm.

**Getan (`npm test` 27/27 grün, Kern byte-identisch, Skripte syntaxgeprüft, Schale nur P-Diff):**
- **4 frei ziehbare Eckpunkte** je Reihe (weiße runde Griffe tl/tr/bl/br) → echte projektive
  Verzerrung via **Homographie → CSS `matrix3d`** (`warp()` + `adjugate/basisToPoints`). Bücher
  (und die Schild-Linie) folgen der verzerrten Reihe, auch diagonal. Reihen-Modell: `c:{tl,tr,bl,br}`
  Offsets in %. Einzel-Achsen-Perspektive (`ry`/Kreis-Griff) dadurch ersetzt.
- **Kanten-Griffe** l/r/b von den Ecken eingerückt (kein Überlappen), Body = verschieben.
- `defaultRows`/`+Reihe`/Reset führen Null-Ecken; Resize wendet die matrix3d neu an
  (Pixel-basiert). Reihe wird erst nach dem Einhängen verzerrt (offsetWidth/Height nötig).
- **Bücher-Modi geklärt (frühere Sitzung, jetzt stabil):** Einricht-Modus AN → Reihen
  positionieren (Bücher passiv); „Fertig" → Bücher wieder einzeln frei beweglich/drehbar.

**Offen / ehrlich:**
- **Browser-Lauf:** Eck-Verzerrung im Browser ungeprüft — wartet auf Klaus.
- **Drehen beim 2. Klick** (Klaus' Zusatzwunsch) noch NICHT gebaut — nächster kleiner Schritt,
  sobald die Ecken passen.
- AES-Verschluss, SBKIM-Bezeugung, Szene-2-Inhalt weiter offen.

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; beide Regal-Skripte syntaxgeprüft.
**Eck-Verzerrung im Browser ungeprüft — wartet auf Klaus.**

---

## 2026-06-02 — Regalreihen: Perspektive je Reihe + Bücher verankert (Sitzung 12)

**Klaus live im Browser (Screenshots):** Einricht-Modus läuft (abgedunkelt, leuchtende Reihen,
Werkzeugleiste, „⬇ Bücher unten ausrichten"). Zwei Folge-Wünsche umgesetzt:

**Getan (`npm test` 27/27 grün, Kern byte-identisch, Skripte syntaxgeprüft, Schale nur P-Diff):**
- **Sichtbarkeit Einricht-Modus** (vorher unsichtbar): Hintergrund abdunkeln, Bücher
  durchscheinend, Reihen kräftig cyan (Füllung + dashed + dicke Unterkante + Glow), Badge
  „⇕ Reihe ziehen", große Griffe. (PR #36, gemergt.)
- **„⬇ Bücher unten ausrichten":** löscht alle Einzel-Versätze (`jt-booklayout`) → Bücher an
  die Container-Unterkante. (PR #37, gemergt.)
- **Perspektive je Reihe:** Reihen-Modell um `ry` (rotateY-Grad) erweitert; neuer **Kreis-Griff
  oben** an jeder Reihe → horizontal ziehen neigt die Reihe perspektivisch
  (`perspective(1200px) rotateY(ry)`), für links/rechts UND Mitte. `defaultRows`/`+Reihe`/
  Reset führen `ry:0`. Clamp ±60°.
- **Bücher verankert:** freies Ziehen der Bücher entfernt (war Ursache des Versatzes) — Bücher
  sitzen fest unten auf der Reihe, nur Klick öffnet. „Bücher unten ausrichten" bleibt für
  Alt-Versätze.

**Offen / ehrlich:**
- **Browser-Lauf:** Perspektive-Griff + Verankerung im Browser ungeprüft — wartet auf Klaus.
  Falls „auf der Linie verschieben" gewünscht: gezielter Nudge-Modus wäre Folgeschritt.
- AES-Verschluss, SBKIM-Bezeugung, Szene-2-Inhalt weiter offen (eigene Sitzungen).

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; Regal-Skript syntaxgeprüft (beide).
**Perspektive/Verankerung im Browser ungeprüft — wartet auf Klaus.**

---

## 2026-06-02 — Einrichtbare Regalreihen: Klaus legt die Reihen selbst aufs Bild (Sitzung 11)

**Klaus' Idee (besser als Auto-Schätzung):** statt jedes Buch einzeln auszurichten, pro
Regalreihe einen **Container/Linie**, den er selbst aufs Brett im Bild zieht; Bücher stehen
darauf. Screenshots (Ansicht „rechts") bestätigten: das automatische Raster saß **nicht** auf
den fliehenden Brettern. Umgesetzt.

**Getan (`npm test` 27/27 grün, Kern byte-identisch 9694 B, Skripte syntaxgeprüft, Schale nur P-Diff):**
- **Einrichtbare Regalreihen:** je Ebene eine Liste von Reihen `{l,r,t,h}` (in %), lokal
  gespeichert (`jt-shelfrows`). Jede Reihe ist ein absolut positionierter Container; die
  **Unterkante** = „Regal-Linie", auf der die Bücher (mit Schild) stehen.
- **Knopf „📐 Regal einrichten"** schaltet den Einricht-Modus: Reihen sichtbar (weiß/durchschein
  + helle Linie), Bücher passiv. **Reihe ziehen = verschieben · linke/rechte Kante = Breite ·
  Unterkante = Höhe.** Werkzeuge **„+ Reihe / − Reihe / Diese Ebene zurücksetzen"**. Außerhalb
  des Modus transparent — nur Bücher sichtbar. Jede Ebene wird einzeln eingerichtet.
- **Perspektivische Auto-Neigung (tilt) entfernt** — ersetzt durch die manuelle Einrichtung
  (pro Reihe eigene Breite/Höhe deckt die Perspektive der schrägen Ansichten ab). `box`-Werte
  je Ansicht dienen nur noch als **Start-Reihen**, danach gilt Klaus' Einstellung.
- Identisch in Wurzel + Spiegel (nur Bildpfad `P` unterscheidet); Kern unberührt (Schale).

**Offen / ehrlich:**
- **Browser-Lauf nötig:** Klaus zieht die Reihen je Ebene aufs Bild (einmalig); Einstellung
  bleibt lokal erhalten. Look bis dahin **ungeprüft**. Bücher-Zahl je Reihe fest 6 — bei sehr
  schmalen (fernen) Reihen ggf. Überstand; dann Reihe breiter ziehen oder später Zahl je Reihe.
- Echtes Verschließen (AES), SBKIM-Bezeugung, Szene-2-Inhalt weiter offen (eigene Sitzungen).

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; Regal-Skript syntaxgeprüft (Wurzel
+ Spiegel). **Regal-Einrichtung im Browser ungeprüft — wartet auf Klaus.**

---

## 2026-06-02 — Regal-Feinschliff: Bücher-Bereich je Ansicht + perspektivische Neigung (Sitzung 10)

**Plan-vor-Code befolgt:** Pflichtlektüre durch, zwei Entscheidungen an Klaus gestellt →
(1) nächster Bau = **Regal-Feinschliff (#3)**; (2) schräge Ansichten links/rechts = **perspektivisch
neigen** (Bücher bleiben auf allen Ansichten, Klaus' früherer Wunsch).

**Getan (`npm test` 27/27 grün, Kern byte-identisch in Wurzel & Spiegel, Skripte syntaxgeprüft):**
- **Fünf Hintergrundbilder gesichtet** und die `box`-Insets (Bücher-Bereich je Ansicht, in %)
  auf die **sichtbaren Bretter** gesetzt — vorher standen die Bücher zu breit (in den Rahmen)
  und zu hoch (in den Bogen):
  - Ebene 1 (warm): `{l:21,r:21,t:16,b:19}` · Ebene 2 (kosmisch): `{l:18,r:18,t:14,b:17}` ·
    Ebene 3 (Kern, Podest unten frei): `{l:17,r:17,t:15,b:20}`.
  - links: `{l:37,r:4,t:11,b:13}` · rechts: `{l:4,r:37,t:11,b:13}`.
- **Perspektivische Neigung für die schrägen Ansichten:** neues Feld `tilt` pro Ansicht
  (links `+26`, rechts `−26`, frontale `0`). In `render()` bekommt `#regal-books` ein
  `transform:perspective(1100px) rotateY(tilt)` mit Drehpunkt an der **nahen Kante**
  (links→`left center`, rechts→`right center`), damit das Bücher-Raster mit der fliehenden
  Regalwand kippt. Frontale Ansichten setzen `transform` sauber zurück (`''`).
- **Schale, kein Kerneingriff:** alles außerhalb der Test-Marker (Kern endet Zeile 786, Regal
  ab 1290). Kern zwischen den Markern in beiden Dateien **byte-identisch (9694 Bytes)**;
  einziger Unterschied im Regal-Skript bleibt der Bildpfad `P` (`assets/` ↔ `../assets/`).

**Offen / ehrlich:**
- **Browser-Look UNGEPRÜFT** — wartet auf Klaus' Browser-Lauf (Hard-Reload Ctrl+Shift+R).
  Werte aus den Bildern abgeschätzt; sitzen die Bücher noch nicht perfekt, sind nur die
  `box`-Zahlen je Ansicht zu justieren. **Neigungs-Richtung** begründet, aber browser-
  ungeprüft: kippt links/rechts falsch herum, genügt das **Umdrehen der zwei `tilt`-Vorzeichen**.
- Echtes Verschließen (AES), SBKIM-Bezeugungs-Chain, Szene-2-Inhalt weiterhin offen (eigene Sitzungen).

**Manual-Check:** Headless 27/27 grün; Kern byte-identisch; Regal-Skript syntaxgeprüft (Wurzel
+ Spiegel). **Regal-Optik im Browser ungeprüft — wartet auf Klaus.**

**Nächste Schritte (priorisiert):**
1. **Klaus' Browser-Lauf** des Regals: sitzen die Bücher je Ansicht auf den Brettern?
   Neigt sich links/rechts korrekt? → ggf. `box`/`tilt` live nachjustieren.
2. **Sicherheits-Sitzung (#1):** Bücher an den echten AES-Tresor koppeln; Panik 2/3 scharf.
3. **SBKIM-Bezeugung (#2):** vollen Modul-Chain 1:1 holen.
4. **Szene-2-Inhalt (#4):** echte Detail-/Bearbeiten-Ansicht im geöffneten Buch.

---

## 2026-06-01 — Vision „Tresor = Bücherregal-Safe" + Tiefen-Ebenen (Sitzung 9, Assets sammeln)

**Neue Richtung (Klaus, 2026-06-01) — noch KEIN Feature-Code, erst Assets sammeln:**
- **Nach dem Intro steht man vor einem großen Bücherregal = der versteckte Safe.** Bücher =
  Dateien („Jasons"). Klick auf ein „echtes" Buch → es kippt nach vorn → Öffnen-Sequenz
  (Buch-Schlüssel versinkt + Energie-Funke, schon gebaut) → **Code-Abfrage** → Safe öffnet sich.
- **3 Regal-Ansichten = 3 Tiefen-Ebenen**, per **Fackeln links/rechts** navigierbar.
- **Tiefen-Leitmotiv:** je tiefer, desto mehr **KI / High-End-Technologie**, „nicht von dieser
  Welt" (Ebene 1 warm/Steampunk+Indiana-Jones mit ersten Tech-Funken → Ebene 2 halb Hightech/
  Hologramme → Ebene 3 fast reine außerirdische KI-Architektur).
- **Deko-Bücher:** gleiche Buchrücken, beschriftbar, **nicht** herausziehbar.
- **Fehlversuch-Sperre:** 2× falsches Buch → 1 Minute warten.
- **Liste bleibt** als Rückfallebene (Umschalter). `JasonLib`-Kern unberührt, nichts löschen.

**Assets da:** `regal-ebene1.png` (Ankunft), `regal-ebene2.png` (Übergang, kosmisch),
`regal-ebene3.png` (Kern, tiefste), `regal-links.png` / `regal-rechts.png` (Schwenk-Ansichten
von Ebene 1), `fackel.png` (freigestellt, transparent). **Fehlt noch:** 9 Buchrücken.

**Gebaut (Regal-Navigation, `npm test` 27/27 grün, Kern unberührt):** Vollbild-Overlay `#regal`
als **Standard nach dem Intro** — Hintergrund wechselt durch 5 Ansichten
`[links, ebene1, rechts, ebene2, ebene3]`; **Fackel-Buttons links/rechts** (rechte per CSS
`scaleX(-1)` gespiegelt) blättern, Pfeiltasten ←/→ ebenso, sanfte Überblendung, Ebenen-Caption,
Flammen-Flackern, `prefers-reduced-motion` respektiert. **„☰ Liste"** schaltet zur bewährten
Listen-Ansicht, Knopf **„📚 Regal"** zurück. Interaktion „jedes Buch + richtiger Code → Tresor"
**Vereinfachung von Klaus notiert** — Bücher/Code folgen mit den 9 Buchrücken.

**Bücher auf Ebene 1 gebaut (`npm test` 27/27 grün, Kern unberührt):** Auf der Mitte-Ansicht
(`at-center`) liegen 3 anklickbare Bücher (`buchruecken-1/2.png`, geklont, Name auf dem Rücken).
Klick → `jtOpenBook({requireCode:true})` öffnet das Buch-Overlay mit **Code-Abfrage**: richtiger
Code → Öffnen-Sequenz (Schlüssel versinkt + Energie-Funke) + Inhalt; **2× falsch → 1 Min Sperre**
(Countdown). **Ehrliche Vorschau:** Demo-Code „1234" sichtbar, keine echten Daten, kein echtes
Passwort — die Verdrahtung an den **AES-Tresor** (echtes Passwort) + echte Einträge folgt.
**Regal voll statt leer, auf ALLEN frontalen Ebenen:** 5 Buchrücken-Varianten
(`buchruecken-1…5.png`, transparent) — `renderBooks(level)` füllt die Mitte (Ebene 1), Ebene 2
und Ebene 3 mit je 5×6 gemischten Füll-Büchern; echte anklickbare Bücher je Ebene (Ebene 1:
Rezepte/Reisen/Ideen · Ebene 2: Konten/Verträge · Ebene 3: Schlüssel/Vermächtnis). Sichtbar via
`.has-books` (frontale Ebenen 1/3/4; die Schwenk-Ansichten links/rechts bleiben buchlos).
**Navigation = Fackeln im Bild (Klaus):** eigene Fackel-Buttons entfernt; stattdessen Rand-
Klickflächen links/rechts mit **Hover-Halo** („da ist ein Link", fadet zurück) über den im Regal-
Bild vorhandenen Fackeln — Position egal. **Bücher beweg-/kippbar (Klaus):** alle Bücher per
Pointer **ziehbar** (Mitte greifen = bewegen) und **kippbar** (oben greifen → Drehpunkt unten,
unten greifen → Drehpunkt oben), Layout pro Buch lokal in `localStorage` (`jt-booklayout`);
Klick-nach-Ziehen wird unterdrückt. (Unsichtbare Ausricht-Fläche = die Regalreihen als Start.)
**Anonyme Bücher + Regal-Schild UNTER dem Buch (Klaus):** alle Bücher sind gleich/anonym (man
sieht dem Buch nichts an), **alle anklickbar** und **alle frei beschriftbar** — die Beschriftung
sitzt als **Regal-Schild unterhalb** (cyan/blaues Leuchten wie Ebene 2/3, auto-eingepasste Breite,
lokal in `localStorage`). Kippen dreht nur den **Rücken**, das Schild bleibt aufrecht.
**Sicherheits-Logik:** **2 Fehlversuche gelten GLOBAL** (Versuche werden beim Öffnen NICHT
zurückgesetzt) → 1 Min Sperre; ein Knacker muss alle Bücher durchprobieren und weiß nicht, hinter
welchem etwas liegt. (Demo-Code „1234"; echtes Verschließen weiter in der Sicherheits-Sitzung.)

**Erlebnis-Schicht zu Ende gebaut (Klaus' Freibrief, `npm test` 27/27 grün, Kern unberührt):**
- **Panik-Knopf (Notfall)** im HUD: Dialog mit 3 Stufen. **Stufe 1 „Verriegeln"** scharf (zurück
  zur verschlossenen Tür, umkehrbar, kein Datenverlust); **Stufe 2 „Verbergen" / Stufe 3 „Löschen"**
  ehrlich deaktiviert (Hinweis „wird in der Sicherheits-Sitzung scharfgeschaltet").
- **HUD:** Wächter-Lampe (grün, ruhig) + **echtes SBKIM-Siegel-Wappen** (Modul 16, `assets/
  sbkim-siegel-wappen.svg` **1:1** aus Sage-Protokol) + **Andock-Dialog** (`#andock`): Endknoten/
  Endpunkt/nodeId/Spore + Link zum SBKIM-Werkzeug (SB-KIMTool-Point). Klick aufs Siegel öffnet
  Andock; first-boot-Animation. **Ehrlich:** sichtbares Siegel + Andock-Verbindung 1:1; die volle
  Bezeugungs-Prüfung (Modul-Chain init) folgt in eigener Sitzung.
- **Notfall-Knopf** ans Farbschema (messing-orange Lampe, rot/„armed" beim Drücken).
- **Navigation/Replay:** Regal ◀▶ (Fackeln) + Pfeiltasten; Funfakt-Schlüssel = „Intro & Tür nochmal
  ansehen"; einmaliger Bedien-Hinweis im Regal (blendet aus, `sessionStorage`).
- **Bewusst NICHT gemacht (Klaus' Wunsch):** echtes Verschließen/AES-Passwort-Verdrahtung +
  echte Dateien an die Bücher — **eigene Sicherheits-Sitzung**. Demo-Code „1234" bleibt.
- **Offen für später:** Speicherchips (Space-Ebenen), Shamir-Aufteilen, gestufte Fächer,
  Köder/Honig, Membran-15/Siegel-16/Apoptose-07 als echte Logik (1:1 aus Sage/SB-KIMTool).
- Auf **main gemergt** (Klaus' Freigabe zum Selbst-Mergen).

**Manual-Check (Klaus' Browser-Lauf erfolgt diese Sitzung, per Screenshots):** Schwelle, Regal
mit Fackel-Navigation, Bücher (ziehen/kippen, beschriften, Code/Sperre), Regal-Schilder, HUD
(Notfall-Lampe, Siegel/Andock) **im Browser gesehen & live justiert** (Schriftgröße, Schild-
Abstand, untere Kante/Clipping, Notfall-Farbe, Bücher auf allen Ansichten). Headless 27/27 grün.
**Offen:** echtes Verschließen (AES) + echte Dateien, voller SBKIM-Bezeugungs-Modul-Chain,
Buch-Positions-Feinschliff je Ebene — alles eigene Folge-Sitzungen.

**Nächste Schritte (priorisiert):**
1. **Sicherheits-Sitzung:** Bücher an den echten **AES-Passwort-Tresor** + echte Jason-Dateien
   koppeln (Demo-Code „1234" ersetzen); Panik Stufe 2/3 scharfschalten.
2. **SBKIM-Bezeugung:** vollen Modul-Chain (`sbkim-init.js` + `src/modules/*`) 1:1 holen →
   Siegel echt bronze/gold, Membran-15-Lampen, Apoptose-07, Tool-PWA-Andock-Wizard.
3. **Regal-Feinschliff:** Buch-Bereiche (`box`-Insets) je Ebene exakt auf die Bretter setzen
   (v. a. die schrägen Ansichten links/rechts); ggf. Bücher pro Reihe reduzieren.
   → **Besser (Klaus' Idee):** verstellbare **Ausricht-Linie** pro Ansicht (Knopf „📐 Ausrichten",
   zwei Griffe: strecken/drehen/neigen/verschieben), an der sich die Bücher live ausrichten;
   pro Ansicht lokal gespeichert; default-sicher (ohne gespeicherte Linie bleibt alles wie jetzt).
   Am besten mit Klaus' Live-Browser-Blick bauen/kalibrieren.
4. **Szene-2-Inhalt:** im geöffneten Buch die echte Detail-/Bearbeiten-Ansicht der Sammlung.

---

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
- **Schlüssel-Pulsen 1:1 aus der Sage-Einladung übernommen** (Klaus: „dieselben Effekte wie in
  der Einladung … Eine Werkstatt, kein Museum"). Quelle: `Sage-Protokol/index.html` `.vp-key-pulse`
  (rein additives türkises Licht, `mix-blend:screen`, sanftes Atmen `@keyframes vp-key-breath`).
  Bei uns als `.th-keyglow` über das **Schlüsselloch** der geschlossenen Tür zentriert; dauerhaft
  leicht sichtbar als **lebendiger Klick-Hinweis** (ersetzt den entfernten Knopf), heller bei Nähe,
  blendet beim Öffnen aus. Effekt-Code 1:1, nur Position angepasst.
- **„Intro neu starten"-Schlüssel (Funfakt):** kleiner schlüsselförmiger Knopf unten links
  (`#btn-replay-intro` / `.key-fab`) — Klick löscht den Sitzungs-Merker `jt-threshold-seen`
  und lädt neu → Schwelle läuft erneut. **Jetzt mit dem echten freigestellten Schlüssel**
  `schluessel.png` (Prompt 2, transparent, 1536×1024, Alpha 0 geprüft) statt SVG-Platzhalter;
  türkises Atem-Glühen (drop-shadow), heller bei Hover. `prefers-reduced-motion` respektiert.

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
  öffnet ein isoliertes Vorschau-Overlay `#bookdemo` — ein Buch (`buch-zu.png`) wird mit dem
  **eigenen Buch-Schlüssel** `buch-schluessel.png` (transparent, Alpha 0 geprüft) geöffnet:
  der Schlüssel **versinkt ins Schlüsselloch und verschwindet langsam** (wie in der Sage),
  dabei blitzt der **Energie-Funke** `buch-energie.png` (gold↔blau, `mix-blend:screen`) auf,
  und das Buch wechselt zu → `buch-auf.png` (Goldschein) → Platzhalter-Inhalt + ehrlicher
  Hinweis. **Zwei Knöpfe:** „📚 Muster-Buch" (selbst per Klick öffnen) und **„▶ Buchsequenz"**
  (läuft automatisch ab). **Keine echten Daten, kein Eingriff in `JasonLib`.** Nächster Schritt
  nach Klaus' OK: Look auf echte Einträge ausrollen (Regal-Ansicht mit Umschalter).
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
