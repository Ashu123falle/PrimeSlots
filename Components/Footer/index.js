import Image from "next/image";
import mainlogo from '@/pages/assets/mainlogo.png';
import facebooklogo from '@/pages/assets/Facebook.svg';
import instagramlogo from '@/pages/assets/Instagram.svg';
import grouplogo from '@/pages/assets/Group.svg';
import linkedinlogo from '@/pages/assets/LinkedIn.svg';

const Footer = () => {

    return (
        <div className="bg-[#0a075f] text-white py-6  flex flex-col justify-center items-center pl-6 mt-[-1px]">
            <div className="container p-6 md:p-10 flex flex-col items-center md:flex-row md:justify-between md:items-start text-gray-200">
                <div className="mb-6 w-[300px] md:w-[300px] md:mr-8 text-center md:text-left md:flex flex-col ">
                    <div className="w-full md:w-[80%] mx-auto flex justify-center md:justify-start md:mx-0">
                        <Image
                            src={mainlogo}
                            alt="Main Logo"
                            className="logo"
                        />
                    </div>
                    <p className="mt-3">3, 4th floor, Siddharth Bandodkar Bhavan, Panji, Goa 403001</p>
                    <div className="logos flex gap-5 mt-3 justify-center items-center md:justify-start">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <Image src={facebooklogo} alt="Facebook Logo" className="logo" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <Image src={instagramlogo} alt="Instagram Logo" className="logo" />
  </a>
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    <Image src={grouplogo} alt="Group Logo" className="logo" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <Image src={linkedinlogo} alt="LinkedIn Logo" className="logo" />
  </a>
</div>
                </div>

                <div className="mb-6 md:w-1/4 text-center md:text-left">
                    <h1 className="text-2xl mb-2">Company</h1>
                    <p><a href="#">Pricing</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">Jobs</a></p>
                </div>

                <div className="mb-6 md:w-1/4 text-center md:text-left">
                    <h1 className="text-2xl mb-2">Support</h1>
                    <p><a href="#">FAQ</a></p>
                </div>


                <div className="md:w-1/4 text-center md:text-left">
                    <h1 className="text-2xl mb-2">Other</h1>
                    <p><a href="#">Terms of Service</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Cookie Policy</a></p>

                </div>
            </div>

            <div className="text-center mt-8 text-xs">
                <p>Primeslots/ Copyright 2023/ All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
