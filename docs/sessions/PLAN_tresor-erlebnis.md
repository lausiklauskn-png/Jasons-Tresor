# PLAN — Das Tresor-Erlebnis (Tür · Bibliothek · versteckte Tresorräume)

Stand: 2026-06-01 · Von: Design-Sitzung · An: Klaus (zur Freigabe) + nächste Bau-Sitzung
Status: **VORSCHLAG — wartet auf Klaus' Rückmeldung. Noch KEIN Code gebaut (Plan-vor-Code).**

> Dieser Plan überführt den Werkzeugkiste-Befehl in ein **Erlebnis**: eine Schatzsuche
> in Steampunk-Manier, angelehnt an die **Sage-Einladung** (Tür mit warmem Goldlicht) und
> den **glühenden türkisen Schlüssel** der kosmischen Steampunk-Truhe aus SB-KIMTool-Point.

---

## 0. Ehrliche Leitidee zuerst (Leitplanken bleiben unberührt)

- Das **Erlebnis ist die menschliche Schicht** — freundlich, mit Charakter, ein Spiel.
  Genau hier gewinnen wir, NICHT über „stärkste Krypto".
- **Theater ≠ Schloss.** Tür und Schlüssel auf der Eingangsseite sind eine **Begrüßungs-
  Zeremonie / Navigation** (Werkzeugkiste-Abschnitt E: „Bequemlichkeit — NICHT das Schloss").
  Das **echte Schloss** ist und bleibt das **Passwort + AES-256-GCM/PBKDF2-600k** auf
  Buch-/Raum-Ebene. Das sagen wir dem Nutzer auch ehrlich (kleiner Hinweis im Spiel).
- **Daten-Verträge unverändert:** `jason-tresor` v2, `jason-eintrag`/`jason-bibliothek`,
  Spore/Andock. Die bestehende **`JasonLib`-Kernlogik in `index.html` bleibt 1:1** (vom
  headless Test geschützt). Das Erlebnis ist eine **Schale obendrauf**, kein Umbau des Kerns.
- **Offline · zero-dependency · kein PII · echte Krypto · `npm test` = Beweis.**

---

## 1. Die vier Szenen + das HUD (Überblick)

```
  [ Szene 0: DIE SCHWELLE ]      Tür + glühender Schlüssel → Schloss (klick-klick-klick) → auf
            │  Schlüssel fährt wie ein Teleskop ins Schloss, Stop-Motion, Licht flutet
            ▼
  [ Szene 1: DIE BIBLIOTHEK ]    Steampunk-Bibliothek, Regale voller Bücher (= „Jasons")
            │  Buch antippen → kippt nach vorn → Spielfenster (Szene 2)
            ▼
  [ Szene 2: DAS SPIELFENSTER ]  Messing-Dialog: Buchrücken benennen · Ziel wählen ·
            │                     Passwort setzen · Schutztiefe · (Aufteilen/Köder/Panik)
            ▼  nur benannte + passwortgeschützte Buchrücken sind „echte Türen"
  [ Szene 3: DER TRESORRAUM ]    Regalwand schwingt auf → versteckter Raum (themengebunden:
                                  Tagebuch / Geld / Krypto …) → hier liegen die Einträge

  [ HUD (immer sichtbar, Steampunk) ]
     · Membran-Lampe (15): grün = ruhig, rot = Fremdzugriff erkannt (Wächter)
     · Siegel-Wappen (16): Bronze/Gold = bezeugter SBKIM-Endknoten
     · Messing-Briefkasten (📬): Nachbar-Signale (Sage + SB-KIMTool-Point)
     · Notfall-Hebel im Glaskasten (07/Panik): Verriegeln · Verbergen · Löschen
```

### Daten-Mapping (so bleibt der Vertrag heil)
- **Ein Buch = eine Sammlung** (eine Kategorie von `jason-eintrag`), beim Verschließen ein
  `jason-tresor` v2 (genau der heutige Umschlag). Buch **zu** = verschlüsselt; Buch **auf** =
  entschlüsselt im Speicher.
- **Buchrücken-Name** = frei wählbarer Name (Klaus entscheidet, wohin er führt). Die
  Zuordnung *Name → Tresorraum-Thema* ist **Klaus' Eingabe**, kein fester Code.
- **Passwort** = der AES-Schlüssel des Buches (PBKDF2 600k). Kein Passwort → das Buch ist
  nur ein leerer Buchrücken, **keine Tür**.

---

## 2. Wo die Werkzeugkiste-Werkzeuge im Erlebnis sitzen

| Werkzeug | Im Spiel sichtbar als | Tut wirklich (ehrlich) |
|---|---|---|
| **Membran 15** (Außenhaut/Wächter) | **Rote Lampe** oben (grün/rot), pulst bei Fremd-KI | Fremdzugriff-Detektor + Warnung; zerstört NICHT. Lese-API (`sbkim_keys` TABU); App-zu-App-Brücke. |
| **Siegel 16** (Selbst-Bezeugung) | **Wachs-Siegel / Messing-Wappen** (Bronze/Gold) | Prüft geladene Pflicht-Module → Abzeichen. Macht den Tresor zum bezeugten Endknoten. |
| **Apoptose 07** (Not-Aus) | Motor hinter **Notfall-Hebel** Stufe 3 | Signierter Abschied + eigene Daten löschen (zwei Schritte, irreversibel). KEINE Dieb-Falle. |
| **AUFTEILEN / Shamir** (3 v. 5) 🆕 | **Schlüssel zerfällt in Scherben** (USB/Stahl/Person/Netz) | Schatz als Punkt im Raum, mehrere Koordinaten. Gegen „vergessen" UND „geklaut". |
| **Gestufte Fächer** 🆕 | **Messing-Tiefenanzeige / Hebel** am Buch | flach (Rezepte, leicht rein+raus) … tief (Bitcoin-Wörter, Zusatzwort, streng). |
| **Köder/Honig** 🆕 | **Köder-Schalter** im Spielfenster | falsches Passwort → glaubhafter Fake statt Fehler. Ehrlich: stark gegen Gelegenheits-Knacker, schwach gegen Kenner. **Ein Gesicht wählen.** |
| **Panik-Knopf** 🆕 | **Roter Hebel im Glaskasten** („Glas zerschlagen") | Stufe 1 Verriegeln (1 Klick, umkehrbar) · 2 Verbergen (abstreitbar) · 3 Löschen (irreversibel, 2-Schritt). |

**Ehrliche Grenzen (im Spiel klein vermerkt):** App kann WLAN nicht abschalten; geklaute
Kopien/Backups überleben Löschen; Fallen nur netz-seitig, nie auf der Offline-Datei.

---

## 3. Technik (Bilder ablegen + offline installierbar) — ENTSCHIEDEN

Klaus' Wunsch: **offline installierbar wie eine PWA**, **alles in einem deutlich
gekennzeichneten Ordner**, geschützt vor versehentlichem Löschen. Umsetzung:

- **Ordner `assets/erlebnis/`** (sprechender, in sich geschlossener „Schatz-Ordner"):
  - `assets/erlebnis/bilder/` — alle generierten Bilder (Tür, Schlüssel, Schloss, Räume …).
  - `assets/erlebnis/_BITTE-NICHT-LOESCHEN.md` — sichtbarer Schutz-Hinweis.
  - später `assets/erlebnis/sw.js` — Service-Worker für Offline-Cache (PWA installierbar).
- **Bleibt offline** (kein Netz; lokale Dateien sind kein externer Abruf). *Evolutions-
  Klausel: Regel „eine index.html" — hier bewusst um einen klar benannten Asset-Ordner
  erweitert, „offline/zero-dependency" unberührt.*
- **PWA:** Manifest ist bereits in `index.html`; ergänzt wird ein Service-Worker, der die
  `assets/erlebnis/`-Dateien cached → echte Offline-Installation auf dem Gerät.

---

## 4. Bild-Katalog mit Prompts (das Herzstück)

**Gemeinsamer Stil-Anker** (an JEDEN Prompt anhängen, hält alle Bilder zusammen) —
*verfeinert nach Klaus 2026-06-01: flüssiges Spiegel-Metall + Indiana-Jones-Abenteuer*:

> *Stil: kinematisch, malerisch-fotorealistisch, dramatisches Helldunkel (Chiaroscuro).
> Palette: tiefes Nachtblau-Schwarz (#08081A), warmes Bernstein-Gold (#F4B435), glühendes
> Türkis-Cyan (#6EE7D3), zarter violetter Akzent (#8B5CF6).*
> *Material-Signatur (wichtig): die edlen Teile wirken wie **flüssiges Metall in fester Form**
> — poliertes Quecksilber / flüssiges Chrom / geschmolzenes Messing, **mitten im Fließen
> erstarrt**, hoch **spiegelnd**, sodass sich die warme Umgebung und das türkise Glühen
> darin spiegeln: „Glas und doch nicht Glas". Weiche, fließende Übergänge, kein starres Metall.*
> *Welt: Steampunk nur ANGEHAUCHT (Messing, Nieten, Zahnräder, Gaslicht — dezent), vermischt
> mit **Indiana-Jones-Abenteuer-Archäologie**: uralter Tempelstein, abgegriffenes Leder,
> vergilbte Schatzkarten, der goldene Schimmer eines Relikts, Staub und Fackel-/Gaslicht;
> dazu sanft leuchtende türkise Energie-Adern wie feine Schaltkreise.*
> *Stimmung: geheimnisvolle Schatzsuche, einladend und warm, abenteuerlich, nicht kalt/
> technisch. Hohe Detailtreue, weiche Lichtsäume, feiner Staub in den Lichtstrahlen.
> KEIN Text, keine Buchstaben, keine Wasserzeichen, keine Logos, keine Rahmen.*

Auflösungen: **Hintergründe 16:9 (2560×1440)**; **Sprites freigestellt, transparenter
Hintergrund (PNG mit Alpha)**, mittig, großzügiger Rand.

---

### PHASE 1 — Die Schwelle (zuerst generieren, Look festzurren)

**Bild 1 — `tuer-zu.png` · Hintergrund 16:9 · Die geschlossene Tür** ✅ DA (1672×941, von Klaus)
> Eine gewaltige, uralte **Tempel-Tresortür**, fest geschlossen, mittig frontal. Aus
> verwittertem Tempelstein und dunklem Leder-/Holz mit Messingbändern, durchzogen von
> **Ornamenten aus flüssig wirkendem Spiegel-Metall** (poliertes Chrom/Quecksilber, mitten
> im Fließen erstarrt), in denen sich das warme Licht und ein türkises Glühen spiegeln —
> wie geschmolzenes Metall, das zu Ranken erstarrte. In der Mitte ein **großes verziertes
> Schlüsselloch**, dessen Spiegel-Metall-Ring von innen schwach türkis glimmt. Flankiert
> von zwei Tempelsäulen mit abenteuerlichen Reliefs, davor staubiger Steinboden, ringsum
> tiefes Dunkel. Eine warme Fackel/Gaslaterne wirft Goldlicht von links, Staub in der Luft.
> Ehrfürchtige, abenteuerliche Stille — die Tür wartet. *(+ Stil-Anker)*

**Bild 2 — `tuer-auf.webp` · Hintergrund 16:9 · Die offene Tür**
> Dieselbe Tür, jetzt **einen Spalt offen** — gleißend warmes Goldlicht flutet durch den
> Spalt heraus und legt einen Lichtkeil über den Marmorboden. Dahinter erahnt man
> verschwommen hohe Bücherregale und das warme Glühen einer Bibliothek. Schwebender Staub
> tanzt im Lichtstrahl. Türkises Glimmen am Schlüsselloch erlischt, das Gold gewinnt.
> Magischer Schwellen-Moment. *(+ Stil-Anker)*

**Bild 3 — `schluessel.png` · Sprite freigestellt · Der glühende Schlüssel**
> *Look ausgewogen (Klaus 2026-06-01): Spiegelmetall UND Truhen-Schaltkreis-Energie gleich stark.*
> Ein einzelner, prachtvoller Schlüssel im **Halbprofil, horizontal liegend**, freigestellt
> auf transparentem Hintergrund. Korpus aus **flüssigem Spiegel-Metall in fester Form**
> (poliertes Chrom/Quecksilber, geschmolzenes Messing, mitten im Fließen erstarrt), hoch
> **spiegelnd** — „Glas und doch nicht Glas". **Deutlich sichtbar durchzogen von türkis-cyanen
> Schaltkreis-Adern, die wie digitale Energie durch das Metall pulsieren** (wie der
> Truhen-Schlüssel): uraltes Relikt und lebendige Technik zugleich. Der Griff (Reide) ein
> **kunstvoll verschlungenes Kleeblatt-Ornament**, das türkis pulsiert; der Schaft lang und
> röhrenförmig wie ein **kleines Teleskop** mit feinen Ringen; der Bart vorn fein gezähnt,
> wie ein Abenteuer-Artefakt. Sanftes Glühen, weicher Lichtsaum. *(+ Stil-Anker)*

**Bild 4 — `schloss-frame-1..4.png` · 4 Sprites (Stop-Motion) · Schloss-Mechanik**
> Extreme Nahaufnahme eines **verzierten Messing-Schlüssellochs/Schlossmechanismus** von
> vorn, freigestellt auf transparentem Hintergrund, mit sichtbaren inneren Zahnrädern und
> Zuhaltungen. Erzeuge **vier Varianten desselben Schlosses, identische Kameraposition und
> Beleuchtung**, nur die Mechanik bewegt sich:
> - Frame 1: Schlüsselröhre **noch nicht** im Loch, Zahnräder ruhend, türkis schwach.
> - Frame 2: Schlüssel **halb eingefahren** (teleskopisch), erstes Zahnrad dreht, ein
>   türkiser Funke, „klick".
> - Frame 3: Schlüssel **tief drin**, zwei Zahnräder gedreht, Zuhaltungen heben sich,
>   helleres türkises Pulsen, „klick-klick".
> - Frame 4: Mechanik **voll entriegelt**, alle Zahnräder ausgerichtet, warmes Gold
>   überstrahlt das Türkis, „klick — offen".
> *(+ Stil-Anker. Wichtig: gleicher Bildausschnitt über alle 4 Frames, damit die
> Stop-Motion sauber überblendet.)*

---

### PHASE 2 — Die Bibliothek

**Bild 5 — `bibliothek.webp` · Hintergrund 16:9 · Der Bibliotheksraum**
> Eine warme, einladende **Steampunk-Bibliothek** aus der Innenperspektive: hohe
> Bücherregale aus dunklem Holz mit Messing-Schienen, eine rollbare Messing-Leiter, ein
> großer Schreibtisch mit Zahnrädern, Messinstrumenten und einer Gaslampe. Bernsteinfarbenes
> Licht, gemütlicher Halbschatten, schwebender Staub. Einzelne Regalfächer leer (warten auf
> Bücher). Im Hintergrund eine angedeutete verschlossene Regalwand mit feinen türkisen
> Konturen (eine versteckte Tür). Tiefe, Geborgenheit, Abenteuerlust. *(+ Stil-Anker)*

**Bild 6 — `buch-zu.png` · Sprite freigestellt · Ein Buch im Regal (Standardzustand)**
> Ein einzelnes gebundenes Buch von vorn auf den **Buchrücken** gesehen, aufrecht stehend,
> freigestellt. Ledereinband in gedecktem Ton, Messing-Eckbeschläge, ein **leeres
> Messing-Namensschild** in der Mitte des Rückens (frei für später eingeblendete Schrift),
> dezente Nieten. Ruhig, geschlossen, noch namenlos. *(+ Stil-Anker. Namensschild bewusst
> leer lassen — Text kommt per App.)*

**Bild 7 — `buch-gekippt.png` · Sprite freigestellt · Buch kippt nach vorn**
> Dasselbe Buch, jetzt **nach vorn aus dem Regal gekippt/herausgezogen**, leicht
> aufgeschlagen, sodass die obere Kante zum Betrachter zeigt; aus dem Spalt zwischen den
> Seiten quillt warmes Goldlicht und ein Hauch türkiser Energie. Bewegungsgefühl, Einladung
> „öffne mich". Freigestellt. *(+ Stil-Anker)*

**Bild 8 — `buch-versiegelt.png` · Sprite freigestellt · Benanntes, verschlossenes Buch**
> Dasselbe Buch geschlossen, aber **versiegelt und „lebendig"**: über dem Namensschild ein
> kleines glühendes **Wachs-/Messing-Siegel**, die Energie-Adern türkis aktiv, ein feiner
> goldener Schimmer am Schnitt. Signalisiert „benannt + passwortgeschützt = echte Tür".
> Freigestellt. *(+ Stil-Anker)*

---

### PHASE 3 — Das Spielfenster + HUD (Messing-Bedienelemente)

**Bild 9 — `panel-rahmen.png` · Sprite (9-slice tauglich) · Dialog-Rahmen**
> Ein **rechteckiger Messing-Rahmen im Steampunk-Stil**, freigestellt, INNEN leer/transparent
> (nur der Rahmen, damit Text/Knöpfe der App hineinpassen). Verzierte Ecken mit Zahnrädern
> und Nieten, oben eine kleine Gravur-Leiste (leer), unten zwei Schraubenköpfe. Warmes
> Messing mit zarten türkisen Konturlichtern. *(+ Stil-Anker. Mitte muss leer/transparent
> sein — Inhalt rendert die App.)*

**Bild 10 — `hebel-tiefe.png` · Sprite · Tiefenanzeige (gestufte Fächer)**
> Eine vertikale **Messing-Tiefenanzeige mit Hebel**, freigestellt: eine Skala von oben
> „flach" bis unten „tief", drei bis vier Raststufen, ein verzierter Hebelgriff. Bei den
> unteren Stufen glimmt es kräftiger türkis (= strenger). Mechanisch, präzise, wertig.
> *(+ Stil-Anker. KEINE Schrift auf der Skala — Beschriftung macht die App.)*

**Bild 11 — `schluessel-scherben.png` · Sprite · Aufteilen (Shamir 3 von 5)**
> Derselbe glühende türkise Schlüssel wie in Bild 3, aber **in fünf leuchtende Scherben/
> Fragmente zerfallen**, die im Halbkreis schweben, durch feine türkise Energiefäden
> verbunden. Jede Scherbe trägt ein kleines, unterschiedliches Symbol-Relief (Symbole, KEIN
> Text): ein USB-Stecker, eine Stahlplatte, eine Person/Silhouette, ein Netz-Knoten, ein
> Zettel. Idee „Schatz als Punkt im Raum, mehrere Koordinaten". Freigestellt. *(+ Stil-Anker)*

**Bild 12 — `notfall-hebel.png` · Sprite · Panik-Knopf im Glaskasten (Apoptose)**
> Ein **roter Notfall-Hebel hinter Glas** in einem Messing-Kasten an der Wand, freigestellt,
> mit kleinem Hämmerchen an einer Kette („im Notfall Glas zerschlagen"). Rotes Warnglühen,
> Messingrahmen, Nieten. Ernst, unmissverständlich, aber stilvoll. *(+ Stil-Anker)*

**Bild 13 — `lampe-gruen.png` & `lampe-rot.png` · 2 Sprites · Membran-Wächter-Lampe**
> Eine runde **Messing-Signallampe** im Industrie-Steampunk-Stil, freigestellt, mit
> Gitterkäfig und Glaskolben. Zwei Varianten, identische Form/Position:
> - `lampe-gruen`: ruhig **grün-türkis** leuchtend, sanft (= alles ruhig).
> - `lampe-rot`: alarmierend **rot** glühend, kleiner Lichtkranz (= Fremdzugriff erkannt).
> *(+ Stil-Anker)*

**Bild 14 — `siegel-bronze.png` & `siegel-gold.png` · 2 Sprites · Siegel-Wappen**
> Ein rundes **Wachs-Siegel / Messing-Wappen**, freigestellt, mit geprägtem abstraktem
> Embleme-Relief (Zahnrad + stilisierte Bibliothek/Buch, KEIN Text). Zwei Varianten:
> - `siegel-bronze`: in Bronze, matt (Grundbezeugung).
> - `siegel-gold`: in glänzendem Gold mit türkisem Schimmer (volle Bezeugung).
> *(+ Stil-Anker)*

**Bild 15 — `briefkasten.png` · Sprite · Messing-Briefkasten (Andock/📬)**
> Ein kleiner viktorianischer **Messing-Briefkasten / Telegrafen-Empfänger** an der Wand,
> freigestellt, mit Klappe und einem Fähnchen; eine kleine türkise Kontrolllampe oben. Wenn
> Post da ist, leuchtet sie. Warm, einladend. *(+ Stil-Anker)*

---

### PHASE 4 — Die Tresorräume (je 1 Hintergrund, themengebunden)

**Bild 16 — `raum-tagebuch.webp` · Hintergrund 16:9 · Tagebuch-Tresor**
> Ein intimer, warmer versteckter Raum hinter der Regalwand: ein gemütlicher Sekretär mit
> offenem ledernem **Tagebuch**, Federkiel, Tintenfass, eine kleine Gaslampe, ein
> Ohrensessel, schwere Vorhänge. Geborgen, privat, ruhig. Türkises Glimmen nur dezent an
> einem Messing-Schloss. *(+ Stil-Anker)*

**Bild 17 — `raum-geld.webp` · Hintergrund 16:9 · Geld-Tresor**
> Ein versteckter **Schatzraum**: ein massiver Messing-Safe mit Zahlenrad, gestapelte
> Münzen und Barren, eine Waage, gedämpftes Goldlicht auf glänzendem Metall. Wohlstand,
> Solidität, gut gesichert. Dezente türkise Energie-Adern an Schloss und Safe. *(+ Stil-Anker)*

**Bild 18 — `raum-krypto.webp` · Hintergrund 16:9 · Krypto-/Bitcoin-Tresor**
> Ein geheimnisvoller **Sternwarten-Raum**: ein großes Messing-**Orrery** (Planetenmodell)
> und ein Teleskop, an den Wänden Sternkarten, schwebende türkis leuchtende Koordinaten-
> Punkte und feine Schaltkreis-Linien (Anspielung auf „Schatz als Punkt im Raum" / Schlüssel-
> Wörter). Kosmisch, kühl-mystisch, aber warm beleuchtet. *(+ Stil-Anker)*

**Bild 19 — `raum-generisch.webp` · Hintergrund 16:9 · Allgemeiner Tresorraum**
> Ein neutraler versteckter Tresorraum hinter aufgeschwungener Regalwand: nackte Messing-
> Regale, ein Podest mit sanftem Lichtkegel (wartet auf Inhalt), warme und türkise Akzente.
> Vorlage für Bücher ohne eigenes Thema. *(+ Stil-Anker)*

---

## 5. Bau-Reihenfolge (nach Klaus' OK + Bildern)

1. **Phase 1 — Schwelle:** Tür-Overlay über die bestehende App; Schlüssel per Maus/Finger
   ins Schloss ziehen → Stop-Motion (Bild 4) → Übergang. (Echtes Schloss bleibt Passwort.)
2. **Phase 2 — Bibliothek:** Regal-Ansicht; Buch = Sammlung; kippen → Spielfenster. `JasonLib`
   bleibt der Datenkern (Einträge, Tresor-Umschlag).
3. **Phase 3 — Spielfenster + HUD:** Benennen/Ziel/Passwort/Tiefe; Membran-Lampe, Siegel,
   Briefkasten ins HUD; danach Werttresor-Teile **C** (Aufteilen → Fächer → Köder → Panik).
4. **Phase 4 — Tresorräume:** Raum-Übergänge + Themenräume; Apoptose 07 hinter dem Panik-Hebel.
- **Werkzeugkiste A** (Membran 15, Apoptose 07, Siegel 16) wird parallel als echte Logik
  1:1 aus Sage/SB-KIMTool-Point kopiert (Endknoten-Reife), das Erlebnis macht sie sichtbar.
- **Nach jeder Phase:** `npm test` grün halten, Browser-Pfade ehrlich „ungeprüft, wartet auf
  Klaus' Browser-Lauf".

## 6. Entscheidungen (durch Klaus, 2026-06-01)

1. **App-Form + Bild-Ablage:** Der Tresor soll **offline installierbar** sein wie eine
   **PWA** (Service-Worker + Offline-Cache; Manifest ist schon da). **Alle Erlebnis-Dateien
   in EINEN, deutlich gekennzeichneten Ordner `assets/erlebnis/`** (Bilder unter
   `assets/erlebnis/bilder/`), mit einer Markierungs-Datei `assets/erlebnis/_BITTE-NICHT-LOESCHEN.md`,
   damit nichts aus Versehen entfernt wird. Bleibt offline (kein Netz). *(Klaus: „ausgefallene
   Ordnerform, lass dir was einfallen" → ein klar benannter, in sich geschlossener Schatz-Ordner.)*
2. **DATENSCHUTZ-REGEL (Klaus, hart):** **„Es darf nicht aus Versehen etwas gelöscht werden."**
   → Der Bau **fasst vorhandene Tresor-/Bibliotheks-Daten nie zerstörend an**. Jede Löschung
   (auch Panik Stufe 3 / Apoptose 07) **nur** mit ausdrücklicher Zwei-Schritt-Bestätigung;
   Standard-Aktionen sind **immer umkehrbar oder additiv**. Export bleibt die echte Sicherung.
3. **Material / Gesicht (Klaus):** **flüssiges Spiegel-Metall in fester Form** (Quecksilber/
   Chrom/geschmolzenes Messing, spiegelt den Hintergrund, „Glas und doch nicht Glas"),
   **steampunk nur angehaucht** + **Indiana-Jones-Abenteuer** (Wortwitz Jason→Jones,
   Schatzsucher-Tresor). Ton: stiller Werttresor (ernst, kein Köder als Grundton; Köder
   höchstens später optionaler Schalter). Stil-Anker in §4 entsprechend verfeinert.
4. **Start:** **erst nur Phase 1** (Tür/Schlüssel/Schloss + 3 Effekt-Teile) generieren, Look
   prüfen, dann Phase 2–4.
5. **Schlüssel-Bedienung:** **Klick zum Einrasten** (klick-klick-klick; funktioniert überall,
   auch ohne Drag). Drag optional später.

---

## Pflichtlektüre (Brief-Kette, vor jeder Arbeit, in dieser Reihenfolge)
1. `CLAUDE.md` 2. `PULS.md` 3. neuester Brief `docs/sessions/BRIEF_*.md` 4. `status.json`
5. `docs/JASONS-BIBLIOTHEK.md` + `index.html` + `scripts/` + **dieser Plan**.

## Abschluss-Befehl (Pflicht, wiederholt)
`PULS.md` fortschreiben → neuen Brief `docs/sessions/BRIEF_<thema>.md` (Pflichtlektüre +
diesen Abschluss-Befehl wiederholen) → Brief als Chat-Codeblock → ein Commit pro Aufgabe →
Draft-PR mit Test-Plan. **Merge entscheidet Klaus.**
