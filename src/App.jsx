import React, { Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loadingspinner from './components/Loadingspinner';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Numbers = lazy(() => import('./components/Numbers'));
const LatestProjects = lazy(() => import('./components/LatestProjects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <Loadingspinner />
          </div>
        }
      >
        <div>
          <div className="bg-primary pt-4">
            <Navbar />
            <HeroSection />
          </div>
          <SkillsSection />
          <Services />
          <About />
          <Numbers />
          <LatestProjects />
          <Testimonials />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
