
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
          <h2 className="h2 xl:mt-8">My Services 
            <span className="text-accent">.</span>
          </h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
          I specialize in PHP web development, delivering tailored solutions with expertise in Laravel, Magento, and AWS. Let’s turn your ideas into impactful digital solutions.

          </p>
        </div>
        <div className="w-full xl:max-w-[65%]">
          <ServiceSlider/>
        </div>
      </div>
    </div>
  </div>;
};

export default Services;
