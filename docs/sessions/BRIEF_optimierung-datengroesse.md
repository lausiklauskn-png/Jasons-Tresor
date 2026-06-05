# BRIEF — Datenmengen-Reduzierung / Optimierung (Ladezeit + PWA-Größe)

> Dieser Brief ist der **neueste** und gilt zuerst. Der Honigtopf/Köder ist **gebaut** (Tarnfach:
> zweites Passwort → harmlose Fassade, echte Krypto, browser-ungeprüft). Klaus' nächste Vision ist
> **wichtiger als ein neues Repo**: die App lädt noch zu langsam und wäre als PWA zu groß — das
> wollen wir **gemeinsam** optimieren (Plan-vor-Code).

Stand: 2026-06-05

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag: Sitzung 21, Honigtopf gebaut).
3. **Neuester Brief** = dieser.
4. `status.json` — ehrlicher Real-Anteil.
5. App (`index.html` / Spiegel `jasons-bibliothek/index.html`) + der Ordner `assets/`.

## Stand
- **Tresor-Kern echt & bewiesen:** Buch-AES-Tresor, Bibliothek, Shamir 3-von-5 (von Klaus im
  Browser gesehen), Tarnfach/Honigtopf (gebaut, browser-ungeprüft). `npm test` **39/39 grün**.
- **Problem (Klaus):** Das **Laden dauert zu lange**; als **PWA wäre die Datei zu groß**. Vermutlich
  sind die **Bilder** (`assets/`, u. a. Regal-/Schwellen-PNGs) der große Brocken, nicht der Code.

## Was geplant ist
**Optimierung der Datengröße / Ladezeit — ohne Funktion oder Krypto zu verändern.** Erst **messen**,
dann **gemeinsam entscheiden**, dann sparsam umsetzen. Mögliche Hebel (zur Diskussion mit Klaus):
- **Bilder verkleinern/umwandeln** (PNG → WebP/AVIF, passende Auflösung) — meist der größte Gewinn.
- **Lazy-Load**: tiefere Regal-Ebenen-Bilder erst laden, wenn man hinblättert.
- **Service-Worker / PWA-Cache** sauber aufsetzen (offline + schneller 2. Start).
- Ungenutzte/Reserve-Assets identifizieren (z. B. nicht eingebaute Kandidaten).

## Was gebaut / gepflegt / getestet werden soll
- **Zuerst eine ehrliche Messung** (Dateigrößen je Asset + Gesamt) an Klaus zeigen — Plan-vor-Code.
- Dann den **kleinsten wirksamen Schritt** (vermutlich Bild-Kompression) — **verlustarm**, optisch
  von Klaus im Browser abgenommen.
- **Leitplanken bleiben:** offline, kein PII, Kern byte-identisch Wurzel & Spiegel, `npm test` grün.
  Keine externen Abhängigkeiten in die App holen.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; Bibliothek `jason-eintrag` / `jason-bibliothek`.
- Shamir-Teil-Format `JT3v5-<i>-<base64url>`; Tarnfach = eigener AES-256-GCM-Umschlag (`rec.decoy`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto unangetastet; kein PII/Secret im Repo.
- Browser-Teile bleiben „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Optik nach Optimierung von Klaus im Browser bestätigt (keine sichtbare Verschlechterung).

## Reihenfolge
1. **Messen + Plan an Klaus** (welche Assets, welcher Hebel, welcher Gewinn).
2. **Kleinster wirksamer Schritt** (Bild-Kompression) → Klaus' Sichtprüfung.
3. Optional danach: Lazy-Load, Service-Worker/PWA-Feinschliff.

## Offene Fragen an Klaus
- Darf die **Bildqualität** minimal sinken, wenn die Datei dadurch deutlich kleiner/schneller wird?
- Soll die App **als PWA installierbar** werden (Service-Worker), oder erst nur die Größe senken?
- Tarnfach-Browser-Test jetzt nachholen oder später (du wolltest selbst testen)?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
