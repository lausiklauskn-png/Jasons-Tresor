# CLAUDE.md — Verfassung dieses Repos

Leitfaden für jede Sitzung an **Jasons-Tresor**.

> Re-Skin von `SB-KIMTool-Point/CLAUDE.md` (1:1-Leitplanken übernommen, Repo-Spezifika
> angepasst). Die Leitplanken sind **unverändert**: Ehrlichkeit, echte Krypto,
> `npm test` = Beweis, kein PII, offline, Selbst-Merge nach Freibrief (Klaus
> 2026-06-28, netzweit), Plan-vor-Code, Brief-Kette.

## Was dieses Repo ist

Jasons-Tresor ist **zweierlei in einem**:

1. **Der Tresor / die Bibliothek** — eine offline-taugliche Einzeldatei-App
   (`index.html` in der Wurzel, gespiegelt unter `jasons-bibliothek/index.html`): beliebige
   `.json` + SBKIM-Schlüssel laden, benennen, ordnen, suchen, exportieren, einlesen — mit
   **Passwort-Verschlüsselung** (AES-256-GCM / PBKDF2-SHA256 600k, WebCrypto). Von außen ein
   Tresor, drinnen eine Bibliothek.
2. **Ein echter SBKIM-Endknoten** — eigene Ed25519-Identität (`sbkim/spore.json`), die wie
   SB-KIMTool-Point an Sage andockt. So kann Klaus **1:1 mit dem Tresor kommunizieren**
   (gemeinsames Format + Andock-Postfach `sbkim/AUSTAUSCH.md`).

## Sprache & Begriffe

- Doku auf **Deutsch**, Code-Bezeichner auf **Englisch**. Datum `YYYY-MM-DD`.
- „Jason" = Klaus' Name für eine `.json`-Datei.

## Disziplin (Leitplanken — unverändert)

- **Kopieren, nicht klonen.** Jasons-Tresor baut sich aus den **getesteten Originalen** von
  SB-KIMTool-Point (öffentlich über `raw.githubusercontent.com/lausiklauskn-png/SB-KIMTool-Point/main/<pfad>`).
  **1:1 kopieren, nicht abwandeln.** SB-KIMTool-Point kann dieses Repo **nicht** fernsteuern.
- **Echte Krypto.** Ed25519/SHA-256 über `node:crypto`; AES-256-GCM/PBKDF2-SHA256 über
  WebCrypto. Das semantische Embedding (`domainVector`) ist bis zu Klaus' Browser-Lauf
  ein klar markierter **Demo-Stub** (`_demo`).
- **Ehrlichkeit zuerst.** `status.json` zeigt den Real-Anteil. Browser-Pfade bleiben
  **„ungeprüft, wartet auf Klaus' Browser-Lauf"**, bis Klaus sie wirklich gesehen hat.
  Der Beweis ist **`npm test`**.
- **Kein PII / kein Secret im Code.** Privater Schlüssel und Passwort kommen **nie** ins
  Repo, nie in Commits, nie in gepushte Chat-Artefakte (siehe `docs/SCHLUESSEL.md`).
- **Offline.** Die App hat **keine externen Abhängigkeiten** (eine `index.html`).
- **Nichts vortäuschen, nichts im Hintergrund vorbauen.**

## Befehle

```bash
npm test    # headless Smoke-Test (Beweis): Tresor-Logik + Andock-Krypto
npm run demo    # Spore neu erzeugen (braucht SBKIM_NODE_KEY für stabile nodeId)
npm run verify  # eigene Spore reziprok verifizieren (✔ VALID)
```

## Branch & PR-Workflow (verbindlich)

- Entwicklung auf `claude/<scope>`. Ein Commit pro abgegrenzter Aufgabe, semantische Nachricht.
- **Selbst-Merge-Freibrief (Klaus 2026-06-28, netzweit für ALLE Repos — Mixarium und
  andere eingeschlossen):** Die Sitzung merget ihre **eigenen** PRs **selbstständig**
  in `main`, sobald sie getestet (`npm test`/Headless grün; bei reinen Doku-/byte-Kopie-
  Änderungen Drift-Guard grün), abgegrenzt und nicht architektonisch zweifelhaft sind —
  **ohne auf „X mergen" zu warten** (Draft-PR → ready → squash-merge). **NICHT** automatisch
  mergen bei echtem Zweifel (Richtungsentscheid, schwer umkehrbar, mehrere gleich gute Wege)
  ODER wenn Klaus ausdrücklich vorher draufschauen will. Klaus' Browser-Sichttest bleibt davon
  unberührt (headless ersetzt ihn nicht); die Leitplanken (Ehrlichkeit, echte Krypto,
  `npm test`/Beweis, kein PII, offline, Plan-vor-Code, Brief-Kette) bleiben **immer** unberührt
  — der Freibrief betrifft nur den Merge-Schritt. Niemals auf einen anderen als den vorgegebenen
  Branch pushen ohne ausdrückliche Erlaubnis.

## Evolutions-Klausel

Diese Regeln binden, **bis neue Evidenz** sie widerlegt. Eine Änderung erfordert
**ausdrückliche Nennung an Klaus** (welche Regel, welche Entdeckung, welcher Vorschlag)
— **niemals stille Workarounds**.

## Test & Ehrlichkeit über den Zustand

- **Headless Smoke-Test** (`npm test`) bestätigt Tresor-Logik + Andock-Krypto — unser Beweis.
- Die **App** ist erst „grün", wenn **Klaus sie im Browser angesehen** hat. Solange das
  aussteht: ehrlich **„ungeprüft, wartet auf Klaus' Browser-Lauf"**.
- **Hard-Reload (Ctrl+Shift+R)** nach jedem Pull, sobald Pages/Service-Worker im Spiel sind.

## Daten & Spec

- **Keine personenbezogenen Daten** in Code, Specs, Tests oder `PULS.md`.
- **Spec/Vertrag vor Code**: bei Verträgen erst Doku/Schema (`docs/ANDOCK.md`,
  `docs/JASONS-BIBLIOTHEK.md`), dann Code — nie umgekehrt.
- **Datenverträge nicht brechen:** Tresor-Umschlag (`jason-tresor` v2),
  `jason-eintrag`/`jason-bibliothek`, Spore/Andock.

## Übergabe (PULS) am Sitzungsende — Pflicht

1. `PULS.md` aktualisieren: Datum, was getan, was bleibt, nächste Schritte.
2. **Manual-Check** vermerken: läuft die App im Browser (oder „ungeprüft, weil …").
3. Commit + Push, ein Commit pro Aufgabe.
4. **„Nächste Schritte"-Block direkt in der Chat-Antwort** (2–4 priorisierte Punkte, je mit
   Ein-Satz-Begründung). Klaus liest zuerst den Chat.
5. Folge-Brief **vollständig als Codeblock im Chat** ausgeben.

## Dokumentations- & Lesepflicht (Brief-Kette) — verbindlich

### Pflichtlektüre **vor** jeder Arbeit (in dieser Reihenfolge)

1. `CLAUDE.md` — diese Verfassung.
2. `PULS.md` — aktueller Stand: was getan, was offen, nächste Schritte.
3. **Neuester Brief** in `docs/sessions/BRIEF_*.md` — geplante Aufgabe + Datenverträge.
4. `status.json` — ehrlicher Real-Anteil.
5. Die **Doku + den Code der zugewiesenen Scheibe** (`docs/*.md`, `scripts/…`, App).

### Erst Überblick, dann bauen (Plan-vor-Code)

- **Nicht sofort bauen.** Zuerst Pflichtlektüre + relevanten Code lesen + **Plan** formulieren.
- Den Plan **kurz an Klaus** zeigen und Rückmeldung abwarten, bevor größere Bauten starten.
- **Freibrief-Klausel:** Gibt Klaus ausdrücklich einen Freibrief für eine Aufgabe, entfällt
  die Plan-an-Klaus-Pflicht **im freigegebenen Umfang** — dann ohne Rückfrage umsetzen. Ein
  Freibrief gilt **nur** für die benannte Sitzung. Die Leitplanken bleiben **immer** unberührt.

### Dokumentationspflicht **am** Abschluss — neuen Brief schreiben

1. `PULS.md` fortschreiben (getan / offen / nächste Schritte).
2. **Neuen Brief** `docs/sessions/BRIEF_<thema>.md` nach `docs/sessions/VORLAGE_BRIEF.md`.
3. Im Brief **Pflichtlektüre + Abschluss-Befehl wiederholen** (die Kette reißt nie ab).
4. Den vollständigen Brief **als Codeblock im Chat** ausgeben.

## Kommunikations-Disziplin

- **Klaus ist kein Programmierer** (lernt gern): ruhiger, präziser Ton, Antworten auf Deutsch.
  Bevorzugt einfache Seiten. **Keine Terminal-Kommandos für Klaus** — Bedien-Flüsse laufen
  über benannte Knöpfe in der Seite.
