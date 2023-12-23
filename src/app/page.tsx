"use client";
import { Card1 } from "@/components/cards";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <main className="bg-[#e3e6e6] relative">
      <Swiper
        navigation={{
          nextEl: ".customize-swiper-next-button",
          prevEl: ".customize-swiper-previous-button",
        }}
        modules={[Navigation, Autoplay]}
        rewind={true}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img src="/images/score-big.jpg" alt="Big Score" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/fallout.jpg" alt="Fallout" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/winter-sell.jpg" alt="Winter sell" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/save.jpg" alt="Save up to" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/oprah.jpg" alt="Oprah" />
        </SwiperSlide>
      </Swiper>
      <button className="customize-swiper-previous-button absolute top-0 left-0 z-10 w-20 h-[250px] flex items-center justify-center rounded-[5px] focus:shadow-[inset_0_0_0_2px_#FFF,_inset_0_0_0_4px_#008296]">
        <i
          style={{ backgroundPosition: "0 0" }}
          className="arrow w-[34px] h-[52px] "
        />
      </button>
      <button className="customize-swiper-next-button  absolute top-0 right-0 z-10 w-20 h-[250px] flex items-center justify-center rounded-[5px] focus:shadow-[inset_0_0_0_2px_#FFF,_inset_0_0_0_4px_#008296]">
        <i
          style={{ backgroundPosition: "-34px 0" }}
          className="arrow w-[34px] h-[52px] "
        />
      </button>

      <section className="w-full absolute top-[50%] z-10">
        <div className="py-[10px] px-5 mx-2 flex items-start gap-4">
          <Card1
            title="Top deal"
            href=""
            link="See all details"
            img={{ src: "/images/ear-buds.jpg", alt: "" }}
          />
          <Card1
            title="Thursday 7PM ET: Saints vs. Rams"
            href=""
            link="Add to watchlist"
            img={{ src: "/images/dot-players.jpg", alt: "" }}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
