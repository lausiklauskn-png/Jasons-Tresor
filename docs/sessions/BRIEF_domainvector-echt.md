# BRIEF — Echter domainVector (Browser-Werkzeug vorbereitet) + Mein-Tresor bestätigt

Stand: 2026-06-06 · Von: Sitzung 39 · An: nächste Sitzung / Klaus' Browser-Lauf

> Das Andock-Werkzeug für den **echten** `domainVector` ist eingebaut und auf unsere Identität
> gestellt — **ohne** neue nodeId. Das Neu-Signieren selbst ist **Klaus' Browser-Schritt**
> (braucht Browser + Passwort). AUFGABE 1 (Mein-Tresor) war bereits auf `main` erledigt und
> wurde nur re-verifiziert (✔ VALID). Headless grün (`npm test` 53/53).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Dieser Brief** (neuester).
4. `status.json` — ehrlicher Real-Anteil.
5. `werkzeuge/LIESMICH.md`, `werkzeuge/andock.html`, `docs/ANDOCK.md`, `scripts/verify_foreign_spore.mjs`.

## Stand
- **Identität dauerhaft:** nodeId `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`
  (Schlüssel im Passwort-Tresor `sbkim/node_key.enc.json`), Pages aktiv, Spore live.
- **`domainVector` noch Demo (`_demo`):** echter Vektor fehlt → kein semantischer Match (≥ 0.80).
- **Netz:** Sage + SB-KIMTool-Point + **Mein-Tresor** von unserer Seite als `verified-spore`
  reziprok verifiziert (`sbkim/*_inbox.json`, alle ✔ VALID; SIGNAL seq 3).

## Was diese Sitzung gebaut hat
- `werkzeuge/andock.html` + `web/tools/sbkim-embedding.js` — **1:1 aus Mein-Tresor** kopiert,
  Krypto-Kern unverändert; nur unsere Werte gesetzt: CONFIG (`nodeName "Jasons-Tresor"`,
  `domain "Jasons-Tresor-Bibliothek"`, `endpoint …/Jasons-Tresor/`), Titel, und die erwartete
  nodeId `7F_zNop…` (Hinweis + Match-Prüfung in Teil B ①).
- `werkzeuge/LIESMICH.md` — Klaus-freundliche 3-Klick-Anleitung (nur benannte Knöpfe).
- `PULS.md` / `status.json` fortgeschrieben; AUFGABE 1 re-verifiziert (✔ VALID, kein Leer-Bau).

## Was als Nächstes zu tun ist — **Klaus' Browser-Schritt** (und erst danach grün)
1. `https://lausiklauskn-png.github.io/Jasons-Tresor/werkzeuge/andock.html` öffnen (Pages/https).
2. **Teil B ①** `node_key.enc.json` + Passwort laden → es **muss** „passt zur registrierten nodeId"
   mit `7F_zNop…` erscheinen (sonst abbrechen).
3. **Teil B ②** `domainVector` erzeugen (384 Floats, L2 ≈ 1).
4. **Teil B ③** Spore neu signieren (✔ VALID) → neue `spore.json` herunterladen.
5. Datei an Claude geben **oder** als `sbkim/spore.json` ablegen. **Finalisierung (Claude, headless):**
   `npm test` grün · `node scripts/verify_foreign_spore.mjs sbkim/spore.json` → ✔ VALID ·
   `sbkim/SIGNAL.json` seq +1 (Headline: „echter domainVector live, verified-match möglich").

## Ehrliche Grenze (Leitplanke)
- **Teil A NICHT benutzen** — erzeugt eine **neue** nodeId und zerreißt alle Registrierungen.
- Claude **kann** das Neu-Signieren **nicht** übernehmen: kein Browser, kein Passwort, und es wird
  **nichts gefälscht** (kein erfundener Vektor). Erst Klaus' echter Lauf macht den Vektor real.

## Datenverträge (nicht brechen)
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`); die von
  `andock.html` gebaute Spore trägt exakt diese Felder (+ `domainVector`, **kein** `_demo`).
- Tresor-Umschlag `node_key.enc.json` (AES-256-GCM/PBKDF2-SHA256 600k) — Passwort/Schlüssel nie ins Repo.
- Briefkasten `sbkim/SIGNAL.json`: `seq` +1 pro Bau; `ack[Nachbar]` nur ehrlich Gelesenes.

## Akzeptanzkriterien
- `npm test` grün (aktuell 53/53); echte Krypto; kein PII/Secret im Repo.
- Nach Klaus' Lauf: `sbkim/spore.json` ohne `_demo`, mit echtem 384-Vektor (L2 ≈ 1),
  `verify_foreign_spore.mjs` → ✔ VALID, **nodeId unverändert** `7F_zNop…`.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
Klaus' Browser-Lauf (①②③) → Finalisierung durch Claude (Test/verify/SIGNAL) →
reziproke Quittungen der Nachbarn einholen (verified-match, sobald auch Gegenseite echten Vektor hat).

## Offene Fragen an Klaus
- Gibst du mir nach dem Lauf die neue `spore.json` (dann finalisiere ich), oder legst du sie selbst ab?
- Soll ich nach dem echten Vektor die Nachbarn aktiv im Postfach um `verified-match` bitten?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
