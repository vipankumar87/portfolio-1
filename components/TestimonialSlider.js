
// icons
import {
  FaQuoteLeft
} from "react-icons/fa";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {FreeMode, Navigation, Pagination} from 'swiper';
// data// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return <Swiper
  spaceBetween={10}
  navigation={true}
  pagination={{clickable: true}} modules={[Navigation,Pagination]} className="h-[480px]">
    {testimonialData.map((person, index)=>(
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center h-full px-16 md:flex-row gap-x-9">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              {/* avatar */}
              <div className="w-[100px] h-[100px] mb-2 mx-auto">
                <Image src={person.image} width={100} height={100} alt={person.name}/>
              </div>
              {/* name */}
              <div className="text-lg">{person.name}</div>
              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
            </div>
            {/* quote & message  */}
          </div>
          <div className="flex flex-col  flex-1 justify-center before:w-[1px] xl:before:bg-white xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:before:text-white relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="mx-auto text-4xl xl:text-6xl text-white/20 md:mx-0"/>
              </div>
              {/* message */}
              <div className="text-center xl:text-lg md:text-left">{person.message}</div>
            </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>;
};

export default TestimonialSlider;
