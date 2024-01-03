import React from 'react';
import Image from "next/image";
import digitallogo from '@/pages/assets/digital.svg';
import perk1 from '@/pages/assets/perk1.png';
import perk2 from '@/pages/assets/perk2.png';
import perk3 from '@/pages/assets/perk3.png';
import perk4 from '@/pages/assets/perk4.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Vectortop from '@/pages/assets/Vectortop.png';
import Vectormiddle from '@/pages/assets/Vectormiddle.png';
import Vectorbottom1 from '@/pages/assets/Vectorbottom1.png';
import Vectorbottom2 from '@/pages/assets/Vectorbottom2.png';

const PerkItem = ({ src, alt, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to retrigger the animation on each appearance
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2 }}
      className="flex flex-col lg:flex-row items-center"
    >
      <div className="max-w-full h-auto rounded-lg mb-2 lg:mb-0 lg:mr-4">
        <Image src={src} alt={alt} />
      </div>
      <div className='lg:text-left'>
        <div className="text-md font-bold md:text-center sm:text-center xs:text-center lg:text-left">{title}</div>
        <div className="text-sm md:text-center sm:text-center xs:text-center lg:text-left">{description}</div>
      </div>
    </motion.div>
  );
};

const AnimatedText = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
const PerksComponent = () => {
  const containerStyle = {
    width: '100vw',
    
  };
  
  const customRotationStyle = {
    clipPath:'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
    transform: 'rotate(0deg)',
    background: 'linear-gradient(to bottom, rgba(19, 28, 95, 1), rgba(2, 12, 97, 0.79))',
    position:'relative'
  };
  const clip={
    clipPath:'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
  }
  
  return (
    <div className="relative p-4 bg-gradient-to-b from-rgba-19-28-95-1 to-rgba-2-12-97-0-79 rotate-container lg:text-left origin-top-left min-h-[500px] lg:min-h-[550px] xl:h-[550px] text-white" style={{...containerStyle, ...customRotationStyle}}>
     
  
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute top-24 left-7'>
        <Image src={Vectortop} alt="Vector Top" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute top-48 left-0'>
        <Image src={Vectormiddle} alt="Vector Middle" />
      </motion.div>


  <div className='flex flex-col lg:flex-row items-center p-4 lg:justify-around rotate-content' style={{ transform: 'rotate(0deg)' }}>
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2}}
  className="lg:text-3xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-0 md:mr-4 md:text-left mt-8"
>
  Perks of a <span className="lg:inline hidden sm:hidden md:hidden mt-0 lg:mt-0"><br /></span> Prime Slots Partner
</motion.div>
    <div className="max-w-full h-auto rounded-lg">
      <Image src={digitallogo} alt="Perks Image" className='h-[250px]'/>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center rotate-content lg:ml-56 lg:mt-4 sm:ml-2 sm:mt-2 md:ml-8 md:mt-8 mt-4 xs:mb-16 md:mb-10 " style={{ transform: 'rotate(0deg)', }}>
    <div className='lg:flex-col space-y-10'>
      {/* Perk 1 */}
      <PerkItem
        src={perk1}
        alt="Perk 1 Image"
        title="Perk 1"
        description="Description of perk 1 goes here."
      />

      {/* Perk 2 */}
      <PerkItem
        src={perk2}
        alt="Perk 2 Image"
        title="Perk 2"
        description="Description of perk 2 goes here."
      />
    </div>

    <div className='lg:flex-col space-y-10 lg:ml-8'>
      {/* Perk 3 */}
      <PerkItem
        src={perk3}
        alt="Perk 3 Image"
        title="Perk 3"
        description="Description of perk 3 goes here."
      />

      {/* Perk 4 */}
      <PerkItem
        src={perk4}
        alt="Perk 4 Image"
        title="Perk 4"
        description="Description of perk 4 goes here."
      />
    </div>
    
    <Image src={Vectorbottom2} alt="Vector Bottom 2" className='absolute top-8 right-0 w-20 h-40 lg:inline hidden' />
  </div>
  <Image src={Vectorbottom1} alt="Vector Bottom 1" className='absolute top-88 right-56 lg:inline hidden' />
</div>

  );
};

export default PerksComponent;
