import { LazyMotion, domAnimation } from 'motion/react';
import { LanguageProvider } from './i18n/LanguageProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Dojos } from './components/Dojos';
import { Features } from './components/Features';
import { Contributors } from './components/Contributors';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <HowItWorks />
            <Dojos />
            <Features />
            <Contributors />
            <Faq />
            <FinalCta />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </LanguageProvider>
  );
}
