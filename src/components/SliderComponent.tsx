import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/pagination";

import "../styles.css";

import { Autoplay,EffectCoverflow } from "swiper/modules";

const whyChooseUs = [
  {
    title: "Location Based Alerts",
    des: "Receive real-time notifications about nearby deals, ensuring you capitalize on offers wherever you are. Our geolocation technology keeps you informed of discounts in your vicinity, so you never miss an opportunity to save.",
  },
  {
    title: "Save money",
    des: "Dishpal.ai aggregates the best deals from various retailers, providing you with a centralized platform to maximize your savings. We would also calculate how much money you have saved by the end of the month from using Dishpal.ai",
  },
  {
    title: "Never miss a discount (Buy now Pay Later)",
    des: "Utilize our 'Buy Now, Pay Later' feature to take advantage of timely discounts, even when immediate funds are unavailable, ensuring you don't miss out on valuable deals. This flexible payment option empowers you to seize limited-time offers without financial strain.",
  },
  {
    title: "Reduce Food Waste",
    des: "By connecting consumers with discounts on items nearing their expiration dates, Dishpal.ai helps reduce food waste, benefiting both the environment and your wallet. This initiative supports responsible consumption and helps retailers minimize waste.",
  },
  {
    title: "Personalized Recommendation",
    des: "Our AI-driven platform analyzes your preferences to suggest discounts tailored specifically to your interests. By understanding your shopping habits, Dishpal.ai curates offers that align with your tastes, making your shopping experience more relevant and enjoyable.",
  },
];

const SliderComponent = () => {
  return (
    <div>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[
            Autoplay,
             EffectCoverflow
          ]}
        >
          {whyChooseUs.map(({ title, des }, index) => (
            <SwiperSlide
              className="!flex bg-white p-4 md:p-8 lg:px-12 md:!w-[400px] lg:!w-[450px] !h-[400px] rounded-3xl !items-center !justify-center"
              key={index}
            >
              <div className="w-full">
                <h1 className="font-syne text-black font-bold text-center text-2xl md:text-3xl text-balance">
                  {title}
                </h1>
                <p className="mt-4 text-lg text-black">{des}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default SliderComponent;
