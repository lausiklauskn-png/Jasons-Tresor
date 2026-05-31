# BRIEF — Werkzeug „Tresor anlegen" steht; dauerhafte nodeId einlösen + Andock

Stand: 2026-05-31 · Von: Sitzung 2 · An: nächste Sitzung

> Sitzung 2 hat die letzte **Werkzeug-Lücke** für die dauerhafte Identität geschlossen
> (`make_node_key.mjs` + headless-Beweis). Was bleibt, ist **ein einziger Lauf mit Klaus'
> Passwort** — und danach der eigentliche Andock an Sage.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand.
3. Dieser Brief (neuester) + zur Herkunft `docs/sessions/BRIEF_identitaet-dauerhaft-und-andock.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. `docs/SCHLUESSEL.md`, `docs/ANDOCK.md`, `docs/JASONS-BIBLIOTHEK.md`, `sbkim/AUSTAUSCH.md`.

## Stand
- **Real (headless bewiesen, `npm test` 26/26):** Tresor/Bibliothek-App (16), Ed25519-Andock
  + reziproke Verifikation von Sage (5), **Knoten-Schlüssel-Tresor make→open (5, neu)**. Echte Krypto.
- **Bereit, aber noch nicht ausgelöst:** `scripts/make_node_key.mjs` legt den Tresor
  `sbkim/node_key.enc.json` an und zeigt die dauerhafte nodeId. Es fehlt nur **Klaus' Passwort**
  (`SBKIM_KEY_PW`) bzw. ein gesetztes `SBKIM_NODE_KEY` — in dieser Umgebung war **keins** gesetzt.
- **Provisorisch:** `sbkim/spore.json` (flüchtiger Schlüssel → nodeId wechselt pro Lauf). VALID.
- **Demo:** `domainVector` (`_demo`). Wartet auf Klaus: Passwort/Secret, Pages, Browser-Lauf.

## Was geplant ist
Die dauerhafte Identität **einlösen** und an Sage andocken. Kein neuer Bau nötig — die
Werkzeuge stehen; jetzt fahren wir sie mit dem echten Schlüssel.

## Was gebaut / gepflegt / getestet werden soll (Einzelschritte, je mit Erfolgsmerkmal)
1. **Dauerhafte Identität (Kern).** Sobald `SBKIM_KEY_PW` als Umgebungs-Secret gesetzt ist
   (oder Klaus den Lauf selbst startet):
   `SBKIM_KEY_PW='…' node scripts/make_node_key.mjs` → schreibt `sbkim/node_key.enc.json`,
   druckt die **dauerhafte nodeId**. Dann
   `SBKIM_NODE_KEY="$(SBKIM_KEY_PW='…' node scripts/open_node_key.mjs)" node scripts/generate_spore.mjs`
   → `sbkim/spore.json` neu signiert. **Erfolgsmerkmal:** gedruckte nodeId == die aus dem
   `make`-Lauf; `npm test` grün; `node scripts/verify_foreign_spore.mjs sbkim/spore.json` → ✔ VALID.
   `node_key.enc.json` committen (ohne Passwort wertlos); **`status.json` + `AUSTAUSCH.md` auf die
   stabile nodeId fortschreiben** (provisorisch → dauerhaft).
2. **domainVector echt.** Modul 03 im Browser (`Xenova/multilingual-e5-small`, e5 `passage:`-Präfix
   aus `domainDescription` + `domainKeywords`) → `sbkim/domainVector.real.json` (384 Floats, L2≈1).
   Re-Sign → `_demo` entfällt. ODER Sage rechnet den Vektor (Postfach §2). *(Klaus: keine Präferenz —
   beim Andock entscheiden.)*
3. **GitHub Pages aktivieren (Klaus)** → `…github.io/Jasons-Tresor/sbkim/spore.json` = 200.
4. **Sage um Registrierung bitten** (`sbkim/AUSTAUSCH.md`): stabile nodeId + sporeUrl melden →
   `pingStatus: verified-spore`, nach echtem Match → `verified-match`.
5. Optional Drei-Knoten-Netz mit SB-KIMTool-Point (gegenseitig verifizieren).

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json` — gleiches Format wie
  `make_node_key.mjs` schreibt und `open_node_key.mjs` öffnet).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; **privater Schlüssel/Passwort nie ins Repo, nie in den Chat**.
- nodeId **stabil über zwei Läufe**; `verify sbkim/spore.json` → ✔ VALID.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1 (Passwort/Secret von Klaus) → 3 (Pages, Klaus) parallel → 2 (echter Vektor, Browser/Sage) →
4 (Sage-Registrierung, braucht 1+3) → 5 (optional).

## Offene Fragen an Klaus
- **Setzt du `SBKIM_KEY_PW` als Umgebungs-Secret** (dann erzeuge ich Tresor + Spore in der
  nächsten Sitzung ohne dein Passwort je zu sehen) — **oder** sollen wir den Lauf gemeinsam in
  einer Sitzung machen, in der du das Passwort einmalig nennst (es bliebe im Chat, nicht im Repo)?
- App-Titel drinnen „Jasons-Bibliothek" lassen oder auf „Jasons-Tresor" vereinheitlichen?
  *(Sitzung 2: keine Präferenz angegeben → unverändert gelassen.)*
- Soll der Vektor von Sage gerechnet werden, oder fährst du Modul 03 einmal im Browser?
  *(keine Präferenz → beim Andock entscheiden.)*

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
