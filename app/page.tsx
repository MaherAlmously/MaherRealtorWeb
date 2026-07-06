import { About } from "@/components/site/about";
import { AreasServed } from "@/components/site/areas-served";
import { Buying } from "@/components/site/buying";
import { Contact } from "@/components/site/contact";
import { FeaturedListings } from "@/components/site/featured-listings";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { QuickActions } from "@/components/site/quick-actions";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Selling } from "@/components/site/selling";
import { WhyMaher } from "@/components/site/why-maher";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <About />
        <Buying />
        <Selling />
        <AreasServed />
        <FeaturedListings />
        <WhyMaher />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
