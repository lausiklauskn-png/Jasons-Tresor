# BRIEF — Tresor-Erlebnis: Regal-Safe lebt (Schwelle · Regal · Bücher · HUD · Siegel)

Stand: 2026-06-01/02 · Von: Bau-Sitzung (Klaus' Freibrief) · An: nächste Sitzung

> Diese Sitzung hat das **Erlebnis** vom Plan in eine **laufende App** verwandelt — von Klaus
> live im Browser gesehen und in vielen kleinen Runden justiert. Der `JasonLib`-Kern blieb
> **unberührt** (vom headless Test geschützt). Der Tresor ist bewusst **noch nicht verschlossen**
> (Demo-Code „1234") — echtes Passwort/Verschlüsselung = eigene Sicherheits-Sitzung.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test` = Beweis,
   kein PII, offline, „Merge entscheidet Klaus", Kopieren-nicht-klonen, Plan-vor-Code).
2. `PULS.md` — aktueller Stand (oberster Eintrag) + Nächste Schritte.
3. **Dieser Brief** (neuester) + `docs/sessions/PLAN_tresor-erlebnis.md` (Architektur/Prompts).
4. `status.json` — ehrlicher Real-Anteil.
5. `index.html` (`JasonLib`-Kern zwischen den Markern **unberührt lassen**) + `jasons-bibliothek/index.html`
   (Spiegel; Kern byte-identisch halten, nur Bildpfade `assets/` ↔ `../assets/`).

## Stand (real)
- **Headless `npm test` 27/27 grün** (Kern, Andock-Krypto). Alles auf `main` (PRs #8–#30 gemergt).
- **Erlebnis-Schale** in `index.html` (außerhalb der Test-Marker), von Klaus im Browser bestätigt:
  - **Schwelle/Intro:** Tür → 5-Frame-Aufschließen → Funken-Blitz → Bibliothek (langsam,
    pulsendes Schlüsselloch = Sage-Effekt `.vp-key-pulse` 1:1; kein Erklärtext).
  - **Regal-Safe** als Standard: 5 Ansichten (links · Ankunft · rechts · Ebene 2 · Ebene 3),
    **Navigation über die Fackeln im Bild** (Rand-Hotspots mit Hover-Halo) + Pfeiltasten.
    Tiefen-Leitmotiv warm→kosmisch→„nicht von dieser Welt".
  - **Bücher** auf allen Ansichten (gemischte Rücken `buchruecken-1…5.png`), **anonym**,
    **ziehbar** (Mitte) und **kippbar** (oben/unten = Drehpunkt, nur der Rücken dreht),
    Layout lokal (`jt-booklayout`). **Regal-Schild UNTER dem Buch** (cyan/blau leuchtend,
    auto-skaliert, frei beschriftbar, `jt-booknames`).
  - **Buch öffnen:** Klick → Code-Abfrage → richtiger Code → Schlüssel versinkt + Energie →
    Inhalt; **2 Fehlversuche GLOBAL → 1 Min Sperre**. (Demo-Code „1234".)
  - **HUD:** Wächter-Lampe + **Notfall-Lampe** (messing-orange, rot beim Drücken; Stufe 1
    „Verriegeln" scharf, 2/3 später) + **SBKIM-Siegel-Wappen 1:1** (`assets/sbkim-siegel-wappen.svg`)
    → **Andock-Dialog** (Endpunkt/nodeId/Spore + Link SB-KIMTool-Point).
  - **Replay:** Funfakt-Schlüssel (`schluessel.png`) unten links = „Intro nochmal".

## Bewusst NICHT gemacht (Klaus' Wunsch → eigene Sitzungen)
- **Echtes Verschließen:** AES-Passwort + echte Jason-Dateien an die Bücher (Demo-Code bleibt).
- **Voller SBKIM-Bezeugungs-Modul-Chain** (`sbkim-init.js` + `src/modules/*`): echtes
  bronze/gold-Siegel, Membran-15-Lampen, Apoptose-07, Tool-PWA-Andock-Wizard.

## Was als Nächstes gebaut werden soll
1. **Sicherheits-Sitzung:** Bücher an den bestehenden AES-Tresor (`JasonLib`/Modul 02) koppeln;
   Panik Stufe 2/3 scharf. Nie zerstörend, alles Zwei-Schritt (Lösch-Schutz-Regel).
2. **SBKIM-Bezeugung 1:1** aus Sage-Protokol/SB-KIMTool-Point holen und einbinden.
3. **Regal-Feinschliff:** `box`-Insets je Ansicht exakt auf die Bretter (v. a. links/rechts).
4. **Szene-2-Inhalt:** echte Detail-/Bearbeiten-Ansicht im geöffneten Buch.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; `jason-eintrag`/`jason-bibliothek`; Spore/Andock
  (`docs/ANDOCK.md`, Briefkasten §11.6). Erlebnis ist eine **Schale**, kein Umbau des Kerns.

## Akzeptanzkriterien
- `npm test` grün; `JasonLib`-Kern in Wurzel & Spiegel **byte-identisch**; alle Inline-Skripte
  syntaxgeprüft; offline · zero-dependency; kein PII/Secret im Repo; nichts wird gelöscht.

## Abschluss-Befehl (jede Sitzung)
`PULS.md` fortschreiben → neuen Brief `docs/sessions/BRIEF_<thema>.md` (Pflichtlektüre +
diesen Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → Commit/Push auf
`claude/<scope>` → Draft-PR (oder selbst mergen, wenn Klaus es freigibt). **Merge entscheidet Klaus.**
