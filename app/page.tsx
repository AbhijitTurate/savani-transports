import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Testimonials from "./home/components/Testimonials";
import DirectorInfo from "./home/components/DirectorInfo";
import FAQ from "./home/components/Faq";
import TransportSolutions from "./home/components/TransportSolutions";
import ContactUsbanner from "./home/components/ContactUsbanner";
import Awards from "./home/components/Awards";
import HeroHomeSection from "./home/components/HeroHomeSection";
import TrustedCompanies from "./home/components/TrustedCompanies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='w-screen h-screen bg-[#F6F9FF] flex flex-col gap-10'>
      <Navbar />
      <HeroHomeSection />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 md:gap-[6.5rem] mx-8 md:mx-[5.25rem] my-16">
        <TrustedCompanies />
        <TransportSolutions />
        <ContactUsbanner />
        <FAQ />
        <DirectorInfo />
        <Testimonials />
        {/* <Awards /> */}
      </div>
      <Footer />
    </div>
  );
}
