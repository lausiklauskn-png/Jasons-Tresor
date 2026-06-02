# BRIEF — Regal-Feinschliff: Bücher-Bereich je Ansicht + perspektivische Neigung

Stand: 2026-06-02 · Von: Bau-Sitzung 10 (Plan-vor-Code, zwei Entscheidungen von Klaus) ·
An: nächste Sitzung

> Diese Sitzung hat den **Bücher-Bereich pro Regal-Ansicht** auf die sichtbaren Bretter
> gesetzt und die **schrägen Ansichten links/rechts perspektivisch geneigt**, damit das
> Raster mit der fliehenden Regalwand kippt. Reine **Schale** — der `JasonLib`-Kern blieb
> unberührt und byte-identisch. Die Optik ist **headless gebaut, im Browser noch ungeprüft**.

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken (Ehrlichkeit, echte Krypto, `npm test` = Beweis,
   kein PII, offline, „Merge entscheidet Klaus", Kopieren-nicht-klonen, Plan-vor-Code).
2. `PULS.md` — oberster Eintrag (2026-06-02) + Nächste Schritte.
3. **Dieser Brief** (neuester) + `docs/sessions/PLAN_tresor-erlebnis.md` (Architektur/Prompts).
4. `status.json` — ehrlicher Real-Anteil.
5. `index.html` (`JasonLib`-Kern zwischen den Markern **unberührt**; Regal-Schale ab ~Z. 1290)
   + `jasons-bibliothek/index.html` (Spiegel; Kern byte-identisch, nur Bildpfad `P` unterscheidet).

## Stand (real)
- **Headless `npm test` 27/27 grün** (Kern, Andock-Krypto). Erlebnis-Schale außerhalb der Marker.
- **Regal-Feinschliff gebaut** (diese Sitzung): `box`-Insets je Ansicht (in %) auf die Bretter:
  - Ebene 1 (warm) `{l:21,r:21,t:16,b:19}` · Ebene 2 (kosmisch) `{l:18,r:18,t:14,b:17}` ·
    Ebene 3 (Kern) `{l:17,r:17,t:15,b:20}` (leuchtendes Podest unten freigehalten).
  - links `{l:37,r:4,t:11,b:13}` · rechts `{l:4,r:37,t:11,b:13}`.
- **Perspektivische Neigung:** neues Feld `tilt` je Ansicht (links `+26`, rechts `−26`,
  frontale `0`). `render()` setzt `#regal-books` ein `transform:perspective(1100px) rotateY(tilt)`
  mit Drehpunkt an der **nahen Kante** (links→`left center`, rechts→`right center`);
  frontale Ansichten setzen `transform` zurück (`''`).
- Kern in Wurzel & Spiegel **byte-identisch (9694 Bytes)**; Regal-Skript **syntaxgeprüft**
  (`node --check`), einziger Unterschied = Bildpfad `P` (`assets/` ↔ `../assets/`).

## Bewusst NICHT gemacht (Klaus' Wunsch → eigene Sitzungen)
- Echtes Verschließen (AES-Passwort + echte Dateien an die Bücher; Demo-Code „1234" bleibt).
- Voller SBKIM-Bezeugungs-Modul-Chain. Szene-2-Inhalt (echte Detail-/Bearbeiten-Ansicht).

## Was als Nächstes gebaut werden soll
1. **Klaus' Browser-Lauf** des Regals (Hard-Reload Ctrl+Shift+R): Sitzen die Bücher je Ansicht
   auf den Brettern? Neigt sich links/rechts korrekt? → `box`/`tilt` live nachjustieren.
   *(Kippt links/rechts falsch herum: die zwei `tilt`-Vorzeichen umdrehen.)*
2. **Sicherheits-Sitzung (#1):** Bücher an den echten AES-Tresor (`JasonLib`/Modul 02) koppeln;
   Demo-Code ersetzen; Panik Stufe 2/3 scharf. Nie zerstörend, alles Zwei-Schritt.
3. **SBKIM-Bezeugung 1:1 (#2)** aus Sage-Protokol/SB-KIMTool-Point holen und einbinden.
4. **Szene-2-Inhalt (#4):** echte Detail-/Bearbeiten-Ansicht im geöffneten Buch.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2; `jason-eintrag`/`jason-bibliothek`; Spore/Andock
  (`docs/ANDOCK.md`, Briefkasten §11.6). Erlebnis ist eine **Schale**, kein Umbau des Kerns.

## Akzeptanzkriterien
- `npm test` grün; `JasonLib`-Kern in Wurzel & Spiegel **byte-identisch**; Inline-Skripte
  syntaxgeprüft; offline · zero-dependency; kein PII/Secret im Repo; nichts wird gelöscht.
- Browser-Optik bleibt **„ungeprüft, wartet auf Klaus' Browser-Lauf"**, bis Klaus sie gesehen hat.

## Offene Fragen an Klaus
- Sitzen die Bücher je Ansicht richtig? Stimmt die Neigungs-Richtung links/rechts?
- Soll als Nächstes die Sicherheits-Sitzung (#1) starten, oder erst der Browser-Feinschliff?

## Abschluss-Befehl (jede Sitzung)
`PULS.md` fortschreiben → neuen Brief `docs/sessions/BRIEF_<thema>.md` (Pflichtlektüre +
diesen Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → Commit/Push auf
`claude/<scope>` → Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
