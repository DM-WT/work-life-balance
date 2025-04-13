"use client";

import { useState } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/layout/HeroSection';
import ProgressBar from './components/layout/ProgressBar';
import Card from './components/common/Card';
import QuizCard from './components/common/QuizCard';
import ResultSummary from './components/layout/ResultSummary';
import MotivationalTip from './components/common/MotivationalTip';
import CTAButton from './components/common/CTAButton';

export default function Home() {
  const [moodRating, setMoodRating] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const progress = 65; // Fortschritt für Mood-Tracking-Streak
  
  // Beispielhafte Mood-Tracking-Ergebnisse
  const results = [
    { topic: 'Stimmung', score: 7 },
    { topic: 'Schlafqualität', score: 8 },
    { topic: 'Energielevel', score: 6 },
  ];

  // Angepasste Links für eine Mental-Health-Website
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Selbsthilfe', href: '/selbsthilfe' },
    { label: 'Ressourcen', href: '/ressourcen' },
    { label: 'Stimmungs-Tracker', href: '/tracker' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <main className="p-2 sm:p-4">
      <div className="container">
        <Navbar logo="/lernlax-logo.png" links={links} />

        <HeroSection
          title="Dein mentales Wohlbefinden ist wichtig"
          subtitle="Entdecke hilfreiche Werkzeuge und Ressourcen für deine psychische Gesundheit."
          image="/mental-health-hero.jpg"
          onStart={() => console.log('Wellness-Journey gestartet')}
        />

        {/* Aktuelle Stimmung Tracker */}
        <div className="my-6 sm:my-8 lg:my-10">
          <Card
            title="Wie fühlst du dich heute?"
            description="Deine tägliche Stimmungsverfolgung hilft dir, Muster zu erkennen und dein Wohlbefinden zu verbessern."
            image="/mood-tracking.jpg"
          >
            <div className="mood-tracker mt-4">
              <div className="mood-icon" onClick={() => setMoodRating(1)}>😔</div>
              <div className="mood-icon" onClick={() => setMoodRating(2)}>😕</div>
              <div className="mood-icon" onClick={() => setMoodRating(3)}>😐</div>
              <div className="mood-icon" onClick={() => setMoodRating(4)}>🙂</div>
              <div className="mood-icon" onClick={() => setMoodRating(5)}>😊</div>
            </div>
          </Card>
        </div>

        {/* Streak-Anzeige */}
        <div className="my-4">
          <h3 className="text-center mb-2">Dein Achtsamkeits-Streak: {progress}%</h3>
          <ProgressBar progress={progress} />
        </div>

        {/* Journaling-Bereich */}
        <div className="my-6 sm:my-8 lg:my-10">
          <QuizCard
            title="Gedanken-Journal"
            text="Schreibe deine Gedanken und Gefühle nieder..."
            value={journalEntry}
            onChange={setJournalEntry}
          />
        </div>

        {/* Atemübung */}
        <div className="my-6 sm:my-8 lg:my-10">
          <div className="breathing-exercise">
            <h3 className="mb-4">Nimm dir einen Moment zum Durchatmen</h3>
            <div className="breathing-circle"></div>
            <p className="mt-4">Folge dem Kreis - einatmen beim Wachsen, ausatmen beim Schrumpfen</p>
          </div>
        </div>

        {/* Wohlbefindens-Zusammenfassung */}
        <div className="my-6 sm:my-8 lg:my-10">
          <ResultSummary 
            title="Deine Wohlbefindens-Übersicht"
            results={results} 
          />
        </div>

        {/* Selbsthilfe-Ressourcen */}
        <div className="my-6 sm:my-8 lg:my-10">
          <h3 className="text-center mb-4">Hilfreiche Ressourcen</h3>
          <div className="resource-card">
            <h4>Achtsamkeitsübungen für Anfänger</h4>
            <p>Einfache Übungen, die du täglich praktizieren kannst.</p>
          </div>
          <div className="resource-card">
            <h4>Gesunder Schlaf-Guide</h4>
            <p>Tipps und Techniken für besseren Schlaf und mehr Erholung.</p>
          </div>
          <div className="resource-card">
            <h4>Stressbewältigung im Alltag</h4>
            <p>Praktische Strategien zur Reduzierung von Stress.</p>
          </div>
        </div>

        <div className="my-6 sm:my-8 lg:my-10">
          <MotivationalTip
            title="Tipp des Tages"
            text="Selbstfürsorge ist kein Egoismus. Du kannst kein Glas aus einer leeren Kanne füllen. Nimm dir heute Zeit für dich selbst."
          />
        </div>

        <div className="my-6 sm:my-8 lg:my-10 text-center">
          <CTAButton text="Starte deine Wohlbefinden-Reise" onClick={() => console.log('Wohlbefinden-Reise gestartet')} />
        </div>
      </div>
    </main>
  );
}