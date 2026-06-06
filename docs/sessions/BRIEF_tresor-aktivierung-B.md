# BRIEF — Tresor-Aktivierung B: Werkzeugkiste ehrlich scharf (Panik 2/3, Membran 15)

> Folgebrief nach Auftrag A (Sitzung 17, 2026-06-04). **A ist gebaut**: jedes Regal-Buch ist
> jetzt ein echter AES-Tresor (eigenes Passwort), Demo-Code „1234" entfernt. **Dieser Brief =
> Auftrag B** aus `BRIEF_tresor-aktivierung.md`, von Klaus bewusst auf eine eigene Sitzung gelegt
> („erst nur A"). Der **neueste** Brief gilt; alte bleiben Historie.

Stand: 2026-06-04 · Status: AUFTRAG — **Plan-vor-Code, kein Freibrief** (berührt Löschen/Daten).

## Pflichtlektüre vor der Arbeit (in dieser Reihenfolge)
1. `CLAUDE.md` — Verfassung + Leitplanken.
2. `PULS.md` — oberster Eintrag (Sitzung 17: Buch-Tresor scharf).
3. **Neuester Brief** `docs/sessions/BRIEF_*.md` (dieser) + `docs/sessions/PLAN_tresor-erlebnis.md` §2.
4. `status.json` — ehrlicher Real-Anteil.
5. App-Schale in `index.html` (+ Spiegel `jasons-bibliothek/index.html`): Buch-Tresor-Skript
   (`#bookdemo`, ab „Buch-Tresore (lokal)") und der **Notfall (Panik)**-Block am Dateiende.

## Stand (was real / Demo / provisorisch)
- **REAL & headless-bewiesen (28/28):** Buch-Tresor — jedes Buch verschlüsselt seinen Inhalt mit
  eigenem Passwort über den Kern (`encryptTresor`/`decryptTresor`), Ablage `jt-vaults` (nur der
  `jason-tresor` v2-Umschlag, nie Klartext/Passwort). Fehlversuch-Sperre 2× → 1 Min global.
- **REAL aber browser-ungeprüft:** der ganze Buch-Fluss (öffnen/füllen/verschließen/verschenken,
  🔒-Markierung, Schließen-Warnung) — **wartet auf Klaus' Browser-Lauf**.
- **Demo / noch nicht scharf:** **Panik Stufe 2 „Verbergen" + 3 „Löschen"** sind im Dialog noch
  `disabled` (Hinweis „wird in der Sicherheits-Sitzung scharfgeschaltet"). **Membran 15** = nur
  HUD-Lampe (grün), **Siegel 16** = sichtbar, aber Bezeugungs-Chain noch nicht.

## Was geplant ist (Auftrag B)
Die Werkzeugkiste **ehrlich** scharfschalten — ohne Theater, mit klaren Grenzen, **ohne** je
versehentlich zu zerstören.

## Was gebaut / gepflegt / getestet werden soll
- **Panik Stufe 2 „Verbergen"** scharf: lokale Tresor-/Buch-Ansicht abstreitbar verbergen
  (z. B. Regal leeren/auf „nichts hier"), **umkehrbar**, **kein** Datenverlust. Ehrlicher Hinweis:
  verbirgt nur die Anzeige, Daten bleiben.
- **Panik Stufe 3 „Löschen"** scharf, aber **nur Zwei-Schritt-Bestätigung** und **nur die lokale
  Kopie** (`jt-vaults` + ggf. `jasons-bibliothek-v1` im Browser). Ehrlicher Hinweis: **Exporte/
  Backups überleben** das Löschen. Standard bleibt: nichts ohne ausdrückliche zweite Bestätigung.
- **Membran 15 (Wächter):** ehrlicher Hinweis-Text/Dialog, **zerstört nichts** (nur Lese-/Warn-Schicht).
- **Erfolgsmerkmal je Schritt:** `npm test` bleibt grün; jede Löschung ist Zwei-Schritt; keine
  Standard-Aktion zerstört Daten; Kern byte-identisch (Wurzel & Spiegel).

## Datenverträge (nicht brechen)
- Tresor-Umschlag `jason-tresor` v2 (genau `encryptTresor`) — **einzige Krypto-Quelle ist der Kern**.
- Bibliothek `jason-eintrag` / `jason-bibliothek` (`docs/JASONS-BIBLIOTHEK.md`).
- Buch-Ablage `jt-vaults` (Buch-ID → `{ tresor, name, updatedAt }`), nur verschlüsselt.
- Spore/Andock unverändert (`docs/ANDOCK.md`).

## Akzeptanzkriterien
- `npm test` grün; echte Krypto nur über den Kern; **kein PII/Secret** im Repo/Commit/Chat.
- **Nichts zerstörend gelöscht** außer per ausdrücklicher Zwei-Schritt-Bestätigung; Standard umkehrbar.
- Kern byte-identisch (Wurzel & Spiegel); Skripte `node --check` ok; offline.
- Browser-Teile „ungeprüft, wartet auf Klaus' Browser-Lauf".

## Reihenfolge
1. Plan-vor-Code: Pflichtlektüre + Panik-Block lesen → kurzer Plan an Klaus (v. a. **was genau
   Stufe 3 löscht** und wie die Zwei-Schritt-Bestätigung aussieht) → **Klaus' OK**.
2. Stufe 2 „Verbergen" (umkehrbar) bauen.
3. Stufe 3 „Löschen" (Zwei-Schritt, nur lokal, ehrlicher Backup-Hinweis) bauen.
4. Membran-15-Hinweis. Danach optional (nur auf Freigabe): Siegel-16-Chain, Shamir, Fächer, Köder.

## Offene Fragen an Klaus
- **Stufe 3 Reichweite:** nur die Buch-Tresore (`jt-vaults`), oder auch die offene „Liste"
  (`jasons-bibliothek-v1`)? Alles auf einmal oder gezielt ein Buch?
- **Verbergen (Stufe 2):** reicht „Anzeige verbergen + mit Passwort/Geste zurück", oder soll es
  einen abstreitbaren Fake-Zustand zeigen?

## Abschluss-Befehl
`PULS.md` fortschreiben → neuen Brief schreiben (Pflichtlektüre + diesen Abschluss-Befehl
wiederholen) → Brief als Chat-Codeblock ausgeben → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
