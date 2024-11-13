//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/pagination";

import "../styles.css";

//@ts-ignore
import { EffectCoverflow, Autoplay } from "swiper/modules";

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
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
            <SwiperSlide className="flex flex-col gap-4 md:gap-8 bg-white/10 rounded-xl p-4 md:p-8 ">
              <h1 className="font-syne font-bold">Location Based Alerts</h1>
              <p className="mt-4 ">
                Receive real-time notifications about nearby deals, ensuring you
                capitalize on offers wherever you are. Our geolocation
                technology keeps you informed of discounts in your vicinity, so
                you never miss an opportunity to save.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default SliderComponent;
