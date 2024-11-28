import React from 'react';
import { CheckCircle, Store, Users, Sparkles, ChevronRight, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Benefits from './Benefits';
import Feature from './Feature';
import Contact from './Contact';
import ProblemSolution from './ProblemSolution';



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar/>

      <Hero/>

      {/* Features Section */}
      <Feature/>

      {/* Benefits Section */}
      {/*<Benefits/>*/}
      <ProblemSolution/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPage;