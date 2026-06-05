# BRIEF — Shamir gesehen ✓ → jetzt Honigtopf / Köder

> Dieser Brief ist der **neueste** und gilt zuerst. Schritt A (Shamir-Browser-Check) ist
> **erledigt** — Klaus hat die Shamir-UI mit eigenen Augen grün gesehen. Offen ist nur noch
> **Schritt B: der Honigtopf / Köder** (eigene Scheibe, Plan-vor-Code).

Stand: 2026-06-05 (Shamir-Sicht-Freigabe erteilt)

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag: Sitzung 20, Shamir gesehen ✓).
3. **Neuester Brief** = dieser; Vertiefung: `docs/sessions/BRIEF_honigtopf-koeder.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. App (`index.html` / Spiegel `jasons-bibliothek/index.html`) + `test/shamir.test.js`.

## Stand
- **Shamir 3-von-5 ist real & gesehen:** GF(256)-Kern `JasonLib.splitSecret`/`combineShares`,
  `npm test` **39/39 grün** (11 Shamir-Fälle). UI **von Klaus im Browser gesehen (2026-06-05)**:
  Test-Buch → aufteilen → 5 Codes + Selbsttest → 3 von 5 wiederhergestellt → Übungs-Passwort
  `ÜBUNG-Beispiel-Passwort-3von5` kam byte-genau zurück. Der „wartet auf Klaus"-Vermerk ist weg.
- **Honigtopf = geplant** (status.json: „geplant"). Klaus' Entscheidungen liegen schon vor:
  Inhalt = **„harmloser Alltag"** (belanglose Rezepte/Notizen), Teil-Format Text-Code bestätigt.

## Was geplant ist
**Schritt B — Honigtopf / Köder (Not-Aus Stufe 2 „Verbergen", echte Logik, Plan-vor-Code):**
Falsches Passwort → statt Fehler eine **glaubhafte Schein-Bibliothek** (harmloser Alltag).
Ehrliche Grenze: stark gegen Gelegenheits-Gucker, **schwach gegen Kenner** — klar so etikettieren.

## Was gebaut / gepflegt / getestet werden soll
- **Erst kurzer Plan an Klaus** (kein Freibrief; berührt Sicherheits-Verhalten). Darin die offene
  Reichweiten-Frage klären: **pro Buch (opt-in)** oder **ein globaler Schalter**?
- Dann: echte Köder-Logik + **headless-Tests** (Schein-Inhalt erscheint bei „Köder-Passwort",
  echter Inhalt bleibt unberührt/getrennt). Kein PII, offline, Kern byte-identisch Wurzel & Spiegel.
- `status.json`-Eintrag „Honigtopf/Köder" von „geplant" fortschreiben; Browser-Teil bleibt
  ehrlich „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus es gesehen hat.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; Bibliothek `jason-eintrag` / `jason-bibliothek`.
- Shamir-Teil-Format `JT3v5-<i>-<base64url>` (CRC32 + 4-Byte-SHA-256-Fingerabdruck + Split-ID).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto/Logik; kein PII/Secret im Repo.
- Browser-Teile bleiben „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. **B) Honigtopf** — kurzer Plan an Klaus (inkl. Reichweiten-Frage), dann bauen + Tests.
2. Später optional: QR-Codes / `.txt`-Download je Shamir-Teil.
3. Auch noch browser-offen (eigene Läufe): Buch-Tresor-Fluss + Not-Aus Stufe 3.

## Offene Fragen an Klaus
- Honigtopf-**Reichweite**: pro Buch (opt-in) oder ein globaler Schalter?
- Soll die Schein-Bibliothek **mitgeliefert** (Demo-Alltag) oder von Klaus selbst befüllbar sein?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
