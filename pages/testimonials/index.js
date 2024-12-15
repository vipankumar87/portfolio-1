
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/rx";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Bulb from '../../components/Bulb'
import Circles  from "../../components/Circles";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants';
import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return <>
    <div className="h-full py-32 text-center bg-primary/30">
      <div className="container flex flex-col justify-center h-full mx-auto">
        {/* title */}
        <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" animate="show" exit="hidden" className="mb-8 h2 xl:mb-0">What clients <span className="text-accent">Say.</span></motion.h2>
        {/* slider */}
        <motion.div variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className="">
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  </>
};

export default Testimonials;
