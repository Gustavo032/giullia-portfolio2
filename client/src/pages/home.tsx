import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Courses from '../components/Courses';
import Qualities from '../components/Qualities';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral dark:bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Education />
        <Courses />
        <Qualities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
