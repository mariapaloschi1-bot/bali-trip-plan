# 🌺 Bali Trip Planner

Un'app web moderna e interattiva per pianificare il tuo viaggio a Bali di 7 giorni (11-17 Agosto 2026).

## ✨ Features

- 🗺️ **Mappa interattiva** dell'isola con percorso completo e marker per ogni giorno
- 📅 **Itinerario dettagliato** giorno per giorno: templi, risaie, spiagge, cultura
- 🏝️ **Database esperienze** con prezzi IDR/EUR, pro/contro e consigli
- 💰 **Calcolo budget** con 3 fasce (Backpacker, Mid-Range, Luxury)
- 📱 **100% Responsive** ottimizzato per mobile
- 🎨 **Design tropicale** dark mode con colori lilla-rosa (#FF6B9D, #C891FF)
- 🍜 **Guida Food & Drink** da street food a beach club
- 🛡️ **Info pratiche** dettagliate: visto, trasporti, sicurezza, cultura

## 🚀 Deploy su Vercel

### Opzione 1: Deploy con GitHub

1. Crea un nuovo repository su GitHub
2. Carica tutti i file di questo progetto
3. Vai su [vercel.com](https://vercel.com)
4. Clicca "New Project"
5. Importa il repository GitHub
6. Vercel rileva automaticamente Next.js
7. Clicca "Deploy"

### Opzione 2: Deploy con Vercel CLI

```bash
npm install -g vercel
cd bali-trip-planner
vercel
```

## 💻 Sviluppo Locale

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev

# Apri http://localhost:3000
```

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🛠️ Stack Tecnologico

- **Next.js 14** - Framework React con export statico
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling responsive tropicale
- **Leaflet** - Mappe interattive di Bali
- **Lucide React** - Icone moderne

## 📱 Ottimizzazione Mobile

- Layout responsive con breakpoint mobile-first
- Tab navigation ottimizzata per touch
- Mappe con zoom e pan fluidi
- Testo leggibile su schermi piccoli
- Cards scorrevoli per esperienze

## 🎨 Design Tropicale

- **Sfondo**: Nero puro (#000000)
- **Testo primario**: Rosa tropicale (#FF6B9D)
- **Secondario**: Lilla (#C891FF)
- **Accenti**: Viola (#9D4EDD)
- **Gradienti**: Rosa → Lilla per bottoni e highlights
- **Font**: System fonts per performance ottimali

## 📄 Contenuto

### Itinerario 7 Giorni
1. **Arrivo Seminyak** - Beach club, relax, sunset
2. **Ubud Cultura** - Tegallalang Rice Terraces, Monkey Forest, swing
3. **Cascate & Templi** - Tegenungan, Tirta Empul, coffee plantation
4. **Nusa Penida** - Kelingking Beach (T-Rex), Angel's Billabong, Broken Beach
5. **Uluwatu** - Tempio su scogliera, Kecak Dance, cena Jimbaran
6. **Spiagge & Relax** - Nusa Dua, water sports, spa
7. **Shopping & Partenza** - Last minute shopping, aeroporto

### Budget Stimato (Coppia)
- **Backpacker**: €1.420 - €2.650
- **Mid-Range** (consigliato): €2.250 - €3.840
- **Luxury**: €4.000 - €8.540

### Esperienze Incluse
- Tegallalang Swing (IDR 200-350k / €13-23)
- Monkey Forest (IDR 80k / €5)
- Nusa Penida Day Tour (IDR 850k / €55)
- Uluwatu Kecak Dance (IDR 150k / €10)
- Tirta Empul purification (IDR 50k / €3)
- Balinese Spa & Massage (IDR 150-400k / €10-26)

### Info Pratiche
- Visto on arrival €35
- Driver privato IDR 600-800k/giorno (~€40-50)
- Conversione: €1 ≈ IDR 15.000
- Grab/Gojek per trasporti
- Stagione secca ad agosto (migliore periodo)

## 🗺️ Mappa

La mappa usa OpenStreetMap via Leaflet con:
- Marker per ogni giorno
- Polyline che connette le tappe
- Popup informativi
- Filtro per giorno singolo
- Centro: Bali, Indonesia

## 🌴 Cultura & Sicurezza

- Sarong obbligatorio nei templi
- Acqua solo in bottiglia sigillata
- Zero tolleranza droghe (pena di morte)
- Rispetta offerte (canang) per strada
- Negozia prezzi nei mercati (parti da 50%)

## 📝 License

MIT

## 👨‍💻 Creato con ❤️

Planning completo per un viaggio indimenticabile a Bali! 🌺

**Selamat jalan!** (Buon viaggio!)
