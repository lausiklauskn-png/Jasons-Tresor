# PULS — Jasons-Tresor

> Übergabe-Herzschlag. Jede Sitzung schreibt hier fort: Datum · was getan · was offen ·
> nächste Schritte. Klaus liest zuerst den Chat, dann diese Datei.

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
