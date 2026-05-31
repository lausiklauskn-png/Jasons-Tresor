# BRIEF — verified-match (letzter echter Reststatus)

Stand: 2026-05-31 · Von: Sitzung 5 (Drei-Knoten-Netz + Briefkasten quittiert) · An: nächste Sitzung

> Das Netz steht: Jasons-Tresor verifiziert **Sage** und **SB-KIMTool-Point** reziprok
> (beide ✔ VALID), der Briefkasten §11.6 ist gepflegt (beide Nachbarn quittiert). Der einzige
> echte Reststatus zwischen uns und Sage ist `verified-spore` → `verified-match` (Embedding).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (oberster Eintrag).
3. Dieser Brief + zur Herkunft `docs/sessions/BRIEF_jasons-tresor-andock.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. `docs/ANDOCK.md`, `sbkim/{AUSTAUSCH.md, AUSTAUSCH-SBKIMTool.md, SIGNAL.json}`, `.github/sbkim-watch.mjs`.

## Stand
- **Real (headless bewiesen, `npm test` 27/27):** Tresor/Bibliothek-App, dauerhafte Ed25519-Identität
  (nodeId `7F_zNop…`), reziproke Verifikation **Sage** (`sage_inbox.json`) **und**
  **SB-KIMTool-Point** (`point_inbox.json`), Netz-Briefkasten §11.6.
- **Briefkasten:** eigene `SIGNAL.json` seq 2; `ack` Sage=8, SB-KIMTool-Point=2 (beide quittiert,
  Wächter „📭 nichts Neues").
- **Offen:** `domainVector` `_demo` → noch kein `verified-match`; SB-KIMTool-Point hat uns im
  Briefkasten noch nicht geackt (deren Seite); Klaus' Browser-Lauf aus.

## Was gebaut/gepflegt/getestet werden soll (Einzelschritte, je mit Klaus-Rückmeldung)
1. **`verified-match` (der nächste echte Schritt):** Modul 03 im Browser
   (Xenova/multilingual-e5-small, e5 `passage:`-Präfix aus `domainDescription` + `domainKeywords`)
   → `sbkim/domainVector.real.json` (384 Floats, L2≈1). **Re-Sign** mit `SBKIM_NODE_KEY`
   (Tresor `node_key.enc.json` öffnen, `docs/SCHLUESSEL.md`) → `_demo` entfällt, nodeId bleibt
   `7F_zNop…`. Sage/SB-KIMTool-Point rechnen den Cross-Knoten-Match (Score) nach.
   *Alternativ:* Sage rechnet den Vektor aus unserem Domänen-Text (wie bei SB-KIMTool-Point).
2. **Briefkasten pflegen:** bei jedem eigenen Bau `SIGNAL.json` seq+1 + `history`-Zeile;
   neue Nachbar-`seq` per `ack` quittieren (Wächter/📬-Knopf zeigen Ungelesenes).
3. **Optional:** wenn SB-KIMTool-Point uns ackt / eine Frage stellt → im Postfach
   `AUSTAUSCH-SBKIMTool.md` quittieren.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 `exportBackup` / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).
- Briefkasten §11.6: `sbkim/SIGNAL.json` (node, lastBuild, seq, headline, mailboxes{}, forNodes[],
  ack{}, history[]); Wächter/Knopf vergleichen `peer.seq > self.ack`.

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; privater Schlüssel/Passwort **nie** ins Repo.
- Bei `verified-match`: `domainVector` echt (kein `_demo`), Re-Sign ✔ VALID, nodeId unverändert.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf".

## Reihenfolge
1 (verified-match, braucht Browser/Modul 03 **und** Tresor-Passwort von Klaus) →
2 (Briefkasten pflegen, laufend) → 3 (optional).

## Offene Fragen an Klaus
- Fährst du Modul 03 einmal im Browser für den echten `domainVector`, oder soll Sage ihn rechnen?
- Für das Re-Sign brauche ich das Tresor-Passwort (`SBKIM_KEY_PW`) **nur zur Laufzeit** —
  es kommt nie ins Repo. Sollen wir das in einer Sitzung zusammen machen?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
