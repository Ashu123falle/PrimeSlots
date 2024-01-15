import FilterComponent from "@/Components/FilterComponent/FilterComponent"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RevealAnimation from "@/Components/RevealAnimation/RevealAnimation";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

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

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropDown, setdropDown] = useState(true);

    return(
        <>
        <div className="opacity-0.5 w-[100%] overflow-x-hidden rgba(35, 29, 32, 0.89) no-scrollbar backdrop-opacity-75 lg:h-[140vh] xs:h-[160vh] sm:h-[140vh] md:h-[163vh] xl:h-[165vh]" 
        style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8361/dc28/d4780ff4f4143e28302cc03f7a231643?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbjwwZribj2HvpVtvrBr6qtMy846ZGMCLQe1Wu5rI4yjk4UTRYs-llD5i8UBO7YRTl1d1ZSK-~MEh4zfq8ocbyK-ujwG-AGujck8ekndcxyHNgR9RC3QKG5EwRHMnHUaSeirnql4nXNvr7noE7G-UX0wIKLe3sJIC~zgfqVMB9ul8uN2p8rR5gGOu4lkrb0g4P2GAjwMBXLS0BFeVaABvqCYtNpvUJ7YhFI2H7vinMv0m0RPREJecbhkbHw3gOccwTdHuc39RNLx2UAKWAzIHbNKKBhw0gYDTwnbnXd0aRifeGRxvG-LiiVysOGBEPIx3OmwSRD7EiFZbcGZhH7KPQ__')", backgroundSize: "cover", width:"100%"}}>
        <div className="absolute inset-0 backdrop-blur-sm">
            
            <div className="hidden md:block">
            <div className="Navbar  py-5 flex justify-around ">
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
            </div>

            <div className="flex items-center justify-between  border-gray-400 py-8 px-8 md:hidden">
      <Link href="/">
      <Image alt="" src='/assets/mainlogo.png' width={136.7} height={32} className="ml-5 relative"></Image>
      </Link>
      <nav>
        <section className="MOBILE-MENU px-5 text-left flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-2 py-8 bg-transperant"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col justify-start p-5">
            <div className="flex-col justify-start items-start text-left min-h-[250px]">
              <li className="h-[45px] rounded-lg flex justify-center items-center my-8 text-center font-['figtree'] text-base font-normal relative w-[129px] hover:bg-gray-200">
                <Link href="/Marketplace">Marketplace</Link>
              </li>

              <li className="h-[45px] rounded-lg flex justify-center items-center my-8 text-center font-['figtree'] text-base leading-[101%] font-normal relative w-[129px] hover:bg-gray-200">
                <Link href="/Partner">Become a Partner</Link>
              </li>
              
            </div>
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
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
                "text-[#ffffff] text-left font-['Inter'] xs:text-[16px] sm:text-2xl font-normal w-[70vw] absolute left-[calc(10vw)] top-[calc(5vh)]"
                }
            >
                Amplify Your Brand, Captivate Your Audience -<br />
                Your Gateway to Impactful Advertising!{" "}
            </motion.div>
            <div className="flex justify-center">
                <div>
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
                "text-[#ffffff] text-left font-[Playfair] sm:text-[100px] md:text-[180.3414001464844px] font-bold relative  top-[calc(19vh)]  md:top-[calc(14vh)] z-10 xs:text-[70px]"
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
                "text-[#ffffff] text-left font-[Playfair] sm:text-[100px] md:text-[180.8080139160156px] font-bold relative -mt-5 lg:-mt-9 top-[calc(15vh)] md:top-[calc(5vh)] z-10 xs:text-[70px]"
            }
            >
            &nbsp;{" "}Awaits!{" "}
            </motion.div>
            </div>
            </div>
            <div>
            <motion.div
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 3},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1.5, delay: 0}}
            className={"w-[40vw] h-[25vh] md:h-[50vh] relative top-[calc(8vw)] top-[calc(1vh)] md:top-[calc(-12vh)] bg-cover"}
            style={{backgroundImage: 'url("/assets/Rectangle 18.png")'}}
            ></motion.div>

            <motion.div
            variants={{
                hidden: {opacity: 0, },
                visible: {opacity: 2},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1.5, delay: 0}}
            className={"w-[40vw] h-[25vh] md:h-[50vh] relative left-[calc(60vw)]  top-[calc(-30vh)]  md:top-[calc(-85vh)] bg-cover"}
            style={{backgroundImage: 'url("/assets/Rectangle 19.png")'}}
            ></motion.div>
            </div>
            <div className="flex-col items-center justify-center">

            <div className={"relative top-[calc(-15vh)] md:top-[calc(-60vh)] z-10  lg:px-12 2xl:px-2"}>
                <FilterComponent data={data} optionsConfig={optionsConfig} />
            </div>

            <div className="mx-auto flex justify-center">
            <div className="button   relative top-[calc(-10vh)] md:top-[calc(-60vh)]">
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