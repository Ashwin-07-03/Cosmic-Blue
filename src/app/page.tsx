import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import VehicleOverview from "@/components/sections/VehicleOverview";
import MissionProfiles from "@/components/sections/MissionProfiles";


import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-cosmic-black min-h-screen">
      <Navbar />
      <Hero />
      <Mission />

      <VehicleOverview />

      <MissionProfiles />



      <Footer />
    </main>
  );
}
