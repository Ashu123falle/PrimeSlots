const WhoWeAre = () => {
    return (
    <>
    <div className="h-[80%] bg-[#242565] w-[100%] relative px-10 py-10 lg:hidden overflow-hidden">
        <h1 className="text-[#D292FF] text-left font-['PlayfairDisplay-ExtraBold',_sans-serif] text-[24px]
         md:text-[27px] font-extrabold relative ">~  Who we are</h1>
        
        <div className="flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="flex flex-col items-center justify-center md:mx-10 md:order-[2]">
        <img
            className={
                "rounded-[15px] w-[80vw] h-[40vh] relative my-8 md:h-[360px] md:w-[365px]" 
            }
            alt="look for help"
            src="https://s3-alpha-sig.figma.com/img/07cd/30a5/fbc750fab49f45fde83645f53cdbfdca?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDJtW373vgnPMD1f4FTXwg~uRIR5tWviC28v5PbgGwpMoA4WfMooVyVlXSDYBYFGonIwrXohlvbJk20HM-a1HeKk71wnL906tf0-34cZedGXIpwBw855qpDmaRVx9wikxrV2crfy3zlQRIITkmkmgjTiS3p41vd1X~Z18Bt-NpnyBbtDk7G1Xy8UZEUpY1K7NP8ybDKO-Hk~HqRJLNztZnJQ2-CYNFpxQjU76ezoIdhRjngF1bN2o9mWKiiYPsr6vlEYZT83p8iDv5A20qFlA~t8Gje7URcrlfxpnpZagNMDjba3yeDXJytB0f8AeFdf4hpVqznyOVWs0ETElqbeqQ__"
            />

        <div
            className={
                " text-center bg-[#ffffff] rounded-[15px] w-[78vw] xs:h-[244.5px]  relative -mt-14 md:h-[220px] md:mx-3 md:w-[340px] md:-mt-16" 
            }
            >
                <div className="text-center py-4">
                <div
                    className={
                        "text-[#0132e0] text-center font-['Nexa-Regular',_sans-serif] text-lg font-normal relative "
                    }
                    >
                    Lorem Ipsum is simply dummy{" "}
                </div>
                <div
                    className={
                        "text-[#000000] text-center my-5 font-['Nexa-Regular',_sans-serif] text-[27px] font-normal relative " 
                    }
                    >
                    Looking for help?{" "}
                </div>
                <div
                    className={
                        "text-[#000000] text-center font-['Nexa-Regular',_sans-serif] text-lg font-normal relative " 
                    }
                    >
                    Lorem Ipsum is simply dummy
                    
                    text of the printing and typesetting
                    <br />
                    industry.{" "}
                </div>
                </div>
            </div>
        </div>
        
        <div
        className={
          "text-[rgba(255,255,255,0.90)] text-left relative my-12" 
        }
      >
        <span>
          <span className="text-[rgba(255, 255, 255, 0.90)] text-[Figtree] text-[42px] ">
            We Help To Get Solutions
            <br />
            <br />
          </span>
          <span className="text-[rgba(255, 255, 255, 0.90)] my-2 text-[Figtree] text-[22px] ">
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry. Lorem Ipsum has been the
            <br />
            industry&#039;s standard dummy text ever since the 1500s,
          </span>
        </span>
      </div>
      </div>


     <div className="features-cont flex flex-col justify-center mt-[-2] items-center md:flex-row">

        <div className="f1 flex flex-row text-left my-2  md:my-16">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none" className="mx-10 md:mx-5" >
            <path d="M95.9857 2.80388C94.509 2.80388 92.7862 2.80388 91.3094 2.80388C81.2185 3.29613 71.6198 5.51121 62.5133 9.94139C51.4379 15.1099 42.0853 22.4935 34.7017 32.3384C29.5331 38.9836 25.8413 46.3673 23.134 54.2431C22.8879 54.7354 23.134 54.9815 23.3801 55.2276C25.5952 57.4427 27.8103 59.6578 30.0254 61.8729C30.2715 62.119 30.5176 62.6112 30.5176 63.1035C30.5176 63.5957 30.2715 64.088 29.7793 64.3341C29.287 64.5802 28.5486 64.5802 28.3025 64.088C27.0719 62.8574 26.0874 61.8729 24.8568 60.6423C23.3801 59.1656 22.1495 57.6888 20.6728 56.4582C20.1805 55.966 19.9344 55.2276 20.1805 54.4893C23.3801 44.8905 28.0564 36.0302 34.7017 28.1543C41.3469 20.0323 49.4689 13.6332 58.5754 8.9569C66.9435 4.52673 76.05 1.8194 85.4026 0.588796C89.3405 0.0965543 93.2784 -0.149566 97.2164 0.0965544C98.447 0.0965544 98.6931 0.588796 98.9392 1.8194C99.4314 17.8173 95.4935 32.5845 86.8793 46.3673C78.265 59.9039 66.4513 69.9949 51.684 76.394C49.4689 77.3785 47.0077 78.1169 44.5465 79.1013C43.8081 79.3475 43.3159 79.3475 42.8237 78.6091C40.3624 76.1479 37.6551 73.4406 35.1939 70.9794C34.7017 70.4871 34.4555 69.7487 34.9478 69.0104C35.44 68.272 36.4245 68.272 37.1629 69.0104C39.378 71.2255 41.5931 73.4406 43.8081 75.6557C44.3004 76.1479 44.5465 76.1479 45.0387 75.9018C55.8681 72.21 65.4668 66.3031 73.5888 58.4272C83.1875 49.0746 89.5866 37.9992 93.2784 25.447C95.2474 18.5556 96.2319 11.4181 96.2319 4.03449C96.2319 3.54225 95.9857 3.29613 95.9857 2.80388Z" fill="#D292FF"/>
            <path d="M82.4506 31.6003C82.4506 39.9684 75.8053 46.6137 67.4372 46.6137C59.0691 46.6137 52.4238 39.9684 52.4238 31.6003C52.4238 23.4783 59.0691 16.5869 67.1911 16.5869C75.8053 16.5869 82.4506 23.2322 82.4506 31.6003ZM79.4971 31.8464C79.4971 24.955 74.0825 19.5404 67.1911 19.5404C60.2997 19.5404 54.885 24.955 54.885 31.8464C54.885 38.7378 60.2997 44.1524 67.1911 44.1524C74.0825 43.9063 79.4971 38.4917 79.4971 31.8464Z" fill="#D292FF"/>
            <path d="M44.7926 94.6068C46.5154 93.6223 48.2383 92.3917 49.715 91.1611C54.6374 86.731 57.3447 81.3163 58.5753 74.9172C58.8214 73.9327 59.3137 73.4404 60.0521 73.4404C61.0365 73.4404 61.5288 74.1788 61.5288 75.1633C61.2827 76.3939 61.0365 77.8706 60.5443 79.1012C57.837 87.4693 52.9145 93.6223 45.2848 97.8064C43.562 98.7909 42.8236 98.2986 42.5775 96.5758C41.593 91.4072 40.6085 85.9926 39.624 80.824C39.624 80.3318 39.624 79.8396 39.624 79.5934C39.8701 79.1012 40.3624 78.8551 41.1007 78.8551C41.593 78.8551 42.0852 79.3473 42.3314 79.8396C42.5775 81.3163 42.8236 82.793 43.3158 84.5159C43.562 87.9616 44.3003 91.1611 44.7926 94.6068Z" fill="#D292FF"/>
            <path d="M4.18338 53.9966C5.66011 54.2427 7.13683 54.4888 8.36744 54.7349C11.8131 55.4733 15.2588 55.9655 18.4584 56.7039C18.7045 56.7039 18.7045 56.7039 18.9506 56.7039C19.689 56.95 20.1812 57.6884 19.9351 58.4267C19.689 59.1651 19.1968 59.6573 18.2123 59.4112C16.2433 58.919 14.0282 58.6729 12.0592 58.1806C8.85968 57.4422 5.66011 56.95 2.21442 56.2116C1.96829 56.2116 1.96829 56.2116 1.72217 56.2116C0.491569 55.9655 0.245448 55.2272 0.73769 53.9966C2.21442 51.2892 3.93726 48.5819 6.15235 46.3668C10.8286 41.4444 16.4894 38.7371 22.8886 37.2603C23.1347 37.2603 23.3808 37.2603 23.3808 37.0142C24.1192 36.7681 24.8575 37.2603 25.1037 37.9987C25.3498 38.7371 24.8575 39.4754 23.873 39.7215C22.3963 40.2138 20.6735 40.4599 19.1968 40.9522C12.7976 43.1672 7.87519 47.1052 4.18338 52.766C4.4295 53.5043 4.4295 53.7504 4.18338 53.9966Z" fill="#D292FF"/>
            <path d="M21.6582 75.9019C21.9043 75.6558 22.1504 75.1635 22.3966 74.9174C27.0729 70.2411 31.503 65.8109 36.1793 61.1346C37.9022 59.4118 39.3789 57.9351 41.1017 56.2122C41.8401 55.4739 42.5785 55.4739 43.3168 55.9661C43.8091 56.4584 43.8091 57.4428 43.0707 58.1812C37.6561 63.5959 32.2414 69.2566 26.5806 74.6713C25.8423 75.4097 25.1039 76.3941 24.1194 77.1325C23.6272 77.6247 23.1349 77.6247 22.6427 77.3786C21.9043 77.1325 21.6582 76.6403 21.6582 75.9019Z" fill="#D292FF"/>
            <path d="M15.2586 82.3008C15.7509 82.5469 16.2431 82.793 16.4892 83.2853C16.7354 83.7775 16.4892 84.2697 16.2431 84.762C15.997 85.0081 15.5048 85.5004 15.2586 85.9926C12.3052 88.946 9.35174 92.1456 6.15217 95.0991C5.65993 95.3452 5.41381 95.5913 4.92157 95.5913C4.42932 95.5913 3.93708 95.3452 3.69096 94.8529C3.44484 94.1146 3.44484 93.6223 3.93708 93.1301C5.90605 91.1611 7.87502 89.1922 9.84398 87.2232C11.3207 85.7465 12.5513 84.5159 14.028 83.0391C14.5203 82.793 14.7664 82.5469 15.2586 82.3008Z" fill="#D292FF"/>
            <path d="M13.0442 72.21C14.2748 72.21 15.0132 73.4406 14.5209 74.1789C14.2748 74.425 14.2748 74.6712 14.0287 74.9173C10.8291 78.1169 7.62954 81.3164 4.42997 84.516L4.18385 84.7621C3.44549 85.2544 2.70713 85.5005 2.21488 84.7621C1.72264 84.2699 1.72264 83.2854 2.21488 82.7932C4.67609 80.332 7.1373 77.8707 9.59851 75.4095C10.583 74.425 11.3214 73.6867 12.3058 72.9483C12.552 72.4561 13.0442 72.21 13.0442 72.21Z" fill="#D292FF"/>
            <path d="M26.8259 85.9932C26.8259 86.2393 26.5798 86.4854 26.3337 86.9777C22.888 90.4234 19.6884 93.623 16.2427 97.0686C15.5044 97.807 14.766 97.807 14.0276 97.0686C13.5354 96.5764 13.5354 95.5919 14.2738 95.0997C17.7194 91.654 20.919 88.4544 24.3647 85.0087C24.8569 84.5165 25.3492 84.2704 26.0876 84.5165C26.5798 84.7626 26.8259 85.0087 26.8259 85.9932Z" fill="#D292FF"/>
            </svg>
            </div>
            <div className="feature-des flex flex-col ">
                <div
                    class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[27px] font-normal relative"
                    >
                    Lorem Ipsum
                </div>
                <div
                class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[13.5px] font-normal relative"
                >
                Lorem Ipsum is simply dummy
                <br />
                text of the printing and
                <br />
                typesetting industry.
                </div>

            </div>

        </div>

         <div className="f2 flex flex-row my-5 md:my-16">
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="99" viewBox="0 0 82 99" fill="none" className="mx-10 md:mx-5">
            <path d="M33.2385 68.1869C32.254 68.4331 31.5157 68.6792 30.7773 69.1714C29.7928 67.6947 29.0545 65.9719 28.07 64.7413C26.3472 62.28 24.3782 60.065 22.6553 57.6037C19.948 53.9119 17.7329 50.2201 16.7485 45.5438C14.5334 33.9761 20.9325 22.6546 32.0079 18.2244C46.529 12.3175 63.2653 22.1623 65.4803 37.668C66.4648 44.8055 64.2497 50.7124 60.3118 56.3731C58.589 58.8344 56.3739 61.2956 54.6511 64.0029C53.4204 65.7257 52.6821 67.4486 51.4515 69.1714C50.9593 69.9098 50.467 70.6482 49.7286 70.8943C44.0679 73.1094 38.4071 75.0783 32.7463 77.0473C32.0079 77.2934 31.5157 77.0473 31.2696 76.555C31.0235 75.8167 31.0235 75.0783 31.7618 74.8322C32.2541 74.5861 32.7463 74.34 33.2385 74.34C38.1609 72.6171 43.0833 70.8943 48.0058 68.9253C48.498 68.6792 48.9902 68.1869 49.2364 67.6947C51.2053 64.0029 53.6666 61.0494 56.1278 57.6037C58.589 54.4042 60.8041 51.4507 61.7885 47.5128C64.2497 39.6369 62.5269 32.7455 57.1123 26.8386C50.9592 19.9473 43.0834 17.7322 34.2231 20.4395C25.3627 23.1468 20.4402 29.2998 18.7174 38.4063C17.4868 44.8055 19.7019 50.2201 23.3937 55.1425C25.6088 58.096 27.8239 61.0494 30.039 64.0029C31.5157 64.9874 32.254 66.4641 33.2385 68.1869Z" fill="#D292FF"/>
            <path d="M32.0069 92.5525C31.7608 92.3063 31.2686 92.0602 31.2686 91.568C31.2686 91.0757 31.5147 90.5835 31.7608 90.0912C31.7608 89.8451 32.253 89.8451 32.4992 89.8451C37.9138 87.8762 43.5746 85.9072 48.9893 83.9382C50.2199 83.446 50.7121 83.6921 50.9582 84.4305C51.2043 85.1688 50.7121 85.9072 49.7276 86.3994C44.0668 88.3684 38.6522 90.3374 32.9914 92.5525C32.7453 92.3063 32.4991 92.3063 32.0069 92.5525Z" fill="#D292FF"/>
            <path d="M32.0069 84.4314C31.7608 84.1852 31.2686 83.9391 31.2686 83.4469C31.2686 82.9546 31.5147 82.4624 31.7608 81.9701C31.7608 81.724 32.253 81.724 32.4992 81.724C37.9138 79.7551 43.5746 77.7861 48.9893 75.8171C50.2199 75.3249 50.7121 75.571 50.9582 76.3094C51.2043 77.0477 50.9582 77.7861 49.7276 78.2783C44.0668 80.2473 38.6522 82.4624 32.9914 84.4314C32.7453 84.4314 32.4991 84.4314 32.0069 84.4314Z" fill="#D292FF"/>
            <path d="M49.7275 91.3228C48.0046 97.2297 38.4059 100.675 32.499 97.4758C38.1598 95.5068 43.8206 93.2917 49.7275 91.3228Z" fill="#D292FF"/>
            <path d="M42.3445 5.18017C42.3445 6.16466 42.3445 7.14914 42.3445 8.13363C42.3445 8.87199 41.8523 9.36423 41.1139 9.36423C40.3755 9.36423 39.8833 8.87199 39.8833 8.13363C39.8833 6.16466 39.8833 4.19569 39.8833 1.9806C39.8833 1.24224 40.3755 0.75 41.1139 0.75C41.8523 0.75 42.3445 1.24224 42.3445 1.9806C42.3445 2.96509 42.3445 4.19569 42.3445 5.18017Z" fill="#D292FF"/>
            <path d="M5.18014 39.6372C6.16463 39.6372 7.14914 39.6372 8.13362 39.6372C9.11811 39.6372 9.61036 40.1294 9.61036 40.8678C9.61036 41.6062 9.11811 42.0984 8.13362 42.0984C6.16466 42.0984 4.19571 42.0984 2.22674 42.0984C1.24226 42.0984 0.75 41.6062 0.75 40.8678C0.75 40.1294 1.24226 39.6372 2.22674 39.6372C3.21122 39.6372 4.19566 39.6372 5.18014 39.6372Z" fill="#D292FF"/>
            <path d="M77.0469 42.3445C76.0624 42.3445 75.0779 42.3445 74.0934 42.3445C73.355 42.3445 72.8628 41.8523 72.8628 41.1139C72.8628 40.3755 73.355 39.8833 74.0934 39.8833C76.0624 39.8833 78.2775 39.8833 80.2464 39.8833C80.9848 39.8833 81.477 40.3755 81.477 41.1139C81.477 41.8523 80.9848 42.3445 80.2464 42.3445C79.0158 42.3445 78.0314 42.3445 77.0469 42.3445Z" fill="#D292FF"/>
            <path d="M13.0557 11.5796C13.5479 11.8257 13.794 12.0718 14.0402 12.318C15.5169 13.7947 16.7475 15.0253 18.2242 16.502C18.9626 17.2404 18.9626 17.7326 18.2242 18.471C17.732 18.9632 16.9936 18.9632 16.2552 18.471C14.7785 16.9942 13.3018 15.7636 12.0712 14.2869C11.8251 14.0408 11.579 13.3024 11.8251 12.8102C12.0712 12.0718 12.8096 11.8257 13.0557 11.5796Z" fill="#D292FF"/>
            <path d="M64.4951 63.019C64.9873 63.2652 65.2335 63.5113 65.4796 63.7574C66.9563 64.988 68.1869 66.4647 69.6637 67.6953C70.402 68.4337 70.402 69.1721 69.9098 69.6643C69.4175 70.1565 68.6791 70.1565 67.9408 69.4182C66.4641 67.9415 65.2335 66.7109 63.7568 65.2341C63.5106 64.988 63.2645 64.2497 63.5106 63.7574C63.5106 63.5113 64.0029 63.2652 64.4951 63.019Z" fill="#D292FF"/>
            <path d="M70.4026 13.0557C70.1565 13.5479 69.9104 13.7941 69.6643 14.0402C68.1876 15.5169 66.9569 16.7475 65.4802 18.2242C64.988 18.7165 64.2496 18.9626 63.5113 18.2242C63.019 17.732 63.019 16.9936 63.5113 16.2553C64.988 14.7785 66.2186 13.3018 67.6953 12.0712C67.9414 11.8251 68.6798 11.579 69.172 11.8251C69.6643 12.0712 69.9104 12.8096 70.4026 13.0557Z" fill="#D292FF"/>
            <path d="M13.0558 70.1566C12.8096 69.9104 12.3174 69.6643 12.0713 69.1721C11.8252 68.926 12.0713 68.1876 12.0713 67.9415C13.548 66.4647 15.0247 64.7419 16.7476 63.2652C17.2398 62.7729 17.9781 62.7729 18.4704 63.2652C18.9626 63.7574 18.9626 64.4958 18.4704 64.988C16.9937 66.4647 15.517 67.9415 14.0402 69.4182C13.7941 69.9104 13.548 70.1566 13.0558 70.1566Z" fill="#D292FF"/>
            </svg>
            </div>
            <div className="feature-des flex flex-col">
                <div
                    class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[27px] font-normal relative"
                    >
                    Lorem Ipsum
                </div>
                <div
                class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[13.5px] font-normal relative"
                >
                Lorem Ipsum is simply dummy
                <br />
                text of the printing and
                <br />
                typesetting industry.
                </div>

            </div>

        </div>

     </div>

     <button
      className={
        "bg-[#f5167e] rounded-[50px] w-[200px] h-[60px] relative self-center my-10 text-[#ffffff] text-center font-['Figtree-Bold',_sans-serif] text-lg font-bold relative " 
      }
      style={{ boxShadow: "0px 10px 50px 0px rgba(61, 55, 241, 0.25)" }}
    >
        Contact Us
    </button>
        
     </div>

      
     <div className="xs:hidden lg:block h-[80%] bg-[#242565] relative px-16 py-10">
        <h1 className="text-[#D292FF] text-left font-['PlayfairDisplay-ExtraBold',_sans-serif] text-[24px] md:text-[27px] font-extrabold relative ">~  Who we are</h1>
        
        <div className="flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="flex flex-col items-center justify-center md:mx-10 md:order-[2]">
        <img
            className={
                "rounded-[15px] w-[80vw] h-[35vh] relative my-8 md:h-[320px] md:w-[425px]" 
            }
            alt="look for help"
            src="https://s3-alpha-sig.figma.com/img/07cd/30a5/fbc750fab49f45fde83645f53cdbfdca?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDJtW373vgnPMD1f4FTXwg~uRIR5tWviC28v5PbgGwpMoA4WfMooVyVlXSDYBYFGonIwrXohlvbJk20HM-a1HeKk71wnL906tf0-34cZedGXIpwBw855qpDmaRVx9wikxrV2crfy3zlQRIITkmkmgjTiS3p41vd1X~Z18Bt-NpnyBbtDk7G1Xy8UZEUpY1K7NP8ybDKO-Hk~HqRJLNztZnJQ2-CYNFpxQjU76ezoIdhRjngF1bN2o9mWKiiYPsr6vlEYZT83p8iDv5A20qFlA~t8Gje7URcrlfxpnpZagNMDjba3yeDXJytB0f8AeFdf4hpVqznyOVWs0ETElqbeqQ__"
            />

        <div
            className={
                " text-center bg-[#ffffff] rounded-[15px] w-[78vw] h-[214.5px] relative -mt-14 md:h-[210px] md:w-[400px] md:mx-3 md:-mt-16" 
            }
            >
                <div className="text-center py-4">
                <div
                    className={
                        "text-[#0132e0] text-center font-['Nexa-Regular',_sans-serif] text-lg font-normal relative "
                    }
                    >
                    Lorem Ipsum is simply dummy{" "}
                </div>
                <div
                    className={
                        "text-[#000000] text-center my-5 font-['Nexa-Regular',_sans-serif] text-[27px] font-normal relative " 
                    }
                    >
                    Looking for help?{" "}
                </div>
                <div
                    className={
                        "text-[#000000] text-center font-['Nexa-Regular',_sans-serif] text-lg font-normal relative " 
                    }
                    >
                    Lorem Ipsum is simply dummy
                    <br />
                    text of the printing and typesetting
                    <br />
                    industry.{" "}
                </div>
                </div>

            </div>
        </div>
        
        <div
        className={
          "text-[rgba(255,255,255,0.90)] text-left relative my-12" 
        }
      >
        <span>
          <span className="text-[rgba(255, 255, 255, 0.90)] text-[Figtree] text-[42px] ">
            We Help To Get Solutions
            <br />
            <br />
          </span>
          <span className="text-[rgba(255, 255, 255, 0.90)] my-2 text-[Figtree] text-[22px] ">
            Lorem Ipsum is simply dummy text of the printing and
            
            typesetting industry. Lorem Ipsum has been the
            
            industry&#039;s standard dummy text ever since the 1500s,
          </span>
        </span>{" "}

        <div className="features-cont flex  justify-center items-center my-10">

        <div className="f1 flex flex-row my-10">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none" className="mx-5 2xl:mx-10" >
            <path d="M95.9857 2.80388C94.509 2.80388 92.7862 2.80388 91.3094 2.80388C81.2185 3.29613 71.6198 5.51121 62.5133 9.94139C51.4379 15.1099 42.0853 22.4935 34.7017 32.3384C29.5331 38.9836 25.8413 46.3673 23.134 54.2431C22.8879 54.7354 23.134 54.9815 23.3801 55.2276C25.5952 57.4427 27.8103 59.6578 30.0254 61.8729C30.2715 62.119 30.5176 62.6112 30.5176 63.1035C30.5176 63.5957 30.2715 64.088 29.7793 64.3341C29.287 64.5802 28.5486 64.5802 28.3025 64.088C27.0719 62.8574 26.0874 61.8729 24.8568 60.6423C23.3801 59.1656 22.1495 57.6888 20.6728 56.4582C20.1805 55.966 19.9344 55.2276 20.1805 54.4893C23.3801 44.8905 28.0564 36.0302 34.7017 28.1543C41.3469 20.0323 49.4689 13.6332 58.5754 8.9569C66.9435 4.52673 76.05 1.8194 85.4026 0.588796C89.3405 0.0965543 93.2784 -0.149566 97.2164 0.0965544C98.447 0.0965544 98.6931 0.588796 98.9392 1.8194C99.4314 17.8173 95.4935 32.5845 86.8793 46.3673C78.265 59.9039 66.4513 69.9949 51.684 76.394C49.4689 77.3785 47.0077 78.1169 44.5465 79.1013C43.8081 79.3475 43.3159 79.3475 42.8237 78.6091C40.3624 76.1479 37.6551 73.4406 35.1939 70.9794C34.7017 70.4871 34.4555 69.7487 34.9478 69.0104C35.44 68.272 36.4245 68.272 37.1629 69.0104C39.378 71.2255 41.5931 73.4406 43.8081 75.6557C44.3004 76.1479 44.5465 76.1479 45.0387 75.9018C55.8681 72.21 65.4668 66.3031 73.5888 58.4272C83.1875 49.0746 89.5866 37.9992 93.2784 25.447C95.2474 18.5556 96.2319 11.4181 96.2319 4.03449C96.2319 3.54225 95.9857 3.29613 95.9857 2.80388Z" fill="#D292FF"/>
            <path d="M82.4506 31.6003C82.4506 39.9684 75.8053 46.6137 67.4372 46.6137C59.0691 46.6137 52.4238 39.9684 52.4238 31.6003C52.4238 23.4783 59.0691 16.5869 67.1911 16.5869C75.8053 16.5869 82.4506 23.2322 82.4506 31.6003ZM79.4971 31.8464C79.4971 24.955 74.0825 19.5404 67.1911 19.5404C60.2997 19.5404 54.885 24.955 54.885 31.8464C54.885 38.7378 60.2997 44.1524 67.1911 44.1524C74.0825 43.9063 79.4971 38.4917 79.4971 31.8464Z" fill="#D292FF"/>
            <path d="M44.7926 94.6068C46.5154 93.6223 48.2383 92.3917 49.715 91.1611C54.6374 86.731 57.3447 81.3163 58.5753 74.9172C58.8214 73.9327 59.3137 73.4404 60.0521 73.4404C61.0365 73.4404 61.5288 74.1788 61.5288 75.1633C61.2827 76.3939 61.0365 77.8706 60.5443 79.1012C57.837 87.4693 52.9145 93.6223 45.2848 97.8064C43.562 98.7909 42.8236 98.2986 42.5775 96.5758C41.593 91.4072 40.6085 85.9926 39.624 80.824C39.624 80.3318 39.624 79.8396 39.624 79.5934C39.8701 79.1012 40.3624 78.8551 41.1007 78.8551C41.593 78.8551 42.0852 79.3473 42.3314 79.8396C42.5775 81.3163 42.8236 82.793 43.3158 84.5159C43.562 87.9616 44.3003 91.1611 44.7926 94.6068Z" fill="#D292FF"/>
            <path d="M4.18338 53.9966C5.66011 54.2427 7.13683 54.4888 8.36744 54.7349C11.8131 55.4733 15.2588 55.9655 18.4584 56.7039C18.7045 56.7039 18.7045 56.7039 18.9506 56.7039C19.689 56.95 20.1812 57.6884 19.9351 58.4267C19.689 59.1651 19.1968 59.6573 18.2123 59.4112C16.2433 58.919 14.0282 58.6729 12.0592 58.1806C8.85968 57.4422 5.66011 56.95 2.21442 56.2116C1.96829 56.2116 1.96829 56.2116 1.72217 56.2116C0.491569 55.9655 0.245448 55.2272 0.73769 53.9966C2.21442 51.2892 3.93726 48.5819 6.15235 46.3668C10.8286 41.4444 16.4894 38.7371 22.8886 37.2603C23.1347 37.2603 23.3808 37.2603 23.3808 37.0142C24.1192 36.7681 24.8575 37.2603 25.1037 37.9987C25.3498 38.7371 24.8575 39.4754 23.873 39.7215C22.3963 40.2138 20.6735 40.4599 19.1968 40.9522C12.7976 43.1672 7.87519 47.1052 4.18338 52.766C4.4295 53.5043 4.4295 53.7504 4.18338 53.9966Z" fill="#D292FF"/>
            <path d="M21.6582 75.9019C21.9043 75.6558 22.1504 75.1635 22.3966 74.9174C27.0729 70.2411 31.503 65.8109 36.1793 61.1346C37.9022 59.4118 39.3789 57.9351 41.1017 56.2122C41.8401 55.4739 42.5785 55.4739 43.3168 55.9661C43.8091 56.4584 43.8091 57.4428 43.0707 58.1812C37.6561 63.5959 32.2414 69.2566 26.5806 74.6713C25.8423 75.4097 25.1039 76.3941 24.1194 77.1325C23.6272 77.6247 23.1349 77.6247 22.6427 77.3786C21.9043 77.1325 21.6582 76.6403 21.6582 75.9019Z" fill="#D292FF"/>
            <path d="M15.2586 82.3008C15.7509 82.5469 16.2431 82.793 16.4892 83.2853C16.7354 83.7775 16.4892 84.2697 16.2431 84.762C15.997 85.0081 15.5048 85.5004 15.2586 85.9926C12.3052 88.946 9.35174 92.1456 6.15217 95.0991C5.65993 95.3452 5.41381 95.5913 4.92157 95.5913C4.42932 95.5913 3.93708 95.3452 3.69096 94.8529C3.44484 94.1146 3.44484 93.6223 3.93708 93.1301C5.90605 91.1611 7.87502 89.1922 9.84398 87.2232C11.3207 85.7465 12.5513 84.5159 14.028 83.0391C14.5203 82.793 14.7664 82.5469 15.2586 82.3008Z" fill="#D292FF"/>
            <path d="M13.0442 72.21C14.2748 72.21 15.0132 73.4406 14.5209 74.1789C14.2748 74.425 14.2748 74.6712 14.0287 74.9173C10.8291 78.1169 7.62954 81.3164 4.42997 84.516L4.18385 84.7621C3.44549 85.2544 2.70713 85.5005 2.21488 84.7621C1.72264 84.2699 1.72264 83.2854 2.21488 82.7932C4.67609 80.332 7.1373 77.8707 9.59851 75.4095C10.583 74.425 11.3214 73.6867 12.3058 72.9483C12.552 72.4561 13.0442 72.21 13.0442 72.21Z" fill="#D292FF"/>
            <path d="M26.8259 85.9932C26.8259 86.2393 26.5798 86.4854 26.3337 86.9777C22.888 90.4234 19.6884 93.623 16.2427 97.0686C15.5044 97.807 14.766 97.807 14.0276 97.0686C13.5354 96.5764 13.5354 95.5919 14.2738 95.0997C17.7194 91.654 20.919 88.4544 24.3647 85.0087C24.8569 84.5165 25.3492 84.2704 26.0876 84.5165C26.5798 84.7626 26.8259 85.0087 26.8259 85.9932Z" fill="#D292FF"/>
            </svg>
            </div>
            <div className="feature-des flex flex-col mx-5 2xl:mx-10">
                <div
                    class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[27px] font-normal relative"
                    >
                    Lorem Ipsum
                </div>
                <div
                class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[13.5px] font-normal relative"
                >
                Lorem Ipsum is simply dummy
                
                text of the printing and
               
                typesetting industry.
                </div>

            </div>

        </div>

         <div className="f2 flex flex-row my-10">
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="99" viewBox="0 0 82 99" fill="none" className="mx-5 2xl:mx-10">
            <path d="M33.2385 68.1869C32.254 68.4331 31.5157 68.6792 30.7773 69.1714C29.7928 67.6947 29.0545 65.9719 28.07 64.7413C26.3472 62.28 24.3782 60.065 22.6553 57.6037C19.948 53.9119 17.7329 50.2201 16.7485 45.5438C14.5334 33.9761 20.9325 22.6546 32.0079 18.2244C46.529 12.3175 63.2653 22.1623 65.4803 37.668C66.4648 44.8055 64.2497 50.7124 60.3118 56.3731C58.589 58.8344 56.3739 61.2956 54.6511 64.0029C53.4204 65.7257 52.6821 67.4486 51.4515 69.1714C50.9593 69.9098 50.467 70.6482 49.7286 70.8943C44.0679 73.1094 38.4071 75.0783 32.7463 77.0473C32.0079 77.2934 31.5157 77.0473 31.2696 76.555C31.0235 75.8167 31.0235 75.0783 31.7618 74.8322C32.2541 74.5861 32.7463 74.34 33.2385 74.34C38.1609 72.6171 43.0833 70.8943 48.0058 68.9253C48.498 68.6792 48.9902 68.1869 49.2364 67.6947C51.2053 64.0029 53.6666 61.0494 56.1278 57.6037C58.589 54.4042 60.8041 51.4507 61.7885 47.5128C64.2497 39.6369 62.5269 32.7455 57.1123 26.8386C50.9592 19.9473 43.0834 17.7322 34.2231 20.4395C25.3627 23.1468 20.4402 29.2998 18.7174 38.4063C17.4868 44.8055 19.7019 50.2201 23.3937 55.1425C25.6088 58.096 27.8239 61.0494 30.039 64.0029C31.5157 64.9874 32.254 66.4641 33.2385 68.1869Z" fill="#D292FF"/>
            <path d="M32.0069 92.5525C31.7608 92.3063 31.2686 92.0602 31.2686 91.568C31.2686 91.0757 31.5147 90.5835 31.7608 90.0912C31.7608 89.8451 32.253 89.8451 32.4992 89.8451C37.9138 87.8762 43.5746 85.9072 48.9893 83.9382C50.2199 83.446 50.7121 83.6921 50.9582 84.4305C51.2043 85.1688 50.7121 85.9072 49.7276 86.3994C44.0668 88.3684 38.6522 90.3374 32.9914 92.5525C32.7453 92.3063 32.4991 92.3063 32.0069 92.5525Z" fill="#D292FF"/>
            <path d="M32.0069 84.4314C31.7608 84.1852 31.2686 83.9391 31.2686 83.4469C31.2686 82.9546 31.5147 82.4624 31.7608 81.9701C31.7608 81.724 32.253 81.724 32.4992 81.724C37.9138 79.7551 43.5746 77.7861 48.9893 75.8171C50.2199 75.3249 50.7121 75.571 50.9582 76.3094C51.2043 77.0477 50.9582 77.7861 49.7276 78.2783C44.0668 80.2473 38.6522 82.4624 32.9914 84.4314C32.7453 84.4314 32.4991 84.4314 32.0069 84.4314Z" fill="#D292FF"/>
            <path d="M49.7275 91.3228C48.0046 97.2297 38.4059 100.675 32.499 97.4758C38.1598 95.5068 43.8206 93.2917 49.7275 91.3228Z" fill="#D292FF"/>
            <path d="M42.3445 5.18017C42.3445 6.16466 42.3445 7.14914 42.3445 8.13363C42.3445 8.87199 41.8523 9.36423 41.1139 9.36423C40.3755 9.36423 39.8833 8.87199 39.8833 8.13363C39.8833 6.16466 39.8833 4.19569 39.8833 1.9806C39.8833 1.24224 40.3755 0.75 41.1139 0.75C41.8523 0.75 42.3445 1.24224 42.3445 1.9806C42.3445 2.96509 42.3445 4.19569 42.3445 5.18017Z" fill="#D292FF"/>
            <path d="M5.18014 39.6372C6.16463 39.6372 7.14914 39.6372 8.13362 39.6372C9.11811 39.6372 9.61036 40.1294 9.61036 40.8678C9.61036 41.6062 9.11811 42.0984 8.13362 42.0984C6.16466 42.0984 4.19571 42.0984 2.22674 42.0984C1.24226 42.0984 0.75 41.6062 0.75 40.8678C0.75 40.1294 1.24226 39.6372 2.22674 39.6372C3.21122 39.6372 4.19566 39.6372 5.18014 39.6372Z" fill="#D292FF"/>
            <path d="M77.0469 42.3445C76.0624 42.3445 75.0779 42.3445 74.0934 42.3445C73.355 42.3445 72.8628 41.8523 72.8628 41.1139C72.8628 40.3755 73.355 39.8833 74.0934 39.8833C76.0624 39.8833 78.2775 39.8833 80.2464 39.8833C80.9848 39.8833 81.477 40.3755 81.477 41.1139C81.477 41.8523 80.9848 42.3445 80.2464 42.3445C79.0158 42.3445 78.0314 42.3445 77.0469 42.3445Z" fill="#D292FF"/>
            <path d="M13.0557 11.5796C13.5479 11.8257 13.794 12.0718 14.0402 12.318C15.5169 13.7947 16.7475 15.0253 18.2242 16.502C18.9626 17.2404 18.9626 17.7326 18.2242 18.471C17.732 18.9632 16.9936 18.9632 16.2552 18.471C14.7785 16.9942 13.3018 15.7636 12.0712 14.2869C11.8251 14.0408 11.579 13.3024 11.8251 12.8102C12.0712 12.0718 12.8096 11.8257 13.0557 11.5796Z" fill="#D292FF"/>
            <path d="M64.4951 63.019C64.9873 63.2652 65.2335 63.5113 65.4796 63.7574C66.9563 64.988 68.1869 66.4647 69.6637 67.6953C70.402 68.4337 70.402 69.1721 69.9098 69.6643C69.4175 70.1565 68.6791 70.1565 67.9408 69.4182C66.4641 67.9415 65.2335 66.7109 63.7568 65.2341C63.5106 64.988 63.2645 64.2497 63.5106 63.7574C63.5106 63.5113 64.0029 63.2652 64.4951 63.019Z" fill="#D292FF"/>
            <path d="M70.4026 13.0557C70.1565 13.5479 69.9104 13.7941 69.6643 14.0402C68.1876 15.5169 66.9569 16.7475 65.4802 18.2242C64.988 18.7165 64.2496 18.9626 63.5113 18.2242C63.019 17.732 63.019 16.9936 63.5113 16.2553C64.988 14.7785 66.2186 13.3018 67.6953 12.0712C67.9414 11.8251 68.6798 11.579 69.172 11.8251C69.6643 12.0712 69.9104 12.8096 70.4026 13.0557Z" fill="#D292FF"/>
            <path d="M13.0558 70.1566C12.8096 69.9104 12.3174 69.6643 12.0713 69.1721C11.8252 68.926 12.0713 68.1876 12.0713 67.9415C13.548 66.4647 15.0247 64.7419 16.7476 63.2652C17.2398 62.7729 17.9781 62.7729 18.4704 63.2652C18.9626 63.7574 18.9626 64.4958 18.4704 64.988C16.9937 66.4647 15.517 67.9415 14.0402 69.4182C13.7941 69.9104 13.548 70.1566 13.0558 70.1566Z" fill="#D292FF"/>
            </svg>
            </div>
            <div className="feature-des flex flex-col mx-5 2xl:mx-10">
                <div
                    class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[27px] font-normal relative"
                    >
                    Lorem Ipsum
                </div>
                <div
                class="text-[rgba(255,255,255,0.90)] text-left font-['Figtree-Regular',_sans-serif] text-[13.5px] font-normal relative"
                >
                Lorem Ipsum is simply dummy
                
                text of the printing and
                
                typesetting industry.
                </div>

            </div>

        </div>

     </div>

     <button
      className={
        "bg-[#f5167e] rounded-[50px] w-[302px] h-[60px] relative self-center my-10 text-[#ffffff] text-center font-['Figtree-Bold',_sans-serif] text-lg font-bold relative " 
      }
      style={{ boxShadow: "0px 10px 50px 0px rgba(61, 55, 241, 0.25)" }}
    >
        Contact Us
    </button>
      </div>
      </div>


     
        
     </div>

      <div className="flex justify-center">  
    <div className="img-cont w-[90vw] h-[60%]  items-center -mt-2 z-10 relative">
        <img src="https://s3-alpha-sig.figma.com/img/e44b/950f/b4840766421086953e20e34484f58173?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFyqLBURDep1ZwLJuYBmFm0E34WtEBl3K2DoNyo14kAo1-xnT093HbXrTxKl9s2On3MsAQi~ihd7wskCAFE1yRz9PZPDGMJdSYC6Rp652tDWlDaHX881ps8M8h-QgCSi~NnbtH~wkQ2IR6xzxleR9s1b9JrCYSuJ1hbDGkI8eiUshQQM6QtidcvwAqXG-Au~FAu2KjO3wIGjARYc5RDPliGPzYjPM2nwCX79QGaxKl6XLEpFHnaZRfygYOG5DHtsScF6o9~MaACLfXreoD-pvM5vTouFc1rVdDXQJG4Xzr6LoJtaUIh23J2lNjnx7udPIi8IznEpplwlCqguhl4O6A__" 
         className="rounded-[20px] -mt-5 z-10" alt="bottom image"/>

    </div>
    </div>
      

     </>
    )
}

export default WhoWeAre;