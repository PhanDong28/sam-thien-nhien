import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <Products />
        <Process />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;