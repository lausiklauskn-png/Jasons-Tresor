# BRIEF — Honigtopf / Köder (optionales Profi-Werkzeug, Stufe-2-Alternative)

> Folgebrief nach Sitzung 19 (2026-06-04). **Shamir 3-von-5 ist gebaut**: echter Kern
> (`JasonLib.splitSecret` / `combineShares`, GF(256), K=3/N=5), 11 headless-Tests (39/39),
> UI im Buch (Aufteilen · Wiederherstellen · Selbsttest · Probelauf im Test-Buch). **Dieser
> Brief = das zweite optionale Profi-Werkzeug aus `PLAN_tresor-erlebnis.md` §2: der Honigtopf/
> Köder.** Nur auf Klaus' Freigabe; der **neueste** Brief gilt, alte bleiben Historie.

Stand: 2026-06-04 · Status: VORGEMERKT — **Plan-vor-Code, kein Freibrief** (berührt Daten/Anzeige).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — oberster Eintrag (Sitzung 19: Shamir scharf).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser) + `docs/sessions/PLAN_tresor-erlebnis.md` §2.
4. `status.json` — ehrlicher Real-Anteil.
5. App-Schale in `index.html` (+ Spiegel `jasons-bibliothek/index.html`): Buch-Tresor-Skript
   (`#bookdemo`, ab „Buch-Tresore (lokal)"), der **Shamir**-Block (`bd-split-panel`/`bd-recover-panel`)
   und der **Notfall (Panik)**-Block am Dateiende.

## Stand (was real / Demo / provisorisch)
- **REAL & headless-bewiesen (39/39):** Buch-Tresor (jedes Buch eigenes AES-Passwort über den Kern),
  Fehlversuch-Sperre 2× → 1 Min; **Shamir 3-von-5** (echte GF(256)-Mathematik, Prüfziffer +
  Fingerabdruck + Split-ID, alle 10 Kombinationen geprüft, GF-Feld selbst bewiesen).
- **REAL aber browser-ungeprüft:** Not-Aus (Panik Stufe 1/2/3, „↻ Rettung einlesen") **und** die
  **Shamir-UI** (Aufteilen/Wiederherstellen/Selbsttest/Probelauf) — **warten auf Klaus' Browser-Lauf**.
- **Offen / Demo:** **Honigtopf/Köder** noch NICHT gebaut. Siegel-16-Chain + `domainVector` (Modul 03)
  weiter offen.

## Was geplant ist (nur auf Klaus' Freigabe)
Den **Köder/Honigtopf ehrlich** bauen — als **optionale** Stufe-2-Alternative je Buch:
- Falsches Passwort → statt Fehler eine **glaubhafte Schein-Bibliothek** („ein Gesicht wählen").
- **Ehrliche Grenze, klar im UI:** stark gegen Gelegenheits-Gucker, **schwach gegen Kenner** — die
  echten verschlüsselten Daten daneben (`jt-vaults`) bleiben nachweisbar vorhanden. Kein Köder
  täuscht einen Fachmann; das wird offen benannt.

## Was gebaut / gepflegt / getestet werden soll
- **Köder-Zustand je Buch** (optional, opt-in): ein zweites, harmloses „Passwort" öffnet eine
  vorab gewählte **Schein-Sammlung**; das echte Passwort öffnet weiter den echten Inhalt.
  **Beide Wege echt AES** (kein Schein-Klartext im Repo); Datenvertrag `jason-tresor` v2 unberührt.
- **UI:** Köder-Schalter im Buch, Schein-Inhalt einrichten — über benannte Knöpfe (kein Terminal).
- **Erfolgsmerkmal je Schritt:** `npm test` grün; echte Krypto nur über den Kern; nichts zerstörend;
  Kern byte-identisch (Wurzel & Spiegel); offline; ehrliche Grenze sichtbar.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`) — **einzige Krypto-Quelle ist der Kern**.
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Buch-Ablage `jt-vaults`; Rettungs-Bündel `jason-tresor-rettung` v1.
- Shamir-Teil-Format `JT3v5-<i>-<base64url>` (CRC32 + SHA-256-Fingerabdruck + Split-ID) — nicht brechen.
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto; **kein PII/Secret** im Repo/Commit/Chat.
- Kern byte-identisch (Wurzel & Spiegel); Skripte `node --check` ok; offline.
- Köder ist **opt-in** und **ehrlich etikettiert**; nichts wird ohne ausdrückliche Aktion zerstört.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. Plan-vor-Code: Pflichtlektüre + Plan an Klaus (v. a. **wie der Köder technisch ehrlich bleibt**:
   zwei Passwörter / zwei Umschläge, und **wie die Grenze sichtbar** gemacht wird) → **Klaus' OK**.
2. Köder-Kern/Datenmodell + Test. 3. Köder-UI. Je „braucht Klaus' Browser-Lauf".

## Offene Fragen an Klaus
- **Honigtopf-Inhalt:** welche harmlose Schein-Bibliothek soll der Köder zeigen (Beispiel-Thema)?
- **Reichweite:** Köder nur für einzelne Bücher (opt-in), oder ein globaler Schalter?
- **Erst Klaus' Browser-Lauf von Shamir** abwarten (Sicht-Freigabe), bevor der Köder startet?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
