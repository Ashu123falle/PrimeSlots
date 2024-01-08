import FilterComponent from "@/Components/FilterComponent/FilterComponent"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RevealAnimation from "@/Components/RevealAnimation/RevealAnimation";
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
        <div className="opacity-0.5 w-[100vw] rgba(35, 29, 32, 0.89) backdrop-opacity-75 lg:h-[140vh] xs:h-[160vh] sm:h-[140vh] md:h-[150vh] 2xl:h-[130vh]" 
        style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8361/dc28/d4780ff4f4143e28302cc03f7a231643?Expires=1704672000&Signature=Xz6BeRagExtpnmtcKTEKZ90M7Z8CPeuMf3G~dJ~3WILoceH79CufiXkqsWCa-HXVhiHOfCtnzuequs1UiuYMlQ4juPiF-qW0odF5s5M5QoNGsL6TMiCmbrGHiFMO5Zhryx5nOzJeJJjVEYq3RGCfaSaXO~W-9eNmKcYxNWUmWEZKiCPomDw9-wjM86SK9CwU1904tjGQTBRS8tYc3XFhoCnY2iIu27LEIe67pWncsinHx1JyBn9VSBQVH5K1A~vDfZWDKdV46Otcdo-WQakXuV67xHpqYP0AjgPZ-rDYl6t76XqMtWOSom6oGrlfAsocG2JeWu9bGItHkzFCMk8quA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')", backgroundSize: "cover", width:"100%"}}>
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
                "text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] md:text-[180.3414001464844px] font-bold relative  left-[calc(25vw)] top-[calc(20vh)] md:left-[calc(15vw)] md:top-[calc(14vh)] z-10 xs:text-[50px]"
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
                "text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] md:text-[160.8080139160156px] font-bold relative  left-[calc(30vw)] top-[calc(19vh)] md:left-[calc(20vw)] md:top-[calc(5vh)] z-10 xs:text-[50px]"
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
            style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3181/f79d/5f3ed537229f96087c4eca08efd968b9?Expires=1704672000&Signature=KwEaDsA1aQ~gsYSxmCAbkmDIfUja-Tb0ad6cSXyCK6i7WABBen8NJd69x3PocMgsr9pC07dBSK0U9dgAlkxdk~g5p0JSq-MAHRyBCRdRfZZtwJeIm9CinJmEkY0rlsf9dM1RJky7UO5K0czLcfWJXTqvxxLyeVhDiyWkWe-BB57j6VzlMCJNlKMjudxN5lndI2UBSRwyfAx9kx-oYYq270wHvlXSWs-hxMwIJTkSdGklI1N9~FvcqjvgaEfaRyZXhaV~x5VZG6CfxfSv9bzCF~eOKeHJSj9jZCmVR4widyukXvzrAfur8ua8D223QzFxyJBQs~mr8fJ-4BvvLv0fvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")'}}
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
            style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/fa98/8e09/1a4b35e0c0523eeeb654c75c59849568?Expires=1704672000&Signature=jH4ZJoEO-w3ZgNO5n7iZIQ51Fi9wOLyNDc8OYfvrr9kuk7oMqocOZKOudYDFT~8GMfeOtEjj3Fwnd9blDR9X0ek9UTqHC~ziHwt5O2xW2fzFQM73JfIWDBbUE8ffDz~XpphC-oHGQu6SF1mROzTWbpqZZZgyl63J~IY7DH~lesjA6~KESk1cSOD4-SkaTJsoiznGk6wkNuX5WvmF7vdlLspnsd3VyVryMCi-A~uEAcC2zLsXIHp692wZ-5JgnskR7szkp5bQp4l-0Vp2jLCKomYrPcxCo0gSKRWbVngx02T4XEVmswZL7ZkKjli5IggW5kpja9fVldGHV~cLI9KEKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")'}}
            ></motion.div>
            </div>
            <div className="flex-col items-center justify-center">

            <div className={"3xl:left-[calc(8vw)] relative top-[calc(-15vh)] md:top-[calc(-65vh)] z-10  "}>
                <FilterComponent data={data} optionsConfig={optionsConfig} />
            </div>

            <div className="button self-center left-[calc(35vw)] sm:left-[calc(45vw)] relative top-[calc(-10vh)] md:top-[calc(-65vh)]">
                <motion.button onClick={onClickExplore} variants={buttonVariants} whileHover="hover" className="bg-[#ffffff] rounded-[36px] w-[140px] h-[52px]  
                text-[#0e0d0d] text-center text-[18.40671920776367px] font-semibold font-['Figtree-SemiBold',_sans-serif]">Explore Now</motion.button>

                <div className="relative left-[calc(7vw)] top-[calc(-1vw)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 62 66" fill="none">
                    <g filter="url(#filter0_d_844_738)">
                        <path d="M26.1991 57.5834H36.6981C36.8204 57.5834 36.9377 57.5348 37.0242 57.4483L40.0356 54.4369C40.3687 54.1039 40.8204 53.9167 41.2915 53.9167C41.9642 53.9167 42.5792 54.2968 42.88 54.8985L44.1549 57.4483C44.1963 57.5311 44.2809 57.5834 44.3735 57.5834H48.6999C49.2646 57.5834 49.7225 57.1256 49.7225 56.5608C49.7225 52.4107 50.6887 48.3176 52.5447 44.6056C54.9226 39.8499 57.8156 35.036 56.964 29.485L56.2967 25.1355C56.0862 23.7633 54.9057 22.7501 53.5175 22.7501H53.0118C51.7382 22.7501 50.7057 23.7826 50.7057 25.0562V26.8707C50.7057 27.1422 50.4856 27.3623 50.2141 27.3623C49.9426 27.3623 49.7225 27.1422 49.7225 26.8707V22.7501C49.7225 20.725 48.0808 19.0834 46.0558 19.0834C44.0308 19.0834 42.3891 20.725 42.3891 22.7501V26.9499C42.3891 27.4562 41.9787 27.8666 41.4725 27.8666C40.9662 27.8666 40.5558 27.4562 40.5558 26.9499V22.7501C40.5558 20.725 38.9142 19.0834 36.8891 19.0834C34.8641 19.0834 33.2225 20.725 33.2225 22.7501V28.0337C33.2225 28.176 33.1893 28.3163 33.1257 28.4436C32.7879 29.1193 31.8237 29.1193 31.4859 28.4436C31.4223 28.3163 31.3891 28.176 31.3891 28.0337V9.91675C31.3891 7.52706 29.441 4.41675 26.8058 4.41675C24.1705 4.41675 22.2225 7.52706 22.2225 9.91675V32.5873C22.2225 33.2295 21.7019 33.7501 21.0596 33.7501C20.6447 33.7501 20.2622 33.5307 20.0498 33.1741C19.3441 31.989 17.7022 29.3005 16.7225 28.2501C16.1702 27.658 15.0629 27.2347 13.9857 26.9451C12.3154 26.4961 10.6201 27.3203 9.66063 28.7595C8.43676 30.5953 8.67881 33.0398 10.2389 34.5999L13.2496 37.6105C14.3278 38.6887 15.1402 40.0032 15.6224 41.4498L15.8058 42.0001C16.4086 43.8086 17.4242 45.4518 18.7722 46.7998L23.5156 51.5432C25.0353 53.063 25.8891 55.1242 25.8891 57.2734C25.8891 57.4446 26.0279 57.5834 26.1991 57.5834Z" fill="#F5167E"/>
                        <path d="M26.1991 57.5834H36.6981C36.8204 57.5834 36.9377 57.5348 37.0242 57.4483L40.0356 54.4369C40.3687 54.1039 40.8204 53.9167 41.2915 53.9167C41.9642 53.9167 42.5792 54.2968 42.88 54.8985L44.1549 57.4483C44.1963 57.5311 44.2809 57.5834 44.3735 57.5834H48.6999C49.2646 57.5834 49.7225 57.1256 49.7225 56.5608C49.7225 52.4107 50.6887 48.3176 52.5447 44.6056C54.9226 39.8499 57.8156 35.036 56.964 29.485L56.2967 25.1355C56.0862 23.7633 54.9057 22.7501 53.5175 22.7501H53.0118C51.7382 22.7501 50.7057 23.7826 50.7057 25.0562V26.8707C50.7057 27.1422 50.4856 27.3623 50.2141 27.3623C49.9426 27.3623 49.7225 27.1422 49.7225 26.8707V22.7501C49.7225 20.725 48.0808 19.0834 46.0558 19.0834C44.0308 19.0834 42.3891 20.725 42.3891 22.7501V26.9499C42.3891 27.4562 41.9787 27.8666 41.4725 27.8666C40.9662 27.8666 40.5558 27.4562 40.5558 26.9499V22.7501C40.5558 20.725 38.9142 19.0834 36.8891 19.0834C34.8641 19.0834 33.2225 20.725 33.2225 22.7501V28.0337C33.2225 28.176 33.1893 28.3163 33.1257 28.4436C32.7879 29.1193 31.8237 29.1193 31.4859 28.4436C31.4223 28.3163 31.3891 28.176 31.3891 28.0337V9.91675C31.3891 7.52706 29.441 4.41675 26.8058 4.41675C24.1705 4.41675 22.2225 7.52706 22.2225 9.91675V32.5873C22.2225 33.2295 21.7019 33.7501 21.0596 33.7501C20.6447 33.7501 20.2622 33.5307 20.0498 33.1741C19.3441 31.989 17.7022 29.3005 16.7225 28.2501C16.1702 27.658 15.0629 27.2347 13.9857 26.9451C12.3154 26.4961 10.6201 27.3203 9.66063 28.7595C8.43676 30.5953 8.67881 33.0398 10.2389 34.5999L13.2496 37.6105C14.3278 38.6887 15.1402 40.0032 15.6224 41.4498L15.8058 42.0001C16.4086 43.8086 17.4242 45.4518 18.7722 46.7998L23.5156 51.5432C25.0353 53.063 25.8891 55.1242 25.8891 57.2734C25.8891 57.4446 26.0279 57.5834 26.1991 57.5834Z" stroke="black" stroke-width="2.19678"/>
                    </g>
                    <line x1="32.4038" y1="35.063" x2="32.4038" y2="49.1737" stroke="black" stroke-width="2.19678"/>
                    <line x1="39.6401" y1="35.063" x2="39.6401" y2="49.1737" stroke="black" stroke-width="2.19678"/>
                    <line x1="47.0571" y1="35.063" x2="47.0571" y2="49.1737" stroke="black" stroke-width="2.19678"/>
                    <defs>
                        <filter id="filter0_d_844_738" x="0.828333" y="0.0231954" width="60.6802" height="65.6151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-1.83065" dy="1.83065"/>
                        <feGaussianBlur stdDeviation="2.56291"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_844_738"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_844_738" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
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