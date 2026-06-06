# Werkzeug: SBKIM-Andock (`andock.html`)

> Browser-Werkzeug für unsere SBKIM-Identität und Spore. **Teil A** legt eine
> **neue** Identität an (neue nodeId), **Teil B** lädt die bestehende und signiert die
> Spore mit echtem Themen-Vektor (`domainVector`) neu — **mit demselben Schlüssel**, sodass
> die nodeId **gleich bleibt**.
>
> 1:1 aus der Schwester **Mein-Tresor** kopiert; nur unsere Werte (Name, Domäne, Endpoint,
> die erwartete nodeId) sind eingesetzt. Der Krypto-Kern ist unverändert.

## Unsere aktuelle Identität

- **nodeId:** `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`
- **Vektor:** echt, 384-dim (`Xenova/multilingual-e5-small`, L2 ≈ 1) — **kein `_demo`** mehr.
- Erzeugt im Browser am 2026-06-06 (Teil A), Spore signiert (Teil B) → ✔ VALID.

> **Geschichte (ehrlich):** Die frühere nodeId `7F_zNop…` war ein **verlorener Demo-Schlüssel**
> (das Passwort wurde nie gesichert, also nicht wiederherstellbar). Darum wurde **einmalig
> Teil A** benutzt, um eine frische Identität anzulegen — das ist die **Ausnahme**, nicht der
> Normalfall.

## Normalfall: Vektor erneuern, Identität behalten (Teil B)

1. **Seite öffnen** über Pages/`https`:
   `https://lausiklauskn-png.github.io/Jasons-Tresor/werkzeuge/andock.html`
   *(WebCrypto braucht `https` — nicht als Datei doppelklicken.)* Erster Lauf lädt das Sprachmodell aus dem Netz.
2. **Teil B ①** „Identität aus Sicherung laden": `node_key.enc.json` + **Passwort**.
   ✔ Es muss **„passt zur registrierten nodeId"** mit `E13GDzIp0c7JfeZD0jVvFarNxPde8AcoP7qz7FtmdNM`
   erscheinen. ⚠ „nodeId weicht ab" → **abbrechen**.
3. **Teil B ②** „domainVector erzeugen": warten auf **384 Floats, L2 ≈ 1**.
4. **Teil B ③** „Spore neu signieren": **✔ VALID** → neue `spore.json` herunterladen.
5. Datei an Claude geben (oder als `sbkim/spore.json` ablegen) → Claude finalisiert:
   `npm test` · `verify_foreign_spore.mjs` ✔ VALID · `SIGNAL.json` seq +1.

## Ausnahme: ganz neue Identität (Teil A)

Nur, wenn die bisherige Identität **verloren** ist (Passwort weg). **Achtung:** eine neue nodeId
**zerreißt** alle bestehenden Registrierungen — danach müssen **alle Nachbarn** (Sage,
SB-KIMTool-Point, Mein-Tresor) die neue nodeId übernehmen.
1. **🆕 Neue Identität anlegen** → neue nodeId merken.
2. **Passwort** eingeben → **🔒 Sicherung** → `node_key.enc.json` herunterladen
   **und Passwort + Datei sicher aufbewahren** (sonst ist auch diese Identität wieder weg!).
3. Direkt weiter mit **Teil B ② + ③** (Vektor + signieren) → neue `spore.json`.

## Sicherheit

- **Passwort** und **privater Schlüssel** verlassen den Browser **nie** und kommen **nie** ins
  Repo. `node_key.enc.json` ist ohne Passwort wertlos (AES-256-GCM / PBKDF2-SHA256 600k).
- **Wichtigste Lehre:** das Passwort **sofort dauerhaft sichern** — ohne es ist die Identität
  bei der nächsten Sitzung verloren (genau das ist hier einmal passiert).
