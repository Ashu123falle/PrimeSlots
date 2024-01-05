import Footer from "@/Components/Footer/Footer";
import PerksComponent from "@/Components/Perks/Perks";
import PerksHeader from "@/Components/PerksHeader/PerksHeader";
import Unleasing from "@/Components/Unleashing/Unleashing";
import EasyStepsSection from "@/Components/EasyStepsSection/EasyStepsSection";
import ReadyToConnect from "@/Components/ReadyToConnect/ReadyToConnect";
import Testimonials from "@/Components/Testomonials/Testomonials";
const Partner=()=>{
    return(
            <div className='bg-cover bg-center h-[420px]' style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8361/dc28/d4780ff4f4143e28302cc03f7a231643?Expires=1704672000&Signature=Xz6BeRagExtpnmtcKTEKZ90M7Z8CPeuMf3G~dJ~3WILoceH79CufiXkqsWCa-HXVhiHOfCtnzuequs1UiuYMlQ4juPiF-qW0odF5s5M5QoNGsL6TMiCmbrGHiFMO5Zhryx5nOzJeJJjVEYq3RGCfaSaXO~W-9eNmKcYxNWUmWEZKiCPomDw9-wjM86SK9CwU1904tjGQTBRS8tYc3XFhoCnY2iIu27LEIe67pWncsinHx1JyBn9VSBQVH5K1A~vDfZWDKdV46Otcdo-WQakXuV67xHpqYP0AjgPZ-rDYl6t76XqMtWOSom6oGrlfAsocG2JeWu9bGItHkzFCMk8quA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')" }}>
                <PerksHeader/>
                <PerksComponent/>
                <Unleasing/>
                <EasyStepsSection />
                <ReadyToConnect /> {/* and stay in he loop component*/ }
                 <Footer/>
    
            </div>
    )
}

export default Partner