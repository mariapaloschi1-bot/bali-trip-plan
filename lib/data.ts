export const itineraryData = [
  {
    day: 1,
    date: "11 Agosto",
    title: "Arrivo & Relax a Seminyak",
    locations: ["Denpasar Airport", "Seminyak Beach", "Beach Club"],
    coordinates: [-8.6705, 115.2126],
    activities: [
      {
        name: "Arrivo Ngurah Rai Airport",
        time: "Mattina/Pomeriggio",
        description: "Transfer all'hotel a Seminyak (circa 30-40 minuti dall'aeroporto)"
      },
      {
        name: "Relax a Seminyak Beach",
        time: "Pomeriggio",
        description: "Prima serata sulla spiaggia dorata di Seminyak con tramonti spettacolari",
        highlights: ["Sunset sulla spiaggia", "Atmosfera trendy", "Surf spot famoso"]
      },
      {
        name: "Beach Club opzionale",
        time: "Sera",
        description: "Aperitivo in uno dei famosi beach club (Potato Head, Ku De Ta, Finns)",
        price: "Minimum spend da IDR 500k-1M (~€30-65)",
        notes: "Potato Head è iconico, Finns più rilassato e budget-friendly"
      }
    ],
    accommodation: "Seminyak (Hotel 3★ ~€40-60/notte, 4★ ~€80-120/notte)",
    distance: "15 km da aeroporto",
    tips: [
      "Cambio valuta in aeroporto (tasso decente) o preleva da ATM",
      "SIM card locale con internet: Telkomsel ~IDR 100k (€6)",
      "Negotia prezzo taxi prima di partire o usa Grab/Gojek app",
      "Beach club: vai nel tardo pomeriggio per sunset, meno affollato"
    ]
  },
  {
    day: 2,
    date: "12 Agosto",
    title: "Ubud Immersione Culturale",
    locations: ["Ubud", "Monkey Forest", "Tegallalang Rice Terraces"],
    coordinates: [-8.5069, 115.2625],
    activities: [
      {
        name: "Tegallalang Rice Terraces + Swing",
        time: "Mattina presto (8:00)",
        description: "Terrazze di riso iconiche patrimonio UNESCO con swing nella giungla",
        price: "Ingresso IDR 50k (~€3) + Swing IDR 200-350k (~€13-23)",
        highlights: ["Foto Instagram perfette", "Bali Swing famoso", "Paesaggi mozzafiato"]
      },
      {
        name: "Sacred Monkey Forest Sanctuary",
        time: "Metà giornata",
        description: "Foresta sacra con oltre 700 macachi, templi antichi e banyan giganti",
        price: "IDR 80k (~€5)",
        highlights: ["Macachi curiosi e giocherelloni", "3 antichi templi Hindu", "Natura lussureggiante"]
      },
      {
        name: "Centro Ubud",
        time: "Pomeriggio",
        description: "Esplora mercato artigianale, Palazzo Reale e caffè bohémien",
        highlights: ["Ubud Art Market (shopping souvenir)", "Ubud Royal Palace", "Caffè con vista risaie"]
      }
    ],
    accommodation: "Ubud (Hotel/Resort con vista risaie ~€50-100/notte)",
    distance: "~35 km da Seminyak (1.5h)",
    tips: [
      "Parti PRESTO (7:00) per evitare folle e caldo",
      "Monkey Forest: non portare cibo, tengono saldamente borse",
      "Swing: vestiti colorati/fluttuanti per foto migliori",
      "Pranzo: warung locale economico (~IDR 30-50k = €2-3)",
      "Driver privato giornaliero: IDR 600-800k (~€40-50) conveniente"
    ]
  },
  {
    day: 3,
    date: "13 Agosto",
    title: "Cascate & Tempio dell'Acqua",
    locations: ["Tegenungan Waterfall", "Tirta Empul", "Coffee Plantation"],
    coordinates: [-8.5294, 115.2928],
    activities: [
      {
        name: "Tegenungan Waterfall",
        time: "Mattina",
        description: "Cascata spettacolare immersa nella giungla, possibilità di nuotare",
        price: "IDR 20k (~€1.30)",
        highlights: ["Nuoto nella piscina naturale", "Foto dall'alto della cascata", "Swing con vista cascata"]
      },
      {
        name: "Tirta Empul Temple",
        time: "Metà giornata",
        description: "Tempio dell'acqua sacra con piscine di purificazione, esperienza spirituale",
        price: "IDR 50k (~€3)",
        highlights: ["Cerimonia di purificazione (partecipa!)", "Architettura balinese autentica", "Sorgenti sacre"],
        notes: "Porta sarong (in affitto) e cambio costume per rituale purificazione"
      },
      {
        name: "Coffee Plantation",
        time: "Pomeriggio",
        description: "Piantagione di caffè con degustazione del famoso Luwak Coffee",
        price: "Gratuito (degustazione), Luwak coffee IDR 50k (~€3)/tazza",
        highlights: ["Processo caffè Luwak", "Degustazione tè e caffè balinesi", "Swing nella piantagione"]
      }
    ],
    accommodation: "Ubud",
    distance: "~60 km totali da Ubud",
    tips: [
      "Tegenungan: vai presto (8:00) per luce migliore e meno gente",
      "Tirta Empul: vestiti modesti (spalle coperte), porta asciugamano",
      "Partecipa al rituale purificazione per esperienza autentica",
      "Luwak coffee: costoso, assaggia ma puoi evitare acquisto",
      "Pranzo con vista risaie: Aloha Ubud o Sari Organik"
    ]
  },
  {
    day: 4,
    date: "14 Agosto",
    title: "Nusa Penida Adventure",
    locations: ["Kelingking Beach", "Angel's Billabong", "Broken Beach"],
    coordinates: [-8.7274, 115.5447],
    activities: [
      {
        name: "Kelingking Beach (T-Rex)",
        time: "Mattina",
        description: "La spiaggia più iconica di Bali a forma di T-Rex, vista mozzafiato",
        price: "Incluso in day tour",
        highlights: ["Punto panoramico iconico", "Discesa alla spiaggia (45 min, faticosa!)", "Foto Instagram più famosa di Bali"],
        warning: "Discesa alla spiaggia MOLTO ripida e faticosa, solo se in forma!"
      },
      {
        name: "Angel's Billabong",
        time: "Metà giornata",
        description: "Piscina naturale di acqua cristallina tra rocce vulcaniche",
        highlights: ["Nuoto nella piscina naturale", "Acque turchesi trasparenti", "Formazioni rocciose uniche"],
        warning: "⚠️ Attenzione alle onde durante alta marea!"
      },
      {
        name: "Broken Beach (Pasih Uug)",
        time: "Pomeriggio",
        description: "Arco naturale con acqua turchese, paesaggio surreale",
        highlights: ["Arco di roccia naturale", "Vista dall'alto spettacolare", "Foto panoramiche"]
      }
    ],
    accommodation: "Rientro Ubud o Sanur",
    distance: "Fast boat da Sanur (45 min) + tour isola",
    tips: [
      "PRENOTA DAY TOUR in anticipo: IDR 700k-1M (~€45-65) tutto incluso",
        "Partenza PRESTO (6:30-7:00) per fast boat",
        "Porta: crema solare, acqua, snack, costume, scarpe comode",
        "Kelingking: foto dal viewpoint OK, discesa solo se fitness alto",
        "Mare può essere mosso: prendi medicinale per nausea",
        "Tour include: trasporto, fast boat, pranzo, driver su isola",
        "Alternativa: Crystal Bay per snorkeling con manta (stagionale)"
    ]
  },
  {
    day: 5,
    date: "15 Agosto",
    title: "Uluwatu & Kecak Dance",
    locations: ["Uluwatu Temple", "Padang Padang Beach", "Jimbaran"],
    coordinates: [-8.8291, 115.0852],
    activities: [
      {
        name: "Padang Padang Beach",
        time: "Mattina",
        description: "Spiaggia nascosta tra scogliere, resa famosa dal film 'Eat Pray Love'",
        price: "IDR 15k (~€1)",
        highlights: ["Sabbia bianca finissima", "Acqua cristallina per surf", "Atmosfera bohémien"]
      },
      {
        name: "Uluwatu Temple",
        time: "Pomeriggio (16:30)",
        description: "Tempio scenografico su scogliera a 70m sul mare, uno dei 6 templi chiave di Bali",
        price: "IDR 50k (~€3)",
        highlights: ["Vista oceano a 70m altezza", "Architettura balinese antica", "Macachi guardiani del tempio"],
        warning: "⚠️ Macachi rubano occhiali/cappelli! Tieni saldamente"
      },
      {
        name: "Kecak Fire Dance",
        time: "Tramonto (18:00)",
        description: "Spettacolo tradizionale balinese con 70 danzatori, fuoco e tramonto sul mare",
        price: "IDR 150k (~€10)",
        highlights: ["Performance ipnotica con 70 uomini", "Tramonto spettacolare sul mare", "Storia del Ramayana"],
        notes: "PRENOTA in anticipo, posti limitati"
      },
      {
        name: "Jimbaran Seafood Dinner",
        time: "Cena (20:00)",
        description: "Cena romantica di pesce sulla spiaggia con candele e onde",
        price: "IDR 300-500k (~€20-33) per coppia",
        highlights: ["Tavoli sulla sabbia", "Frutti di mare freschissimi", "Atmosfera romantica"]
      }
    ],
    accommodation: "Uluwatu/Jimbaran area",
    distance: "~40 km da Ubud",
    tips: [
      "Uluwatu: arriva 17:00 per esplorare tempio prima dello show",
      "Kecak dance: siediti al centro per vista migliore",
      "Sarong obbligatorio per tempio (noleggio disponibile)",
      "Jimbaran: negozia prezzi prima di ordinare, fissi spesso gonfiati",
      "Consiglio ristorante: Menega Café o Jimbaran Bay Seafood",
      "Surf a Uluwatu per esperti, correnti forti"
    ]
  },
  {
    day: 6,
    date: "16 Agosto",
    title: "Spiagge & Relax",
    locations: ["Nusa Dua", "Beach Club", "Water Sports"],
    coordinates: [-8.7984, 115.2318],
    activities: [
      {
        name: "Nusa Dua Beach",
        time: "Mattina",
        description: "Spiagge bianche protette, acqua calma perfetta per nuoto",
        price: "Gratuito",
        highlights: ["Spiagge pulitissime", "Acqua calma e cristallina", "Zona resort lussuosa"],
        notes: "Migliore per famiglie e nuoto tranquillo"
      },
      {
        name: "Water Sports (opzionale)",
        time: "Metà giornata",
        description: "Attività acquatiche: jet ski, parasailing, banana boat, snorkeling",
        price: "IDR 200-500k (~€13-33) per attività",
        highlights: ["Jet ski", "Parasailing con vista costa", "Snorkeling"]
      },
      {
        name: "Beach Club & Spa",
        time: "Pomeriggio",
        description: "Relax totale in beach club o spa massage balinese",
        price: "Beach club min spend IDR 500k-1M | Spa massage IDR 200-400k (~€13-26)",
        highlights: ["Infinity pool", "Massage balinese tradizionale", "Cocktail al tramonto"]
      }
    ],
    accommodation: "Nusa Dua o rientro Seminyak",
    distance: "~25 km da Jimbaran",
    tips: [
      "Giornata relax dopo giorni intensi",
      "Spa consigliato: Theta Spa, Spring Spa (~IDR 300k per 2h)",
      "Beach club Nusa Dua: meno affollati di Seminyak",
      "Water sports: negozia pacchetti combo per sconto",
      "Alternative: snorkeling a Tanjung Benoa, turtle conservation"
    ]
  },
  {
    day: 7,
    date: "17 Agosto",
    title: "Shopping & Partenza",
    locations: ["Beachwalk Mall", "Seminyak Shopping", "Airport"],
    coordinates: [-8.7184, 115.1686],
    activities: [
      {
        name: "Shopping Last Minute",
        time: "Mattina",
        description: "Ultimi acquisti di souvenir e artigianato balinese",
        highlights: [
          "Beachwalk Mall Kuta (moderno)",
          "Seminyak Village (boutique)",
          "Mercato locale per souvenir economici"
        ],
        notes: "Negozia sempre nei mercati locali (parti da 50% del prezzo)"
      },
      {
        name: "Ultimo relax in spiaggia",
        time: "Fino al check-out",
        description: "Ultima nuotata o massaggio prima della partenza"
      },
      {
        name: "Partenza",
        time: "Pomeriggio/Sera",
        description: "Transfer all'aeroporto Ngurah Rai",
        tips: [
          "Arriva in aeroporto 3 ore prima per voli internazionali",
          "Check bagaglio: no legno grezzo, semi, piante (multe pesanti)",
          "Duty free: cioccolato Bali, caffè, artigianato"
        ]
      }
    ],
    accommodation: "Partenza",
    distance: "15 km a aeroporto",
    tips: [
      "Check-out hotel: 12:00, chiedi late check-out se volo serale",
      "Lascia bagagli in hotel e ultimo giro",
      "Taxi aeroporto: Grab app ~IDR 100-150k (€7-10) da Seminyak",
      "Ricorda: Indonesia ha regole rigide su droghe (pena morte!)"
    ]
  }
];

export const budgetData = {
  budgetBackpacker: {
    name: "Budget Backpacker",
    description: "Guesthouse, street food, trasporti locali",
    items: {
      voli: { min: 600, max: 1200, note: "Low cost con scalo, prenotare in anticipo" },
      alloggi: { min: 280, max: 420, note: "Guesthouse/hostel privato ~€40-60/notte" },
      cibo: { min: 140, max: 280, note: "Warung locali + qualche ristorante ~€20-40/giorno" },
      trasporti: { min: 100, max: 200, note: "Scooter rental + benzina o driver occasionali" },
      attivita: { min: 200, max: 350, note: "Ingressi templi, tour Nusa Penida, water sports base" },
      extra: { min: 100, max: 200, note: "Massaggi, souvenir, drinks" },
    },
    total: { min: 1420, max: 2650 }
  },
  midRange: {
    name: "Mid-Range Confort",
    description: "Hotel 3-4★, mix ristoranti, tour organizzati",
    items: {
      voli: { min: 800, max: 1400, note: "Voli diretti o una sola sosta, bagaglio incluso" },
      alloggi: { min: 420, max: 700, note: "Hotel 3-4★ con piscina ~€60-100/notte" },
      cibo: { min: 280, max: 490, note: "Mix warung + ristoranti medi ~€40-70/giorno" },
      trasporti: { min: 200, max: 350, note: "Driver privato + tour organizzati" },
      attivita: { min: 350, max: 550, note: "Tour completi, spa, beach club, water sports" },
      extra: { min: 200, max: 350, note: "Shopping, massaggi premium, beach club" },
    },
    total: { min: 2250, max: 3840 }
  },
  luxury: {
    name: "Luxury Experience",
    description: "Resort 5★, ristoranti gourmet, tour privati VIP",
    items: {
      voli: { min: 1200, max: 2500, note: "Business class o voli diretti premium" },
      alloggi: { min: 840, max: 2100, note: "Resort 5★ con villa privata €120-300/notte" },
      cibo: { min: 490, max: 840, note: "Ristoranti gourmet e beach club €70-120/giorno" },
      trasporti: { min: 350, max: 700, note: "Driver privato lusso + helicopter tour opzionale" },
      attivita: { min: 700, max: 1400, note: "Tour privati VIP, spa luxury, yacht charter" },
      extra: { min: 420, max: 1000, note: "Shopping luxury, esperienze esclusive" },
    },
    total: { min: 4000, max: 8540 }
  }
};

export const practicalInfo = {
  visa: {
    title: "Visto & Documenti",
    info: [
      "Visto on arrival: €35 (IDR 500k) per 30 giorni",
      "Passaporto valido 6 mesi dalla data di arrivo",
      "Biglietto aereo di ritorno obbligatorio",
      "Assicurazione viaggio fortemente consigliata con copertura medica minima €50.000"
    ]
  },
  vaccinations: {
    title: "Vaccinazioni & Salute",
    required: [
      "❌ NESSUNA vaccinazione OBBLIGATORIA per turisti da Europa",
      "⚠️ Febbre gialla: richiesta SOLO se provenienti da paesi a rischio (Africa, Sud America)"
    ],
    recommended: [
      "✅ Epatite A - FORTEMENTE consigliata (cibo/acqua contaminata)",
      "✅ Epatite B - Consigliata se esposizione a sangue/fluidi corporei",
      "✅ Tifo - Consigliata (cibo/acqua contaminata)",
      "✅ Tetano-Difterite-Pertosse - Aggiorna richiamo se >10 anni",
      "✅ Rabbia - Solo se contatto con animali (cani/scimmie) probabile",
      "✅ Encefalite giapponese - Solo se soggiorno rurale prolungato (>1 mese)"
    ],
    malaria: [
      "✅ Bali è ZONA FREE MALARIA - nessun farmaco antimalarico necessario",
      "⚠️ Dengue presente: usa repellente zanzare, vestiti lunghi alba/tramonto"
    ],
    tips: [
      "Inizia vaccinazioni 4-6 settimane prima partenza",
      "Porta kit pronto soccorso: Imodium, paracetamolo, cerotti, disinfettante",
      "Assicurazione: World Nomads, SafetyWing o Allianz per copertura completa"
    ]
  },
  transport: {
    title: "Trasporti",
    recommendations: [
      "Driver privato: IDR 600-800k/giorno (~€40-50) - CONSIGLIATO",
      "Scooter rental: IDR 70-100k/giorno (~€5-7) - serve patente internazionale",
      "Grab/Gojek app: come Uber, economico e sicuro",
      "Taxi ufficiali: Bluebird (contatore onesto)",
      "Fast boat Nusa Penida: IDR 350-500k (~€23-33) A/R",
      "Traffico intenso: calcola 1.5x tempo Google Maps"
    ],
    warning: "⚠️ Guida scooter: traffico caotico, molti incidenti turisti. Noleggia SOLO se esperto e con assicurazione!"
  },
  money: {
    title: "Denaro & Costi",
    tips: [
      "Valuta: Rupia indonesiana (IDR)",
      "Cambio: €1 ≈ IDR 15.000-16.000",
      "Regola veloce: IDR 100.000 ≈ €6-7",
      "ATM: preleva da banche (BCA, Mandiri) per fee basse",
      "Carte accettate in hotel/ristoranti turistici",
      "Cash necessario per warung, mercati, piccoli shop",
      "Negozia sempre nei mercati (parti da 50% prezzo iniziale)"
    ]
  },
  safety: {
    title: "Sicurezza & Salute",
    tips: [
      "✓ Acqua: bevi SOLO acqua in bottiglia sigillata",
      "✓ Cibo: warung affollati = cibo fresco e sicuro",
      "✓ Bali belly: porta Imodium, probiotici, sali reidratanti",
      "✓ Sole tropicale: crema SPF 50+, reidratati costantemente",
      "✓ Zanzare: repellente, rischio dengue (no malaria a Bali)",
      "⚠️ Droghe: ZERO TOLLERANZA, pena di morte",
      "⚠️ Scam: taxi non ufficiali, prezzi gonfiati per turisti",
      "⚠️ Mare: correnti forti su alcune spiagge, flag rosse = non nuotare"
    ]
  },
  culture: {
    title: "Cultura & Etichetta",
    tips: [
      "Templi: sarong e fascia obbligatori (noleggio in loco)",
      "Vestiti modesti nei templi: spalle e ginocchia coperte",
      "Non toccare testa delle persone (parte sacra del corpo)",
      "Mano sinistra considerata impura: usa destra per dare/ricevere",
      "Offerte (canang): non calpestarle, sono ovunque",
      "Negozia con rispetto e sorriso",
      "Tip non obbligatorio ma apprezzato (10% nei ristoranti)",
      "Galungan & Nyepi: festival importanti, templi chiusi"
    ]
  },
  packing: {
    title: "Cosa Portare",
    essential: [
      "Costume da bagno (almeno 2)",
      "Vestiti leggeri e traspiranti",
      "Sarong per templi (puoi comprare in loco)",
      "Scarpe comode per camminare",
      "Sandali/flip-flop",
      "Giacca leggera per serate o aria condizionata",
      "Crema solare SPF 50+ waterproof",
      "Repellente zanzare DEET 30%+",
      "Medicinali base (Imodium, antidolorifici)",
      "Powerbank e adattatori presa (tipo C/F)",
      "Dry bag per escursioni d'acqua"
    ]
  },
  apps: {
    title: "App Essenziali",
    list: [
      { name: "Grab / Gojek", description: "Trasporti (taxi, scooter, cibo) - ESSENZIALE" },
      { name: "Google Translate", description: "Indonesiano/inglese - molto utile" },
      { name: "Maps.me", description: "Mappe offline dettagliate di Bali" },
      { name: "XE Currency", description: "Convertitore valuta in tempo reale" },
      { name: "GetYourGuide / Klook", description: "Prenota tour e attività con sconti" }
    ]
  },
  weather: {
    title: "Meteo Agosto",
    info: [
      "Stagione secca (maggio-ottobre) - periodo MIGLIORE",
      "Temperature: 26-30°C, umidità alta",
      "Piogge: rare, occasionali brevi acquazzoni pomeridiani",
      "Mare: calmo, ottimo per snorkeling",
      "Sole: tramonto ~18:00, alba ~6:00",
      "Affollamento: alta stagione ma non picco (luglio peggio)"
    ]
  }
};

export const experiencesDatabase = [
  {
    id: "tegallalang-swing",
    name: "Tegallalang Rice Terraces & Swing",
    category: "Natura & Avventura",
    location: { lat: -8.4345, lng: 115.2809 },
    prices: [
      { type: "Ingresso Terraces", price: 50000, currency: "IDR", eur: 3.30 },
      { type: "Single Swing", price: 200000, currency: "IDR", eur: 13 },
      { type: "Double Swing", price: 300000, currency: "IDR", eur: 20 }
    ],
    description: "Terrazze di riso iconiche patrimonio UNESCO con famosi swing nella giungla. Vista mozzafiato per fotografie indimenticabili.",
    pros: ["Foto Instagram perfette", "Paesaggio iconico di Bali", "Varie swing e photo spots"],
    cons: ["Molto turistico", "Affollato dopo le 10:00", "Prezzi gonfiati rispetto a standard locali"],
    booking: "Non necessaria prenotazione, paga in loco",
    duration: "2-3 ore",
    bestTime: "Alba (6:30-8:00) per luce e meno folle"
  },
  {
    id: "monkey-forest",
    name: "Sacred Monkey Forest",
    category: "Natura & Cultura",
    location: { lat: -8.5188, lng: 115.2585 },
    prices: [
      { type: "Ingresso Adulto", price: 80000, currency: "IDR", eur: 5.30 }
    ],
    description: "Foresta sacra di 12.5 ettari con oltre 700 macachi balinesi, 3 templi antichi e banyan giganti. Esperienza unica a contatto con natura e spiritualità.",
    pros: ["Macachi giocherelloni e fotogenici", "Templi Hindu antichi", "Natura lussureggiante"],
    cons: ["Macachi possono essere aggressivi", "Rubano oggetti luccicanti", "Affollato nelle ore centrali"],
    booking: "No prenotazione necessaria",
    duration: "1.5-2 ore",
    tips: "Non portare cibo, tieni saldamente occhiali/cappelli, non guardare macachi negli occhi",
    bestTime: "Mattina presto (8:30-9:30) o tardo pomeriggio"
  },
  {
    id: "nusa-penida-tour",
    name: "Nusa Penida Day Tour",
    category: "Avventura & Mare",
    location: { lat: -8.7274, lng: 115.5447 },
    prices: [
      { type: "Day Tour All-Inclusive", price: 900000, currency: "IDR", eur: 60 }
    ],
    description: "Tour di un'intera giornata all'isola paradisiaca: Kelingking Beach (T-Rex), Angel's Billabong, Broken Beach, Crystal Bay. Include fast boat, driver, pranzo.",
    pros: ["Paesaggi mozzafiato", "Tour organizzato senza stress", "Spiagge più belle di Bali"],
    cons: ["Giornata lunga e faticosa", "Fast boat può essere mosso", "Kelingking discesa molto ripida"],
    booking: "PRENOTARE con 2-3 giorni anticipo (tour operator o hotel)",
    duration: "Giornata intera (11-12 ore)",
    tips: "Parti presto (6:30), porta acqua, crema solare, antinausea se soffri il mare",
    bestTime: "Tutto l'anno, evita alta marea per Angel's Billabong"
  },
  {
    id: "uluwatu-kecak",
    name: "Uluwatu Temple & Kecak Dance",
    category: "Cultura & Spettacolo",
    location: { lat: -8.8291, lng: 115.0852 },
    prices: [
      { type: "Ingresso Tempio", price: 50000, currency: "IDR", eur: 3.30 },
      { type: "Kecak Dance Show", price: 150000, currency: "IDR", eur: 10 }
    ],
    description: "Tempio spettacolare su scogliera a 70m sul mare con tramonto mozzafiato. Kecak Fire Dance con 70 danzatori che narrano il Ramayana al tramonto.",
    pros: ["Tramonto spettacolare", "Spettacolo tradizionale unico", "Architettura impressionante"],
    cons: ["Macachi rubano oggetti", "Molto turistico", "Affollato"],
    booking: "Kecak: prenotare 1 giorno prima, show ore 18:00",
    duration: "3-4 ore (tempio + show)",
    tips: "Arriva 17:00, sarong obbligatorio, attenzione macachi, siediti al centro per show",
    bestTime: "Ogni sera al tramonto (~18:00)"
  },
  {
    id: "tirta-empul",
    name: "Tirta Empul Holy Spring Temple",
    category: "Spirituale & Cultura",
    location: { lat: -8.4154, lng: 115.3155 },
    prices: [
      { type: "Ingresso", price: 75000, currency: "IDR", eur: 5 }
    ],
    description: "Tempio dell'acqua sacra con piscine di purificazione. Partecipa al rituale di purificazione balinese per un'esperienza spirituale autentica.",
    pros: ["Esperienza spirituale unica", "Architettura balinese autentica", "Partecipazione attiva al rituale"],
    cons: ["Affollato", "Serve costume e cambio abiti", "Acqua fredda"],
    booking: "No prenotazione",
    duration: "1.5-2 ore",
    tips: "Porta costume sotto vestiti, asciugamano, rispetta ordine fontane, sarong obbligatorio",
    bestTime: "Mattina presto (8:00-9:00) meno folle"
  },
  {
    id: "spa-massage",
    name: "Balinese Spa & Massage",
    category: "Relax & Benessere",
    location: { lat: -8.6705, lng: 115.2126 },
    prices: [
      { type: "Traditional Massage 60min", price: 150000, currency: "IDR", eur: 10 },
      { type: "Luxury Spa Package 2h", price: 400000, currency: "IDR", eur: 26 }
    ],
    description: "Massaggio balinese tradizionale con oli essenziali, tecnica di pressione e stretching. Spa lussuose con vista panoramica disponibili.",
    pros: ["Prezzi economici rispetto a Europa", "Qualità alta", "Rilassante dopo giorni intensi"],
    cons: ["Variabile qualità in posti economici", "Spa luxury costose"],
    booking: "Luxury spa: prenota 1-2 giorni prima",
    duration: "1-2 ore",
    tips: "Theta Spa, Spring Spa, Karsa Spa consigliati. Street spa OK ma controlla recensioni",
    bestTime: "Pomeriggio o sera dopo attività giornaliere"
  }
];

export const attractions = [
  {
    name: "Seminyak Beach",
    coordinates: { lat: -8.6910, lng: 115.1685 },
    type: "Spiaggia",
    description: "Spiaggia trendy con sabbia dorata, surf spot famoso e tramonti spettacolari. Centro della vita notturna e beach club di Bali.",
    highlights: ["Sunset bar e beach club", "Surf lessons", "Atmosfera trendy"],
    time: "Mezza giornata - sera",
    vibe: "Trendy, internazionale, party"
  },
  {
    name: "Ubud Art Market",
    coordinates: { lat: -8.5070, lng: 115.2583 },
    type: "Shopping & Cultura",
    description: "Mercato artigianale tradizionale con centinaia di bancarelle di artigianato balinese: sarong, sculture legno, gioielli, dipinti.",
    highlights: ["Artigianato locale autentico", "Prezzi negoziabili", "Atmosfera locale"],
    time: "2-3 ore",
    tips: "Negozia sempre! Parti da 50% del prezzo, sorridi, non avere fretta"
  },
  {
    name: "Tegenungan Waterfall",
    coordinates: { lat: -8.5294, lng: 115.2928 },
    type: "Cascata",
    description: "Cascata alta 15m immersa nella giungla con piscina naturale per nuotare. Swing e foto spot panoramici.",
    highlights: ["Nuoto nella cascata", "Jungle swing", "Percorso panoramico"],
    time: "1.5-2 ore",
    tips: "Scalini ripidi (circa 100), vai presto per luce migliore, porta costume"
  },
  {
    name: "Padang Padang Beach",
    coordinates: { lat: -8.8304, lng: 115.0853 },
    type: "Spiaggia",
    description: "Spiaggia nascosta tra scogliere con sabbia bianca e acqua cristallina. Famosa dal film 'Eat Pray Love', spot surf.",
    highlights: ["Sabbia bianca finissima", "Accessibile tramite grotta", "Atmosfera intima"],
    time: "2-3 ore",
    tips: "Piccola e affollata, vai presto. Low tide migliore per spazio. Correnti forti per surf"
  },
  {
    name: "Jimbaran Bay",
    coordinates: { lat: -8.7697, lng: 115.1658 },
    type: "Spiaggia & Gastronomia",
    description: "Baia tranquilla famosa per cene romantiche di pesce sulla spiaggia. Decine di ristoranti con tavoli sulla sabbia.",
    highlights: ["Seafood fresco", "Cena romantica sulla spiaggia", "Tramonto"],
    time: "Sera (cena)",
    tips: "Negozia prezzi prima di ordinare. Menega Café, Jimbaran Bay Seafood consigliati"
  },
  {
    name: "Nusa Dua Beach",
    coordinates: { lat: -8.7984, lng: 115.2318 },
    type: "Spiaggia",
    description: "Spiagge protette con sabbia bianca finissima e acqua calma. Zona resort lussuosa e curata, perfetta per famiglie.",
    highlights: ["Acqua calma", "Spiagge pulitissime", "Water sports"],
    time: "Mezza giornata",
    vibe: "Rilassante, familiare, curato"
  },
  {
    name: "Tanah Lot Temple",
    coordinates: { lat: -8.6212, lng: 115.0868 },
    type: "Tempio",
    description: "Tempio iconico su roccia in mezzo al mare. Uno dei templi più fotografati di Bali, spettacolare al tramonto.",
    highlights: ["Tramonto iconico", "Tempio sul mare", "Foto mozzafiato"],
    time: "2-3 ore (pomeriggio-tramonto)",
    tips: "Low tide: cammina fino al tempio. High tide: isolato. Affollato al tramonto",
    price: "IDR 60k (~€4)"
  }
];

export const foodGuide = {
  warung: {
    title: "Warung (Street Food Locale)",
    description: "Piccoli ristoranti familiari, cibo autentico e economico",
    price: "IDR 20-50k (~€1.50-3.50) per pasto",
    mustTry: [
      "Nasi Goreng (riso fritto indonesiano)",
      "Mie Goreng (noodles fritti)",
      "Nasi Campur (riso con vari contorni)",
      "Sate (spiedini carne con salsa arachidi)",
      "Gado-Gado (verdure con salsa arachidi)"
    ],
    tips: "Warung affollato = cibo fresco. Chiedi 'tidak pedas' (non piccante) se necessario"
  },
  midRange: {
    title: "Ristoranti Mid-Range",
    description: "Cucina balinese e internazionale, ambiente carino",
    price: "IDR 80-200k (~€5-13) per pasto",
    recommended: [
      "Locavore (Ubud) - cucina innovativa",
      "Mama San (Seminyak) - asiatico fusion",
      "Warung Biah Biah (Sanur) - balinese autentico",
      "Bebek Bengil (Ubud) - anatra croccante famoso"
    ]
  },
  beachClub: {
    title: "Beach Club & Fine Dining",
    description: "Esperienza luxury con vista",
    price: "IDR 300k-1M+ (~€20-65+)",
    famous: [
      "Potato Head Beach Club (Seminyak)",
      "Ku De Ta (Seminyak)",
      "Finns Beach Club (Canggu)",
      "Rock Bar (Ayana Resort)"
    ],
    tips: "Minimum spend richiesto, prenota per sunset. Dress code smart casual"
  }
};

export const safeRestaurants = {
  ubud: {
    area: "Ubud",
    restaurants: [
      {
        name: "Locavore",
        type: "Fine Dining",
        cuisine: "Moderna indonesiana",
        price: "IDR 800k-1.5M (~€53-100)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Ristorante premiato, igiene impeccabile, ingredienti premium",
        booking: "Prenotazione obbligatoria"
      },
      {
        name: "KAFE (Kafe Ubud)",
        type: "Casual",
        cuisine: "Occidentale & Indonesiana",
        price: "IDR 80-150k (~€5-10)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Standard igienici alti, molto popolare tra expat e turisti",
        location: "Jl. Hanoman, Ubud"
      },
      {
        name: "Watercress",
        type: "Healthy Bowl",
        cuisine: "Salutista occidentale",
        price: "IDR 90-180k (~€6-12)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Ingredienti biologici, acqua filtrata, igiene perfetta",
        location: "Ubud centro"
      },
      {
        name: "Bridges Bali",
        type: "Fine Dining",
        cuisine: "Internazionale",
        price: "IDR 300-600k (~€20-40)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Vista sul fiume, standard resort 5⭐️, ottimo per occasioni speciali",
        location: "Jl. Raya Campuhan"
      },
      {
        name: "Warung Pondok Madu",
        type: "Warung Locale",
        cuisine: "Balinese tradizionale",
        price: "IDR 30-60k (~€2-4)",
        safety: "⭐️⭐️⭐️⭐️ Ottimo",
        highlights: "Popolare tra locali, sempre affollato (= cibo fresco), pulito",
        tips: "Vai nelle ore di punta (12-14 / 19-21) per massima freschezza"
      },
      {
        name: "Kebun Bistro",
        type: "Casual",
        cuisine: "Fusion asiatica",
        price: "IDR 100-200k (~€7-13)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Vista risaie, igiene impeccabile, perfetto per pranzo",
        location: "Sanggingan, Ubud"
      }
    ]
  },
  seminyak: {
    area: "Seminyak & Canggu",
    restaurants: [
      {
        name: "Motel Mexicola",
        type: "Casual Fun",
        cuisine: "Messicana",
        price: "IDR 150-300k (~€10-20)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Coloratissimo, standard internazionali, perfetto per cena divertente",
        booking: "Prenotazione consigliata sera"
      },
      {
        name: "Warung Eropa",
        type: "Warung Premiato",
        cuisine: "Balinese autentica",
        price: "IDR 40-80k (~€3-5)",
        safety: "⭐️⭐️⭐️⭐️ Ottimo",
        highlights: "Uno dei warung PIÙ SICURI, pulitissimo, sempre pieno di turisti",
        location: "Jl. Raya Seminyak",
        tips: "Perfetto per prima esperienza warung, igiene sopra media"
      },
      {
        name: "Sisterfields",
        type: "Cafè All-Day",
        cuisine: "Brunch occidentale",
        price: "IDR 100-200k (~€7-13)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Standard australiani, ingredienti importati, acqua filtrata",
        location: "Seminyak"
      },
      {
        name: "Warung Sika",
        type: "Warung",
        cuisine: "Indonesiana",
        price: "IDR 35-70k (~€2.50-5)",
        safety: "⭐️⭐️⭐️⭐️ Ottimo",
        highlights: "Canggu, molto popolare, pulito, ottime porzioni",
        location: "Canggu"
      },
      {
        name: "La Lucciola",
        type: "Fine Dining",
        cuisine: "Italiana",
        price: "IDR 250-500k (~€17-33)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Sulla spiaggia, standard internazionali, romantico",
        booking: "Prenotazione per sunset"
      }
    ]
  },
  sanur: {
    area: "Sanur & Nusa Dua",
    restaurants: [
      {
        name: "Warung Mak Beng",
        type: "Warung Iconico",
        cuisine: "Pesce alla griglia",
        price: "IDR 40k (~€2.70) - PREZZO FISSO",
        safety: "⭐️⭐️⭐️⭐️ Ottimo",
        highlights: "LEGGENDA di Sanur, aperto da decenni, sempre freschissimo, fila di locali",
        menu: "Unico piatto: pesce grigliato + riso + zuppa + verdure",
        tips: "Vai 11:30-13:00, fila ma veloce. CASH ONLY"
      },
      {
        name: "Genius Cafè",
        type: "Casual",
        cuisine: "Internazionale",
        price: "IDR 80-150k (~€5-10)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Sanur, standard alti, popolare tra expat residenti",
        location: "Jl. Danau Poso, Sanur"
      },
      {
        name: "Nusa Dua Beach Grill",
        type: "Resort Restaurant",
        cuisine: "Seafood & Griglia",
        price: "IDR 200-400k (~€13-27)",
        safety: "⭐️⭐️⭐️⭐️⭐️ Eccellente",
        highlights: "Standard resort 5⭐️, sulla spiaggia, perfetto per famiglie",
        location: "Nusa Dua area resort"
      }
    ]
  },
  tips: {
    title: "Come Scegliere Ristoranti Sicuri",
    rules: [
      "✅ REGOLA D'ORO: Se è pieno di locali/turisti = cibo fresco e sicuro",
      "✅ Warung affollati alle 12-13 e 19-20 = turnover veloce = freschezza",
      "✅ Osserva pulizia tavoli, pavimento, vetrina cibo",
      "✅ Cibo cucinato al momento > cibo in vetrina da ore",
      "✅ Ristoranti in hotel/resort = standard igienici occidentali",
      "⚠️ Evita: warung vuoti, cibo esposto al sole, mosconi, strade trafficate (polvere)",
      "⚠️ Acqua: SEMPRE in bottiglia sigillata, rifiuta cubetti ghiaccio se dubbioso",
      "⚠️ Frutta: solo sbucciabile (banana, mango, papaya). Evita fragole, insalate crude se non lavate con acqua filtrata",
      "💡 Apps utili: Google Maps reviews, TripAdvisor per check igiene recente"
    ]
  }
};
