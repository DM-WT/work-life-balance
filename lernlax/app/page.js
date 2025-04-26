"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/layout/HeroSection';
import ProgressBar from './components/layout/ProgressBar';
import Card from './components/common/Card';
import ResultSummary from './components/layout/ResultSummary';
import MotivationalTip from './components/common/MotivationalTip';
import CTAButton from './components/common/CTAButton';

export default function Home() {
  const [moodRating, setMoodRating] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const progress = 65;

  const results = [
    { topic: 'Stimmung', score: 7 },
    { topic: 'Schlafqualität', score: 8 },
    { topic: 'Energielevel', score: 6 },
  ];

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Selbsthilfe', href: '/selbsthilfe' },
    { label: 'Ressourcen', href: '/ressourcen' },
    { label: 'Stimmungs-Tracker', href: '/tracker' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/journal');
      if (!response.ok) throw new Error('Fehler beim Abrufen der Einträge.');
      const data = await response.json();
      setJournalEntries(data);
    } catch (error) {
      console.error('Fehler beim Laden:', error.message);
    }
  };

  const handleSaveEntry = async () => {
    if (journalEntry.trim() !== '') {
      try {
        setLoading(true);
        console.log('Speichern gestartet');
        const response = await fetch('/api/journal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: journalEntry }),
        });

        if (!response.ok) {
          throw new Error('Fehler beim Speichern des Eintrags.');
        }

        console.log('Speichern erfolgreich');
        setJournalEntry('');
        await fetchEntries();
      } catch (error) {
        console.error('Fehler beim Speichern:', error.message);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn('Kein Text zum Speichern.');
    }
  };

  return (
    <main className="p-2 sm:p-4">
      <div className="container">
        <Navbar logo="/lernlax-logo.png" links={links} />

        <HeroSection
          title="Dein mentales Wohlbefinden ist wichtig"
          subtitle="Entdecke hilfreiche Werkzeuge und Ressourcen für deine psychische Gesundheit."
          image="/mental-health-hero.svg"
          onStart={() => console.log('Wellness-Journey gestartet')}
        />

        {/* Stimmung Tracker */}
        <div className="my-6 sm:my-8 lg:my-10">
          <Card
            title="Wie fühlst du dich heute?"
            description="Deine tägliche Stimmungsverfolgung hilft dir, Muster zu erkennen und dein Wohlbefinden zu verbessern."
            image="/mood-tracking.svg"
          >
            <div className="mood-tracker mt-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="mood-icon" onClick={() => setMoodRating(num)}>
                  {['😔', '😕', '😐', '🙂', '😊'][num - 1]}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Fortschritt */}
        <div className="my-4">
          <h3 className="text-center mb-2">Dein Achtsamkeits-Streak: {progress}%</h3>
          <ProgressBar progress={progress} />
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
          <ResultSummary title="Deine Wohlbefindens-Übersicht" results={results} />
        </div>

        {/* Ressourcen */}
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

        {/* Journaling Bereich - KORREKT ANGEPASST */}
        <div className="my-6 sm:my-8 lg:my-10">
          <div className="quiz-card p-4 bg-white rounded shadow">
            <h3 className="text-center mb-4">Gedanken-Journal</h3>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Schreibe deine Gedanken und Gefühle..."
              className="w-full p-4 rounded border shadow focus:outline-none"
              rows={5}
            />
            <div className="text-center mt-4">
              <button
                type="button"
                className="cta-button"
                onClick={handleSaveEntry}
                disabled={loading}
              >
                {loading ? 'Speichern...' : 'Speichern'}
              </button>
            </div>
          </div>
        </div>

        {/* Anzeige der gespeicherten Einträge */}
        <div className="my-6 sm:my-8 lg:my-10">
          <h3 className="text-center mb-6">Deine bisherigen Einträge</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {journalEntries.map((entry, index) => (
              <div key={index} className="card">
                <h4 className="mb-2">{new Date(entry.created_at).toLocaleString()}</h4>
                <p>{entry.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
