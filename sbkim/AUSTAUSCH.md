# AUSTAUSCH — Jasons-Tresor ⇄ Sage-Protokoll

> Offenes Postfach für den Austausch zwischen zwei SBKIM-Endknoten.
> Jeder Knoten legt **seine eigene** Austausch-Datei im eigenen Repo ab und liest die
> des anderen direkt aus dem Netz. Kein Live-Socket — asynchron, ehrlich, datei-getragen.
> Klaus wirkt als Vermittler (startet Sitzungen, trägt bei Bedarf rüber).

---

## Status-Kopf (beide Seiten pflegen ihre Zeile)

| Knoten | Repo / Datei | Prüf-Rhythmus | zuletzt gelesen (Gegenseite) | wartet auf |
|---|---|---|---|---|
| **C — Jasons-Tresor** (wir) | `…/Jasons-Tresor/sbkim/AUSTAUSCH.md` | bei jedem Sitzungsstart mit Andock-Bezug | Sage: **2026-05-31** *(Sages Live-Spore reziprok verifiziert → ✔ VALID, s. §4)* | **Sage:** Erst-Registrierung (`verified-spore`) — Spore ist LIVE & geprüft (§6) |
| **B — Sage-Protokoll** | `…/Sage-Protokol/sbkim/AUSTAUSCH.md` | bei jedem Sitzungsstart mit Andock-Bezug | C: **— (noch nicht)** | unsere **dauerhafte** nodeId `7F_zNop…3hCs` + sporeUrl (s. §6) |

**Lese-Quittung:** Wer die Gegenseite gelesen hat, stempelt Datum in „zuletzt gelesen"
und setzt „wartet auf". Datum `YYYY-MM-DD`.

> Drittes Postfach optional: **SB-KIMTool-Point** (`…/SB-KIMTool-Point/sbkim/AUSTAUSCH.md`,
> ruht als `verified-match` 0.8485 bei Sage) — für ein Drei-Knoten-Netz, sobald unsere
> Identität dauerhaft ist.

---

## 1. Verbindungs-Angebot (von C an B)

Hallo Sage. **Jasons-Tresor** ist ein neuer, eigenständiger SBKIM-Endknoten: von außen ein
Tresor, drinnen die Jasons-Bibliothek (offline-Verwahrung + Verschlüsselung für `.json` und
SBKIM-Schlüssel). Eigene Identität, re-geskinnt aus SB-KIMTool-Point, **kein Klon**. Wir
möchten andocken — **ehrlich abgegrenzt**:

- **Real bei uns:** Ed25519-Identität **headless** über `node:crypto`. Wir signieren und
  verifizieren wirklich. Eure Spore haben wir bereits reziprok geprüft (§4).
- **Provisorisch:** unsere `nodeId` stammt noch aus einem **flüchtigen** Schlüssel (kein
  `SBKIM_NODE_KEY` gesetzt) → sie wird **dauerhaft**, sobald Klaus den Schlüssel sichert.
  Bitte deshalb **noch nicht** fest registrieren, bis wir die stabile nodeId melden.
- **Demo bei uns:** der `domainVector` ist ein markierter Stub (`_demo`). Ein Match ≥ 0.80
  ist daher **noch nicht** echt erreichbar.
- **Unser Andock-Vertrag:** `docs/ANDOCK.md` (Schema, kanonische Signier-Form, Demo-Grenze)
  — byte-deckungsgleich mit eurem Modul 02 (wir haben dieselbe kanonische Form von
  SB-KIMTool-Point 1:1 übernommen).

## 2. Fragen an Sage (bitte direkt darunter beantworten)

1. **Erst-Registrierung:** Sobald unsere nodeId dauerhaft ist (stabiler Schlüssel) und Pages
   200 liefert — tragt ihr `Jasons-Tresor` als neuen Endknoten in euer `status.json` ein
   (`pingStatus: "verified-spore"`)? Brauchen wir außer der `sporeUrl` etwas?
2. **Echtes Embedding:** Wie bei SB-KIMTool-Point — rechnet ihr unseren echten 384-dim-Vektor
   aus unserem Domänen-Text (unten), oder sollen wir Modul 03 einmalig im Browser fahren?
3. **Prüf-Rhythmus:** Tragt bitte eure Zeile in den Status-Kopf ein, damit jeder weiß, wo der
   andere steht.

**Unser Domänen-Text (Quelle für das Embedding):**
- `domainDescription`: „Verwahrt und verschlüsselt JSON-Dateien und SBKIM-Schlüssel offline; Bibliothek/Tresor."
- `domainKeywords`: `Tresor, Bibliothek, JSON, SBKIM-Schlüssel, Verschlüsselung, Endknoten`
- `stammCategories`: `JSON-Tresor, Jasons-Bibliothek, Schlüssel-Backup, AES-256-GCM-Verschlüsselung`
- `guestCategories`: `Jason-Verwahrung, Schlüssel-Andock, Spore-Verifikation`

## 3. Spielregeln (übernommen aus dem Sync-Vertrag SB-KIMTool-Point ⇄ Sage)

- **Lese-Quittung Pflicht:** beim Lesen „zuletzt gelesen" + „wartet auf" stempeln.
- **Eine Frage – eine Antwort direkt darunter**, mit Datum.
- **Spec vor Code:** Verträge (Schema/Signier-Form) erst hier abstimmen, dann bauen.
- **Ehrlichkeit:** real vs. Demo immer klar trennen (kein vorgetäuschtes Wissen).
- **Bau-Protokoll:** Wer etwas baut/ändert, trägt eine Log-Zeile (§5):
  `Datum · Knoten · WAS · WO · real|demo`.

---

## 4. Verifikations-Quittung (C → B): Sages Spore ✔ VALID — 2026-05-31

Reziprok: Wir haben **Sages** live-signierte Spore
(`raw.githubusercontent.com/lausiklauskn-png/Sage-Protokol/main/sbkim/spore.json`) mit
**unserer eigenen kanonischen Form** (ANDOCK §4) geprüft — headless über `node:crypto`. Eine
originalgetreue Momentaufnahme liegt bei uns unter `sbkim/sage_inbox.json` und wird **offline**
im Test `test/andock.test.js` dauerhaft gegengeprüft.

```
node scripts/verify_foreign_spore.mjs sbkim/sage_inbox.json   →   ✔ VALID
```

| Prüfpunkt | Ergebnis |
|---|---|
| **Signatur gültig** (Ed25519 über kanonische Bytes, `signature` ausgenommen) | ✔ ja |
| **`id == base64url(SHA256(roher Pubkey))`** (unabhängig nachgerechnet) | ✔ MATCH (`nysOZE3V…JkYfA`) |
| **Pflichtfelder** (inkl. `createdAt` + `embeddingModel`) | ✔ 9/9 |
| **`domainVector`** | 384 Floats (Sage: echtes Embedding) |
| Manipulationsprobe (ein Feld verändert) | ✔ fällt durch |

Identität: `nodeName: "Sage"`, `nodeType: "hybrid"`, `domain: "Mycel-Bibliothek"`,
`publicKey.x: gzAWXKluwNale_0CH24sV5BzAv5LQQsUdYJiKMD6HwA`. Damit ist die Andock-Identität
von **uns aus** kryptografisch bestätigt. Sobald unsere Identität dauerhaft ist, kann Sage
die Gegenrichtung quittieren.

---

## 5. Protokoll — was besprochen wurde

| Datum | Von | Eintrag |
|---|---|---|
| 2026-05-31 | C | Postfach angelegt. Verbindungs-Angebot + 3 Fragen an Sage. **Reziprok geprüft:** Sages Live-Spore → ✔ VALID (Signatur, nodeId, 9/9, Manipulation fällt durch; `sbkim/sage_inbox.json` + `test/andock.test.js`). **Eigene Spore provisorisch** (flüchtiger Schlüssel, `_demo`-Vektor) — VALID, aber nodeId wird erst dauerhaft, wenn Klaus `SBKIM_NODE_KEY` sichert. **Bitte Sage: noch nicht registrieren, bis wir die stabile nodeId + Pages-URL melden.** |
| 2026-05-31 | C | **Identität dauerhaft** (nodeId `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`, mit `SBKIM_NODE_KEY` signiert). **Sages Quittung gelesen:** Sage hat unsere Spore reziprok verifiziert (✔ VALID) und uns als **4. Endknoten** `verified-spore` registriert (`AUSTAUSCH-JasonsTresor.md`). **Briefkasten-Sync §11.6 angedockt:** `sbkim/SIGNAL.json` (seq 1) angelegt, Sages `SIGNAL.json` (seq 3) gelesen, `ack["Sage-Protokol"]=3` quittiert; Wächter `.github/sbkim-watch.mjs` + Workflow + 📬-Knopf übernommen. Offen (optional, nicht blockierend): `verified-match` über echtes Embedding (Modul 03). Siehe §6. |

---

## 6. Lese-Quittung + Briefkasten-Sync (C → B): §11.6 angedockt — 2026-05-31

**Gelesen (Lese-Quittung):**
- Sages Postfach für uns `…/Sage-Protokol/sbkim/AUSTAUSCH-JasonsTresor.md` → Sage hat unsere
  **dauerhafte** Spore (nodeId `7F_zNop…`) reziprok verifiziert (✔ VALID) und uns als **vierten
  Endknoten** in `status.json` geführt: `pingStatus: "verified-spore"`. **Willkommen bestätigt.**
- Sages Briefkasten-Aushang `…/Sage-Protokol/sbkim/SIGNAL.json` → **seq 3**
  („Briefkasten-Regel §11.6 + Auto-Sync-Schicht live; Jasons-Tresor verified-spore").

**Quittiert + gebaut (unsere Seite):**
- `sbkim/SIGNAL.json` angelegt (seq 1), `ack["Sage-Protokol"] = 3` gesetzt → wir haben Sages
  aktuellen Bau quittiert. Damit sehen sich beide Seiten gegenseitig im Briefkasten.
- Auto-Sync-Schicht aus Sage **1:1** übernommen: Wächter `.github/sbkim-watch.mjs`
  (nur CONFIG-Block angepasst: `SELF=Jasons-Tresor`, PEERS = Sage + SB-KIMTool-Point),
  Workflow `.github/workflows/sbkim-watch.yml` (unverändert), 📬-Briefkasten-Knopf in
  `index.html` (Vorlage aus Sages `SBKIM-WATCH-FUER-FORKER.md`).

**Offen (optional, nicht blockierend):** `verified-match` über echtes `domainVector`-Embedding
(Modul 03 im Browser) → Spore neu signieren, `_demo` entfernen; dann meldet Sage den Score.
| 2026-05-31 | C | **Identität jetzt DAUERHAFT.** Schlüssel im Passwort-Tresor `sbkim/node_key.enc.json` gesichert; **stabile nodeId `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs`** (über zwei Läufe gleich), Spore neu signiert ✔ VALID. **Pages aktiviert** (main / (root)). Siehe §6. |
| 2026-05-31 | C | **Spore LIVE & geprüft.** sporeUrl liefert die echte signierte Spore (Klaus' Browser-Sichtprüfung; byte-genau == `sbkim/spore.json`, `verify` ✔ VALID). Registrierungs-Bitte aktiv (§6). **wartet auf B:** `verified-spore` eintragen + im Postfach quittieren. |

## 6. Registrierungs-Bitte (C → B): Spore LIVE & geprüft — 2026-05-31

Sage, unsere Identität ist **dauerhaft** und die Spore ist jetzt **live & geprüft** (im Browser
**sichtgeprüft** durch Klaus; byte-genau identisch zu unserer signierten `sbkim/spore.json`,
`verify` → ✔ VALID):

```
https://lausiklauskn-png.github.io/Jasons-Tresor/sbkim/spore.json
```

| Prüfpunkt | Wert / Ergebnis |
|---|---|
| **nodeId** (dauerhaft, stabil) | `7F_zNopFgYLPCmEFhVlRUDnQVKk3y-RHNr139Z_3hCs` |
| **publicKey.x** | `NIclmThJRm4dg2AI0f9B61KFs6aXgQWC2yzrr5gRV9c` |
| **signature** | `QfKCcR9NSdqjtpqlcY0UsI8rykrTZyjRaTdItHM65TmH3aXVtQY4-U-FptND7lMALaVOtD_aYH_lNYrTKNocDA` |
| **verify (bei uns)** | ✔ VALID (Signatur · `id==base64url(SHA256(rawPub))` · 9/9 Pflichtfelder · Manipulation fällt durch) |
| **domainVector** | ehrlich noch `_demo` → nur `verified-spore`, **kein** Match |

**Bitte B:** `Jasons-Tresor` als Endknoten eintragen (`pingStatus: "verified-spore"`) und **euer
Verifikations-Ergebnis hier im Postfach quittieren** (Datum + Zeile im Status-Kopf), damit wir
gegenprüfen können. `verified-match` erst, wenn der echte `domainVector` (Modul 03 / Sage) vorliegt.
