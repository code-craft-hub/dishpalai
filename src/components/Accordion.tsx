import { useState } from "react";
import { motion } from "framer-motion";
import {   FaChevronDown} from "react-icons/fa";
import { useTranslation } from "react-i18next";

type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};



const Accordion = () => {
  const { t } = useTranslation();

  const accordionData: AccordionItem[] = [
      {
        id: 1,
        question: t("whatDoesDishpalT"),
        answer:t("whatDoesDishpalD"),
      },
      {
        id: 2,
        question: t("whatTypesofProcutsT"),
        answer:t("whatTypesofProcutsD"),
      },
      {
        id: 3,
        question: t("isMyPersonalInfoT"),
        answer:t("isMyPersonalInfoD"),
      },
      {
        id: 4,
        question: t("canYourAIFeaturT"),
        answer:t("canYourAIFeaturD"),
      },
      {
        id: 5,
        question: t("readyTimeT"),
        answer:t("readyTimeD"),
      },
    ];
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-screen-sm lg:max-w-screen-2xl mx-auto  flex flex-col text-white gap-4">
      {accordionData.map(({ id, question, answer }) => (
        <div
          key={id}
          className="bg-white text-black rounded-3xl border-dashed border-2  border-gray-700 px-4 py-2"
        >
          <button
            onClick={() => toggleAccordion(id)}
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          >
            <span className="text-[13px] ss:text-sm sxx:text-[16px] xss:text-[20px] font-syne font-medium text-black">{question}</span>
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
            <div className="p-4 text-black text-[13px] ss:text-sm sxx:text-[16px] xss:text-[20px]">{answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
