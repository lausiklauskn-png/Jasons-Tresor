# BRIEF — Briefkasten-Hygiene eingeführt (Übergabe von Mein-Tresor)

Stand: 2026-06-26 · Von: Sitzung 58 (Briefkasten-Hygiene) · An: nächste Sitzung

> Die Schwester **Mein-Tresor** hat aufgeräumt und uns die Hygiene als Übergabe weitergegeben.
> Diese Sitzung hat die Regel in `CLAUDE.md` verankert **und** die Brief-Kette ausgemistet:
> 13 erledigte Sitzungs-Protokolle raus, offene Aufträge + Referenzen behalten.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette + **Briefkasten-Hygiene**).
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` — die eigentliche Produkt-Arbeit steht im
   aktiven Brief `BRIEF_textfeld-mycel-erklaerung.md` (Sitzung 57); dieser Hygiene-Brief
   dokumentiert nur die Aufräum-Regel.
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe (`docs/*.md`, `scripts/…`, App).

## Stand
- **Getan:** Abschnitt **„Briefkasten-Hygiene"** in `CLAUDE.md` verankert (zwei Briefkästen
  streng getrennt). `VORLAGE_BRIEF.md` nachgezogen. **13 erledigte Protokoll-Briefe per `git rm`
  entfernt** (Git-Historie behält sie). `PULS.md` fortgeschrieben. `npm test` blieb grün.
- **Wichtiger Befund:** Mein Branch lag — wie schon bei Sitzung 57 — auf einem **uralten
  Gründungs-Stand** (~170 Commits hinter `main`). Branch auf `origin/main` zurückgesetzt, dann
  die Hygiene gegen den **echten** Stand gemacht. (Genau der Stolperstein aus Mein-Tresors Brief.)
- **Behalten (bewusst, nicht erledigt):** offene Aufträge (`honigtopf-*`, `shamir-honigtopf`,
  `tresor-aktivierung-B`), Repo-Boot-/Befehls-Briefe (`mein-tresor-bootstrap`, `pwa-landingpage`),
  Erlebnis-Referenzen (`tresor-erlebnis`, `PLAN_tresor-erlebnis` — von `assets/erlebnis/`
  verlinkt), sowie vorsichtshalber drei unsichere Browser-/PWA-Briefe (`pwa-und-lazyload`,
  `tarnfach-test-und-pwa`, `tresor-aktivierung`). Im Zweifel behalten — Klaus entscheidet.

## Was geplant ist (für die nächste Sitzung)
Die eigentliche Produkt-Arbeit bleibt der **aktive** Brief `BRIEF_textfeld-mycel-erklaerung.md`
(Klaus' Browser-Lauf der Andock-Änderungen, Neu-Signieren der Spore in Teil B).

## Was gebaut / gepflegt / getestet werden soll (Hygiene-Routine ab jetzt)
1. **Bei jedem Sitzungsstart** die Brief-Kette prüfen: kleine Tabelle (Brief · Art · Status),
   Klaus zeigen. Erfolgsmerkmal: keine erledigten Protokolle mehr im Arbeitsverzeichnis.
2. **Erledigte/überholte** Protokolle (Inhalt steht in `PULS.md`) per `git rm` entfernen,
   **Querverweise nachziehen**. Erfolgsmerkmal: kein toter Verweis, `npm test` grün.
3. **SBKIM-Briefkasten** (`sbkim/`) **nie** ausmisten — nur lesen + `ack`.
4. **Im Zweifel behalten** (offen oder erledigt?) und Klaus fragen.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 `exportBackup` / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; privater Schlüssel/Passwort **nie** ins Repo.
- SBKIM-Briefkasten unangetastet; Brief-Kette schlank; Git-Historie behält gelöschte Briefe.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1 (Hygiene bei Start prüfen) → dann zurück zur Produkt-Arbeit (aktiver Brief, wartet auf Klaus).

## Offene Fragen an Klaus
- Sollen die drei vorsichtshalber behaltenen Briefe (`pwa-und-lazyload`, `tarnfach-test-und-pwa`,
  `tresor-aktivierung`) auch raus (= erledigt), oder sind sie noch offene Aufträge?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → **Briefkasten-Hygiene anwenden** →
Commit/Push auf `claude/<scope>` → Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
