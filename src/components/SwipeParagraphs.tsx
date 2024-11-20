import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SwipeParagraphs: React.FC = () => {
  const [showFirst, setShowFirst] = useState(true); 
  const [insideText, setInsideText] = useState(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev); 
    }, 4000); 
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setInsideText((prev) => !prev); 
    }, 4000); 
    return () => clearInterval(interval); 
  }, []);

  const variantsFirst = {
    enter: { y: "-50%", opacity: 0 }, 
    center: { y: "0%", opacity: 1 }, 
    exit: { y: "-50%", opacity: 0 }, 
  };

  const variantsSecond = {
    enter: { y: "50%", opacity: 0 }, 
    center: { y: "0%", opacity: 1 }, 
    exit: { y: "50%", opacity: 0 }, 
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const paragraphs = [
    <>
      <p className="">Become An</p>
      <p className="">Eco-Champion</p>
    </>,
    <>
      <p className="">Your AI-Powered</p>
      <p className="">Personal Shop</p>
      <p className="">Preferences</p>
    </>,
    <>
      <p className="">Discover</p>
      <p className="">Personalized</p>
      <p className="">deals tailored to your</p>
      <div className="relative h-11 overflow-hidden flex">
        <AnimatePresence mode="wait">
          {insideText ? (
            <motion.p
              key="first"
              variants={variantsFirst}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute"
            >
              Location
            </motion.p>
          ) : (
            <motion.p
              key="second"
              variants={variantsSecond}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute"
            >
              Preference
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>,
  ];


  useEffect(() => {
    const intervalTime = currentIndex === 2 ? 8000 : 4000;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % paragraphs.length;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [paragraphs.length, currentIndex]);

  const variants = {
    enter: { opacity: 0 }, 
    center: { opacity: 1 }, 
    exit: { opacity: 0 }, 
  };

  return (
    <div className="w-full ">
      <div className="relative h-48 md:h-60 items-end w-full overflow-hidden flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} 
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }} // Smooth fading animation
            className="absolute mt-2 text-3xl sm:text-5xl font-bold font-syne tracking-tight capitalize "
          >
            {paragraphs[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative h-20 overflow-hidden flex max-w-screen-sm">
        <AnimatePresence mode="wait">
          {showFirst ? (
            <motion.p
              key="first"
              variants={variantsFirst}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute lg:text-start sm:text-lg font-syne font-semibold"
            >
              Ensuring you never miss an opportunity to save.
            </motion.p>
          ) : (
            <motion.p
              key="second"
              variants={variantsSecond}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute sm:text-lg font-syne font-semibold max-w-sm"
            >
              Play your in promoting sustainable practices and inspire others to
              protect our planet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SwipeParagraphs;