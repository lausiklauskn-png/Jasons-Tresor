# BRIEF — Das Tresor-Erlebnis (Tür · Bibliothek · Tresorräume) + Bild-Prompts

Stand: 2026-06-01 · Von: Design-Sitzung · An: nächste Bau-Sitzung

> Diese Sitzung hat **kein Code gebaut** (Plan-vor-Code, kein Freibrief). Sie hat den
> Werkzeugkiste-Befehl in ein **Erlebnis** überführt: Schatzsuche in Steampunk-Manier,
> angelehnt an die **Sage-Einladung** (warme Goldtür) und den **glühenden türkisen
> Schlüssel** der kosmischen Truhe (SB-KIMTool-Point). Ergebnis: `docs/sessions/PLAN_tresor-erlebnis.md`
> mit Architektur + **19 Bild-Prompts** (Phasen 1–4). Wartet auf Klaus' Rückmeldung + Bilder.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser) + **`docs/sessions/PLAN_tresor-erlebnis.md`**.
4. `status.json` — ehrlicher Real-Anteil.
5. `docs/JASONS-BIBLIOTHEK.md` + `index.html` (`JasonLib`-Kern) + `scripts/`.

## Stand
- **Real (headless, `npm test` 27/27):** Tresor/Bibliothek-App (`JasonLib`-Kern), dauerhafte
  Ed25519-Identität, reziproke Verifikation Sage + SB-KIMTool-Point, Briefkasten §11.6.
- **Neu (nur Doku):** vollständiger Gestaltungsplan + Bild-Prompts. **Kein Code, keine Bilder.**
- **Studierte Vorbilder:** Sage `docs/einladung/vendor/img/scene-5-door.webp` (Tür, warmes
  Gold-Chiaroscuro, #08081A/#6EE7D3/#F4B435/#8B5CF6, Geist-Font, „Tür fadet auf Nähe ein →
  Klick → warmer Blitz"); SB-KIMTool-Point `assets/observatorium-truhe.png` (glühender
  türkiser Schlüssel im Schloss); `assets/tool-symbols/*.svg` (15 Membran, 16 Siegel, 07 Apoptose …).

## Was geplant ist (Reihenfolge der Bau-Phasen — erst nach Klaus' OK + Bildern)
1. **Schwelle:** Tür-Overlay + Schlüssel ins Schloss (Stop-Motion klick-klick-klick) → Übergang.
2. **Bibliothek:** Regal, Buch = Sammlung, Buch kippt → Spielfenster. `JasonLib` bleibt Kern.
3. **Spielfenster + HUD:** Benennen/Ziel/Passwort/Tiefe; Membran-Lampe (15), Siegel (16),
   Briefkasten (📬); dann Werttresor-Teile **C**: Aufteilen (Shamir) → gestufte Fächer →
   Köder/Honig → Panik-Knopf (Motor: Apoptose 07).
4. **Tresorräume:** Raum-Übergänge + Themenräume (Tagebuch/Geld/Krypto/generisch).
- **Werkzeugkiste A** (Membran 15, Apoptose 07, Siegel 16) als echte Logik **1:1** aus
  Sage/SB-KIMTool-Point kopieren; das Erlebnis macht sie nur sichtbar.

## Was gebaut / gepflegt / getestet werden soll
- Erlebnis-**Schale** über der App, **`JasonLib`-Kern unverändert** (vom Test geschützt).
- Pro Phase: `npm test` grün; neue reine Funktionen (Buch↔Sammlung-Mapping, Shamir-Split,
  Köder-Erkennung, Panik-Stufen) headless testbar zwischen Markern schneiden.
- Bilder unter `assets/erlebnis/` (Variante A, offline) **oder** base64 (Variante B) — Klaus wählt.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`); Briefkasten §11.6 (`SIGNAL.json`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; kein PII/Secret im Repo.
- **Theater ≠ Schloss:** Tür/Schlüssel = Navigation; echtes Schloss = Passwort + AES. Ehrlich vermerkt.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Offline · zero-dependency (lokale Bilder sind kein Netz-Zugriff) bleibt gewahrt.

## Reihenfolge
Klaus-Rückmeldung (4 Fragen unten) → Phase-1-Bilder generieren → Schwelle bauen + testen →
Phase 2 … 4. **Kein Schritt ohne Plan-an-Klaus** (kein Freibrief), außer Klaus gibt einen.

## Entscheidungen (durch Klaus, 2026-06-01)
1. **Bild-Ablage:** alles in einem Ordner **`assets/erlebnis/`, offline**.
2. **DATENSCHUTZ-REGEL (hart):** „Es darf nicht aus Versehen etwas gelöscht werden." → Bau fasst
   vorhandene Tresor-/Bibliotheks-Daten nie zerstörend an; jede Löschung nur Zwei-Schritt-bestätigt;
   Standard-Aktionen umkehrbar/additiv. **Diese Regel hat im Bau Vorrang.**
3. **Ein Gesicht:** stiller Werttresor (kein Köder; Köder höchstens später optionaler Schalter).
4. **Start:** erst nur Phase 1 (Tür/Schlüssel/Schloss + 3 Effekt-Teile), Look prüfen.
5. **Schlüssel:** Klick zum Einrasten (Drag optional später).

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
