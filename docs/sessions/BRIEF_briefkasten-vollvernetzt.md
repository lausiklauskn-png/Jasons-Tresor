# BRIEF — Briefkasten vollvernetzt (alle 5 Nachbarn) + §8-Antwort verarbeitet

> Brief-Kette (CLAUDE.md). Der **neueste** Brief gilt; alte bleiben als Historie.

Stand: 2026-06-07

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser).
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe: der Briefkasten-Block in `index.html`
   (`window.SBKIM_MAILBOX`), `sbkim/SIGNAL.json`, `sbkim/*_inbox.json`, `test/andock.test.js`,
   Mein-Tresors **Bauplan** (`…/Mein-Tresor/main/docs/sessions/BRIEF_briefkasten-bauplan.md`)
   + **Sync-Vereinbarung** (`…/Mein-Tresor/main/docs/SYNC-VEREINBARUNG.md`).

## Stand (was real ist)
- **Briefkasten VOLLVERNETZT (Bauplan §7):** unsere `peers`-Liste führt jetzt **alle 5** anderen
  Knoten: Sage-Protokol · Mein-Tresor · SB-KIMTool-Point · **Mein-Rezeptbuch** · **Mein-Mixarium**.
  In `index.html` **und** der Spiegelung `jasons-bibliothek/index.html` (byte-identisch via `<base>`).
- **Zwei neue Nachbarn real reziprok verifiziert** (headless `node:crypto`, von UNS nachgerechnet):
  - Mein-Rezeptbuch — nodeId `uOpUBezUVbOMsVd2C9BkHW80agnLx5tCx_nIRy2KkXg`, ✔ VALID, Cosinus
    **0.813698** → **verified-match** (≥ 0.80).
  - Mein-Mixarium — nodeId `B7Fke9CYTR1BrC3xOXzEY5q9RuRH8xxHPUuqRHV3utA`, ✔ VALID, Cosinus
    **0.788402** → **ehrlich UNTER 0.80**, bleibt **verified-spore** (kein Match — kein Schönrechnen).
  - Beide Werte decken sich exakt mit Mein-Tresors gemeldeten 0.8137 / 0.7884 (byte-identischer Vektor).
  - Momentaufnahmen: `sbkim/rezeptbuch_inbox.json` / `sbkim/mixarium_inbox.json`; 4 Offline-Tests in
    `test/andock.test.js`. **`npm test` 59/59 grün.**
- **§8 erledigt:** Mein-Tresor hat unsere Anfrage beantwortet (ihr `SIGNAL` seq 8). Ihre Sync-Doku
  (`docs/SYNC-VEREINBARUNG.md` = SBKIM-SYNC-VEREINBARUNG v1) + `BRIEF_briefkasten-bauplan.md` gelesen.
  `ack["Mein-Tresor"] 6 → 8`; Spore re-verifiziert (byte-identisch, cos 1.0). Quittung im Postfach
  `AUSTAUSCH-MeinTresor.md` **§9**.
- **Layout:** Karten zeigen weiterhin **vier** Ebenen ① Spore · ② Match (live) · ③ Sync · ④ Brief.
  Sage (Spec-Hub) führt die ④ ebenfalls; Mein-Tresors Bauplan zeigt drei — Hinweis im Postfach §9.
- **Ehrlich Demo/offen:** Briefkasten-Optik mit jetzt 5 Karten ist **ungeprüft, wartet auf Klaus'
  Browser-Lauf**. Mein-Rezeptbuch + Mein-Mixarium führen noch **kein `SIGNAL.json`** (HTTP 404) →
  ③ Sync zeigt für sie korrekt „SIGNAL nicht lesbar". Sage (seq 17) + Point (seq 18) sind
  weitergelaufen, diese Sitzung **nicht** quittiert → erscheinen ehrlich als „ungelesen".

## Was geplant ist (nächste Sitzung)
- **Klaus' Browser-Lauf** abwarten: Briefkasten mit 5 Karten + Spiegelung optisch bestätigen
  (Hard-Reload Ctrl+Shift+R). Erst danach ist dieser Teil „grün".
- Optional: Sage (seq 17) + SB-KIMTool-Point (seq 18) **aktuelle Bauten lesen + reziprok quittieren**
  (ack hochsetzen) — nur was wirklich gelesen + geprüft ist.

## Was gebaut / gepflegt / getestet werden soll
- Falls Mein-Rezeptbuch/Mein-Mixarium ein `SIGNAL.json` anlegen: deren `seq` lesen, in unsere `ack`
  aufnehmen (sobald wirklich gelesen). Erfolgsmerkmal: ③ Sync zeigt „✔ synchron" statt „nicht lesbar".
- `npm test` bleibt grün; neue Inbox-Dateien bleiben byte-1:1 zur geprüften Nachbar-Spore.
- `status.json` + `PULS.md` ehrlich fortschreiben.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).
- **SIGNAL/Briefkasten:** `SIGNAL.json` (`seq`, `headline`, `ack`, `mailboxes`); `ack[Nachbar]` = nur
  ehrlich Gelesenes/Geprüftes, monoton. Match-Schwelle **≥ 0.80**. Inbox-Dateien je Nachbar tragen
  `domainVector`. **Vollvernetzung (Bauplan §7):** jeder Knoten listet ALLE anderen.

## Akzeptanzkriterien
- `npm test` grün (59/59); echte Krypto; kein PII/Secret im Repo.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Match-Werte selbst nachgerechnet (nicht abgeschrieben); Mixarium ehrlich als „unter 0.80" markiert.

## Reihenfolge
1. **Wartet auf Klaus:** Browser-Lauf (5-Nachbar-Briefkasten + Spiegelung optisch bestätigen).
2. Optional: Sage/Point aktuelle Bauten lesen + quittieren; ggf. ④ Brief netzweit angleichen.
3. Sobald Rezeptbuch/Mixarium ein `SIGNAL.json` haben: in den Sync aufnehmen.

## Offene Fragen an Klaus
- ④-Brief-Zeile: netzweit beibehalten (wie Sage + wir) **oder** auf Mein-Tresors Drei-Ebenen-Bauplan
  zurückziehen? (Beides ist „synchron" — je nachdem, woran sich alle ausrichten.)
- Sollen wir Sage + SB-KIMTool-Point (seq 17/18) in einer eigenen Runde lesen + quittieren?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
