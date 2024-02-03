import './App.css';
import AboutContent from './features/about/AboutContent';

import Header from './features/header/Header';
import HeroContent from './features/hero/HeroContent';

export default function App() {
  return (
    <main>
      <Header />
      <HeroContent />
      <AboutContent />
    </main>
  );
}
