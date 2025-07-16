"use client";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    // FAQs stored as an array of objects with question and answer
    const faqs = [
        {
            question: "What is Savani Transport?",
            answer:
                "At Savani Transport, we pride ourselves on delivering top-notch transportation services. Our team is dedicated to ensuring your goods are transported safely and on time. With a fleet of modern vehicles and experienced drivers, we handle everything from local deliveries to long-distance logistics. Trust us to manage your transportation needs with professionalism and care.",
        },
        {
            question: "How can I book a service with Savani Transport?",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "What areas do you serve? ",
            answer:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        },
        {
            question: "What types of vehicles do you use? ",
            answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        },
        {
            question: "How do you ensure the safety of my goods?",
            answer:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 md:w-full">
            <h1 className="text-32 tracking-[-0.02em] font-figtree md:text-40 font-semibold mb-6">
                Frequently Asked Questions
            </h1>
            <div className="space-y-2 flex-1">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-sm bg-secondary-bg-color"
                    >
                        <button
                            className={`flex justify-between items-center w-full px-8 ${openIndex === index ? 'pb-2 pt-4' :'py-4'} text-left text-primary-text-color font-medium`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold font-figtree tracking-[-0.02em] text-base">{faq.question}</span>
                            {/* <span
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span> */}
                            <img src={`/assets/${openIndex === index ?'CaretUp.svg' :'CaretDown.svg'}`} alt="Caret Down Icon" />
                        </button>
                        {openIndex === index && (
                            <div className="px-8 pb-4 tracking-[-0.02em] text-sm text-primary-text-color-70 font-figtree text-base">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
