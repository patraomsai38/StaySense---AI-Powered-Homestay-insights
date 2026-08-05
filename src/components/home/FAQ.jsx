import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does StaySense AI recommend homestays?",
    answer:
      "StaySense AI analyzes your preferences, location, ratings, and guest reviews to recommend the best homestays.",
  },
  {
    question: "Can I book homestays directly?",
    answer:
      "Yes. You can browse, compare, and book homestays directly through the platform.",
  },
  {
    question: "Is StaySense suitable for eco-tourism?",
    answer:
      "Absolutely! We focus on eco-friendly accommodations and sustainable travel experiences.",
  },
  {
    question: "Does StaySense provide AI travel recommendations?",
    answer:
      "Yes. Our AI suggests nearby attractions, restaurants, trekking routes, and local experiences.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-green-50 dark:bg-gray-900">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Everything you need to know about StaySense AI.
        </p>

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="mb-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg"
            >

              {faq.question}

              {open === index ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}

            </button>

            {open === index && (
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;