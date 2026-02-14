'use client';
import { useState } from 'react';
import MapView from '@/components/MapView';
import { 
  itineraryData, 
  budgetData, 
  practicalInfo,
  experiencesDatabase,
  attractions,
  safeRestaurants
} from '@/lib/data';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Transform itineraryData to locations format for MapView
  const mapLocations = itineraryData.flatMap((day, dayIndex) => 
    day.activities.map((activity, actIndex) => ({
      lat: day.coordinates[0],
      lng: day.coordinates[1],
      name: activity.name,
      type: `day-${dayIndex}`,
      description: activity.description
    }))
  );

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/20 via-gray-900 to-gray-950 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-primary">
            🌺 Viaggio a Bali
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto px-4">
            Una settimana tra templi, risaie e spiagge tropicali
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            <TabButton active={activeTab === 'itinerary'} onClick={() => setActiveTab('itinerary')}>
              📍 Itinerario
            </TabButton>
            <TabButton active={activeTab === 'experiences'} onClick={() => setActiveTab('experiences')}>
              🎯 Esperienze
            </TabButton>
            <TabButton active={activeTab === 'budget'} onClick={() => setActiveTab('budget')}>
              💰 Budget
            </TabButton>
            <TabButton active={activeTab === 'info'} onClick={() => setActiveTab('info')}>
              ℹ️ Info Pratiche
            </TabButton>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* ITINERARY TAB */}
        {activeTab === 'itinerary' && (
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-primary/20">
              <div className="p-4 sm:p-6 border-b border-primary/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">🗺️ Mappa dell'Isola</h2>
              </div>
              <MapView 
                locations={mapLocations}
                selectedDay={selectedDay}
              />
            </div>

            {/* Days */}
            <div className="space-y-6">
              {itineraryData.map((day, index) => (
                <DayCard 
                  key={index} 
                  day={day} 
                  dayNumber={index + 1}
                  isSelected={selectedDay === index}
                  onClick={() => setSelectedDay(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCES TAB */}
        {activeTab === 'experiences' && (
          <div className="space-y-8">
            {/* Experiences Database */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">🎯 Database Esperienze</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-gray-950 font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Tutte
                  </button>
                  {Array.from(new Set(experiencesDatabase.map(e => e.category))).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat
                          ? 'bg-primary text-gray-950 font-semibold'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {experiencesDatabase
                  .filter(exp => selectedCategory === 'all' || exp.category === selectedCategory)
                  .map((exp, idx) => (
                    <ExperienceCard key={idx} experience={exp} />
                  ))}
              </div>
            </div>

            {/* Attractions */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">🏛️ Attrazioni Principali</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {attractions.map((attraction, idx) => (
                  <AttractionCard key={idx} attraction={attraction} />
                ))}
              </div>
            </div>

            {/* Safe Restaurants */}
            <RestaurantArea restaurants={safeRestaurants} />
          </div>
        )}

        {/* BUDGET TAB */}
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-primary/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">💰 Calcolo Budget</h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Stime per <strong>1 settimana (7 notti)</strong> per <strong>2 persone</strong> a Bali. 
                Prezzi aggiornati 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {budgetData.tiers.map((tier, idx) => (
                <BudgetCard key={idx} tier={tier} isHighlight={idx === 1} />
              ))}
            </div>

            {/* Conversion Table */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">💱 Conversione IDR ↔ EUR</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="pb-3 text-primary font-semibold">IDR</th>
                      <th className="pb-3 text-primary font-semibold">EUR (≈)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {budgetData.conversionTable.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800">
                        <td className="py-2">{row.idr.toLocaleString('id-ID')} IDR</td>
                        <td className="py-2">€{row.eur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                * Tasso indicativo 2026: 1 EUR ≈ 17.000 IDR
              </p>
            </div>
          </div>
        )}

        {/* INFO TAB */}
        {activeTab === 'info' && (
          <div className="space-y-8">
            <InfoSection title="🚗 Trasporti & Driver" items={practicalInfo.transport} />
            <InfoSection title="💉 Vaccini & Salute" items={practicalInfo.vaccines} />
            <InfoSection title="⚠️ Sicurezza" items={practicalInfo.safety} />
            <InfoSection title="🎒 Da Portare" items={practicalInfo.packing} />
            <InfoSection title="📱 App Utili" items={practicalInfo.apps} />
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-primary/20 py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
          <p className="text-lg">Selamat jalan! 🌴✨</p>
          <p className="text-sm mt-2">Trip Planner • Bali 2026</p>
        </div>
      </footer>
    </main>
  );
}

// Components
function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold whitespace-nowrap transition-all ${
        active
          ? 'text-primary border-b-2 border-primary'
          : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {children}
    </button>
  );
}

function DayCard({ day, dayNumber, isSelected, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-900 rounded-2xl p-4 sm:p-6 border-2 transition-all cursor-pointer ${
        isSelected ? 'border-primary shadow-lg shadow-primary/20' : 'border-primary/20 hover:border-primary/40'
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
        <div>
          <div className="text-sm text-primary font-semibold mb-1">Giorno {dayNumber}</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100">{day.title}</h3>
          <p className="text-gray-400 text-sm sm:text-base mt-1">📍 {day.locations.join(' → ')}</p>
        </div>
        <div className="bg-primary/10 px-3 sm:px-4 py-2 rounded-lg border border-primary/30 whitespace-nowrap">
          <span className="text-primary font-bold text-sm sm:text-base">{day.distance}</span>
        </div>
      </div>

      <div className="space-y-4">
        {day.activities.map((activity: any, idx: number) => (
          <div key={idx} className="bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
              <h4 className="font-semibold text-gray-100 text-base sm:text-lg">{activity.name}</h4>
              <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap">{activity.price}</span>
            </div>
            {activity.time && (
              <p className="text-sm text-gray-400 mb-2">🕐 {activity.time}</p>
            )}
            <p className="text-sm sm:text-base text-gray-300">{activity.description}</p>
            {activity.safetyNote && (
              <div className="mt-2 p-2 sm:p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-xs sm:text-sm text-green-300">✓ {activity.safetyNote}</p>
              </div>
            )}
            {activity.highlights && activity.highlights.length > 0 && (
              <ul className="mt-2 space-y-1">
                {activity.highlights.map((h: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-400">• {h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {day.accommodation && (
        <div className="mt-4 p-3 sm:p-4 bg-secondary/10 rounded-xl border border-secondary/30">
          <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">🏨 Alloggio</h4>
          <p className="text-sm sm:text-base text-gray-300">{day.accommodation}</p>
        </div>
      )}

      {day.tips && day.tips.length > 0 && (
        <div className="mt-4 p-3 sm:p-4 bg-primary/5 rounded-xl border border-primary/20">
          <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">💡 Consigli</h4>
          <ul className="space-y-1">
            {day.tips.map((tip: string, i: number) => (
              <li key={i} className="text-xs sm:text-sm text-gray-300">• {tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ExperienceCard({ experience }: any) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-gray-100">{experience.name}</h3>
        <span className="bg-secondary/20 text-secondary px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ml-2">
          {experience.category}
        </span>
      </div>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{experience.description}</p>
      
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="text-primary font-bold text-sm sm:text-base">{experience.price}</span>
          {experience.duration && (
            <span className="text-gray-400 text-xs sm:text-sm">• {experience.duration}</span>
          )}
        </div>

        {experience.comparison && (
          <div className="bg-gray-800/50 rounded-lg p-3 space-y-2">
            <div>
              <p className="text-xs text-green-400 font-semibold mb-1">✓ PRO</p>
              <ul className="space-y-1">
                {experience.comparison.pros.map((pro: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-300">• {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-red-400 font-semibold mb-1">✗ CONTRO</p>
              <ul className="space-y-1">
                {experience.comparison.cons.map((con: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-300">• {con}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {experience.officialLinks && experience.officialLinks.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.officialLinks.map((link: any, i: number) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-primary hover:text-secondary underline"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AttractionCard({ attraction }: any) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-primary/20">
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{attraction.name}</h3>
      <p className="text-sm text-gray-400 mb-3">📍 {attraction.location}</p>
      <p className="text-sm sm:text-base text-gray-300 mb-3">{attraction.description}</p>
      <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm">
        <span className="text-primary font-bold">{attraction.price}</span>
        {attraction.duration && (
          <span className="text-gray-400">• {attraction.duration}</span>
        )}
      </div>
      {attraction.tips && (
        <p className="text-xs sm:text-sm text-gray-400 mt-2 italic">💡 {attraction.tips}</p>
      )}
    </div>
  );
}

function BudgetCard({ tier, isHighlight }: any) {
  return (
    <div className={`bg-gray-900 rounded-2xl p-4 sm:p-6 border-2 ${
      isHighlight ? 'border-primary shadow-lg shadow-primary/20' : 'border-primary/20'
    }`}>
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{tier.name}</h3>
        <div className="text-3xl sm:text-4xl font-bold text-gray-100">{tier.totalRange}</div>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">per coppia (7 notti)</p>
      </div>
      <div className="space-y-3">
        {tier.breakdown.map((item: any, idx: number) => (
          <div key={idx} className="flex justify-between items-start text-sm sm:text-base">
            <span className="text-gray-300">{item.category}</span>
            <span className="text-primary font-semibold text-right ml-2">{item.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoSection({ title, items }: any) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-primary/20">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start text-sm sm:text-base">
            <span className="text-primary mr-2 flex-shrink-0">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RestaurantArea({ restaurants }: any) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">🍽️ Ristoranti Sicuri Consigliati</h2>
      <div className="space-y-6">
        {restaurants.map((areaGroup: any, idx: number) => (
          <div key={idx} className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-primary/20">
            <h3 className="text-lg sm:text-xl font-bold text-secondary mb-4">📍 {areaGroup.area}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areaGroup.restaurants.map((restaurant: any, i: number) => (
                <div key={i} className="bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700">
                  <h4 className="font-semibold text-gray-100 mb-1 text-sm sm:text-base">{restaurant.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{restaurant.cuisine}</p>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">{restaurant.description}</p>
                  <div className="flex flex-wrap gap-2 items-center text-xs">
                    <span className="text-primary font-bold">{restaurant.priceRange}</span>
                    {restaurant.hygiene && (
                      <span className="bg-green-900/30 text-green-300 px-2 py-0.5 rounded">
                        ✓ {restaurant.hygiene}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
