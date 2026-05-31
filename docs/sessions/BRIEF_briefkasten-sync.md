# BRIEF — verified-match + Pages + Drei-Knoten-Netz

Stand: 2026-05-31 · Von: Sitzung 2 (Briefkasten-Sync §11.6) · An: nächste Sitzung

> Identität ist dauerhaft + von Sage als `verified-spore` registriert, und der
> Netz-Briefkasten (§11.6) ist angedockt (SIGNAL + Wächter + Workflow + 📬-Knopf).
> Was bleibt, ist der Schritt von `verified-spore` → `verified-match` und der Feinschliff.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand (neuester Eintrag oben).
3. **Dieser Brief** (neuester) + zur Herkunft `docs/sessions/BRIEF_jasons-tresor-andock.md`.
4. `status.json` — ehrlicher Real-Anteil (~58 %).
5. `docs/ANDOCK.md`, `sbkim/AUSTAUSCH.md`, `sbkim/SIGNAL.json`, `.github/sbkim-watch.mjs`.

## Stand
- **Real (headless bewiesen):** Tresor/Bibliothek-App (16 Tests), dauerhafte Ed25519-Identität
  (nodeId `7F_zNop…`) + reziproke Verifikation (5 Tests), Netz-Sync/Briefkasten §11.6.
- **Sage:** hat uns als Endknoten `verified-spore` registriert; ihr **seq 7** ist quittiert.
  GitHub Pages ist **live** (Spore über sporeUrl abrufbar).
- **Demo/offen:** `domainVector` (`_demo`) → noch kein `verified-match`.
  SB-KIMTool-Points `SIGNAL.json` 404. Klaus' Browser-Lauf steht aus.

## Was gebaut / gepflegt / getestet werden soll (Einzelschritte, je mit Klaus-Rückmeldung)
1. **`verified-match`** (der nächste echte Schritt): Modul 03 im Browser
   (Xenova/multilingual-e5-small, e5 `passage:`-Präfix aus `domainDescription` +
   `domainKeywords`) → `sbkim/domainVector.real.json` (384 Floats, L2≈1). **Re-Sign** mit
   `SBKIM_NODE_KEY` → `_demo` entfällt, nodeId bleibt `7F_zNop…`. Sage meldet den Score.
2. **SIGNAL fortschreiben:** bei jedem gemeldeten Bau `seq` erhöhen + `history`-Zeile;
   neue Nachbar-`seq` per `ack` quittieren (Wächter/📬-Knopf zeigen Ungelesenes).
3. **Drei-Knoten-Netz (optional):** sobald SB-KIMTool-Point eine `SIGNAL.json` hat, deren Bau
   lesen + quittieren; gegenseitige Spore-Verifikation Tresor ⟷ SB-KIMTool-Point.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 `exportBackup` / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).
- **Briefkasten (§11.6):** `sbkim/SIGNAL.json` mit `node, lastBuild, seq, headline,
  mailboxes{}, forNodes[], ack{}, history[]`; Wächter/Knopf vergleichen `peer.seq > self.ack`.

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; privater Schlüssel/Passwort **nie** ins Repo.
- `SIGNAL.json` valide; `node --check .github/sbkim-watch.mjs` OK; Wächter meldet korrekt.
- Browser-Teile (App + 📬-Knopf) „ungeprüft, wartet auf Klaus' Browser-Lauf".

## Reihenfolge
1 (verified-match, braucht Browser/Modul 03) → 3 (Pages, braucht Klaus) parallel →
2 (SIGNAL pflegen, laufend) → 4 (optional, braucht SB-KIMTool-Points SIGNAL).

## Offene Fragen an Klaus
- Fährst du Modul 03 einmal im Browser für den echten `domainVector`, oder soll Sage ihn
  aus unserem Domänen-Text rechnen (wie bei SB-KIMTool-Point)?
- GitHub Pages jetzt aktivieren?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
