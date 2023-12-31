const ReadyToConnect = () => {
    return (
        <div className="flex flex-col justify-center">
                <div className="w-full p-10 md:pt-[100px]  bg-violet-100 bg-opacity-80 flex flex-col justify-center items-center">
                        <p className="w-full md:w-3/4 text-center text-blue-950 text-[18px] md:text-[30px] font-bold font-['Figtree'] ">Ready to connect with more customers through Primeslots and seamless bookings?</p>
                        <button class="w-[150px] md:w-[250px] h-[40px] md:h-[60px] mt-10 bg-pink-600 rounded-[50px] shadow text-white text-[15px] md:text-lg font-bold font-['Figtree']">Get Started Now!</button>    
                </div>

                <div className="h-[70px] md:h-[150px] mr-auto bg-violet-100 w-full bg-opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] h-[100px] md:w-[77px] md:h-[205px]" viewBox="0 0 77 205" fill="none">
                        <path d="M75.915 98.7957C77.903 125.998 70.3402 165.475 51.9278 182.183C33.5154 198.892 -15.2333 211.544 -34.5595 199.044C-53.8856 186.544 -62.9391 139.062 -64.0293 107.182C-65.1194 75.3018 -58.4386 22.4666 -41.1004 7.76446C-23.7622 -6.93769 20.4972 3.79693 39.9998 18.9688" fill="url(#paint0_linear_525_2661)"/>
                        <defs>
                            <linearGradient id="paint0_linear_525_2661" x1="-69.9946" y1="60.2917" x2="79.2925" y2="134.693" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A680FF"/>
                            <stop offset="1" stop-color="#FF80D9"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
        </div>
    )
}

export default ReadyToConnect