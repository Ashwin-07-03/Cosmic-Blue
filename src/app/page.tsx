import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import VehicleOverview from "@/components/sections/VehicleOverview";
import StageInfo from "@/components/sections/StageInfo";
import MissionProfiles from "@/components/sections/MissionProfiles";


import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-cosmic-black min-h-screen">
      <Navbar />
      <Hero />
      <Mission />

      <VehicleOverview />

      <StageInfo
        subtitle="Stage 1"
        title="The Booster"
        description="Powered by 9 Prometheus engines, the first stage provides the initial thrust to escape Earth's gravity well. Fully reusable and capable of autonomous landing."
        specs={[
          { label: "Engine Cycle", value: "8x Full-flow Staged Combustion" },
          { label: "Propellant", value: "LCH4 / LOX" },
          { label: "ISP", value: "340s - 380s" },
          { label: "Total Thrust", value: "713,000 kgf" }
        ]}
        imageSrc="/images/booster-grid-fins.jpg" // Placeholder
        isDark={true}
      />

      <StageInfo
        subtitle="Stage 2"
        title="Payload Delivery"
        description="The vacuum-optimized second stage ensures precise orbital insertion. Featuring a single expanded-nozzle engine for maximum efficiency in the void of space."
        isDark={true}
        isReversed={true}
        specs={[
          { label: "Thrust", value: "1,900 kN" },
          { label: "Height", value: "50 m" },
          { label: "Diameter", value: "9 m" },
          { label: "Payload to LEO", value: "150t" }
        ]}
        imageSrc="/images/stage2-engine.jpg" // Placeholder
      />

      <MissionProfiles />



      <Footer />
    </main>
  );
}
