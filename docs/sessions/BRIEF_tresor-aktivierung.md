# BRIEF — Tresor-Aktivierung: echtes Verschließen + alle Features (Sicherheits-Sitzung)

Stand: 2026-06-03 · Von: Sitzung 16 (Übergabe) · An: nächste Sitzung (Tresor-Aktivierung)
Status: **AUFTRAG — erst Plan an Klaus zeigen, dann bauen (Plan-vor-Code).** Diese Scheibe
berührt **echte Krypto und echte Daten** → kein Freibrief; Plan zuerst, Klaus' OK abwarten.

> Ziel: Aus dem Regal-Erlebnis (fertig, abgenommen) wird ein **echter Tresor**. Die Bücher
> werden mit **echtem Passwort verschlüsselt/entschlüsselt** (kein Demo-Code „1234" mehr), echte
> „Jasons" (.json) hängen an den Büchern, und die Werkzeugkiste (Wächter/Siegel/Notfall …) wird
> auf ehrliche, echte Funktion gehoben. Leitsatz bleibt: **Theater ≠ Schloss** — Tür/Schlüssel
> sind Zeremonie, das echte Schloss ist **Passwort + AES-256-GCM/PBKDF2-600k**.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test` = Beweis,
   kein PII/Secret, offline, „Merge entscheidet Klaus", Kopieren-nicht-klonen, Plan-vor-Code).
2. `PULS.md` — oberster Eintrag + Nächste Schritte.
3. **Dieser Brief** + `docs/sessions/PLAN_tresor-erlebnis.md` (§2 Werkzeugkiste-Mapping, §6 Klaus' Entscheidungen).
4. `status.json` — ehrlicher Real-Anteil. `docs/JASONS-BIBLIOTHEK.md` (Datenmodell), `docs/ANDOCK.md`.
5. `index.html` — der **`JasonLib`-Kern** zwischen den Markern (Krypto liegt dort schon fertig)
   + Regal-Schale ab `===== Regal-Navigation`; Spiegel `jasons-bibliothek/index.html`
   (Kern byte-identisch halten, nur Bildpfad `P`).

## Was schon da ist (NICHT neu bauen — wiederverwenden!)
Der getestete Kern stellt die **echte** Tresor-Krypto bereit (WebCrypto, Browser + Node ≥20):
- `JasonLib.encryptTresor(plainObj, password)` → `jason-tresor` v2 Umschlag
  (`{schemaVersion, kind:"jason-tresor", version:2, kdf:{PBKDF2/SHA-256/600k/salt}, cipher:{AES-GCM-256/iv}, data}`).
- `JasonLib.decryptTresor(blob, password)` → wirft bei falschem Passwort/Manipulation (AES-GCM-Auth-Tag).
- `JasonLib.isTresor(v)`, `tresorPayloadKind`, `payloadToEntries(plainObj, fallbackName)`.
- Belegt durch `test/jason_lib.test.js` (Verschlüsseln→Entschlüsseln == Original; falsches PW scheitert;
  Manipulation fällt durch). **Diese Funktionen sind die einzige Krypto-Quelle — kein eigener Krypto-Code.**

## Auftrag: Tresor aktivieren (Bau-Scheiben, je `npm test` grün halten)

### A. Echtes Verschließen/Öffnen je Buch (Kern der Sitzung)
- **Öffnen:** Buch-Klick → Passwort-Abfrage → `decryptTresor(blob, pw)`; Erfolg → Öffnen-Sequenz
  (Schlüssel versinkt + Energie-Funke, schon gebaut) → Inhalt (`payloadToEntries`) anzeigen.
  Demo-Code „1234" **entfernen**. Fehlversuch-Sperre (2× → 1 Min, global) bleibt — jetzt gegen
  echte Entschlüsselung.
- **Verschließen:** benannte Sammlung → `encryptTresor` → `jason-tresor` v2 an das Buch hängen.
  Buch **zu** = verschlüsselt; Buch **auf** = nur im Speicher entschlüsselt.
- **Daten an die Bücher:** ein Buch = eine Sammlung (`jason-eintrag[]`). Laden/Anhängen echter
  `.json` über die bestehende Bibliothek-Logik (`validateAndParse`, `parseLibraryImport`, `mergeEntries`).
- **Speicherort:** verschlüsselte Umschläge lokal (localStorage) + Export „Verschenken"/„Sichern"
  (bestehender Weg). Passwort/Klartext **nie** ins Repo, nie in Commits, nie in Chat-Artefakte.

### B. Werkzeugkiste ehrlich scharfschalten (aus PLAN §2)
- **Panik/Apoptose 07:** Stufe 1 „Verriegeln" (da, umkehrbar). Stufe 2 „Verbergen" (abstreitbar) +
  Stufe 3 „Löschen" **scharf** — aber **nur Zwei-Schritt, ausdrückliche Bestätigung**, und nur
  auf die **lokale** Kopie (ehrlicher Hinweis: Backups/geklaute Kopien überleben).
- **Membran 15 (Wächter-Lampe):** ehrlicher Fremdzugriff-Hinweis, zerstört nichts.
- **Siegel 16:** sichtbares Wappen da; volle Bezeugung (Modul-Chain) ist **eigene Sitzung (#2)**.
- **Optional/spätere Schalter:** Shamir-Aufteilen (3 v. 5), gestufte Fächer, Köder/Honig —
  jeweils mit **ehrlicher Grenze** klein im Spiel vermerkt. Nur bauen, was Klaus freigibt.

### HARTE REGEL (Klaus): nichts versehentlich löschen
- Kein zerstörender Zugriff auf vorhandene Tresor-/Bibliotheks-Daten. **Jede** Löschung
  (auch Panik 3) nur mit **Zwei-Schritt-Bestätigung**; Standard-Aktionen sind **umkehrbar oder
  additiv**. Export bleibt die echte Sicherung. (Anzeige-Layout `jt-*` ist unkritisch.)

## Datenverträge (nicht brechen)
- Tresor-Umschlag **`jason-tresor` v2** (genau der von `encryptTresor`); `jason-eintrag`/`jason-bibliothek`
  (`docs/JASONS-BIBLIOTHEK.md`); Spore/Andock (`docs/ANDOCK.md`, §11.6). Erlebnis/Tresor ist eine
  **Schale + Verdrahtung an den Kern**, kein Umbau des Kerns.

## Akzeptanzkriterien
- `npm test` grün (ggf. neue Kern-nahe Tests headless, ohne PII); `JasonLib`-Kern in Wurzel &
  Spiegel **byte-identisch**; Inline-Skripte syntaxgeprüft; **echte** Krypto nur über die
  Kern-Funktionen; offline · zero-dependency; **kein PII/Secret** im Repo; **nichts wird
  zerstörend gelöscht** (Zwei-Schritt). Browser-Pfade „ungeprüft, wartet auf Klaus' Browser-Lauf".

## Plan-vor-Code (verbindlich für diese Scheibe)
Zuerst Pflichtlektüre + Kern lesen → **kurzen Plan an Klaus** (welche Bau-Scheibe zuerst:
Empfehlung **A** „echtes Verschließen/Öffnen", dann **B** Panik 2/3) → Klaus' OK → bauen.
Bei jeder Frage zu Löschen/Passwort/Datenfluss: **fragen, nicht raten** (Lösch-Schutz).

## Abschluss-Befehl (jede Sitzung)
`PULS.md` fortschreiben → neuen Brief `docs/sessions/BRIEF_<thema>.md` (Pflichtlektüre +
diesen Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → Commit/Push auf
`claude/<scope>` → Draft-PR mit Test-Plan (oder selbst mergen, wenn Klaus es freigibt).
**Merge entscheidet Klaus.**
