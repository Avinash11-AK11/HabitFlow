import Hero from '../sections/Hero';
import Features from '../sections/Features';
import WhyChooseUs from '../sections/WhyChooseUs';
import Screenshots from '../sections/Screenshots';
import HowItWorks from '../sections/HowItWorks';
import Roadmap from '../sections/Roadmap';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import DownloadCTA from '../sections/DownloadCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <WhyChooseUs />
      <Screenshots />
      <HowItWorks />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </div>
  );
}
