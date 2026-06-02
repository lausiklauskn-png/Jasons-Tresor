# BEFEHL/BRIEF — Jasons-Tresor als PWA + Landingpage (eigenes Repo)

Stand: 2026-06-02 · Von: Klaus + Bau-Sitzung · An: künftige PWA-Sitzung (eigenes Repo)
Status: **WARTET.** Erst starten, wenn die **Sicherheits-Sitzung** (echter Tresor: AES-Passwort
+ echte Dateien an die Bücher, Panik-Stufen 2/3, ggf. SBKIM-Bezeugung) **fertig** ist.

> Klaus' Entscheidung: bewusst ein **eigenes, zweites Repo** für PWA + Landingpage, damit er
> es separat in seine Bauphase mitpacken kann („je mehr Repos, umso besser"). Quelle ist der
> **fertige Jasons-Tresor** (`lausiklauskn-png/Jasons-Tresor`, Branch `main`).

## Reihenfolge (Vorbedingung)
1. ZUERST: Sicherheits-Sitzung in `Jasons-Tresor` abschließen (Demo-Code „1234" → echtes
   Passwort/AES-256, echte Jason-Dateien hinter den Büchern, Lösch-Schutz-Regel gewahrt).
2. DANN diese Sitzung: PWA + Landingpage im neuen Repo.

## Pflichtlektüre vor der Arbeit
1. `Jasons-Tresor/CLAUDE.md` — Leitplanken gelten **unverändert weiter** (Ehrlichkeit, echte
   Krypto, kein PII/Secret, **offline · zero-dependency**, Kopieren-nicht-klonen, Plan-vor-Code,
   „Merge entscheidet Klaus").
2. `Jasons-Tresor/PULS.md` + `docs/sessions/BRIEF_tresor-regal-safe.md` (was die App kann).
3. Vorbild für SW/PWA + Landing: **Sage-Protokol** (`sbkim-sw.js`) und die Endknoten-PWAs
   **Rezeptbuch / Mixarium** — Service-Worker-Muster **1:1** übernehmen, nur Pfade/Namen anpassen.

## Schritt-für-Schritt (im NEUEN Repo, z. B. `jasons-tresor-pwa`)
1. **App übernehmen:** den **fertigen** `index.html` (+ `assets/`, `sbkim/…` soweit nötig) aus
   `Jasons-Tresor/main` ins neue Repo kopieren. `.nojekyll` anlegen. GitHub Pages: Deploy from
   branch `main` / `(root)`.
2. **Service-Worker `sw.js`** (offline + installierbar), Muster 1:1 aus Sage `sbkim-sw.js`:
   - **App-Shell** (index.html) im `install` cachen (precache).
   - **Bilder lazy** cachen (cache-on-use), NICHT alle 74 MB beim Start ziehen
     (Stale-While-Revalidate für `assets/erlebnis/bilder/*`).
   - **Versionierter Cache-Name** (`jt-v1` …) + alte Caches im `activate` löschen.
   - In `index.html` registrieren: `if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js')`.
3. **Manifest** prüfen (ist inline in `index.html` schon da: name, `display:standalone`,
   `start_url:"."`, Icon). Optional als `manifest.webmanifest` auslagern + echte Icon-PNGs
   (192/512) ergänzen, damit der Desktop-Install-Knopf überall sauber erscheint.
4. **Landingpage** (Klaus: „davor"): schlanke Startseite `index.html`, App nach
   `app.html` (oder Unterpfad) verschieben. Landing zeigt: was Jasons-Tresor ist, **Tür-Bild
   als Hero** (`assets/erlebnis/bilder/tuer-zu.png`), Knöpfe **„🔑 Eintreten"** (→ App) +
   **„⤓ Installieren"** (PWA-Prompt), Links ins SBKIM-Netz (Siegel/Andock, SB-KIMTool-Point).
   Stil = gleicher Anker (Spiegelmetall, Türkis/Gold). Offline, zero-dependency, kein PII.
5. **Test:** Chrome/Edge → „Installieren" erscheint; App läuft im eigenen Fenster; **Flugmodus
   an → App startet weiter** (offline). Auf 2 Rechnern/OS gegenprüfen.
6. **Optional danach:** Bilder zu **WebP** verkleinern (70–80 % kleiner) → schlanker Offline-Cache;
   eigene **Domain** via `CNAME` (sobald Klaus eine hat).

## Leitplanken / Akzeptanz
- **Kern unberührt:** `JasonLib` + Datenverträge (`jason-tresor` v2, `jason-eintrag`/`-bibliothek`,
  Spore/Andock) **nicht** anfassen. `npm test` (falls mitkopiert) grün.
- **Offline · zero-dependency**, kein externer Abruf außer den eigenen lokalen Dateien.
- Installierbar (Chrome-Install-Knopf), läuft offline, Landing-Knöpfe funktionieren.
- **Nichts löschen**, kein PII/Secret im Repo, ehrlich was real vs. Stub ist.

## Abschluss-Befehl
`PULS.md` (neues Repo) anlegen/fortschreiben → Brief schreiben (Pflichtlektüre + diesen
Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → Commit/Push auf `claude/<scope>` →
Draft-PR mit Test-Plan (Install + Offline gegengeprüft). **Merge entscheidet Klaus.**
