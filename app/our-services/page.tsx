import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceSections from "../home/components/ServiceSections";
import FooterBillboard from "../home/components/FooterBillboard";
import TransportSolutions from "../home/components/TransportSolutions";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <h2 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color mx-8 md:mx-[5.25rem] -mb-10 md:-mb-4  mt-2 md:mt-6">Our Services</h2>
            <div className="flex flex-col items-center justify-center gap-16 md:gap-[6.5rem] mx-8 md:mx-[5.25rem] my-16">
                <TransportSolutions />
                <h2 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color -mb-10 md:-mb-4
">Core Services</h2>
                <ServiceSections />
                <FooterBillboard />

            </div>
            <Footer />
        </div>
    );
}
