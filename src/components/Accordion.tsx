import { useState } from "react";
import { motion } from "framer-motion";
import {   FaChevronDown} from "react-icons/fa";
type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};

const accordionData: AccordionItem[] = [
    {
      id: 1,
      question: "What Does Dishpal Offer?",
      answer:
        "Dishpal.AI is an innovative platform that delivers personalized, real-time, location-based discounts tailored to your shopping preferences. By leveraging advanced AI algorithms and geolocation technology, we ensure you receive the most relevant deals, enhancing your shopping experience and helping you save money.",
    },
    {
      id: 2,
      question: "What Types Of Products Can I Find Here?",
      answer:
        "Dishpal offers a wide variety of products to suit your needs. From daily essentials to specialty items, our platform connects you to an extensive range of categories, including groceries, electronics, clothing, and more. Additionally, our intelligent filtering ensures that you discover products that align with your preferences and budget, making shopping more personalized and convenient.",
    },
    {
      id: 3,
      question: "Is My Personal Information Safe Using This Website?",
      answer:
        "Yes, your personal information is a top priority for us. We implement advanced security measures, such as end-to-end encryption and regular security audits, to ensure that your data remains private and protected at all times. Our platform is compliant with global data protection standards to give you peace of mind while using our services.",
    },
    {
      id: 4,
      question: "Can Your AI Feature Help Me Compare Products?",
      answer:
        "Absolutely! Our AI-powered comparison tool is designed to simplify your decision-making process. By analyzing multiple factors like price, quality, and user reviews, our AI helps you evaluate different products quickly and efficiently. This feature ensures that you make informed choices, saving both time and money during your shopping journey.",
    },
    {
      id: 5,
      question: "When Will The Website Be Ready?",
      answer:
        "Our team is working tirelessly to bring you an exceptional user experience. The website is currently in the final stages of development, with extensive testing being conducted to ensure optimal performance. We anticipate launching very soon, and we can't wait to have you explore the platform when it's ready. Stay tuned for updates!",
    },
  ];
  

const Accordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-screen-sm lg:max-w-screen-2xl mx-auto  flex flex-col text-white  shadow-lg gap-4">
      {accordionData.map(({ id, question, answer }) => (
        <div
          key={id}
          className="bg-white text-black rounded-3xl border-dashed border-2  border-gray-700 px-4 py-2"
        >
          <button
            onClick={() => toggleAccordion(id)}
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          >
            <span className="text-lg font-medium text-black">{question}</span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: openId === id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="transform ml-4"
            >
              <FaChevronDown />
            </motion.span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openId === id ? "auto" : 0,
              opacity: openId === id ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-black">{answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
