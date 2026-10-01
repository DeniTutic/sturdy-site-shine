import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Process } from "@/components/landing/Process";
import { Projects } from "@/components/landing/Projects";
import { Safety } from "@/components/landing/Safety";
import { Careers } from "@/components/landing/Careers";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { ContactSection } from "@/components/landing/ContactSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Stats />
        <Safety />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <Careers />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
