# BRIEF — Wiederaufnahme: Shamir-Browser-Lauf, dann Honigtopf

> Dieser Brief ist der **neueste** und gilt zuerst. Er pausiert sauber: nichts ist verloren,
> nichts halbfertig im Code. Der Shamir-Kern ist gemergt und headless bewiesen — offen ist
> **nur noch Klaus' ruhiger Browser-Blick** auf die Shamir-UI (kein Terminal, nur Knöpfe).

Stand: 2026-06-04 (Sitzung pausiert auf Klaus' Wunsch — zu müde zum Testen, völlig in Ordnung)

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** = dieser; danach `docs/sessions/BRIEF_honigtopf-koeder.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. App (`index.html` / Spiegel `jasons-bibliothek/index.html`) + `test/shamir.test.js`.

## Stand
- **Shamir 3-von-5 ist in `main`** (PR #62 gemergt, Squash `a6de436`). Lokales `main` nachgezogen.
- **Echt & bewiesen (headless):** GF(256)-Kern `JasonLib.splitSecret` / `combineShares`,
  `npm test` **39/39 grün** (11 Shamir-Fälle). Kern byte-identisch Wurzel & Spiegel, offline,
  berührt KEINE Daten (erzeugt nur zusätzlich 5 Teile).
- **Offen = nur Sicht:** die **Shamir-UI ist browser-UNGEPRÜFT** — ehrlich „wartet auf Klaus'
  Browser-Lauf". Das ist kein Bug, nur der noch fehlende Augen-Beweis.

## Was geplant ist
**Beim nächsten, ausgeruhten Start — Schritt 1 ist ganz leicht und gefahrlos:**

### A) Klaus' Shamir-Browser-Check (nur Knöpfe, keine echten Daten)
1. Seite öffnen, **Hard-Reload: Strg + Umschalt + R** (wichtig nach dem Pull).
2. Das **🧪 Test-Buch** öffnen (gefahrloser Probelauf, Demo-Passwort).
3. **„Shamir üben: aufteilen"** → es erscheinen **5 Codes** + ein **Selbsttest**
   („✓ 3 Teile ergeben wieder dein Passwort").
4. 3 beliebige Codes kopieren → **„Shamir üben: wiederherstellen"** → einfügen →
   kommt das **Demo-Passwort zurück**?
5. Kurze Rückmeldung an Claude: *grün?* oder *was hakt?* — dann darf der status.json-Eintrag
   von „ungeprüft" auf „von Klaus gesehen" wechseln.

### B) Danach: Honigtopf / Köder (eigene Scheibe)
- Brief liegt bereit: `docs/sessions/BRIEF_honigtopf-koeder.md`.
- **Klaus' Entscheidungen schon festgehalten:** Inhalt = **„harmloser Alltag"**
  (belanglose Rezepte/Notizen), Teil-Format Text-Code bestätigt.
- Plan-vor-Code: kurzer Plan an Klaus, dann bauen (echte Logik, Tests, ehrliche Grenze).

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; Bibliothek `jason-eintrag` / `jason-bibliothek`.
- Shamir-Teil-Format `JT3v5-<i>-<base64url>` (CRC32 + 4-Byte-SHA-256-Fingerabdruck + Split-ID).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; kein PII/Secret im Repo.
- Browser-Teile bleiben „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. **A) Shamir-Browser-Check** — leicht, braucht nur Klaus (ausgeruht).
2. **B) Honigtopf** — eigener Plan-vor-Code-Schritt; Entscheidungen liegen vor.
3. Später optional: QR-Codes / `.txt`-Download je Shamir-Teil.

## Offene Fragen an Klaus
- Honigtopf-**Reichweite**: pro Buch (opt-in) oder ein globaler Schalter?
- Erst Shamir-Sicht-Freigabe abwarten, bevor der Köder startet? (empfohlen: ja)

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
