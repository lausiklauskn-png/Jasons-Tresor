# BRIEF — Eigenes Impressum eingefügt (AUFTRAG SB-KIMTool-Point, PII-Freigabe)

> Brief-Kette (CLAUDE.md). Der **neueste** Brief gilt; alte bleiben als Historie.

Stand: 2026-06-07

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser).
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe: `impressum.html`, der Footer in `index.html`
   (+ Spiegelung `jasons-bibliothek/index.html`), `sbkim/SIGNAL.json`,
   `sbkim/AUSTAUSCH-SBKIMTool.md`. Auftrags-Quelle (Hub, raw/main):
   `SB-KIMTool-Point/sbkim/AUSTAUSCH-JasonsTresor.md` §2 + `…/impressum.html`.

## Stand (was real ist)
- **Eigenes Impressum gebaut** (AUFTRAG SB-KIMTool-Point, ihr SIGNAL seq 15; Klaus' **PII-Freigabe**
  ausdrücklich erteilt). **`impressum.html`** in der Wurzel:
  - **Rechtstext wortgetreu** vom SBKIM-Hub: Impressum **§5 TMG**, Verantwortlich **§55 Abs. 2 RStV**,
    **Urheberrecht & Copyright** inkl. ASCII-Box, **Haftungsausschluss**, **Datenschutzerklärung** —
    **DE + EN** mit Sprach-Umschalter (`localStorage 'sbkimlang'`).
  - **Re-geskinnt, NICHT geklont:** Tresor-Farben (Teal `#2dd4bf` / BG `#0b1416`), Name/Titel/Repo-Link
    → Jasons-Tresor, Projekt-Beschreibung an unsere App angepasst.
- **Footer-Link** „© 2026 Klaus Nitzsche · Alle Rechte vorbehalten · Impressum, Datenschutz &
  Urheberrecht" unten auf der Hauptseite — **Wurzel + Spiegelung** (relativer Pfad `impressum.html`).
- **Gemeldet:** `sbkim/SIGNAL.json` **seq 10 → 11**; im Postfach `AUSTAUSCH-SBKIMTool.md` **§7**
  als erledigt quittiert.
- **`npm test` 59/59 grün.** Getesteter Kern unberührt (reine Schale + Doku).

## Ehrlich (Befund dieser Sitzung)
- **PII bewusst im Repo:** Name/Adresse/E-Mail von Klaus stehen im Impressum — **ausdrücklich
  freigegeben**, dieselbe, bereits öffentliche Angabe wie auf seinen anderen Knoten. Einmal gepusht,
  dauerhaft öffentlich. Die Leitplanke „kein **Secret** im Code" bleibt unberührt: **privater
  Schlüssel/Passwort sind weiterhin NICHT im Repo**.
- **Impressum-Optik im Browser ungeprüft, wartet auf Klaus' Browser-Lauf** (Hard-Reload
  Ctrl+Shift+R): Footer-Link unten → Seite öffnet, DE/EN-Umschalter, Farben passen zum Tresor.

## Offene Fragen / AUFTRÄGE an Klaus
- **Auto-Issue-Wächter** (Point seq 17): `.github/sbkim-watch.mjs` + Workflow übernehmen
  (zeitgesteuert, meldet Neues im Netz auch ohne offene Seite). Vorlage 1:1 vom Hub, nur CONFIG
  (`SELF`/`PEERS`) anpassen. Soll ich das als Nächstes umsetzen?

## Was gebaut / gepflegt / getestet werden soll (nächste Sitzung)
- Auf Klaus' Freigabe: Auto-Issue-Wächter aus SB-KIMTool-Point übernehmen
  (`.github/sbkim-watch.mjs` + `.github/workflows/sbkim-watch.yml`), CONFIG auf Jasons-Tresor,
  `permissions: contents:read + issues:write`. Fertig melden: `SIGNAL.json` seq+1.
- Legt Mein-Rezeptbuch/Mein-Mixarium ein `SIGNAL.json` an: deren `seq` lesen, in `ack` aufnehmen.
- `npm test` bleibt grün; `status.json` + `PULS.md` ehrlich fortschreiben.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md` §4).
- **SIGNAL/Briefkasten:** `SIGNAL.json` (`seq`, `headline`, `mailboxes`, `ack`); `ack[Nachbar]`
  = nur ehrlich Gelesenes/Geprüftes, monoton. Match-Schwelle **≥ 0.80**. `nodeId` im Aushang ==
  eigene reale Spore-`id`.
- **Impressum:** Rechtstext **wortgetreu** vom Hub; nur Identität/Name/Repo-Link/Beschreibung/Optik
  re-skinnen (nicht 1:1 klonen). Footer-Link auf der Hauptseite.

## Akzeptanzkriterien
- `npm test` grün (59/59); echte Krypto; **kein Secret** (Schlüssel/Passwort) im Repo.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Rechtstext wortgetreu übernommen; nur Re-Skin/Beschreibung angepasst.

## Reihenfolge
1. **Wartet auf Klaus:** Browser-Lauf (Footer-Link → Impressum öffnet, DE/EN, Tresor-Farben).
2. Klaus entscheidet über den zweiten AUFTRAG (Auto-Issue-Wächter).
3. Sobald Rezeptbuch/Mixarium ein `SIGNAL.json` haben: in den Sync aufnehmen.

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
