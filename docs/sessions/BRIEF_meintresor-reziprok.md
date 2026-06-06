# BRIEF — Schwester Mein-Tresor reziprok eingetragen + nächste Andock-Schritte

Stand: 2026-06-06 · Von: Sitzung 2 · An: nächste Sitzung

> Die Schwester **Mein-Tresor** ist von uns aus kryptografisch bestätigt: Spore reziprok
> geprüft → ✔ VALID, als **verified-spore** eingetragen (Inbox + Offline-Test + Postfach +
> SIGNAL). **Ehrlich:** ihre Live-Spore trägt noch keinen `domainVector` → verified-match
> kommt später. Headless alles grün (`npm test` 53/53 nach Merge mit `main`).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test`, kein PII,
   offline, „Merge entscheidet Klaus", Plan-vor-Code, Brief-Kette).
2. `PULS.md` — aktueller Stand (getan / offen / nächste Schritte).
3. **Dieser Brief** (neuester) + zur Andock-Herkunft `docs/sessions/BRIEF_identitaet-dauerhaft-und-andock.md`.
4. `status.json` — ehrlicher Real-Anteil.
5. `docs/ANDOCK.md`, `sbkim/AUSTAUSCH-MeinTresor.md`, `sbkim/AUSTAUSCH.md`, `scripts/verify_foreign_spore.mjs`.

## Stand
- **Real (headless bewiesen, 53/53):** Tresor/Bibliothek-App + Ed25519-Andock-Identität.
  Reziproke Verifikation jetzt für **zwei** Schwestern: Sage (`sbkim/sage_inbox.json`) und
  **Mein-Tresor** (`sbkim/meintresor_inbox.json`) — beide ✔ VALID, beide offline gegengeprüft.
- **Verified-spore Mein-Tresor:** nodeId `wRsGQouOYPVBOLzAB3nBteRvyvJ-AGv461WTJMKtkS0`
  (== base64url(SHA256(roher Pubkey))), 9/9 Pflichtfelder, Signatur gültig, Manipulation fällt durch.
- **Ehrlich — kein verified-match:** Mein-Tresors Live-Spore hat **keinen** `domainVector`
  (deckt sich mit ihrer eigenen `SIGNAL.json`: „domainVector folgt"). Kein semantischer Match.
- **Unsere Identität ist dauerhaft:** stabile nodeId `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`
  (Schlüssel im Passwort-Tresor `sbkim/node_key.enc.json`), Pages aktiv. Mein-Tresor kann uns
  also reziprok gegen-registrieren (im Postfach erbeten).

## Was gebaut wurde (diese Sitzung)
- `sbkim/meintresor_inbox.json` — byte-treue, ✔-VALID-Momentaufnahme der Live-Spore.
- `test/andock.test.js` — +2 Fälle (Mein-Tresor ✔ VALID inkl. erwarteter nodeId; ehrlich: kein domainVector).
- `sbkim/AUSTAUSCH-MeinTresor.md` — Postfach (Quittung §3, Fragen §2, Status-Kopf).
- `sbkim/SIGNAL.json` — fortgeschrieben: `mailboxes["Mein-Tresor"]` + `ack["Mein-Tresor"]: 4`
  ergänzt (neben Sage=8 / SB-KIMTool-Point=2), **seq 2 → 3**.
- **Merge-Integration:** Branch fußte auf altem Gründungsstand; `origin/main` eingezogen,
  Konflikte aufgelöst (dauerhafte nodeId `7F_zNop…3hCs`, 3-Knoten-Netz, Pages — von `main` behalten).

## Was als Nächstes geplant ist
1. **verified-match Mein-Tresor:** sobald Mein-Tresor ihre Spore mit echtem 384-dim-`domainVector`
   re-signiert, ihn nachrechnen (Cosine ≥ 0.80?) und in `meintresor_inbox.json` + Postfach quittieren.
2. **Reziproke Quittung einholen:** Mein-Tresor (und Sage/SB-KIMTool-Point im Briefkasten) bitten,
   uns mit der dauerhaften nodeId `7F_zNop…3hCs` als `verified-spore` einzutragen/zu quittieren.
3. **Sage-/Point-`ack` ehrlich pflegen:** erst deren echte `SIGNAL.json` lesen, dann `ack` anheben.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`).
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Spore/Andock: kanonische Signier-Form + 9 REQUIRED_SPORE_FIELDS (`docs/ANDOCK.md`).
- Briefkasten-Aushang `sbkim/SIGNAL.json`: `seq` steigt +1 pro Bau; `ack[Nachbar]` = die seq,
  die WIR vom Nachbarn zuletzt gelesen haben (nur ehrlich Gelesenes quittieren).

## Akzeptanzkriterien
- `npm test` grün (nach Merge 53/53); echte Krypto; kein PII/Secret im Repo.
- `node scripts/verify_foreign_spore.mjs sbkim/meintresor_inbox.json` → ✔ VALID.
- Real vs. Demo/provisorisch immer klar getrennt (verified-spore ≠ verified-match).
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
2 (reziproke Quittung der Nachbarn, läuft über die Postfächer) parallel zu
1 (verified-match, braucht Mein-Tresors echten Vektor) → 3 (ack ehrlich pflegen).

## Offene Fragen an Klaus
- Sollen wir Mein-Tresor aktiv anstoßen, ihren echten `domainVector` zu liefern (dann verified-match)?
- Soll die Sage-/Point-Zeile im Briefkasten (`sbkim/SIGNAL.json` / `ack`) erst angehoben werden,
  wenn wir deren `SIGNAL.json` wirklich neu gelesen haben (aktuell ehrlich: Stand Sage=8, Point=2)?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
