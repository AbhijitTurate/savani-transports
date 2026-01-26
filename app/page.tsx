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
import IndiaMapComponent from "./home/components/IndiaMapComponent";
import WhySavaniTransport from "./home/components/WhySavaniTransport";
import CoreValues from "./home/components/CoreValues";
import ServiceSections from "./home/components/ServiceSections";
import BillboardBanner from "./home/components/BillboardBanner";
import FooterBillboard from "./home/components/FooterBillboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='w-screen min-h-screen  bg-[#E4F1FA] flex flex-col gap-10'>
      <Navbar />
      <HeroHomeSection />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 md:gap-[6.5rem] mx-8 md:mx-[5.25rem] my-16">
        <TrustedCompanies />
        {/* <CoreValues /> */}
        <ServiceSections />
        <TransportSolutions />
        <IndiaMapComponent />
        <BillboardBanner />
        <ContactUsbanner />
        <FAQ />
        <WhySavaniTransport />

        {/* <DirectorInfo /> */}
        <Testimonials />
        <FooterBillboard />
        {/* <Awards /> */}
      </div>
      <Footer />
    </div>
  );
}
