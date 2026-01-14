import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import SectionDivider from '@/components/ui/SectionDivider';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative">
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


