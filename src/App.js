import './App.css';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import Hero from './components/Hero';
import OtherServices from './components/OtherServices';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturesSection />
      <OtherServices />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
