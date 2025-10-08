import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes! All our memberships are flexible. Monthly plans can be cancelled with 30 days notice. Quarterly and yearly plans can be paused or cancelled with pro-rated refunds.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Absolutely! We have certified personal trainers available for one-on-one sessions. Quarterly and yearly memberships include complimentary PT sessions, or you can purchase individual sessions.",
  },
  {
    question: "What are your peak hours?",
    answer:
      "Our busiest times are typically 6-9 AM and 5-8 PM on weekdays. If you prefer a quieter experience, we recommend visiting during mid-morning or early afternoon.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have free parking for all members with over 100 spaces. We also have secure bike racks for cyclists.",
  },
  {
    question: "Do I need to book classes in advance?",
    answer:
      "For popular classes like HIIT and CrossFit, we recommend booking 24 hours in advance. Walk-ins are welcome subject to availability.",
  },
  {
    question: "What COVID-19 safety measures are in place?",
    answer:
      "We maintain enhanced cleaning protocols, HEPA air filtration, and social distancing measures. Sanitizing stations are available throughout the facility.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const refs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Intersection Observer to trigger fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            FREQUENTLY ASKED <span className="text-green-500">QUESTIONS</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:shadow-green-500 transition-all duration-500 ease-out transform 
              ${
                visibleItems.includes(index.toString())
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span
                  className={`font-semibold text-gray-800 transition-colors duration-300 ${
                    activeIndex === index ? "text-green-500" : ""
                  }`}
                >
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-green-500" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
