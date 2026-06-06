# BRIEF — Regal-Linien-Editor + kalibrierte Böden (alle 5 Ansichten eingebacken)

Stand: 2026-06-03 · Von: Bau-Sitzung 16 (interaktiv mit Klaus, Freibrief-artig) · An: nächste Sitzung

> Diese Sitzung hat die Buch-Anordnung im Regal von „automatisch raten" auf **Klaus kalibriert
> selbst** umgestellt: ein Linien-Editor (pro Boden Ober-/Unterlinie, 4 Endpunkte, perspektivisch
> via `matrix3d`), Export/Import als exakter Übergabeweg, und alle **fünf Ansichten** sind nun
> 1:1 aus Klaus' Export **fest eingebacken** (`BAKED`). Reine Schale; `JasonLib`-Kern unberührt.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test` = Beweis,
   kein PII, offline, „Merge entscheidet Klaus", Kopieren-nicht-klonen, Plan-vor-Code).
2. `PULS.md` — oberster Eintrag (2026-06-03, Sitzung 16) + Nächste Schritte.
3. **Dieser Brief** + `docs/sessions/PLAN_tresor-erlebnis.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. `index.html` (Regal-Schale ab Marker `===== Regal-Navigation`; `JasonLib`-Kern zwischen den
   Markern **unberührt**) + `jasons-bibliothek/index.html` (Spiegel; Kern byte-identisch, nur `P`).

## Stand (real)
- **Headless `npm test` 27/27 grün.** Erlebnis-Schale außerhalb der Test-Marker.
- **Linien-Editor** „📐 Regale einrichten": je Boden goldene Oberlinie + cyane Unterlinie,
  **4 frei ziehbare Endpunkte** (tl/tr/bl/br) → projektive Verzerrung (`warp()` → `matrix3d`).
  Werkzeuge: **+ Boden / − Boden / Diese Ebene zurücksetzen / ⬇ Export / ⬆ Import**.
- **Bücher** stehen unten auf der Unterlinie, Größe = Linienabstand; füllen je Boden automatisch.
- **Navigation gesperrt im Einricht-Modus** (Fackeln + Pfeiltasten), nach „✓ Fertig" wieder aktiv.
- **Render-Bug behoben:** `has-books` VOR `renderBooks` + `reapplyRows()` im `requestAnimationFrame`
  (sonst maß `matrix3d` `offsetWidth=0` bei `display:none` → Reihen sprangen erst beim Anfassen).
- **Alle 5 Ansichten kalibriert & eingebacken** (`BAKED` 0–4, je 5 Böden, aus Klaus' Export):
  0 links · 1 Mitte · 2 rechts · 3 Übergang · 4 Kern. Priorität in `shelfRows`:
  **localStorage (`jt-shelves2`) > `BAKED` > `defaultShelves` (Auto-Aufteilung aus `SHELVES`)**.
  `BAKED` in Wurzel & Spiegel **identisch** (geprüft); JSON-validiert.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; `jason-eintrag`/`jason-bibliothek`; Spore/Andock
  (`docs/ANDOCK.md`, §11.6). Das Regal/Editor ist **Schale**, kein Umbau des Kerns.
- Anzeige-Layout: `jt-shelves2` (eingerichtete Böden je Ansicht), `jt-booknames` (Schilder),
  `jt-booklayout` (Buch-Nudges). **Keine** Tresor-/Jason-Daten. Lösch-Schutz gilt für echte Daten.

## Was als Nächstes gebaut/geprüft werden soll
1. **Klaus' Sichtprüfung** der eingebackenen 5 Ansichten. Zur Kontrolle der *eingebackenen* Werte
   je Ebene einmal **„↺ Diese Ebene zurücksetzen"** (sonst überlagert Klaus' eigenes localStorage).
   Bei Abweichung: neu **Export** → Werte in `BAKED` (beide Dateien) tauschen.
2. **Sicherheits-Sitzung (#1):** Bücher an den echten AES-Tresor (`JasonLib`/Modul 02) koppeln;
   Demo-Code „1234" ersetzen; Panik Stufe 2/3 scharf. Nie zerstörend, Zwei-Schritt.
3. **SBKIM-Bezeugung 1:1 (#2)** aus Sage-Protokol/SB-KIMTool-Point.
4. **Szene-2-Inhalt (#4):** echte Detail-/Bearbeiten-Ansicht im geöffneten Buch.

## Akzeptanzkriterien
- `npm test` grün; `JasonLib`-Kern in Wurzel & Spiegel **byte-identisch**; Inline-Skripte
  syntaxgeprüft (`node --check`); `BAKED` als JSON gültig & in beiden Dateien identisch;
  offline · zero-dependency · kein PII/Secret; nichts wird gelöscht.
- Browser-Optik „ungeprüft, wartet auf Klaus", bis Klaus sie gesehen hat.

## Offene Fragen an Klaus
- Sitzen alle fünf Ansichten nach „↺ zurücksetzen" (= eingebackene Werte) richtig?
- Übergang (3) Boden 2 hat großen Versatz — bewusst so, oder neu exportieren?
- Als Nächstes Sicherheits-Sitzung (#1) starten?

## Abschluss-Befehl (jede Sitzung)
`PULS.md` fortschreiben → neuen Brief `docs/sessions/BRIEF_<thema>.md` (Pflichtlektüre +
diesen Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → Commit/Push auf
`claude/<scope>` → Draft-PR mit Test-Plan (oder selbst mergen, wenn Klaus es freigibt).
**Merge entscheidet Klaus.**
