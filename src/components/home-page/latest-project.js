import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import ProjectItem from "../projects/project-item";
import * as AiIcons from "react-icons/ai";
import { useState, useEffect, useRef } from "react";

SwiperCore.use([Pagination, Autoplay]);

function LatestProject(props) {
  const { projects } = props;

  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="project-area md:pt-160 pt-[60px]" id="projects">
      <div className="container">
        <div className="flex items-center justify-between mb-[65px]">
          <div className="swiper-button-wrap flex cursor-pointer text-[#999999] text-[30px]">
            <div
              className="swiper-button transition-all hover:text-black mr-[10px]"
              ref={prevRef}
            >
              <AiIcons.AiOutlineLeft />
            </div>
            <div
              className="swiper-button transition-all hover:text-black"
              ref={nextRef}
            >
              <AiIcons.AiOutlineRight />
            </div>
          </div>
          <h2 className="testimonial-title">Past Jobs</h2>
        </div>
      </div>
      <Swiper
        pagination={false}
        slidesPerView={4}
        spaceBetween={5}
        onSwiper={setSwiper}
        updateOnWindowResize
        observer
        observeParents
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={project.slug}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
        {/* Set Swiper here */}
      </Swiper>
    </div>
  );
}

export default LatestProject;
