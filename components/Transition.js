import { motion} from 'framer-motion';

const transitionVariants = {
  initial:{
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit:{
    x: ['100%','100%'],
    width: ['0%','100%']
  }
}
const Transition = () =>  {
  return (
    <>
      <motion.div 
      className='fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-[#2e2257]'
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0, duration: 0.2, ease: 'easeInOut'}}></motion.div>
      
      <motion.div 
      className='fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-[#3b2d71]'
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0.1, duration: 0.2, ease: 'easeInOut'}}></motion.div>
      
      <motion.div 
      className='fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-[#4b3792]'
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0.2, duration: 0.2, ease: 'easeInOut'}}></motion.div>

      </>
  );
};

export default Transition;
