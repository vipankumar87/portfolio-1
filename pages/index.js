import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion} from 'framer-motion';

import { fadeIn } from "../variants";
const Home = () => {
  return <div className="h-full bg-primary/60">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/20 via-black/30">
      <div className="container flex flex-col justify-center h-full text-center xl:pt-40 xl:text-left max-auto">
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
          Transforming Ideas <br/> Into{' '}
          <span className="text-accent">Digital Reality</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
        At the intersection of creativity and technology, we take your concepts and turn them into dynamic digital experiences. Whether it’s designing cutting-edge apps, developing immersive websites, or building intuitive software solutions, we bring your visions to life with precision and innovation. Our team blends creative thinking with technical expertise, ensuring that every idea, no matter how complex, becomes a seamless, functional digital reality. With every project, we aim to make the impossible possible, helping you stay ahead in the ever-evolving digital world.
        </motion.p>
        {/* btn */}
        <div className="relative flex justify-center xl:hidden">
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>
      {/* particles */}
      <ParticlesContainer/>
      {/* avatar img */}
      <motion.div 
       variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" 
       transition={{duration: 1, ease: 'easeInOut'}}
       className="h-full w-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>;
};

export default Home;
