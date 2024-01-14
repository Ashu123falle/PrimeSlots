import {React,useState,useEffect} from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      transition={{ duration: 1.5 }}
      className="flex flex-col lg:flex-row items-center m-5"
    >
      <div className="max-w-full h-auto rounded-lg mb-2 lg:mb-0 lg:mr-4">
        <Image src={src} alt={alt} height={53} width={52}/>
      </div>
      <div className='lg:text-left'>
        <div className="text-md font-bold md:text-center sm:text-center xs:text-center lg:text-left">{title}</div>
        <div className="text-sm md:text-center sm:text-center xs:text-center lg:text-left">{description}</div>
      </div>
    </motion.div>
  );
};



const PerksComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    width: '100vw',
  };

  const customRotationStyle = {
    clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
    transform: 'rotate(0deg)',
    background: 'linear-gradient(to bottom, rgba(19, 28, 95, 1), rgba(2, 12, 97, 0.79))',
    position: 'relative',
  };

  const mtStyle = windowWidth <= 366 ? { marginTop: '-0.25rem' } : {};
  
  return (
    <div className="relative p-4 lg:p-8 bg-gradient-to-b from-rgba-19-28-95-1 to-rgba-2-12-97-0-79 rotate-container lg:text-left origin-top-left
     min-h-[500px] lg:min-h-[550px] xl:h-[550px] text-white mt-32  " style={{...containerStyle, ...customRotationStyle,...mtStyle, position: 'relative'}}>
    
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute top-24 left-7'>
        <Image src='/assets/Vectortop.png' alt="Vector Top" height={61} width={40} className='sm:w-[63]'/>
    </motion.div>
      
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute top-48 left-0'>
        <Image src='/assets/Vectormiddle.png' alt="Vector Middle" height={100} width={50} className='sm:w-[70]'/>
    </motion.div>

    {/*small to medium screen perks component*/}
  <div className='flex flex-col lg:flex-row items-center p-4 lg:justify-around rotate-content lg:hidden' style={{ transform: 'rotate(0deg)' }}>
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2}}
  className="lg:text-3xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-0 md:mr-4 md:text-left mt-8 font-[Playfair]"
>
  Perks of a <span className="lg:inline hidden sm:hidden md:hidden mt-0 lg:mt-0"><br /></span> Prime Slots Partner
</motion.div>

    <div className="max-w-full h-auto rounded-lg">
      <Image src='/assets/digital.svg' alt="Perks Image" height={250} width={150} className='w-[190px] sm:w-[250px]  lg:w-[300px] xl:w-[350px]'/>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center rotate-content lg:ml-56 lg:mt-4 sm:ml-2 sm:mt-2 md:ml-8 md:mt-8 mt-4 xs:mb-16 md:mb-10 lg:hidden" style={{ transform: 'rotate(0deg)', }}>
    <div className='lg:flex-col space-y-10'>
      {/* Perk 1 */}
      <PerkItem
        src='/assets/perk1.png'
        alt="Perk 1 Image"
        title="Perk 1"
        description="Description of perk 1 goes here."
      />

      {/* Perk 2 */}
      <PerkItem
        src='/assets/perk2.png'
        alt="Perk 2 Image"
        title="Perk 2"
        description="Description of perk 2 goes here."
      />
    </div>

    <div className='lg:flex-col space-y-10 lg:ml-8'>
      {/* Perk 3 */}
      <PerkItem
        src='/assets/perk3.png'
        alt="Perk 3 Image"
        title="Perk 3"
        description="Description of perk 3 goes here."
      />

      {/* Perk 4 */}
      <PerkItem
        src='/assets/perk4.png'
        alt="Perk 4 Image"
        title="Perk 4"
        description="Description of perk 4 goes here."
      />
    </div>
    
    <Image src='/assets/Vectorbottom2.png' alt="Vector Bottom 2" height={140} width={130} className='absolute top-8 right-0 w-20 h-40 lg:inline hidden' />
  </div>

{/*large screen perks component*/}
  <div className='lg:flex justify-around w-full hidden'>
  <div className='flex justify-around w-full items-end mt-2'>
    <h1 className="w-[450px] text-white text-4xl font-semibold font-['Playfair'] leading-[57.60px]">Perks of a PrimeSlots Partner</h1>
    <div className="max-w-full h-auto rounded-lg">
      <Image src='/assets/digital.svg' alt="Perks Image" height={250} width={150} className='w-[190px] sm:w-[250px] lg:w-[350px] '/>
    </div>
  </div>
  </div>

    <div className="lg:flex justify-around mt-6 hidden">
      <div className='flex flex-col ml-[-100px]'>
      <PerkItem
        src='/assets/perk1.png'
        alt="Perk 1 Image"
        title="Perk 1"
        description="Description of perk 1 goes here."
      />
      <PerkItem
        src='/assets/perk2.png'
        alt="Perk 2 Image"
        title="Perk 2"
        description="Description of perk 2 goes here."
      />
      </div>

      <div className='flex flex-col'>
      <PerkItem
        src='/assets/perk3.png'
        alt="Perk 3 Image"
        title="Perk 1"
        description="Description of perk 3 goes here."
      />
      <PerkItem
        src='/assets/perk4.png'
        alt="Perk 4 Image"
        title="Perk 4"
        description="Description of perk 4 goes here."
      />
      </div>
    </div>
    <Image src='/assets/Vectorbottom2.png' alt="Vector Bottom 2" height={140} width={130} className='absolute top-80 right-0 w-20 h-40 lg:inline hidden' />
  <Image src='/assets/Vectorbottom1.png' alt="Vector Bottom 1" height={140} width={130} className='absolute top-[510px] z-20 right-20 lg:inline hidden' />
</div>

  );
};

export default PerksComponent;
