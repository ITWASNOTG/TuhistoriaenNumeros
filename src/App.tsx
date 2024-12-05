import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { StatsGrid } from './components/StatsGrid';
import { Footer } from './components/Footer';
import { ShareButton } from './components/ShareButton';
import { SEO } from './components/SEO';
import { Analytics } from './components/Analytics';
import { calculateAge } from './utils/dateCalculations';
import { trackEvent } from './utils/analytics';
import PrivacyPolicy from './routes/privacidad';
import TermsOfService from './routes/terminos';

function HomePage() {
  const [stats, setStats] = useState<ReturnType<typeof calculateAge> | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    if (!isNaN(date.getTime())) {
      setBirthDate(date);
      const newStats = calculateAge(date);
      setStats(newStats);

      trackEvent('DATE_SELECTED', {
        birthDate: date.toISOString(),
        userAge: newStats.years,
      });
    }
  };

  useEffect(() => {
    if (stats) {
      trackEvent('STATS_VIEWED', {
        days: stats.days,
        months: stats.months,
        years: stats.years,
      });
    }
  }, [stats]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <Hero onDateChange={handleDateChange} />
        
        {stats && (
          <section className="animate-slide-up" id="stats-container">
            <StatsGrid stats={stats} />
            <div className="mt-8 md:mt-16 text-center max-w-2xl mx-auto space-y-6 md:space-y-8 px-4">
              <p className="text-xl md:text-2xl font-display text-gray-800 leading-relaxed">
                "Eres el resultado de <span className="font-bold text-blue-600">{stats.days.toLocaleString()}</span> días vividos. 
                <br className="hidden md:block" />¿Qué harás con los próximos?"
              </p>
              
              {birthDate && <ShareButton stats={stats} birthDate={birthDate} />}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <>
      <SEO />
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfService />} />
      </Routes>
    </>
  );
}