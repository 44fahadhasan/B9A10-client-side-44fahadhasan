import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slideImgOne from "../../../../assets/images/slide-one.png";
import slideImgThree from "../../../../assets/images/slide-three.png";
import slideImgTwo from "../../../../assets/images/slide-two.png";
import Slide from "../Slide/Slide";

const Sliders = () => {
  return (
    <div className="sm:h-screen">
      <Swiper
        style={{
          "--swiper-navigation-color": "#556f5f",
          "--swiper-pagination-color": "#556f5f",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        <SwiperSlide>
          <Slide
            textColor="text-accent-content"
            bgColor="bg-[#BBC9D2]"
            slideImg={slideImgOne}
            smallTitle="Timeless Beauty for Every Space"
            title="Ceramics"
            content="Ceramics combine beauty, functionality, and durability, making them indispensable in both artistic and practical contexts across cultures and industries."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            order="sm:order-2"
            slideImg={slideImgTwo}
            bgColor="bg-base-200"
            smallTitle="Artisanal Touches for Home Decor"
            title="Pottery"
            content="Pottery products are cherished for their beauty, craftsmanship, and versatility, making them timeless additions to any home or collection."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgColor="bg-base-300"
            slideImg={slideImgThree}
            smallTitle="From Pottery to Architecture"
            title="TERRA COTTA"
            content="Terracotta products are celebrated for their rustic charm and
              functional properties, making them enduringly popular in a wide
              range of applications."
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
