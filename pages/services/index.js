
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

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb'
import Circles  from "../../components/Circles";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return <div className="flex items-center h-full bg-primary/30 py-60">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.1)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">My Services 
            <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
          I specialize in PHP web development, delivering tailored solutions with expertise in Laravel, Magento, and AWS. Let’s turn your ideas into impactful digital solutions.

          </motion.p>
        </div>
        {/* slider */}
        <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
          <ServiceSlider/>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
