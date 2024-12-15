
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  BsArrowRight,
} from "react-icons/bs";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";
import {FreeMode, Pagination} from 'swiper';
// data
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return <Swiper
  spaceBetween={10}
  pagination={{clickable: true}} modules={[Pagination]} className="h-[280px] sm:h-[480px]">
    {workSlides.slides.map((item, index)=>(
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {item.images.map((image, idx)=>(
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg group" key={idx}>
              <div className="relative flex items-center justify-center overflow-hidden group">
                <Image src={image.path}  width={500} height={300} alt="" />

                {/* overlay gradient  */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                {/* title */}
                <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                    {/* title port 1 */}
                    <div className="delay-100">LIVE</div>
                    {/* title port 2 */}
                    <div className="translate-y-[500%] group group-hover:translate-y-0 transition-all druation-300 delay-150">PROJECT</div>
                    {/* icon */}
                    <div><BsArrowRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200" /></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>;
};

export default WorkSlider;
