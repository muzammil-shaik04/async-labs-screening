import { VariantProvider } from "./context/VariantContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueStrip } from "./components/ValueStrip";
import { WhyAttend } from "./components/WhyAttend";
import { ScreensShowcase } from "./components/ScreensShowcase";
import { UseCases } from "./components/UseCases";
import { HowItWorks } from "./components/HowItWorks";
import { Specs } from "./components/Specs";
import { WaitlistCTA } from "./components/WaitlistCTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <VariantProvider>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-[var(--color-paper)]"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <WhyAttend />
        <ScreensShowcase />
        <UseCases />
        <HowItWorks />
        <Specs />
        <WaitlistCTA />
      </main>
      <Footer />
    </VariantProvider>
  );
}

export default App;
