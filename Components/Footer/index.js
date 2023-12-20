import Image from "next/image"
// import mainlogo from '@/public/Assets/mainlogo.png'
// import facebooklogo from '@/public/Assets/Facebook.svg'
// import instagramlogo from '@/public/Assets/Instagram.svg'
// import grouplogo from '@/public/Assets/Group.svg'
// import linkedinlogo from '@/public/Assets/LinkedIn.svg'

const Footer = () =>{
    return(
        <>
        <div className="bg-[#0a075f] text-white flex flex-col py-10">
            <div className="container ml-10 flex justify-evenly">
                <div className="space-y-3">
                    <Image src={""}></Image>
                    <p>3,4th floor, Siddharth <br /> Bandodkar Bhavan, Panji, Goa 403001</p>
                    <div className="logos flex gap-3">
                        {/* <Image src={facebooklogo}></Image>
                        <Image src={instagramlogo}></Image>
                        <Image src={grouplogo}></Image>
                        <Image src={linkedinlogo}></Image> */}
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-2xl">Company</h1>
                    <p><a href="#">Pricing</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">Jobs</a></p>
                </div>

                <div className="space-y-3">
                    <h1 className="text-2xl">Support</h1>
                    <p><a href="#">FAQ</a></p>
                </div>

                <div className="space-y-3">
                    <h1 className="text-2xl">Other</h1>
                    <p><a href="#">Terms of Service</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Cookie Policy</a></p>
                </div>
            </div>


            <div className="second">
                <p className="text-center mt-14 text-sm">Primeslots/Copyright 2023/ All Rights Reserved</p>
            </div>
        </div>
        </>
    )
}

export default Footer