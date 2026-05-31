# BRIEF — Identität dauerhaft machen + Andock an Sage abschließen

Stand: 2026-05-31 · Von: Sitzung 1 (Gründung) · An: nächste Sitzung

> Die Gründung steht: App + Identität + Andock-Vorbereitung sind gebaut und headless
> bewiesen (`npm test` 21/21). Was jetzt fehlt, hängt fast alles an **Klaus** (Schlüssel,
> Pages, Browser-Lauf) — diese Sitzung treibt das zu Ende.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand.
3. **Dieser Brief** (neuester) + zur Herkunft `docs/sessions/BRIEF_jasons-tresor-andock.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. `docs/SCHLUESSEL.md`, `docs/ANDOCK.md`, `docs/JASONS-BIBLIOTHEK.md`, `sbkim/AUSTAUSCH.md`.

## Stand
- **Real (headless bewiesen):** Tresor/Bibliothek-App (16 Tests), Ed25519-Andock-Identität +
  reziproke Verifikation von Sage (5 Tests). Echte Krypto.
- **Provisorisch:** `sbkim/spore.json` ist mit einem **flüchtigen** Schlüssel signiert →
  nodeId wechselt pro Lauf. VALID, aber nicht dauerhaft.
- **Demo:** `domainVector` (`_demo`) — kein echter Match möglich.
- **Wartet auf Klaus:** Schlüssel sichern, Pages aktivieren, App im Browser ansehen.

## Was gebaut / gepflegt / getestet werden soll (Einzelschritte, je mit Klaus-Rückmeldung)
1. **Schlüssel dauerhaft (das Wichtigste).** Sobald Klaus `SBKIM_NODE_KEY` bereitstellt
   (oder den Passwort-Tresor `sbkim/node_key.enc.json` anlegt — Rezept `docs/SCHLUESSEL.md`):
   `generate_spore.mjs` neu laufen → **stabile nodeId** notieren → `verify` ✔ VALID → `npm test`.
   Erfolgsmerkmal: dieselbe nodeId über zwei Läufe.
2. **`domainVector` echt.** Modul 03 im Browser (Xenova/multilingual-e5-small, e5
   `passage:`-Präfix aus `domainDescription` + `domainKeywords`) → `sbkim/domainVector.real.json`
   (384 Floats, L2≈1). Re-Sign → `_demo` entfällt. ODER Sage rechnet den Vektor (Postfach §2).
3. **GitHub Pages aktivieren** (Klaus) → `…github.io/Jasons-Tresor/sbkim/spore.json` = 200.
4. **Sage um Registrierung bitten** (im Postfach `sbkim/AUSTAUSCH.md`): stabile nodeId +
   `sporeUrl` melden → `pingStatus: verified-spore`, nach echtem Match → `verified-match`.
5. **Optional Drei-Knoten-Netz:** dasselbe gegenüber SB-KIMTool-Point (gegenseitig verifizieren).

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 `exportBackup` / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; privater Schlüssel/Passwort **nie** ins Repo.
- nodeId stabil über zwei Läufe; `verify sbkim/spore.json` → ✔ VALID.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1 (Schlüssel, braucht Klaus' Secret) → 3 (Pages, braucht Klaus) parallel → 2 (echter Vektor,
braucht Browser/Sage) → 4 (Sage-Registrierung, braucht 1+3) → 5 (optional).

## Offene Fragen an Klaus
- Stellst du `SBKIM_NODE_KEY` als Umgebungs-Secret bereit, oder soll diese Sitzung einen
  frischen Schlüssel erzeugen und du legst nur den Passwort-Tresor an?
- App-Titel drinnen „Jasons-Bibliothek" lassen oder auf „Jasons-Tresor" vereinheitlichen?
- Soll der Vektor von Sage gerechnet werden, oder fährst du Modul 03 einmal im Browser?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
