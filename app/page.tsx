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
        {/* <ServiceSections /> */}
        {/* <TransportSolutions /> */}
        <IndiaMapComponent />
        <BillboardBanner />
        {/* <ContactUsbanner /> */}
        <FAQ />
        <WhySavaniTransport />

        {/* <DirectorInfo /> */}
        <section className="w-screen py-0 px-6 md:px-20">
          {/* <h2 className="font-figtree text-2xl md:text-5xl font-semibold primary-text-color text-center">    */}
          <h2 className="
    font-figtree 
    text-2xl md:text-5xl 
    font-semibold 
    primary-text-color 
    text-center
    max-w-5xl 
    mx-auto
    leading-snug md:leading-tight
  ">
             At Savani, customers remain at the centre of everything we do. Our dedicated teams ensure responsive communication, clear coordination, and reliable support throughout the shipment lifecycle.
          </h2>

          </section>
        <Testimonials />
        <FooterBillboard />
        {/* <Awards /> */}
      </div>
      <Footer />
    </div>
  );
}
