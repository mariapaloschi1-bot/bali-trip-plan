export const budgetData = {
  tiers: [
    {
      name: "💸 Budget Backpacker",
      totalRange: "€1.420 - €2.650",
      breakdown: [
        { category: "Voli A/R", cost: "€600-1.200" },
        { category: "Alloggi (7 notti)", cost: "€280-420" },
        { category: "Pasti", cost: "€140-280" },
        { category: "Trasporti", cost: "€100-200" },
        { category: "Esperienze", cost: "€200-350" },
        { category: "Extra", cost: "€100-200" }
      ]
    },
    {
      name: "🏨 Mid-Range Comfort",
      totalRange: "€2.250 - €3.840",
      breakdown: [
        { category: "Voli A/R", cost: "€800-1.400" },
        { category: "Alloggi (7 notti)", cost: "€420-700" },
        { category: "Pasti", cost: "€280-490" },
        { category: "Trasporti", cost: "€200-350" },
        { category: "Esperienze", cost: "€350-550" },
        { category: "Extra", cost: "€200-350" }
      ]
    },
    {
      name: "✨ Luxury Experience",
      totalRange: "€4.000 - €8.540",
      breakdown: [
        { category: "Voli A/R", cost: "€1.200-2.500" },
        { category: "Alloggi (7 notti)", cost: "€840-2.100" },
        { category: "Pasti", cost: "€490-840" },
        { category: "Trasporti", cost: "€350-700" },
        { category: "Esperienze", cost: "€700-1.400" },
        { category: "Extra", cost: "€420-1.000" }
      ]
    }
  ],
  conversionTable: [
    { idr: 50000, eur: "3.30" },
    { idr: 100000, eur: "6.60" },
    { idr: 200000, eur: "13.20" },
    { idr: 500000, eur: "33" },
    { idr: 1000000, eur: "66" }
  ]
};

export const practicalInfo = {
  transport: [
    "Driver privato: IDR 600-800k/giorno (~€40-50) - RACCOMANDATO",
    "Include: auto con AC, autista parlante inglese, benzina, parcheggi",
    "Prenotabile tramite: hotel, GetYourGuide, Klook",
    "Grab/Gojek app: economico per spostamenti brevi in città",
    "Fast boat Nusa Penida: incluso in day tour (~€60)",
    "❌ Scooter NON consigliato: traffico caotico, molti incidenti turisti"
  ],
  vaccines: [
    "❌ NESSUNA vaccinazione OBBLIGATORIA per turisti da Europa",
    "✅ Epatite A - FORTEMENTE consigliata (cibo/acqua)",
    "✅ Epatite B - Consigliata se esposizione a sangue/fluidi",
    "✅ Tifo - Consigliata (cibo/acqua)",
    "✅ Tetano - Aggiorna richiamo se >10 anni",
    "✅ Rabbia - Solo se contatto animali probabile",
    "✅ Bali è ZONA FREE MALARIA - nessun farmaco necessario",
    "⚠️ Dengue presente: repellente zanzare DEET 30%+",
    "Inizia vaccinazioni 4-6 settimane prima partenza"
  ],
  safety: [
    "Acqua: bevi SOLO in bottiglia sigillata",
    "Cibo: warung affollati = sicuri, evita cibo crudo",
    "Bali belly: porta Imodium, probiotici",
    "Sole tropicale: SPF 50+, reidratati spesso",
    "Zanzare: repellente DEET 30%+ alba/tramonto",
    "Droghe: ZERO TOLLERANZA, pena morte",
    "Mare: correnti forti, rispetta bandiere",
    "Assicurazione viaggio: World Nomads, SafetyWing"
  ],
  packing: [
    "Costume da bagno (2+)",
    "Vestiti leggeri traspiranti",
    "Sarong per templi (obbligatorio)",
    "Scarpe comode + sandali",
    "Crema solare SPF 50+",
    "Repellente zanzare DEET 30%+",
    "Medicinali: Imodium, paracetamolo, cerotti",
    "Powerbank",
    "Adattatori presa (tipo C/F - europei)"
  ],
  apps: [
    "Grab/Gojek - Trasporti (ESSENZIALE)",
    "Google Translate - Indonesiano",
    "Maps.me - Mappe offline Bali",
    "XE Currency - Convertitore IDR/EUR",
    "GetYourGuide/Klook - Prenota tour con sconti"
  ]
};
