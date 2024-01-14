
import WhyShouldJoin from "@/Components/WhyShouldJoin/WhyShouldJoin";


import React,{useEffect,useState} from "react";
import Link from "next/link";
import JobsHeader from "@/Components/JobsHeader";
import StayLoop from "@/Components/StayLoop/StayLoop";
import Footer from "@/Components/Footer/Footer";
import MiniNavbar from "@/Components/MiniNavbar/MiniNavbar";



const backgroundImageUrl = '/assets/border.png'
const Jobs = () => {

  return (
    <>
        <div className='h-[70px]' style={{ background: 'linear-gradient(to bottom, rgba(12, 12, 66, 1), rgba(36, 37, 101, 1))' }}>
          <MiniNavbar />
          <div className=" relative w-full bg-cover text-white flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/assets/Border.png")', height: 'auto' }}>
            <div className="absolute inset-0" style={{ backgroundImage: 'url("/assets/BorderLayer.png")', opacity: 2 }}></div>
            <div className="relative z-20 text-center mt-32 mb-10 max-w-[655px] p-5">
              <h1
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}
                className="xs:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2 mt-16"
              >
                JOIN US
              </h1>

              <p
                className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-5"
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
              </p>

              <button
                className="bg-pink-500 rounded-full px-4 py-2 text-white sm:px-6 sm:py-3 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
              >
                Join the team
              </button>
            </div>
          </div>
          <WhyShouldJoin />

          {/* Career Openings section */}
          <div className="mb-16 mt-12">
                  <div className="mt-6 flex flex-col justify-center items-center w-full px-4 gap-2">
                    <h1 className="text-center text-fuchsia-400 text-lg font-medium font-['Figtree'] uppercase">Come join us</h1>
                    <h1 className="text-center text-slate-900 text-4xl font-bold font-['Rubik']">Career Openings</h1>
                    <p className="max-w-[530px] text-center text-black text-sm font-normal font-['Rubik'] leading-normal">We’re always looking for creative, talented self-starters to join the JMC
                        family. Check out our open roles below and fill out an application.</p>
                  </div>

                  <div className="xl:flex xl:justify-center ">
                  <div className="px-4 md:flex md:justify-between xl:justify-end w-full xl:w-[90%] mt-9 px-3 lg:px-16 lg:pl-13">
                    <ul className="flex flex-col gap-3 mx-9 lg:mx-0 my-9 md:w-[260px]">
                      <li class="text-slate-900 text-lg font-semibold font-['Figtree'] uppercase">HT & Admin</li>
                      <li class="text-indigo-500 text-lg font-semibold font-['Figtree'] uppercase">Engineering (20)</li>
                      <li class="text-slate-900 text-lg font-semibold font-['Figtree'] uppercase">Support</li>
                      <li class="text-slate-900 text-lg font-semibold font-['Figtree'] uppercase">Design</li>
                      <li class="text-slate-900 text-lg font-semibold font-['Figtree'] uppercase">Digital Marketing</li>
                    </ul>

                  <ul className="w-full lg:w-[70%] flex-col gap-6">
                    <li class="flex flex-col md:flex-row justify-around lg:items-center bg-white rounded-xl shadow p-3 sm:p-3 md:p-5 m-2">
                      <h1 class="text-slate-900 text-lg md:text-2xl font-medium font-['Figtree'] md:w-[250px] lg:w-[350px]">Wordpress Developer</h1>
                      <div className="w-full flex justify-around items-center">

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Experience</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2 Years</h1>
                      </div>

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Deadline</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2021-05-08</h1>
                      </div>

                      <Link href="/JobDetails">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.636718 9.54626C0.636718 9.29173 0.729755 9.04764 0.895361 8.86766C1.06097 8.68769 1.28558 8.58658 1.51978 8.58658L22.3476 8.58658L16.7897 2.54828C16.6238 2.36808 16.5307 2.12368 16.5307 1.86883C16.5307 1.61399 16.6238 1.36958 16.7897 1.18938C16.9555 1.00918 17.1804 0.907941 17.4149 0.907941C17.6494 0.907941 17.8743 1.00918 18.0401 1.18938L25.1046 8.8668C25.1868 8.95595 25.252 9.06185 25.2966 9.17844C25.3411 9.29503 25.364 9.42002 25.364 9.54625C25.364 9.67249 25.3411 9.79748 25.2966 9.91407C25.252 10.0307 25.1868 10.1366 25.1046 10.2257L18.0401 17.9031C17.8743 18.0833 17.6494 18.1846 17.4149 18.1846C17.1804 18.1846 16.9555 18.0833 16.7897 17.9031C16.6238 17.7229 16.5307 17.4785 16.5307 17.2237C16.5307 16.9688 16.6238 16.7244 16.7897 16.5442L22.3476 10.5059L1.51978 10.5059C1.28558 10.5059 1.06097 10.4048 0.895361 10.2248C0.729755 10.0449 0.636718 9.80078 0.636718 9.54626Z" fill="#D4D4D4"/>
                        </g>
                        </svg>
                      </Link>

                      </div>
                    </li>

                    <li class="flex flex-col md:flex-row justify-around lg:items-center bg-white rounded-xl shadow p-3 sm:p-3 md:p-5 m-2">
                      <h1 class="text-slate-900 text-lg md:text-2xl font-medium font-['Figtree'] md:w-[250px] lg:w-[350px]">Wordpress Developer</h1>
                      <div className="w-full flex justify-around items-center">

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Experience</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2 Years</h1>
                      </div>

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Deadline</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2021-05-08</h1>
                      </div>

                      <Link href="/JobDetails">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.636718 9.54626C0.636718 9.29173 0.729755 9.04764 0.895361 8.86766C1.06097 8.68769 1.28558 8.58658 1.51978 8.58658L22.3476 8.58658L16.7897 2.54828C16.6238 2.36808 16.5307 2.12368 16.5307 1.86883C16.5307 1.61399 16.6238 1.36958 16.7897 1.18938C16.9555 1.00918 17.1804 0.907941 17.4149 0.907941C17.6494 0.907941 17.8743 1.00918 18.0401 1.18938L25.1046 8.8668C25.1868 8.95595 25.252 9.06185 25.2966 9.17844C25.3411 9.29503 25.364 9.42002 25.364 9.54625C25.364 9.67249 25.3411 9.79748 25.2966 9.91407C25.252 10.0307 25.1868 10.1366 25.1046 10.2257L18.0401 17.9031C17.8743 18.0833 17.6494 18.1846 17.4149 18.1846C17.1804 18.1846 16.9555 18.0833 16.7897 17.9031C16.6238 17.7229 16.5307 17.4785 16.5307 17.2237C16.5307 16.9688 16.6238 16.7244 16.7897 16.5442L22.3476 10.5059L1.51978 10.5059C1.28558 10.5059 1.06097 10.4048 0.895361 10.2248C0.729755 10.0449 0.636718 9.80078 0.636718 9.54626Z" fill="#D4D4D4"/>
                        </g>
                        </svg>
                      </Link>

                      </div>
                    </li>

                    <li class="flex flex-col md:flex-row justify-around lg:items-center bg-white rounded-xl shadow p-3 sm:p-3 md:p-5 m-2">
                      <h1 class="text-slate-900 text-lg md:text-2xl font-medium font-['Figtree'] md:w-[250px] lg:w-[350px]">Wordpress Developer</h1>
                      <div className="w-full flex justify-around items-center">

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Experience</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2 Years</h1>
                      </div>

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Deadline</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2021-05-08</h1>
                      </div>

                      <Link href="/JobDetails">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.636718 9.54626C0.636718 9.29173 0.729755 9.04764 0.895361 8.86766C1.06097 8.68769 1.28558 8.58658 1.51978 8.58658L22.3476 8.58658L16.7897 2.54828C16.6238 2.36808 16.5307 2.12368 16.5307 1.86883C16.5307 1.61399 16.6238 1.36958 16.7897 1.18938C16.9555 1.00918 17.1804 0.907941 17.4149 0.907941C17.6494 0.907941 17.8743 1.00918 18.0401 1.18938L25.1046 8.8668C25.1868 8.95595 25.252 9.06185 25.2966 9.17844C25.3411 9.29503 25.364 9.42002 25.364 9.54625C25.364 9.67249 25.3411 9.79748 25.2966 9.91407C25.252 10.0307 25.1868 10.1366 25.1046 10.2257L18.0401 17.9031C17.8743 18.0833 17.6494 18.1846 17.4149 18.1846C17.1804 18.1846 16.9555 18.0833 16.7897 17.9031C16.6238 17.7229 16.5307 17.4785 16.5307 17.2237C16.5307 16.9688 16.6238 16.7244 16.7897 16.5442L22.3476 10.5059L1.51978 10.5059C1.28558 10.5059 1.06097 10.4048 0.895361 10.2248C0.729755 10.0449 0.636718 9.80078 0.636718 9.54626Z" fill="#D4D4D4"/>
                        </g>
                        </svg>
                      </Link>

                      </div>
                    </li>

                    <li class="flex flex-col md:flex-row justify-around lg:items-center bg-white rounded-xl shadow p-3 sm:p-3 md:p-5 m-2">
                      <h1 class="text-slate-900 text-lg md:text-2xl font-medium font-['Figtree'] md:w-[250px] lg:w-[350px]">Wordpress Developer</h1>
                      <div className="w-full flex justify-around items-center">

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Experience</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2 Years</h1>
                      </div>

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Deadline</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2021-05-08</h1>
                      </div>

                      <Link href="/JobDetails">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.636718 9.54626C0.636718 9.29173 0.729755 9.04764 0.895361 8.86766C1.06097 8.68769 1.28558 8.58658 1.51978 8.58658L22.3476 8.58658L16.7897 2.54828C16.6238 2.36808 16.5307 2.12368 16.5307 1.86883C16.5307 1.61399 16.6238 1.36958 16.7897 1.18938C16.9555 1.00918 17.1804 0.907941 17.4149 0.907941C17.6494 0.907941 17.8743 1.00918 18.0401 1.18938L25.1046 8.8668C25.1868 8.95595 25.252 9.06185 25.2966 9.17844C25.3411 9.29503 25.364 9.42002 25.364 9.54625C25.364 9.67249 25.3411 9.79748 25.2966 9.91407C25.252 10.0307 25.1868 10.1366 25.1046 10.2257L18.0401 17.9031C17.8743 18.0833 17.6494 18.1846 17.4149 18.1846C17.1804 18.1846 16.9555 18.0833 16.7897 17.9031C16.6238 17.7229 16.5307 17.4785 16.5307 17.2237C16.5307 16.9688 16.6238 16.7244 16.7897 16.5442L22.3476 10.5059L1.51978 10.5059C1.28558 10.5059 1.06097 10.4048 0.895361 10.2248C0.729755 10.0449 0.636718 9.80078 0.636718 9.54626Z" fill="#D4D4D4"/>
                        </g>
                        </svg>
                      </Link>

                      </div>
                    </li>

                    <li class="flex flex-col md:flex-row justify-around lg:items-center bg-white rounded-xl shadow p-3 sm:p-3 md:p-5 m-2">
                      <h1 class="text-slate-900 text-lg md:text-2xl font-medium font-['Figtree'] md:w-[250px] lg:w-[350px]">Wordpress Developer</h1>
                      <div className="w-full flex justify-around items-center">

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Experience</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2 Years</h1>
                      </div>

                      <div className="">
                        <h1 class="text-neutral-300 text-sm md:text-base font-medium font-['Figtree']">Deadline</h1>
                        <h1 class="text-slate-900 text-lg md:text-2xl font-semibold font-['Figtree']">2021-05-08</h1>
                      </div>

                      <Link href="/JobDetails">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.636718 9.54626C0.636718 9.29173 0.729755 9.04764 0.895361 8.86766C1.06097 8.68769 1.28558 8.58658 1.51978 8.58658L22.3476 8.58658L16.7897 2.54828C16.6238 2.36808 16.5307 2.12368 16.5307 1.86883C16.5307 1.61399 16.6238 1.36958 16.7897 1.18938C16.9555 1.00918 17.1804 0.907941 17.4149 0.907941C17.6494 0.907941 17.8743 1.00918 18.0401 1.18938L25.1046 8.8668C25.1868 8.95595 25.252 9.06185 25.2966 9.17844C25.3411 9.29503 25.364 9.42002 25.364 9.54625C25.364 9.67249 25.3411 9.79748 25.2966 9.91407C25.252 10.0307 25.1868 10.1366 25.1046 10.2257L18.0401 17.9031C17.8743 18.0833 17.6494 18.1846 17.4149 18.1846C17.1804 18.1846 16.9555 18.0833 16.7897 17.9031C16.6238 17.7229 16.5307 17.4785 16.5307 17.2237C16.5307 16.9688 16.6238 16.7244 16.7897 16.5442L22.3476 10.5059L1.51978 10.5059C1.28558 10.5059 1.06097 10.4048 0.895361 10.2248C0.729755 10.0449 0.636718 9.80078 0.636718 9.54626Z" fill="#D4D4D4"/>
                        </g>
                        </svg>
                      </Link>

                      </div>
                    </li>


                  </ul>

                  </div>
                  </div>
          </div>

                    
          <StayLoop/>
          <Footer/>
        </div>
    </>
  );
};

export default Jobs;

