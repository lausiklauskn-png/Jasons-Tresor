# BRIEF — Semantik-Textfeld im Andock + Mycel-Erklärseite

Stand: 2026-06-07 · Von: Sitzung 57 · An: nächste Sitzung

> Zwei kleine Schwester-Ergänzungen aus dem Sage-Bau sind in Jasons-Tresor nachgezogen
> (wie bei Mein-Tresor). Siegel-Design unverändert, keine neue Krypto. Headless 59/59 grün.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Dieser Brief** (neuester) `docs/sessions/BRIEF_textfeld-mycel-erklaerung.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. Doku + Code der zugewiesenen Scheibe: `werkzeuge/andock.html`, `web/tools/sbkim-embedding.js`,
   `sicherheit.html`, der Siegel-Dialog `#andock` in `index.html`, `docs/ANDOCK.md`.

## Schritt 0 — Branch zuerst (der wiederkehrende Stolperstein!)
Diese Sitzung saß anfangs auf `claude/jasons-tresor-textfeld-mycel-WYeRx`, **177 Commits hinter
`main`** (0 eigene) → die echten Dateien schienen zu „fehlen". Erst nach `git fetch origin main`
+ Reset auf `origin/main` waren `werkzeuge/andock.html` + `web/tools/sbkim-embedding.js` da.
**Lehre:** vor jeder Arbeit `git rev-list --left-right --count origin/main...HEAD` prüfen.

## Stand
- **Real (headless bewiesen, 59/59):** Tresor/Bibliothek-App, Ed25519-Identität (stabile nodeId
  `E13GDzI…`), echter domainVector, Verbund 3/3 (Sage, Mein-Tresor, SB-KIMTool-Point), Rezeptbuch
  beidseitig verified-match.
- **Neu in dieser Sitzung:**
  - `werkzeuge/andock.html`: Semantik-Textfeld (`#domain-desc`, auto-wachsend) zwischen ① und ②,
    vorbefüllt mit dem reichen `CONFIG.domainDescription` (tresor-spezifisch → kein cos 1.0000 mehr
    mit Mein-Tresor, sobald neu signiert). `#btn-vec` bettet den Textfeld-Inhalt ein, `buildSpore`
    schreibt ihn als `domainDescription`. Leeres Feld → Fallback auf CONFIG/`DOMAIN_TEXT`.
  - `sicherheit.html`: Mycel-/Sicherheits-Erklärung (Text wortgleich aus Sage), als In-Page-Overlay
    (`#mycel-info` iframe) aus dem Siegel-Dialog erreichbar; „zurück"-Link versteckt sich im iframe.
- **Provisorisch/ehrlich:** `sbkim/spore.json` trägt **noch die alte** kurze Beschreibung — die
  reiche Beschreibung wird erst Live, wenn **Klaus** sie in Teil B mit seinem Schlüssel neu signiert.
- **Browser-Optik ungeprüft** — wartet auf Klaus' Browser-Lauf (Galaxy Tab S6).

## Was geplant ist (nächste Sitzung / wartet auf Klaus)
- **Reiche Beschreibung Live machen:** Klaus öffnet `werkzeuge/andock.html`, lädt seine Identität
  (Teil B ①), prüft/ändert die Beschreibung im Textfeld, erzeugt domainVector (②), signiert neu (③),
  lädt `spore.json` herunter und schickt sie → ablegen + Match neu rechnen (Sage cos sollte sich
  von Mein-Tresor lösen). **Keine neue Krypto, gleiche nodeId.**

## Was gebaut / gepflegt / getestet werden soll (Erfolgsmerkmal)
1. **Klaus' Browser-Sichttest:** Siegel öffnen → Mycel-Link → Overlay öffnet, ✕/Esc schließt;
   Andock-Werkzeug → Textfeld wächst beim Tippen. Erfolgsmerkmal: Klaus bestätigt die Optik.
2. **Re-Sign mit reicher Beschreibung** (oben) → neue `spore.json` ✔ VALID, nodeId unverändert.
3. **`npm test` bleibt grün** bei jeder weiteren Änderung; getesteter Kern byte-identisch.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün (59/59); echte Krypto; kein PII/Secret im Repo; privater Schlüssel bleibt im
  Browser/in der Datei.
- Siegel-Dialog-Design/-Prosa unverändert (außer dem einen Erklär-Link).
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1 (Klaus' Sichttest, braucht Klaus) → 2 (Re-Sign, braucht Klaus' Schlüssel) → 3 (laufend grün).

## Offene Fragen an Klaus
- Passt die reiche Default-Beschreibung so, oder möchtest du sie im Textfeld noch anders
  formulieren, bevor du neu signierst?
- Soll der Mycel-Link auch im Footer der App auftauchen, oder reicht der Platz im Siegel-Dialog?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
