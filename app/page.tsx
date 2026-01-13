import {
  Navbar,
  Hero,
  RealityCheck,
  WhySystemsFail,
  WhyAstrah,
  AILeadGenerator,
  AIDealIntelligence,
  AgreementToCash,
  AIInboxZero,
  IntelligenceCore,
  Migration,
  Pricing,
  FooterCTA,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17]">
      <Navbar />
      <Hero />
      <RealityCheck />
      <WhySystemsFail />
      <WhyAstrah />
      <AILeadGenerator />
      <AIDealIntelligence />
      <AgreementToCash />
      <AIInboxZero />
      <IntelligenceCore />
      <Migration />
      <Pricing />
      <FooterCTA />
      <Footer />
    </main>
  );
}
