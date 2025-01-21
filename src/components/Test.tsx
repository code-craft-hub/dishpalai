import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();

  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  const updateHeights = () => {
    const missionHeight = missionRef.current?.scrollHeight || 0;
    const visionHeight = visionRef.current?.scrollHeight || 0;
    setMaxHeight(Math.max(missionHeight, visionHeight));
    console.log(maxHeight, missionHeight, visionHeight);
  };

  useEffect(() => {
    updateHeights();
    const handleResize = () => updateHeights();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   screens: {
  //     xx: "320px",
  //     xxx:"369px",
  //     xxxx:"415px",
  //     ss:"470px",
  //     sx:"530px",
  //     sxx:"534px",
  //     xss:"601px",
  //     mx:"872px",
  //     mdx:"970px",
  //   },
  return (
    <div className="">
      <div className="relative flex">
        <div className="w-1/2 flex justify-end">
          <div ref={missionRef} className="">
            <div className="p-4 xss:p-8 space-y-2 sm:space-y-4 w-full max-w-[280px] h-76 bg-green-500 shadow-2xl rounded-2xl py-4">
              <h1 className="text-xl font-bold font-syne xss:text-3xl">{t("missionT")}</h1>
              <p className="text-[10px] xxx:text-sm mx:text-lg">{t("missionD")}</p>
            </div>
          </div>
        </div>
        <div
          ref={visionRef}
          className="absolute top-48 xxx:top-64 sm:top-56 left-1/2 flex w-1/2"
        >
          <div className="p-4 xss:p-8 space-y-2 sm:space-y-4 w-full max-w-[280px] h-76 bg-pink-500 shadow-2xl rounded-2xl py-4">
            <h1 className="text-xl font-bold font-syne xss:text-3xl">{t("visionT")}</h1>
            <p className="text-[10px] xxx:text-sm mx:text-lg">{t("visionD")}</p>
          </div>
        </div>
      </div>
      <div className=" w-1/2">
        <img
          src="/assets/thinkingR.gif"
          alt="Thinking Robot"
          className="w-auto place-self-center h-44 xxx:h-64"
          // className={`w-auto place-self-center ${maxHeight ? `h-[${maxHeight}px]` : ''}`}
        />
      </div>
    </div>
  );
};

export default Test;
