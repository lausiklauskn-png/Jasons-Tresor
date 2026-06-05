# BRIEF — Tarnfach-Browser-Test + PWA-Installierbarkeit

> Dieser Brief ist der **neueste** und gilt zuerst. Das **Tarnfach/Honigtopf ist jetzt wirklich
> gebaut** (echte Krypto, `npm test` 45/45, headless bewiesen) — aber **browser-ungeprüft**. Zwei
> offene Stränge: (A) Klaus prüft das Tarnfach im Browser, (B) die jetzt schlanke App als **PWA**
> installierbar machen. **Plan-vor-Code** (kein Freibrief).

Stand: 2026-06-05

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag: Sitzung 24, Tarnfach gebaut).
3. **Neuester Brief** = dieser.
4. `status.json` — ehrlicher Real-Anteil.
5. App (`index.html` / Spiegel) — Buch-Overlay (`#bookdemo`), `openVault` im Kern, `rec.decoy`.

## Stand
- **Tresor-Kern echt & bewiesen:** Buch-AES-Tresor, Bibliothek, Shamir 3-von-5 (browser-gesehen),
  **Tarnfach/Honigtopf NEU (Sitzung 24): `openVault` + `rec.decoy`, 6 headless-Tests, `npm test` 45/45.**
- **Bilder als WebP** (App ~87 % kleiner, gemergt). Schilder lesbar (ein Wort pro Zeile, kleinere Schrift).
- **Browser-ungeprüft:** Tarnfach-UI, Liste↔Regal-Umschalt-Hänger, frühere Tresor-/Not-Aus-Flüsse.
- **Geplant/offen:** PWA (Manifest + Service-Worker); optional Lazy-Load.

## Was geplant ist
**A — Klaus' Browser-Lauf des Tarnfachs** (zuerst): am besten im **🧪 Test-Buch** gefahrlos. Echtes
Buch öffnen → „🪤 Tarnfach" → Köder-Passwort 2× → schließen → mit Köder-Passwort öffnen (harmlose
Bibliothek?) → mit echtem Passwort öffnen (echte Daten?). Bei Wunsch: Wortlaut/Inhalt der Fassade anpassen.

**B — PWA installierbar:** `manifest.webmanifest` (Name, Icons aus WebP, `display:standalone`,
`start_url`) + **Service-Worker** (`assets/erlebnis/sw.js`) der App-Datei + WebP cached → Offline-
Installation + schneller 2. Start. Registrierung in **beiden** HTML-Dateien identisch. Offline-Leitplanke
bleibt (SW cached nur eigene Dateien, keine externen Abhängigkeiten).

## Was gebaut / gepflegt / getestet werden soll
- **A:** keine Code-Änderung nötig (nur Klaus' Auge); Ergebnis ehrlich in `PULS.md`/`status.json`.
- **B:** Manifest + SW (Schale, **Kern byte-identisch** lassen); `npm test` grün; Wurzel/Spiegel-Diff
  weiterhin nur Bildpfade (+ ggf. identische SW-Registrierung).

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; Bibliothek `jason-eintrag` / `jason-bibliothek`.
- **Tarnfach: `rec.decoy` = eigener `jason-tresor` v2-Umschlag** neben `rec.tresor` in `jt-vaults`
  (additiv; Alt-Bücher ohne decoy unverändert). Auflösung über `JasonLib.openVault(rec, pw)`.
- Shamir-Teil `JT3v5-<i>-<base64url>`; Spore/Andock kanonisch (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto unangetastet; kein PII/Secret im Repo.
- App bleibt offline / abhängigkeitsfrei.
- Kern byte-identisch Wurzel & Spiegel.
- Browser-Teile bleiben „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. **A — Klaus' Browser-Lauf des Tarnfachs** (wartet auf Klaus).
2. **B — PWA** (Plan kurz an Klaus, dann bauen).
3. Optional: Liste↔Regal-Umschalt-Hänger; Lazy-Load.

## Offene Fragen an Klaus
- Funktioniert das Tarnfach im Browser wie erwartet (Köder-Passwort → harmlose Bibliothek)?
- Soll die **Schein-Bibliothek** anderen/persönlicheren Inhalt zeigen (du kannst sie selbst befüllen)?
- **PWA jetzt** bauen — Name/Icon-Wunsch beim Installieren?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
