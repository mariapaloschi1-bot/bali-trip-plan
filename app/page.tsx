'use client';

import { useState, useMemo } from 'react';
import { Calendar, MapPin, DollarSign, Info, AlertTriangle, Car, Package, Mountain, Palmtree, UtensilsCrossed } from 'lucide-react';
import dynamic from 'next/dynamic';
import { itineraryData, budgetData, practicalInfo, experiencesDatabase, attractions, foodGuide, safeRestaurants } from '@/lib/data';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'experiences' | 'budget' | 'info'>('itinerary');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Prepare map locations
  const mapLocations = useMemo(() => {
    const locs: any[] = [];
    
    itineraryData.forEach((day) => {
      locs.push({
        lat: day.coordinates[0],
        lng: day.coordinates[1],
        name: `Giorno ${day.day}: ${day.title}`,
        type: `day-${day.day}`,
        description: day.locations.join(', ')
      });
    });

    return locs;
  }, []);

  const filteredExperiences = selectedCategory === 'all' 
    ? experiencesDatabase 
    : experiencesDatabase.filter(exp => exp.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(experiencesDatabase.map(e => e.category)))];

  return (
    <main className="min-h-screen bg-black text-tropical-pink">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-tropical-purple/20 to-black py-8 md:py-12 px-4 border-b-2 border-tropical-pink/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-tropical-pink via-tropical-lilac to-tropical-pink bg-clip-text text-transparent">
            🌺 Viaggio a Bali
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-tropical-light mb-2">11-17 Agosto 2026 • 7 Giorni</p>
          <p className="text-sm md:text-base lg:text-lg text-tropical-pink/80 max-w-2xl mx-auto px-4">
            Itinerario completo per esplorare il paradiso tropicale di Bali: templi, risaie, spiagge e cultura balinese
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b-2 border-tropical-pink/30">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex overflow-x-auto py-3 md:py-4 gap-2 no-scrollbar">
            <TabButton 
              active={activeTab === 'itinerary'} 
              onClick={() => setActiveTab('itinerary')}
              icon={<Calendar className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Itinerario
            </TabButton>
            <TabButton 
              active={activeTab === 'experiences'} 
              onClick={() => setActiveTab('experiences')}
              icon={<Palmtree className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Esperienze
            </TabButton>
            <TabButton 
              active={activeTab === 'budget'} 
              onClick={() => setActiveTab('budget')}
              icon={<DollarSign className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Budget
            </TabButton>
            <TabButton 
              active={activeTab === 'info'} 
              onClick={() => setActiveTab('info')}
              icon={<Info className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Info
            </TabButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6 py-6 md:py-8">
        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-6 md:space-y-8">
            {/* Map Section */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                Mappa dell'Isola
              </h2>
              <div className="mb-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDay(null)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
                    selectedDay === null
                      ? 'bg-gradient-to-r from-tropical-pink to-tropical-lilac text-black font-bold'
                      : 'bg-gray-800 text-tropical-pink border border-tropical-pink/30'
                  }`}
                >
                  Tutti
                </button>
                {itineraryData.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
                      selectedDay === day.day
                        ? 'bg-gradient-to-r from-tropical-pink to-tropical-lilac text-black font-bold'
                        : 'bg-gray-800 text-tropical-pink border border-tropical-pink/30'
                    }`}
                  >
                    G{day.day}
                  </button>
                ))}
              </div>
              <MapView locations={mapLocations} selectedDay={selectedDay} />
            </section>

            {/* Daily Itinerary */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                Itinerario Dettagliato
              </h2>
              <div className="space-y-4 md:space-y-6">
                {itineraryData
                  .filter(day => selectedDay === null || day.day === selectedDay)
                  .map((day) => (
                    <DayCard key={day.day} day={day} />
                  ))}
              </div>
            </section>
          </div>
        )}

        {/* Experiences Tab */}
        {activeTab === 'experiences' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-3">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Palmtree className="w-6 h-6 md:w-8 md:h-8" />
                Esperienze & Attrazioni
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all capitalize text-sm md:text-base ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-tropical-pink to-tropical-lilac text-black font-bold'
                      : 'bg-gray-800 text-tropical-pink border border-tropical-pink/30'
                  }`}
                >
                  {cat === 'all' ? 'Tutte' : cat}
                </button>
              ))}
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filteredExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>

            {/* Attractions List */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Attrazioni Principali</h3>
              <div className="space-y-3 md:space-y-4">
                {attractions.map((attr, idx) => (
                  <AttractionCard key={idx} attraction={attr} />
                ))}
              </div>
            </div>

            {/* Food Guide */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-6 h-6" />
                Guida Food & Drink
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <FoodCard food={foodGuide.warung} />
                <FoodCard food={foodGuide.midRange} />
                <FoodCard food={foodGuide.beachClub} />
              </div>
            </div>

            {/* Safe Restaurants */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                🛑 Ristoranti Sicuri & Consigliati
              </h3>
              <div className="mb-4 p-4 bg-green-900/20 border border-green-500/50 rounded-lg">
                <p className="text-sm md:text-base text-green-300 font-bold mb-2">💡 Come Scegliere:</p>
                <ul className="space-y-1 text-xs md:text-sm text-green-200/80">
                  {safeRestaurants.tips.rules.slice(0, 5).map((rule, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <RestaurantSection area={safeRestaurants.ubud} />
                <RestaurantSection area={safeRestaurants.seminyak} />
                <RestaurantSection area={safeRestaurants.sanur} />
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8" />
              Stima Budget (Coppia, 7 Giorni)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <BudgetCard budget={budgetData.budgetBackpacker} />
              <BudgetCard budget={budgetData.midRange} highlighted />
              <BudgetCard budget={budgetData.luxury} />
            </div>

            {/* Budget Breakdown */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 md:p-6 border-2 border-tropical-lilac/30">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Dettaglio Costi (Mid-Range)</h3>
              <div className="space-y-3 md:space-y-4">
                {Object.entries(budgetData.midRange.items).map(([key, item]) => (
                  <div key={key} className="border-b border-tropical-pink/20 pb-2 md:pb-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                      <span className="font-bold capitalize text-base md:text-lg">{key}</span>
                      <span className="text-tropical-light font-bold text-base md:text-lg">
                        €{item.min} - €{item.max}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-tropical-pink/70">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currency Converter */}
            <div className="bg-gradient-to-br from-tropical-purple/20 to-black rounded-xl p-4 md:p-6 border-2 border-tropical-lilac/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">💱 Conversione Valuta</h3>
              <div className="space-y-3">
                <p className="text-base md:text-lg">
                  <span className="font-bold">Rupia Indonesiana (IDR):</span> €1 ≈ IDR 15.000-16.000
                </p>
                <p className="text-sm md:text-base text-tropical-pink/80">
                  Regola veloce: <strong>IDR 100.000 ≈ €6-7</strong>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mt-4">
                  {[50000, 100000, 200000, 500000, 1000000, 2000000].map(idr => (
                    <div key={idr} className="bg-black rounded-lg p-2 md:p-3 text-center border border-tropical-lilac/30">
                      <div className="text-xs md:text-sm text-tropical-pink/70">
                        {idr >= 1000000 ? `${idr/1000000}M` : `${idr/1000}k`} IDR
                      </div>
                      <div className="text-base md:text-lg font-bold text-tropical-lilac">
                        ≈ €{Math.round(idr/15000)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Tab */}
        {activeTab === 'info' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 md:w-8 md:h-8" />
              Informazioni Pratiche
            </h2>

            {/* Visa */}
            <InfoSection icon={<Info className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.visa.title}>
              <ul className="space-y-2">
                {practicalInfo.visa.info.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-tropical-lilac mt-1 flex-shrink-0">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Vaccinations */}
            <InfoSection icon={<AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.vaccinations.title} warning>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-red-300 mb-2">❌ Obbligatorie:</p>
                  <ul className="space-y-1">
                    {practicalInfo.vaccinations.required.map((vax, idx) => (
                      <li key={idx} className="text-sm md:text-base">{vax}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-yellow-300 mb-2">✅ Fortemente Consigliate:</p>
                  <ul className="space-y-1">
                    {practicalInfo.vaccinations.recommended.map((vax, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                        <span className="flex-shrink-0">•</span>
                        <span>{vax}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-green-900/20 border border-green-500/50 rounded-lg">
                  <p className="font-bold text-green-300 mb-1">Malaria & Dengue:</p>
                  <ul className="space-y-1">
                    {practicalInfo.vaccinations.malaria.map((info, idx) => (
                      <li key={idx} className="text-sm md:text-base text-green-200/80">{info}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <p className="font-bold text-blue-300 mb-1">💡 Consigli:</p>
                  <ul className="space-y-1">
                    {practicalInfo.vaccinations.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-blue-200/80">
                        <span className="flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InfoSection>

            {/* Transport */}
            <InfoSection 
              icon={<Car className="w-5 h-5 md:w-6 md:h-6" />} 
              title={practicalInfo.transport.title}
              warning
            >
              <ul className="space-y-2 mb-4">
                {practicalInfo.transport.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-tropical-lilac flex-shrink-0 mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-red-900/20 border border-red-500/50 rounded-lg">
                <p className="text-sm md:text-base text-red-300">{practicalInfo.transport.warning}</p>
              </div>
            </InfoSection>

            {/* Money */}
            <InfoSection icon={<DollarSign className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.money.title}>
              <ul className="space-y-2">
                {practicalInfo.money.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-tropical-lilac flex-shrink-0 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Safety */}
            <InfoSection 
              icon={<AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />} 
              title={practicalInfo.safety.title}
              warning
            >
              <ul className="space-y-2">
                {practicalInfo.safety.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-lg md:text-xl flex-shrink-0">{tip.startsWith('✓') ? '✓' : '⚠️'}</span>
                    <span>{tip.replace(/^[✓⚠️]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Culture */}
            <InfoSection icon={<Palmtree className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.culture.title}>
              <ul className="space-y-2">
                {practicalInfo.culture.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-tropical-lilac flex-shrink-0 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Packing List */}
            <InfoSection icon={<Package className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.packing.title}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {practicalInfo.packing.essential.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black p-2 md:p-3 rounded-lg border border-tropical-pink/30">
                    <span className="text-tropical-lilac flex-shrink-0">✓</span>
                    <span className="text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Apps */}
            <InfoSection icon={<Info className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.apps.title}>
              <div className="space-y-2 md:space-y-3">
                {practicalInfo.apps.list.map((app, idx) => (
                  <div key={idx} className="bg-black p-3 md:p-4 rounded-lg border border-tropical-lilac/30">
                    <h4 className="font-bold text-base md:text-lg text-tropical-lilac">{app.name}</h4>
                    <p className="text-xs md:text-sm text-tropical-pink/80 mt-1">{app.description}</p>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Weather */}
            <InfoSection icon={<Info className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.weather.title}>
              <ul className="space-y-2">
                {practicalInfo.weather.info.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-tropical-lilac flex-shrink-0 mt-1">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-tropical-purple/20 to-black border-t-2 border-tropical-pink/30 mt-12 md:mt-16 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-tropical-pink/70 text-sm md:text-base">
            🌺 Selamat jalan! (Buon viaggio!) • Planning creato con ❤️ per un'avventura indimenticabile a Bali
          </p>
          <p className="text-tropical-pink/50 text-xs md:text-sm mt-2">
            Bali è magica ma rispetta cultura locale, natura e tradizioni. Enjoy responsibly! 🙏
          </p>
        </div>
      </footer>
    </main>
  );
}

// Component definitions
function TabButton({ active, onClick, icon, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg whitespace-nowrap transition-all text-sm md:text-base ${
        active
          ? 'bg-gradient-to-r from-tropical-pink to-tropical-lilac text-black font-bold'
          : 'bg-gray-800 text-tropical-pink border border-tropical-pink/30 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function DayCard({ day }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-tropical-purple/10 to-black rounded-xl p-4 md:p-6 border-2 border-tropical-pink/30 hover:border-tropical-lilac/60 transition-all">
      {/* Header */}
      <div className="mb-3 md:mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-tropical-light">
            Giorno {day.day} • {day.date}
          </h3>
          <span className="text-xs md:text-sm bg-tropical-lilac/20 px-3 py-1 rounded-full border border-tropical-lilac/50 w-fit">
            {day.distance}
          </span>
        </div>
        <h4 className="text-lg md:text-xl text-tropical-pink">{day.title}</h4>
      </div>

      {/* Activities */}
      <div className="space-y-3 md:space-y-4 mb-3 md:mb-4">
        {day.activities.map((activity: any, idx: number) => (
          <div key={idx} className="bg-black/50 rounded-lg p-3 md:p-4 border border-tropical-pink/20">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
              <div className="flex-1">
                <h5 className="font-bold text-base md:text-lg text-tropical-light">{activity.name}</h5>
                {activity.time && <span className="text-xs md:text-sm text-tropical-pink/70">{activity.time}</span>}
              </div>
              {activity.price && (
                <div className="text-xs md:text-sm bg-tropical-lilac/10 px-2 py-1 rounded border border-tropical-lilac/30 w-fit">
                  <span className="break-words">💰 {activity.price}</span>
                </div>
              )}
            </div>
            <p className="text-sm md:text-base text-tropical-pink/80 mb-2">{activity.description}</p>
            {activity.highlights && (
              <ul className="space-y-1 mt-2">
                {activity.highlights.map((h: string, i: number) => (
                  <li key={i} className="text-xs md:text-sm text-tropical-pink/70 flex items-start gap-2">
                    <span className="text-tropical-lilac flex-shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            {activity.notes && (
              <p className="text-xs md:text-sm text-tropical-lilac mt-2 italic">💡 {activity.notes}</p>
            )}
            {activity.warning && (
              <div className="mt-2 p-2 bg-red-900/20 border border-red-500/50 rounded">
                <p className="text-xs md:text-sm text-red-300">⚠️ {activity.warning}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="space-y-2 text-xs md:text-sm">
        <div className="flex items-start gap-2 bg-black/30 p-2 md:p-3 rounded-lg">
          <span className="font-bold text-tropical-light flex-shrink-0">🏨</span>
          <div>
            <span className="font-bold text-tropical-light">Pernottamento: </span>
            <span className="text-tropical-pink/80">{day.accommodation}</span>
          </div>
        </div>

        {day.tips && (
          <div className="bg-blue-900/20 p-2 md:p-3 rounded-lg border border-blue-500/30">
            <p className="font-bold text-blue-300 mb-1 md:mb-2">💡 Consigli del giorno:</p>
            <ul className="space-y-1">
              {day.tips.map((tip: string, i: number) => (
                <li key={i} className="text-xs md:text-sm text-blue-200/80 flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-tropical-purple/10 to-black rounded-xl overflow-hidden border-2 border-tropical-pink/30 hover:border-tropical-lilac/60 transition-all">
      <div className="p-4 md:p-6">
        <div className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-tropical-light mb-1">{experience.name}</h3>
          <p className="text-xs text-tropical-pink/70">{experience.category}</p>
        </div>

        <p className="text-sm md:text-base text-tropical-pink/80 mb-3 md:mb-4">{experience.description}</p>

        {/* Prices */}
        <div className="space-y-2 mb-3 md:mb-4">
          {experience.prices.map((price: any, idx: number) => (
            <div key={idx} className="flex flex-col xs:flex-row xs:justify-between xs:items-center bg-black/50 p-2 rounded border border-tropical-lilac/20 gap-1">
              <span className="text-xs md:text-sm">{price.type}</span>
              <span className="font-bold text-tropical-lilac text-sm md:text-base">
                {price.price.toLocaleString()} IDR <span className="text-xs text-tropical-pink/70">(≈€{price.eur})</span>
              </span>
            </div>
          ))}
        </div>

        {/* Pros/Cons */}
        {experience.pros && (
          <div className="space-y-2 mb-3 md:mb-4">
            <div className="space-y-1">
              {experience.pros.map((pro: string, i: number) => (
                <p key={i} className="text-xs md:text-sm text-green-300 flex items-start gap-2">
                  <span className="flex-shrink-0">✓</span>
                  <span>{pro}</span>
                </p>
              ))}
            </div>
            {experience.cons && (
              <div className="space-y-1">
                {experience.cons.map((con: string, i: number) => (
                  <p key={i} className="text-xs md:text-sm text-orange-300 flex items-start gap-2">
                    <span className="flex-shrink-0">−</span>
                    <span>{con}</span>
                  </li>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Additional Info */}
        <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
          {experience.duration && (
            <p className="text-tropical-pink/70">⏱️ Durata: {experience.duration}</p>
          )}
          {experience.bestTime && (
            <p className="text-tropical-lilac">🌅 Best time: {experience.bestTime}</p>
          )}
          {experience.tips && (
            <p className="text-orange-300">💡 {experience.tips}</p>
          )}
          <p className="text-tropical-pink/70">📝 {experience.booking}</p>
        </div>
      </div>
    </div>
  );
}

function AttractionCard({ attraction }: any) {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-tropical-purple/10 to-black rounded-lg p-3 md:p-4 border-l-4 border-tropical-lilac">
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex-1">
          <h4 className="text-base md:text-lg font-bold text-tropical-light mb-1">{attraction.name}</h4>
          <p className="text-xs md:text-sm text-tropical-pink/70 mb-2">{attraction.type}</p>
          <p className="text-sm md:text-base text-tropical-pink/80 mb-2">{attraction.description}</p>
          
          {attraction.highlights && (
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
              {attraction.highlights.map((h: string, i: number) => (
                <span key={i} className="text-xs bg-tropical-lilac/10 px-2 py-1 rounded border border-tropical-lilac/30">
                  {h}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm mt-2 md:mt-3">
            {attraction.time && <span className="text-tropical-pink/70">⏱️ {attraction.time}</span>}
            {attraction.vibe && <span className="text-tropical-lilac">✨ {attraction.vibe}</span>}
            {attraction.price && <span className="text-green-300">💰 {attraction.price}</span>}
          </div>

          {attraction.tips && (
            <div className="mt-2 p-2 bg-blue-900/20 border border-blue-500/30 rounded">
              <p className="text-xs md:text-sm text-blue-300">{attraction.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BudgetCard({ budget, highlighted = false }: any) {
  return (
    <div className={`rounded-xl p-4 md:p-6 ${
      highlighted 
        ? 'bg-gradient-to-br from-tropical-lilac/20 via-tropical-pink/20 to-tropical-purple/20 border-4 border-tropical-lilac' 
        : 'bg-gradient-to-br from-gray-900 to-black border-2 border-tropical-pink/30'
    }`}>
      {highlighted && (
        <div className="text-center mb-3">
          <span className="bg-gradient-to-r from-tropical-pink to-tropical-lilac text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold">
            ⭐ CONSIGLIATO
          </span>
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-tropical-light">{budget.name}</h3>
      <p className="text-center text-xs md:text-sm text-tropical-pink/70 mb-3 md:mb-4">{budget.description}</p>
      
      <div className="text-center py-3 md:py-4 bg-black/50 rounded-lg border border-tropical-lilac/30">
        <div className="text-xl md:text-3xl font-bold text-tropical-lilac">
          €{budget.total.min.toLocaleString()} - €{budget.total.max.toLocaleString()}
        </div>
        <div className="text-xs md:text-sm text-tropical-pink/70 mt-1">per coppia</div>
      </div>

      {budget.items && (
        <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
          {Object.entries(budget.items).map(([key, item]: [string, any]) => (
            <div key={key} className="flex justify-between text-xs md:text-sm border-b border-tropical-pink/10 pb-1">
              <span className="capitalize text-tropical-pink/80">{key}</span>
              <span className="font-bold text-tropical-lilac">€{item.min}-€{item.max}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoSection({ icon, title, children, warning = false }: any) {
  return (
    <div className={`rounded-xl p-4 md:p-6 border-2 ${
      warning 
        ? 'bg-gradient-to-br from-red-900/20 to-black border-red-500/50' 
        : 'bg-gradient-to-br from-gray-900 via-tropical-purple/10 to-black border-tropical-lilac/30'
    }`}>
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

function FoodCard({ food }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-tropical-purple/10 to-black rounded-xl p-4 md:p-6 border-2 border-tropical-pink/30">
      <h4 className="text-lg md:text-xl font-bold text-tropical-light mb-2">{food.title}</h4>
      <p className="text-xs md:text-sm text-tropical-pink/70 mb-3">{food.description}</p>
      <div className="mb-3 p-2 bg-black/50 rounded border border-tropical-lilac/30">
        <p className="text-sm md:text-base font-bold text-tropical-lilac">{food.price}</p>
      </div>
      
      {food.mustTry && (
        <div className="mb-3">
          <p className="font-bold text-sm mb-2">Must Try:</p>
          <ul className="space-y-1">
            {food.mustTry.map((dish: string, i: number) => (
              <li key={i} className="text-xs md:text-sm text-tropical-pink/80 flex items-start gap-2">
                <span className="text-tropical-lilac flex-shrink-0">•</span>
                <span>{dish}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {food.recommended && (
        <div className="mb-3">
          <p className="font-bold text-sm mb-2">Consigliati:</p>
          <ul className="space-y-1">
            {food.recommended.map((place: string, i: number) => (
              <li key={i} className="text-xs md:text-sm text-tropical-pink/80 flex items-start gap-2">
                <span className="text-tropical-lilac flex-shrink-0">•</span>
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {food.famous && (
        <div className="mb-3">
          <p className="font-bold text-sm mb-2">Più Famosi:</p>
          <ul className="space-y-1">
            {food.famous.map((place: string, i: number) => (
              <li key={i} className="text-xs md:text-sm text-tropical-pink/80 flex items-start gap-2">
                <span className="text-tropical-lilac flex-shrink-0">•</span>
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {food.tips && (
        <div className="mt-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded">
          <p className="text-xs md:text-sm text-blue-300">💡 {food.tips}</p>
        </div>
      )}
    </div>
  );
}

function RestaurantSection({ area }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-tropical-purple/10 to-black rounded-xl p-4 md:p-6 border-2 border-tropical-lilac/30">
      <h4 className="text-lg md:text-xl font-bold text-tropical-light mb-4">🌴 {area.area}</h4>
      <div className="space-y-4">
        {area.restaurants.map((restaurant: any, idx: number) => (
          <div key={idx} className="bg-black/50 rounded-lg p-3 md:p-4 border border-tropical-pink/20">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div>
                <h5 className="font-bold text-base md:text-lg text-tropical-light">{restaurant.name}</h5>
                <p className="text-xs text-tropical-pink/70">{restaurant.type} • {restaurant.cuisine}</p>
              </div>
              <div className="text-xs md:text-sm bg-tropical-lilac/10 px-2 py-1 rounded border border-tropical-lilac/30 w-fit">
                {restaurant.safety}
              </div>
            </div>
            <p className="text-sm md:text-base font-bold text-tropical-lilac mb-2">{restaurant.price}</p>
            <p className="text-xs md:text-sm text-tropical-pink/80 mb-2">{restaurant.highlights}</p>
            {restaurant.location && (
              <p className="text-xs text-tropical-pink/60">📍 {restaurant.location}</p>
            )}
            {restaurant.menu && (
              <p className="text-xs text-yellow-300 mt-2">🍽️ {restaurant.menu}</p>
            )}
            {restaurant.tips && (
              <div className="mt-2 p-2 bg-blue-900/20 border border-blue-500/30 rounded">
                <p className="text-xs text-blue-300">💡 {restaurant.tips}</p>
              </div>
            )}
            {restaurant.booking && (
              <p className="text-xs text-orange-300 mt-2">📞 {restaurant.booking}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
