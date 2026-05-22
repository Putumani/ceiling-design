import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ParallaxDivider from './components/ParallaxDivider'; // New Import
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ParallaxDivider /> {/* Placed between About and Services */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App