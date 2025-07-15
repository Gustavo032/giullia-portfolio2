import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Courses from '../components/Courses';
import Skills from '../components/Skills';
import Qualities from '../components/Qualities';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackToTop from '../components/BackToTop';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral dark:bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Education />
        <Courses />
        <Skills />
        <Qualities />
        <Gallery />
        <Testimonials />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
      <BackToTop />
    </div>
  );
}
