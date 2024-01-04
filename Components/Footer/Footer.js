
import Link from "next/link";


const Footer = () => {

    return (
        <div className="bg-[#0a075f] text-white py-6  flex flex-col justify-center items-center pl-6 mt-[-1px]">
            <div className="container flex flex-col items-center p-6 text-gray-200 md:p-10 md:flex-row md:justify-between md:items-start">
                <div className="mb-6 w-[300px] md:w-[300px] md:mr-8 text-center md:text-left md:flex flex-col ">
                    <div className="w-full md:w-[80%] mx-auto flex justify-center md:justify-start md:mx-0">
                        <img
                            src='/assets/mainlogo.png'
                            alt="Main Logo"
                            className="logo"
                        />
                    </div>
                    <p className="mt-3">3, 4th floor, Siddharth Bandodkar Bhavan, Panji, Goa 403001</p>
                    <div className="flex items-center justify-center gap-5 mt-3 logos md:justify-start">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src='/assets/Facebook.svg' alt="Facebook Logo" className="logo" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src='/assets/instagram.svg' alt="Instagram Logo" className="logo" />
  </a>
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    <img src='/assets/Group.svg' alt="Group Logo" className="logo" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src='/assets/LinkedIn.svg' alt="LinkedIn Logo" className="logo" />
  </a>
</div>
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Company</h1>
                    <p><a href="#">Pricing</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">Jobs</a></p>
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Support</h1>
                    <p><a href="#">FAQ</a></p>
                </div>


                <div className="text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Other</h1>
                    <p><a href="#">Terms of Service</a></p>
                     <Link href='/Policy'><p>Privacy Policy</p></Link>
                    <p><a href="#">Cookie Policy</a></p>

                </div>
            </div>

            <div className="mt-8 text-xs text-center">
                <p>Primeslots/ Copyright 2023/ All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
