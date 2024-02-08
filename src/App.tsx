import './App.css';
import AboutContent from './features/about/AboutContent';
import Footer from './features/footer/Footer';
import Header from './features/header/Header';
import HeroContent from './features/hero/HeroContent';
import HowItWorksContent from './features/how-it-works/HowItWorksContent';
import PlansContent from './features/plans/PlansContent';
import SupportedContent from './features/supported/SupportedContent';
import TestimonialsContent from './features/testimonials/TestimonialsContent';
import WellnessContent from './features/wellness/WellnessContent';

export default function App() {
  return (
    <main>
      <Header />
      <HeroContent />
      <AboutContent />
      <HowItWorksContent />
      <PlansContent />
      <TestimonialsContent />
      <SupportedContent />
      <WellnessContent />
      <Footer />
    </main>
  );
}
