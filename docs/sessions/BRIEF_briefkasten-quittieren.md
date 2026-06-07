# BRIEF — Briefkasten-Runde quittiert („3 ungelesen" abgearbeitet)

> Brief-Kette (CLAUDE.md). Der **neueste** Brief gilt; alte bleiben als Historie.

Stand: 2026-06-07

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser).
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe: `sbkim/SIGNAL.json`, `sbkim/*_inbox.json`,
   der 📬-Briefkasten-Block in `index.html` (+ Spiegelung `jasons-bibliothek/index.html`),
   `test/andock.test.js`, `docs/ANDOCK.md` (§4 kanonische Form, §5 domainVector).

## Stand (was real ist)
- **Briefkasten-Runde quittiert** (Anlass: Klaus' Screenshot „4/5 verbunden · 3 ungelesen"):
  Die 3 ungelesenen Nachbar-Bauten **gelesen** und ihre Sporen **reziprok neu gegengeprüft**
  (frisch aus `raw/main`, **byte-identisch** zu unseren Inbox-Dateien, **✔ VALID**).
- **`sbkim/SIGNAL.json`** seq 9→**10**, `ack` hochgesetzt (nur ehrlich Gelesenes, monoton):
  - Sage-Protokol 15→**18** (seq 16 Briefkasten-Reconcile · 17 reiche Karten · 18 verified-match Sage⟷Mein-Tresor).
  - SB-KIMTool-Point 13→**20** (seq 14–20; darunter zwei AUFTRÄGE an uns, s. u.).
  - Mein-Tresor 8→**11** (seq 9 Auto-Issue-Wächter · 10 Bitte um Match · 11 Match mit Point bestätigt).
- **Matches unverändert**, von uns selbst nachgerechnet: Sage **0.847784** · SB-KIMTool-Point
  **0.853740** · Mein-Tresor **1.000000**. Mein-Rezeptbuch **0.813698** (verified-match) ·
  Mein-Mixarium **0.788402** (ehrlich unter 0.80 → verified-spore).
- **`npm test` 59/59 grün.** Echte Krypto, kein PII/Secret im Repo.

## Ehrlich (Befund dieser Sitzung)
- Der zugewiesene Arbeitszweig stand anfangs auf einem **alten, fast leeren Stand** (nur die
  „Gründung", provisorische nodeId, Demo-Vektor) — andere Linie als `main`. Ein erster
  Demo-Nachbau wäre ein **Rückschritt** gewesen und wurde **verworfen**; der Zweig wurde auf
  den echten `main`-Stand gesetzt und nur die Quittung ergänzt.
- Mein-Rezeptbuch + Mein-Mixarium führen weiter **kein `SIGNAL.json`** (HTTP 404) → nichts zu
  quittieren; ③ Sync zeigt für sie korrekt „SIGNAL nicht lesbar".
- Briefkasten-Optik (jetzt 0 ungelesen / Wächter-Lampe türkis) ist **ungeprüft, wartet auf
  Klaus' Browser-Lauf** (Hard-Reload Ctrl+Shift+R).

## Offene Fragen / AUFTRÄGE an Klaus (von SB-KIMTool-Point seq 15/17)
- **Eigenes Impressum** nachziehen: Rechtstext 1:1 vom Hub, an unsere Identität re-geskinnt —
  braucht **Klaus' PII-Freigabe**. Soll ich das in einer eigenen Sitzung umsetzen?
- **Auto-Issue-Wächter** (`.github/sbkim-watch.mjs` + Workflow, zeitgesteuert) übernehmen, damit
  Neues im Netz auch ohne offene Seite gemeldet wird? (Mein-Tresor hat es seq 9 übernommen.)

## Was gebaut / gepflegt / getestet werden soll (nächste Sitzung)
- Legt Mein-Rezeptbuch/Mein-Mixarium ein `SIGNAL.json` an: deren `seq` lesen, in `ack`
  aufnehmen (nur wirklich Gelesenes). Erfolgsmerkmal: ③ Sync „✔ synchron" statt „nicht lesbar".
- `npm test` bleibt grün; Inbox-Dateien byte-1:1 zur geprüften Nachbar-Spore.
- `status.json` + `PULS.md` ehrlich fortschreiben.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md` §4).
- **SIGNAL/Briefkasten:** `SIGNAL.json` (`seq`, `headline`, `mailboxes`, `ack`); `ack[Nachbar]`
  = nur ehrlich Gelesenes/Geprüftes, monoton. Match-Schwelle **≥ 0.80**. Vollvernetzung: jeder
  Knoten listet ALLE anderen. `nodeId` im Aushang == eigene reale Spore-`id`.

## Akzeptanzkriterien
- `npm test` grün (59/59); echte Krypto; kein PII/Secret im Repo.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.
- Match-Werte **selbst nachgerechnet, nicht abgeschrieben**; nur ehrlich Gelesenes quittiert.

## Reihenfolge
1. **Wartet auf Klaus:** Browser-Lauf (Briefkasten 0 ungelesen / Lampe türkis bestätigen).
2. Klaus entscheidet über die zwei AUFTRÄGE (Impressum mit PII-Freigabe · Auto-Issue-Wächter).
3. Sobald Rezeptbuch/Mixarium ein `SIGNAL.json` haben: in den Sync aufnehmen.

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
