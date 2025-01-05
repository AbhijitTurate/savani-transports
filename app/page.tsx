import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Testimonials from "./home/components/Testimonials";
import DirectorInfo from "./home/components/DirectorInfo";
import FAQ from "./home/components/Faq";
import TransportSolutions from "./home/components/TransportSolutions";
import ContactUsbanner from "./home/components/ContactUsbanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8 md:gap-[6.5rem] mx-[5.25rem] my-16">
        <TransportSolutions />
        <ContactUsbanner />
        <FAQ />
        <DirectorInfo />
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}
