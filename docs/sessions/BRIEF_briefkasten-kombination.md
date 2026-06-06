# BRIEF — Briefkasten-Kombination, reicher Siegel-Dialog & Spiegelung

> Vorlage für die Brief-Kette (CLAUDE.md). Der **neueste** Brief gilt; alte bleiben als Historie.

Stand: 2026-06-06

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser).
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe: `sbkim/AUSTAUSCH-MeinTresor.md` (§7 Bauanleitung, §8 Anfrage),
   `docs/ANDOCK.md`, der Briefkasten-Block in `index.html`, `test/andock.test.js`.

## Stand (was real ist)
- **Netz komplett — alle drei Nachbarn beidseitig `verified-match`, jeweils von UNS unabhängig
  nachgerechnet:** Sage **0.847784**, Mein-Tresor **1.0** (byte-identisch, gewollt: gleicher
  Domänentext), SB-KIMTool-Point **0.853740** (echter Teil-Match). Offline-Tests in
  `test/andock.test.js`. `npm test` **55/55**.
- **Identität real:** nodeId `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`, echte Ed25519-Spore
  mit echtem 384-dim `domainVector` (e5-small, L2=1). Backup `node_key.enc.json` im Repo, Passwort
  nur bei Klaus.
- **App (Wurzel `index.html`):** HUD-📬-Briefkasten als **Live-Verbund** — pro Nachbar vier Ebenen
  ① Spore ✔ · ② Match (Cosinus **live im Browser**) · ③ Sync (seq ↔ ack) · ④ **Brief öffnen ↗**
  (Postfach/MD immer anklickbar). **Reicher Siegel-Dialog** (Klick aufs Siegel): Erklärung, eigenes
  Werkzeug, Andock-Block, Pflicht-Module-Status, „Lebendes Dokument". Siegel-Band trägt **JASONS-TRESOR**.
  „Regale einrichten" ausgeblendet. **ANDOCK §9** erfüllt (Werkzeug-Link = Eigentum `werkzeuge/andock.html`).
- **Spiegelung `jasons-bibliothek/index.html`:** jetzt **byte-genau wie die Wurzel** + `<base href="../">`
  → identische App, sbkim-Links repariert.
- **Ehrlich Demo/offen:** Browser-Optik (Siegel-Dialog, Briefkasten, Bild der Spiegelung) ist
  **ungeprüft, wartet auf Klaus' Browser-Lauf**. Match-Gegenseite bei Sage/SB-KIMTool-Point liegt
  auf deren Seite.

## Was geplant ist (nächste Sitzung)
**Kombinations-Briefkasten vollenden**, sobald Mein-Tresor unsere **§8-Anfrage** beantwortet (Doku
ihrer Synchronisations-Vereinbarung: `headline`-Format, `ack`-Regeln, Aufgaben vs. Meldungen,
weitere Felder). Ziel: unser Live-Zustands-Panel (Spore/Match/Sync/Brief) zusätzlich um die
**Bau-Meldung** je Nachbar ergänzen (die `SIGNAL.headline` der ungelesenen Bauten sichtbar machen),
ohne die Live-Match-Ebenen zu verlieren — beides in einem Panel.

## Was gebaut / gepflegt / getestet werden soll
- Sobald §8-Antwort da: Briefkasten-Karte um eine **Bau-Meldungs-Zeile** erweitern (zeigt
  `SIGNAL.headline` + Datum bei ungelesenem Bau). Erfolgsmerkmal: zeigt sowohl Verbindungs-Status
  **als auch** die offene Bau-Meldung; Klick → MD. `npm test` bleibt grün.
- Optional/auf Wunsch: Mein-Tresor baut den Live-Verbund-Briefkasten aus **§7** nach (sie haben
  ihn bereits 1:1 übernommen — Stand prüfen).
- `status.json` + `PULS.md` ehrlich fortschreiben.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).
- **SIGNAL/Briefkasten:** `SIGNAL.json` (`seq`, `headline`, `ack`, `mailboxes`); `ack[Nachbar]` = nur
  ehrlich Gelesenes. Match-Schwelle `≥ 0.80`. Inbox-Dateien je Nachbar tragen `domainVector`.

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; kein PII/Secret im Repo.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Match-Werte selbst nachgerechnet (nicht abgeschrieben), 1.0 ehrlich als „gewollt/byte-identisch" markiert.

## Reihenfolge
1. **Wartet auf Klaus / Mein-Tresor:** §8-Antwort (Synchronisations-Doku) abholen → dann Bau-Meldungs-Zeile bauen.
2. **Wartet auf Klaus:** Browser-Lauf (Siegel-Dialog + Briefkasten + Spiegelung optisch bestätigen).
3. Danach Feinschliff/Glättung nach Bedarf.

## Offene Fragen an Klaus
- Soll die Bau-Meldung **immer** sichtbar sein (wie ④ Brief) oder nur bei ungelesenen Bauten?
- Beim nächsten Mal: Mein-Tresor an die **§8-Anfrage** erinnern (Doku-Pfad nennen)?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
