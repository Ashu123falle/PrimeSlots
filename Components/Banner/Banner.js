import FilterComponent from "@/components/FilterComponent/FilterComponent"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RevealAnimation from "@/components/RevealAnimation/RevealAnimation";
import { useRouter } from "next/router";
import Image from "next/image";

const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

const optionsConfig = [ 
    {
      key: 'state',
      label: 'Search Location',
      options: ['All', 'Andhra Pradesh', 'Assam', 'Arunachal Pradesh'], // Add more states as needed
      default: 'All',
    },
    {
      key: 'category',
      label: 'Media Categories',
      options: ['All', 'category1', 'category2', 'category3'], // Add more categories as needed
      default: 'All',
    },
    {
      key: 'filter',
      label: 'Filters',
      options: ['All', 'filter1', 'filter2', 'filter3'], // Add more filters as needed
      default: 'All',
    },
  ];
  // Example data
  const data = [
    
    //our data items
  ];

const buttonVariants = {
    hover: {
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Banner = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const router = useRouter()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    })

    const onClickExplore = () => {
        router.push("/Marketplace")
    }

    return(
        <>
        <div className="opacity-0.5 w-[100vw] rgba(35, 29, 32, 0.89) backdrop-opacity-75 lg:h-[140vh] xs:h-[160vh] sm:h-[140vh] md:h-[163vh] xl:h-[160vh]" 
        style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8361/dc28/d4780ff4f4143e28302cc03f7a231643?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbjwwZribj2HvpVtvrBr6qtMy846ZGMCLQe1Wu5rI4yjk4UTRYs-llD5i8UBO7YRTl1d1ZSK-~MEh4zfq8ocbyK-ujwG-AGujck8ekndcxyHNgR9RC3QKG5EwRHMnHUaSeirnql4nXNvr7noE7G-UX0wIKLe3sJIC~zgfqVMB9ul8uN2p8rR5gGOu4lkrb0g4P2GAjwMBXLS0BFeVaABvqCYtNpvUJ7YhFI2H7vinMv0m0RPREJecbhkbHw3gOccwTdHuc39RNLx2UAKWAzIHbNKKBhw0gYDTwnbnXd0aRifeGRxvG-LiiVysOGBEPIx3OmwSRD7EiFZbcGZhH7KPQ__')", backgroundSize: "cover", width:"100%"}}>
        <div className="absolute inset-0 backdrop-blur-sm">
            
            <div className="Navbar py-5 flex justify-around relative">
            <Link href="/"
                className={"bg-[#ffffff] xs:w-[90px] sm:w-[149px] xs:h-[32px] sm:h-[37px] relative "}
                >
                    <Image 
                    className="xs: w-[80px] sm:w-[136.7px] h-8 relative"  height={32} width={136.7}
                    src='/assets/mainlogo.png' alt="main logo" />
                </Link>  
            <div className="links flex  justify-between">
                <Link href="/Marketplace" className="xs:mr-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relative xs:w-[62px] sm:w-[129px]">Marketplace</Link>
                <Link href="/Partner" className="xs:ml-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relativew xs:w-[118px] sm:w-[129px]">Become a partner</Link>
            </div>
            </div>
            
            <div className="relative">
            <motion.div
               
                variants={{
                    hidden: {opacity: 0, y: 15},
                    visible: {opacity: 2, y: 0},
                    
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 1.25}}
                className={
                "text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] xs:text-[16px] sm:text-2xl font-normal w-[70vw] absolute left-[calc(10vw)] top-[calc(5vh)]"
                }
            >
                Amplify Your Brand, Captivate Your Audience -<br />
                Your Gateway to Impactful Advertising!{" "}
            </motion.div>
            <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 2, y: 0},
                hover: {
                    scale: [1,1.1,1],
                    transition: {
                        duration: 0.75,
                    }
                }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 1.5, delay: 0.75, type: "spring"}}
            whileHover="hover"
            whileInView="animate"
            viewport={{
                once: true
            }}
            className={
                "text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] md:text-[180.3414001464844px] font-bold relative  left-[calc(25vw)] top-[calc(24vh)] md:left-[calc(15vw)] md:top-[calc(14vh)] z-10 xs:text-[50px]"
            }
            >
            OOH{" "}
            </motion.div>
            <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 2, y: 0},
                hover: {
                    scale: [1,1.1,1],
                    transition: {
                        duration: 0.75,
                    }
                }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1, delay: 0.75}}
            whileHover="hover"
            className={
                "text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] md:text-[160.8080139160156px] font-bold relative  left-[calc(30vw)] top-[calc(23vh)] md:left-[calc(20vw)] md:top-[calc(5vh)] z-10 xs:text-[50px]"
            }
            >
            Awaits!{" "}
            </motion.div>
            <div>
            <motion.div
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 3},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1.5, delay: 0}}
            className={"w-[30vw] h-[25vh] md:h-[50vh] relative top-[calc(8vw)] top-[calc(1vh)] md:top-[calc(-12vh)] bg-cover"}
            style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3181/f79d/5f3ed537229f96087c4eca08efd968b9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ka3nQBVUtLIz682lhjyf9mtJYhinGu1w0~kut5FTGFFxrWESjsrojZtZWW9M1GM5aaZiY62CcK0C-xD3hoJvrDSvTYve6AXnfTyiSjJUP7vmgfFKsz-L2jVYb4RZqFciXidk88fkZ96y~eQZm2fdcDDymeNVuTouR0C0NdOxBD3YmwDf~nbg07-kKpq3bx6~bRNjBIlfmXlkYXcWVx~sIdAQeGR171iaLL0S~jMJEJLT0CnO756gECJqa14l6f0pReRvoJovGQ406RzXYFwHCoGKqOK39RGjG3f1sE~PwDBjRj50hGIvXrMDyglh2A3Lz-wtw8PUlMSO88RZo~6Brw__")'}}
            ></motion.div>

            <motion.div
            variants={{
                hidden: {opacity: 0, },
                visible: {opacity: 2},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1.5, delay: 0}}
            className={"w-[30vw] h-[25vh] md:h-[50vh] relative left-[calc(70vw)]  top-[calc(-30vh)]  md:top-[calc(-85vh)] bg-cover"}
            style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/fa98/8e09/1a4b35e0c0523eeeb654c75c59849568?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpEWDddjfoIXaFo7mB55T33UKpqlg~wLi9v4MGL9fOZiuojPfeZqBs0ihaskAg4-5T-c7V7hBGRX6yNmH8rGgCFyxQnCIt~4KIh6CcdzdgYLXbN6~AVtb~2BrqRdzH5kJ-WQ~wwDmCzwdZ0c0UzCPnBVf8Gof2rCdUxbH62m6KWDz1rC2PkdZ~2LczrcwAPC~Jib3775K-iza1SF9vCaBr2L61HSOq~jrrQE8I-e3OipCK8b55-DVdZ5LTwKOjLUToZLRfZhImdijxZFxFLiYKQyEKYSgX791UoHWbDnyJYWSNQ5CC2CQS3RL6FYbAs20xlPF6-ADy3iQMC18rS5sw__")'}}
            ></motion.div>
            </div>
            <div className="flex-col items-center justify-center">

            <div className={"relative top-[calc(-15vh)] md:top-[calc(-65vh)] z-10  lg:px-12 2xl:px-2"}>
                <FilterComponent data={data} optionsConfig={optionsConfig} />
            </div>

            <div className="mx-auto flex justify-center">
            <div className="button   relative top-[calc(-10vh)] md:top-[calc(-65vh)]">
                <motion.button onClick={onClickExplore} variants={buttonVariants} whileHover="hover" className="bg-[#ffffff] rounded-[36px] mx-auto w-[140px] h-[52px] cursor-pointer
                text-[#0e0d0d] text-center text-[18.40671920776367px] font-semibold font-['Figtree-SemiBold',_sans-serif]">Explore Now</motion.button>
                    </div>
            </div>
            
            </div>
            </div>
        </div>
        </div>
        </>

        
    )
}

export default Banner