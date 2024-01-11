
import React,{useEffect,useState} from "react";
import Footer from "@/components/Footer/Footer";
import PerksComponent from "@/components/Perks/Perks";
import PerksHeader from "@/components/PerksHeader/PerksHeader";
import Unleasing from "@/components/Unleashing/Unleashing";
import EasyStepsSection from "@/components/EasyStepsSection/EasyStepsSection";
import ReadyToConnect from "@/components/ReadyToConnect/ReadyToConnect";
import Testimonials from "@/components/Testomonials/Testomonials";
const Partner = () => {
    const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      handleResize(); // Set initial window width
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const backgroundImageUrl = 'https://s3-alpha-sig.figma.com/img/8361/dc28/d4780ff4f4143e28302cc03f7a231643?Expires=1704672000&Signature=Xz6BeRagExtpnmtcKTEKZ90M7Z8CPeuMf3G~dJ~3WILoceH79CufiXkqsWCa-HXVhiHOfCtnzuequs1UiuYMlQ4juPiF-qW0odF5s5M5QoNGsL6TMiCmbrGHiFMO5Zhryx5nOzJeJJjVEYq3RGCfaSaXO~W-9eNmKcYxNWUmWEZKiCPomDw9-wjM86SK9CwU1904tjGQTBRS8tYc3XFhoCnY2iIu27LEIe67pWncsinHx1JyBn9VSBQVH5K1A~vDfZWDKdV46Otcdo-WQakXuV67xHpqYP0AjgPZ-rDYl6t76XqMtWOSom6oGrlfAsocG2JeWu9bGItHkzFCMk8quA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  
    // Adjust the height based on the screen width
    const imageHeight = windowWidth <= 366 ? 390 : 480;
  
    return (
      <div className='bg-cover bg-center' style={{ backgroundImage: `url('${backgroundImageUrl}')`, height: `${imageHeight}px` }}>
        <PerksHeader />
        <PerksComponent />
        <Unleasing />
        <EasyStepsSection />
        <ReadyToConnect />
        <Footer />
      </div>
    );
  };
  
  export default Partner;

