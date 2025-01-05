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
            question: "What is Lorem Ipsum?",
            answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            question: "Why do we use it?",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "Where does it come from?",
            answer:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        },
        {
            question: "Where can I get some?",
            answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 md:w-full">
            <h1 className="text-32 font-figtree md:text-40 font-semibold mb-6">
                Frequently Asked Questions
            </h1>
            <div className="space-y-2 flex-1">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-sm bg-secondary-bg-color"
                    >
                        <button
                            className="flex justify-between items-center w-full px-8 py-4 text-left text-primary-text-color font-medium"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold font-figtree text-base">{faq.question}</span>
                            <span
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="px-8 pb-4 text-sm text-primary-text-color-70 font-figtree text-base">
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
