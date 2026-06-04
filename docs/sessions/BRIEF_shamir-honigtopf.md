# BRIEF — Shamir 3-von-5 + Honigtopf/Köder (optionale Profi-Werkzeuge)

> Folgebrief nach Auftrag B (Sitzung 18, 2026-06-04). **B ist gebaut**: der Not-Aus (Panik) ist
> scharf — Stufe 2 „Verbergen" (umkehrbare Abdeckung), Stufe 3 „Retten & Löschen" (Drei-Schritt),
> „↻ Rettung einlesen". **Dieser Brief = die optionalen Profi-Werkzeuge** aus
> `PLAN_tresor-erlebnis.md` §2: **Shamir 3-von-5** + **Honigtopf/Köder**. Nur auf Freigabe; der
> **neueste** Brief gilt, alte bleiben Historie.

Stand: 2026-06-04 · Status: VORGEMERKT — **Plan-vor-Code, kein Freibrief** (echte Krypto + berührt Daten).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — oberster Eintrag (Sitzung 18: Not-Aus scharf).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser) + `docs/sessions/PLAN_tresor-erlebnis.md` §2.
4. `status.json` — ehrlicher Real-Anteil.
5. App-Schale in `index.html` (+ Spiegel `jasons-bibliothek/index.html`): Buch-Tresor-Skript
   (`#bookdemo`, ab „Buch-Tresore (lokal)") und der **Notfall (Panik)**-Block am Dateiende.

## Stand (was real / Demo / provisorisch)
- **REAL & headless-bewiesen (28/28):** Buch-Tresor (jedes Buch eigenes AES-Passwort über den Kern),
  Fehlversuch-Sperre 2× → 1 Min. **Not-Aus (Schale, browser-ungeprüft):** Stufe 1 Verriegeln,
  Stufe 2 Verbergen (Esc/Doppelklick zurück), Stufe 3 Retten & Löschen (Rettungs-Datei → Zwei-Schritt
  → nur lokale Kopie), „↻ Rettung einlesen". Membran-15 = ehrliche Warn-Zeile.
- **Offen / Demo:** **Shamir 3-von-5** und **Honigtopf/Köder** noch NICHT gebaut. Siegel-16-Chain
  und `domainVector` (Modul 03) weiter offen.

## Was geplant ist (nur auf Klaus' Freigabe)
Die zwei Profi-Werkzeuge **ehrlich und getestet** bauen — echte Krypto, klare Grenzen.

### A) Shamir 3-von-5 (Geheimnis aufteilen)
- Das **Passwort eines Buches** in **5 Schlüsselteile** zerlegen; **beliebige 3** rekonstruieren es,
  1–2 sind wertlos. Echte Mathematik (Shamir's Secret Sharing über GF(256)) — **eigener Kern-Baustein
  mit headless-Test** (Aufteilen→Zusammensetzen == Original; 2 Teile scheitern; manipuliertes Teil fällt auf).
- **Aufbewahrungsorte** (USB-Stick / Zettel / Vertrauensperson / Netz / Honigtopf) sind nur das *Wohin*
  der 5 Teile — kein Code, sondern Klaus' Wahl. App erzeugt 5 Teile (Text/Datei/QR optional).
- **Ehrliche Grenze:** mehr zu verwahren; weniger als 3 Teile = endgültig weg.

### B) Honigtopf / Köder (Stufe-2-Alternative)
- Falsches Passwort → **glaubhafte Schein-Bibliothek** statt Fehler („ein Gesicht wählen").
- **Ehrliche Grenze:** stark gegen Gelegenheits-Gucker, **schwach gegen Kenner** (echte verschlüsselte
  Daten daneben bleiben nachweisbar). Klar im UI benannt.

## Was gebaut / gepflegt / getestet werden soll
- **Shamir-Kern** als testbarer Baustein (zwischen Markern oder eigenes Modul) + `npm test`-Fälle.
- **UI**: Buch-Passwort aufteilen / aus 3 Teilen wiederherstellen — über benannte Knöpfe (kein Terminal).
- **Honigtopf**: optionaler Köder-Zustand je Buch, ehrlich etikettiert.
- **Erfolgsmerkmal je Schritt:** `npm test` grün; Kern byte-identisch (Wurzel & Spiegel); echte Krypto;
  nichts zerstörend; offline.

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (= Modul 02 / `node_key.enc.json`) — **einzige Krypto-Quelle ist der Kern**.
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Buch-Ablage `jt-vaults`; Rettungs-Bündel `jason-tresor-rettung` v1 (`{vaults, liste, names}`).
- Spore/Andock: kanonische Signier-Form (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto (Shamir mathematisch korrekt, mit Tests); **kein PII/Secret** im Repo/Commit/Chat.
- Kern byte-identisch (Wurzel & Spiegel); Skripte syntaxgeprüft; offline.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf", bis Klaus sie gesehen hat.

## Reihenfolge
1. Plan-vor-Code: Pflichtlektüre + Plan an Klaus (v. a. **wo der Shamir-Kern lebt** + **wie die 5 Teile
   aussehen/aufbewahrt werden**) → **Klaus' OK**.
2. Shamir-Kern + Test bauen. 3. Shamir-UI. 4. Honigtopf (optional, separat). Je „braucht Klaus' Browser-Lauf".

## Offene Fragen an Klaus
- **Zuerst Shamir oder Honigtopf?** (Empfehlung: Shamir-Kern zuerst — echte Krypto, dann UI.)
- **Teil-Format:** Text-Wörter, Dateien, oder QR-Codes für die 5 Schlüsselteile?
- **Honigtopf-Inhalt:** welche harmlose Schein-Bibliothek soll der Köder zeigen?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
