
import React,{useEffect,useState} from "react";
import Footer from "@/Components/Footer/Footer";
import PerksComponent from "@/Components/Perks/Perks";
import PerksHeader from "@/Components/PerksHeader/PerksHeader";
import Unleasing from "@/Components/Unleashing/Unleashing";
import EasyStepsSection from "@/Components/EasyStepsSection/EasyStepsSection";
import ReadyToConnect from "@/Components/ReadyToConnect/ReadyToConnect";
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
  
    const backgroundImageUrl = '/assets/Lo-Fi UX Placeholder.png'
    const imageHeight = windowWidth <= 366 ? 390 : 480;
  
    return (
      <div className='bg-cover bg-center ' style={{ backgroundImage: `url('${backgroundImageUrl}')`, height: `${imageHeight}px` }}>
        <PerksHeader />
        <div className="no-scrollbar overflow-hidden ">
        <PerksComponent />
        </div>
        <Unleasing />
        <EasyStepsSection />
        <ReadyToConnect />
        <Footer />
      </div>
    );
  };
  
  export default Partner;

