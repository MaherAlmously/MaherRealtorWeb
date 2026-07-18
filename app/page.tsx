import { About } from "@/components/site/about";
import { AreasServed } from "@/components/site/areas-served";
import { BuySell } from "@/components/site/buy-sell";
import { Contact } from "@/components/site/contact";
import { FeaturedListing } from "@/components/site/featured-listing";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { QuickActions } from "@/components/site/quick-actions";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { WhyMaher } from "@/components/site/why-maher";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <FeaturedListing />
        <About />
        <BuySell />
        <AreasServed />
        <WhyMaher />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
