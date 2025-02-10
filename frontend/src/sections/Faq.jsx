import { faqData } from "../constants/home.constants";
import { FAQItem } from "../components/FAQItem";

export const FAQ = () => {
    return (
      <div className="bg-[#E2F0F4] py-20 rounded-3xl" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bodoni md:text-5xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions (FAQ)
          </h2>
  
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    );
  };