// page.js

"use client";  // Diese Direktive sorgt dafür, dass React-Hooks wie `useState` funktionieren

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
  // Beispiel-Daten für Komponenten
  const [quizAnswer, setQuizAnswer] = useState('');
  const progress = 50; // Beispiel Fortschritt
  const results = [
    { topic: 'React', score: 8 },
    { topic: 'JavaScript', score: 9 },
  ];

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Quiz', href: '/quiz' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <main className="p-4">
      <Navbar logo="/favicon.ico" links={links} />

      <HeroSection
        title="Willkommen zu unserem Selbsttest"
        subtitle="Finde heraus, wie gut du dich auskennst!"
        image="/hero-image.jpg"
        onStart={() => console.log('Test gestartet')}
      />

      <ProgressBar progress={progress} />

      <div className="my-10">
        <Card
          title="Kartenbeispiel"
          description="Dies ist ein Beispiel für eine wiederverwendbare Karte."
          image="/card-image.jpg"
        />
      </div>

      <div className="my-10">
        <QuizCard
          title="Was ist React?"
          text="Gib hier deine Antwort ein"
          value={quizAnswer}
          onChange={setQuizAnswer}
        />
      </div>

      <div className="my-10">
        <ResultSummary results={results} />
      </div>

      <div className="my-10">
        <MotivationalTip
          title="Tipp des Tages"
          text="Bleib dran, du machst großartige Fortschritte!"
        />
      </div>

      <div className="my-10">
        <CTAButton text="Jetzt starten" onClick={() => console.log('Start gedrückt')} />
      </div>
    </main>
  );
}
