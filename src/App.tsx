import './App.css';
import AboutContent from './features/about/AboutContent';

import Header from './features/header/Header';
import HeroContent from './features/hero/HeroContent';
import HowItWorksContent from './features/how-it-works/HowItWorksContent';

export default function App() {
  return (
    <main>
      <Header />
      <HeroContent />
      <AboutContent />
      <HowItWorksContent />
    </main>
  );
}
