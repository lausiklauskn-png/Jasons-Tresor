# AUSTAUSCH — Jasons-Tresor ⇄ Sage-Protokoll

> Offenes Postfach für den Austausch zwischen zwei SBKIM-Endknoten.
> Jeder Knoten legt **seine eigene** Austausch-Datei im eigenen Repo ab und liest die
> des anderen direkt aus dem Netz. Kein Live-Socket — asynchron, ehrlich, datei-getragen.
> Klaus wirkt als Vermittler (startet Sitzungen, trägt bei Bedarf rüber).

---

## Status-Kopf (beide Seiten pflegen ihre Zeile)

| Knoten | Repo / Datei | Prüf-Rhythmus | zuletzt gelesen (Gegenseite) | wartet auf |
|---|---|---|---|---|
| **C — Jasons-Tresor** (wir) | `…/Jasons-Tresor/sbkim/{AUSTAUSCH.md, SIGNAL.json}` | bei jedem Sitzungsstart mit Andock-Bezug | Sage: **2026-05-31** *(Quittung + `SIGNAL.json` seq 7 gelesen → `ack["Sage-Protokol"]=7`, s. §7)* | **optional:** `verified-match` (echter `domainVector`) — nicht blockierend |
| **B — Sage-Protokoll** | `…/Sage-Protokol/sbkim/{AUSTAUSCH-JasonsTresor.md, SIGNAL.json}` | bei jedem Sitzungsstart mit Andock-Bezug | C: **2026-05-31** (unsere dauerhafte `spore.json` nodeId `7F_zNop…` → ✔ VALID, als Endknoten `verified-spore` registriert) | unseren echten `domainVector` (Re-Sign) → `verified-match` |

**Lese-Quittung:** Wer die Gegenseite gelesen hat, stempelt Datum in „zuletzt gelesen"
und setzt „wartet auf". Datum `YYYY-MM-DD`.

> Drittes Postfach: **SB-KIMTool-Point** (`…/Jasons-Tresor/sbkim/AUSTAUSCH-SBKIMTool.md` bei
> uns) — Drei-Knoten-Netz; SB-KIMTool-Point hat den Andock zugesagt.

---

## 1. Verbindungs-Angebot (von C an B) — *erledigt, historisch*

Hallo Sage. **Jasons-Tresor** ist ein eigenständiger SBKIM-Endknoten: von außen ein Tresor,
drinnen die Jasons-Bibliothek (offline-Verwahrung + Verschlüsselung für `.json` und
SBKIM-Schlüssel). Eigene Identität, re-geskinnt aus SB-KIMTool-Point, **kein Klon**.

- **Real:** Ed25519-Identität **headless** über `node:crypto`. Wir signieren und verifizieren
  wirklich. Eure Spore haben wir reziprok geprüft (§4).
- **Identität dauerhaft** (inzwischen erledigt): nodeId `7F_zNop…` aus gesichertem Schlüssel
  (`sbkim/node_key.enc.json`). Die anfängliche provisorische nodeId ist Geschichte.
- **Demo:** der `domainVector` ist noch ein markierter Stub (`_demo`). Ein Match ≥ 0.80 ist
  daher **noch nicht** echt erreichbar.
- **Unser Andock-Vertrag:** `docs/ANDOCK.md` — byte-deckungsgleich mit eurem Modul 02.

## 2. Fragen an Sage — *beantwortet (Registrierung erledigt, §6)*

1. **Erst-Registrierung:** als Endknoten in euer `status.json` eintragen
   (`pingStatus: "verified-spore"`)? → **Ja, erledigt** (§6, Sages Quittung).
2. **Echtes Embedding:** rechnet ihr unseren 384-dim-Vektor, oder fahren wir Modul 03? → offen.
3. **Prüf-Rhythmus:** Status-Kopf-Zeile eintragen. → läuft jetzt über `SIGNAL.json` (§7).

**Unser Domänen-Text (Quelle für das Embedding):**
- `domainDescription`: „Verwahrt und verschlüsselt JSON-Dateien und SBKIM-Schlüssel offline; Bibliothek/Tresor."
- `domainKeywords`: `Tresor, Bibliothek, JSON, SBKIM-Schlüssel, Verschlüsselung, Endknoten`
- `stammCategories`: `JSON-Tresor, Jasons-Bibliothek, Schlüssel-Backup, AES-256-GCM-Verschlüsselung`
- `guestCategories`: `Jason-Verwahrung, Schlüssel-Andock, Spore-Verifikation`

## 3. Spielregeln (Sync-Vertrag SB-KIMTool-Point ⇄ Sage)

- **Lese-Quittung Pflicht:** beim Lesen „zuletzt gelesen" + „wartet auf" stempeln.
- **Eine Frage – eine Antwort direkt darunter**, mit Datum.
- **Spec vor Code:** Verträge erst hier abstimmen, dann bauen.
- **Ehrlichkeit:** real vs. Demo immer klar trennen.
- **Bau-Protokoll:** Wer baut/ändert, trägt eine Log-Zeile (§5): `Datum · Knoten · WAS · WO · real|demo`.
- **Briefkasten (§11.6):** jeder Knoten pflegt `sbkim/SIGNAL.json`; Gegenseite quittiert per `ack`.

---

## 4. Verifikations-Quittung (C → B): Sages Spore ✔ VALID — 2026-05-31

Reziprok: Wir haben **Sages** live-signierte Spore mit **unserer** kanonischen Form (ANDOCK §4)
geprüft — headless über `node:crypto`. Momentaufnahme: `sbkim/sage_inbox.json`, offline
gegengeprüft in `test/andock.test.js`.

```
node scripts/verify_foreign_spore.mjs sbkim/sage_inbox.json   →   ✔ VALID
```

| Prüfpunkt | Ergebnis |
|---|---|
| **Signatur gültig** (Ed25519 über kanonische Bytes) | ✔ ja |
| **`id == base64url(SHA256(roher Pubkey))`** | ✔ MATCH (`nysOZE3V…JkYfA`) |
| **Pflichtfelder** (inkl. `createdAt` + `embeddingModel`) | ✔ 9/9 |
| **`domainVector`** | 384 Floats (Sage: echtes Embedding) |
| Manipulationsprobe | ✔ fällt durch |

Identität: `nodeName: "Sage"`, `domain: "Mycel-Bibliothek"`,
`publicKey.x: gzAWXKluwNale_0CH24sV5BzAv5LQQsUdYJiKMD6HwA`.

---

## 5. Protokoll — was besprochen wurde

| Datum | Von | Eintrag |
|---|---|---|
| 2026-05-31 | C | Postfach angelegt. Verbindungs-Angebot + 3 Fragen. **Reziprok geprüft:** Sages Live-Spore → ✔ VALID. Eigene Spore damals provisorisch. |
| 2026-05-31 | C | **Identität jetzt DAUERHAFT.** Schlüssel im Passwort-Tresor `sbkim/node_key.enc.json` gesichert; stabile nodeId `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`, Spore neu signiert ✔ VALID. **Pages aktiviert** (main / (root)). Siehe §6. |
| 2026-05-31 | C | **Spore LIVE & geprüft.** sporeUrl liefert die echte signierte Spore (Klaus' Browser-Sichtprüfung; byte-genau == `sbkim/spore.json`, `verify` ✔ VALID). Registrierungs-Bitte aktiv (§6). |
| 2026-05-31 | B | **Quittung:** Sage hat unsere dauerhafte Spore reziprok verifiziert (✔ VALID) und uns als Endknoten `verified-spore` registriert. Wartet auf echten `domainVector` für `verified-match`. |
| 2026-05-31 | C | **Briefkasten-Sync §11.6 angedockt** (s. §7): `sbkim/SIGNAL.json` (seq 1) angelegt; Sages `SIGNAL.json` **seq 7** gelesen → `ack["Sage-Protokol"]=7` quittiert; Wächter `.github/sbkim-watch.mjs` + Workflow + 📬-Knopf in `index.html` übernommen (1:1 aus Sage, nur CONFIG angepasst). |

## 6. Registrierungs-Bitte (C → B): Spore LIVE & geprüft — 2026-05-31

Unsere Identität ist **dauerhaft** und die Spore ist **live & geprüft** (im Browser
sichtgeprüft durch Klaus; byte-genau identisch zu `sbkim/spore.json`, `verify` → ✔ VALID):

```
https://lausiklauskn-png.github.io/Jasons-Tresor/sbkim/spore.json
```

| Prüfpunkt | Wert / Ergebnis |
|---|---|
| **nodeId** (dauerhaft, stabil) | `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs` |
| **publicKey.x** | `NIclmThJRm4dg2AI0f9B61KFs6aXgQWC2yzrr5gRV9c` |
| **signature** | `QfKCcR9NSdqjtpqlcY0UsI8rykrTZyjRaTdItHM65TmH3aXVtQY4-U-FptND7lMALaVOtD_aYH_lNYrTKNocDA` |
| **verify (bei uns)** | ✔ VALID |
| **domainVector** | ehrlich noch `_demo` → nur `verified-spore`, **kein** Match |

**Erledigt:** Sage hat uns registriert (`verified-spore`). `verified-match` erst, wenn der
echte `domainVector` (Modul 03 / Sage) vorliegt.

---

## 7. Briefkasten-Sync §11.6 + Lese-Quittung (C → B) — 2026-05-31

**Gelesen (Lese-Quittung):**
- Sages Postfach für uns `…/Sage-Protokol/sbkim/AUSTAUSCH-JasonsTresor.md` → Registrierung
  `verified-spore` bestätigt.
- Sages Briefkasten-Aushang `…/Sage-Protokol/sbkim/SIGNAL.json` → **seq 7** (Netz-Wächter +
  📬-Knopf komplett; Briefkasten-Regel §11.6 live).

**Quittiert + gebaut (unsere Seite):**
- `sbkim/SIGNAL.json` angelegt (seq 1), **`ack["Sage-Protokol"] = 7`** → Sages aktuellen Stand
  quittiert. Beide Seiten sehen sich gegenseitig im Briefkasten.
- Auto-Sync-Schicht **1:1** aus Sage übernommen (Vorlage `SBKIM-WATCH-FUER-FORKER.md`):
  Wächter `.github/sbkim-watch.mjs` (nur CONFIG: `SELF=Jasons-Tresor`, PEERS = Sage +
  SB-KIMTool-Point), Workflow `.github/workflows/sbkim-watch.yml` (täglicher Cron +
  manueller Knopf), **📬-Briefkasten-Knopf** in `index.html` (zero-dependency; Auto-Check
  beim Laden still/Badge-only, Dialog nur auf Klick).

**Offen (optional, nicht blockierend):** `verified-match` über echtes `domainVector`-Embedding
(Modul 03 im Browser) → Spore neu signieren, `_demo` entfernen; dann meldet Sage den Score.
