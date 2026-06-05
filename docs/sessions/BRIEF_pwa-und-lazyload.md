# BRIEF — PWA-Installierbarkeit + Lazy-Load (nach WebP-Optimierung)

> Dieser Brief ist der **neueste** und gilt zuerst. Die Größen-Optimierung ist **gebaut**:
> alle Bilder sind WebP (verlustarm), die App ist **~87 % kleiner** (74 MB → ~9,9 MB), `npm test`
> 39/39 grün — Optik **browser-ungeprüft** (wartet auf Klaus). Nächster logischer Schritt:
> die jetzt schlanke App als **PWA installierbar** machen und/oder tiefere Regal-Bilder
> **lazy** laden. **Plan-vor-Code** (kein Freibrief).

Stand: 2026-06-05

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag: Sitzung 22, Bilder→WebP).
3. **Neuester Brief** = dieser.
4. `status.json` — ehrlicher Real-Anteil.
5. App (`index.html` / Spiegel `jasons-bibliothek/index.html`) + Ordner `assets/erlebnis/`.

## Stand
- **Tresor-Kern echt & bewiesen:** Buch-AES-Tresor, Bibliothek, Shamir 3-von-5 (browser-gesehen),
  Tarnfach/Honigtopf (gebaut, browser-ungeprüft). `npm test` **39/39 grün**.
- **NEU (Sitzung 22):** Alle 26 Bilder PNG→**WebP** (verlustarm q82). `assets/` **74 MB → 9,9 MB
  (−87 %)**. Referenzen in Wurzel **und** Spiegel umgestellt; alle WebP existieren + dekodieren.
  Kern unangetastet; Wurzel/Spiegel-Diff weiterhin nur 32 Bildpfad-Zeilen. **Optik browser-ungeprüft.**
- **Offen:** PWA/Service-Worker (bewusst zurückgestellt — Klaus: „erst nur Größe"); Lazy-Load der
  tieferen Ebenen; Tarnfach-Browser-Test (Klaus testet selbst).

## Was geplant ist
**Schritt A — Klaus' Sichtprüfung der WebP-Optik** (zuerst, blockiert nichts weiter): sehen Tür,
Schloss-Sequenz, Regale, Bücher, Schlüssel **unverändert** aus? Falls ein Bild sichtbar leidet:
gezielt höher (q90+) oder verlustfrei neu rechnen — **nur das eine Bild**.

**Schritt B — PWA installierbar** (Klaus' frühere Vision): `manifest.webmanifest` + **Service-Worker**
(`assets/erlebnis/sw.js`, schon im „nicht-löschen"-Plan vorgesehen). Cached App-Datei + WebP-Bilder
→ echte Offline-Installation + schneller 2. Start. **Offline-Leitplanke bleibt** (keine externen
Abhängigkeiten; SW cached nur eigene Dateien).

**Schritt C (optional) — Lazy-Load:** tiefere Regal-Ebenen (Ebene 2/3, links/rechts) erst laden,
wenn man hinblättert (`loading="lazy"` bzw. gezieltes Nachladen), damit der Erst-Start noch leichter wird.

## Was gebaut / gepflegt / getestet werden soll
- **Schritt A:** keine Code-Änderung nötig, nur Klaus' Auge. Ergebnis in `PULS.md`/`status.json` ehrlich vermerken.
- **Schritt B:** `manifest.webmanifest` (Name, Icons aus WebP, `display:standalone`, `start_url`),
  Service-Worker mit sauberer Cache-Versionierung; Registrierung in **beiden** HTML-Dateien identisch
  (nur Pfad-Prefix unterscheidet). **Kern byte-identisch** lassen (Schale). Headless: `npm test` grün.
- **Schritt C:** nur Anzeige-Logik (Schale), Kern unberührt; keine Datenverträge berühren.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; Bibliothek `jason-eintrag` / `jason-bibliothek`.
- Shamir-Teil-Format `JT3v5-<i>-<base64url>`; Tarnfach = eigener AES-256-GCM-Umschlag (`rec.decoy`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto unangetastet; kein PII/Secret im Repo.
- App bleibt **offline / abhängigkeitsfrei** (Service-Worker cached nur eigene Dateien).
- Kern byte-identisch Wurzel & Spiegel; Diff weiterhin nur Bildpfad-Zeilen.
- Browser-Teile bleiben „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. **Schritt A — Klaus' Sichtprüfung der WebP-Optik** (wartet auf Klaus). Bei Bedarf einzelne Bilder nachschärfen.
2. **Schritt B — PWA** (manifest + Service-Worker) — Plan kurz an Klaus, dann bauen.
3. **Schritt C — Lazy-Load** (optional, Feinschliff).

## Offene Fragen an Klaus
- Sieht die App nach der WebP-Umstellung **unverändert** aus, oder leidet ein bestimmtes Bild sichtbar?
- **PWA jetzt** bauen (installierbar, offline) — oder erst noch andere Wünsche?
- Soll der **App-Name/Icon** beim Installieren etwas Bestimmtes zeigen (z. B. den Schlüssel/Tür-Look)?
- Tarnfach-Browser-Test jetzt nachholen oder weiter später (du wolltest selbst testen)?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
