import { useEffect, useState } from "react";
import { useIsMobile, usePrefersReducedMotion } from "./hooks/useMediaQuery";
import { useSmoothScroll } from "./lib/useSmoothScroll";

import PageLoader from "./components/layout/PageLoader";
import CustomCursor from "./components/layout/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Manifesto from "./components/sections/Manifesto";
import Signature from "./components/sections/Signature";
import SignatureSelection from "./components/sections/SignatureSelection";
import Stats from "./components/sections/Stats";
import Approach from "./components/sections/Approach";
import FeaturedProperty from "./components/sections/FeaturedProperty";
import BeforeAfter from "./components/sections/BeforeAfter";
import Neighborhoods from "./components/sections/Neighborhoods";
import Interiors from "./components/sections/Interiors";
import Journal from "./components/sections/Journal";
import Lifestyle from "./components/sections/Lifestyle";
import Testimonials from "./components/sections/Testimonials";
import Team from "./components/sections/Team";

function App() {
  const [ready, setReady] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useSmoothScroll(ready);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <>
      {!ready && <PageLoader onComplete={() => setReady(true)} />}
      {!isMobile && <CustomCursor />}
      <Navbar />

      <main>
        <Hero ready={ready} />
        <SignatureSelection />
        <Manifesto />
        <Signature motion={!reducedMotion} isMobile={isMobile} />
        <Approach />
        <Stats />
        <FeaturedProperty />
        <BeforeAfter />
        <Neighborhoods />
        <Interiors />
        <Journal />
        <Lifestyle />
        <Testimonials />
        <Team />
      </main>

      <Footer />
    </>
  );
}

export default App;
