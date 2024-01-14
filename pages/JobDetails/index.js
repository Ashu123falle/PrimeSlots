import Footer from '@/Components/Footer/Footer';
import MiniNavbar from '@/Components/MiniNavbar/MiniNavbar';
import StayLoop from '@/Components/StayLoop/StayLoop';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const JobsItem = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  return (
    <div>  
    <MiniNavbar/>
    
    <div className='flex flex-col items-center justify-between w-full h-auto pt-24 text-indigo-200 bg-gray-900 flex-nowrap max-md:mx-0'>

       
        <div className='text-center max-md:px-2 max-sm:text-lg mt-24'>
        <h1 className='text-4xl text-white font-playfair '>PRODUCT DESIGNER</h1>
        </div>

        <div className='flex max-sm:flex-col'>
        <p className='mt-2 mr-4 font-normal text-white text-md font-figtree'>Job Type: Full Time </p>
        <p className='mt-2 font-normal text-white text-md font-figtree'> No of Vacancies:02</p>
        </div>
       
       <button
            className=" w-40 h-14 self-center font-semibold rounded-[50px]  bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white  mr-5 my-6 px-6  max-md:self-center  max-md:mx-6 max-md:w-40 box-shadow mt-12 mb-20"
            type="button"
          >
            Apply Now
          </button>
     </div>
     
     <div className='pt-20 pl-20 pr-16 max-md:px-8'>
     <Image
              src='/assets/Vectortop.png' alt=""
              width={70}
              height={70}
              className='absolute z-10 right-[95%] sm:right-[95%] top-[563px] md:top-[ 572px] w-[37px] h-[35px] md:w-[60px] md:h-[70px] max-md:sr-only sm:inline-block'
        />
     <Image
              src='/assets/Vectormiddle.png' alt=""
              width={100}
              height={200}
              className='absolute z-10 right-[95%] sm:right-[95%] top-[763px] md:top-[ 572px] w-[100px] h-[225px] md:w-[100px] md:h-[225px] max-md:sr-only sm:inline-block'
        />
    
         
        <div className='pb-24 pl-14 max-md:w-full flex justify-center max-md:pl-0'>
             <Image src='/assets/Jobs1.png' width={1200} height={500} alt="" />
        </div>
       
        <div className='flex max-md:px-4 max-md:flex-col-reverse'>
        <div className='flex-col w-[70%] max-md:w-full pr-12 pl-8 max-md:px-4 my-8 lg:my-0'>
          
            <h1 className='text-4xl font-bold text-gray-900 font-figtree '>PRODUCT DESIGNER</h1>

         
            <div>
               <p className='mt-16 text-2xl font-semibold max-md:mt-10'>Who Are We Looking For</p>
            <ul className='px-4 list-disc'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam dictum ligula a gravida porta.</li>
                <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
                <li>Vestibulum porta libero nec aliquet blandit.</li>
                <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                <li>Cras ut erat eu ante suscipit rutrum.</li>    
            </ul> 
            </div>
             <div>
              <p className='mt-16 text-2xl font-semibold'>What You Will Be Doing</p>
               <ul className='px-4 list-disc'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam dictum ligula a gravida porta.</li>
                <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
                <li>Vestibulum porta libero nec aliquet blandit.</li>
                <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                <li>Cras ut erat eu ante suscipit rutrum.</li>    
            </ul>
             </div>
           <div>
            <p className='mt-16 text-2xl font-semibold'>Bonus Points for Familiarity with</p>
            <ul className='px-4 list-disc'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam dictum ligula a gravida porta.</li>
                <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                   
            </ul>
           </div>
            
            <div className='w-full max-md:pr-4'>
               <h1 className='mt-16 text-2xl font-semibold'>Educational Requirement</h1>
            <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
          
            </div>
           

           <div>
            <p className='mt-16 text-2xl font-semibold'>Salary</p>
            <ul className='px-4 list-disc'>
                <li>Salary:  18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
                <li>Salary Review: Yearly</li>
                    
            </ul>
           </div>
            
            <div>
                <p className='mt-16 text-2xl font-semibold'>Working Hours</p>
            <ul className='px-4 list-disc'>
                <li>8 AM – 5 PM</li>
                   
            </ul>
            </div>
            <div>
              <p className='mt-16 text-2xl font-semibold'>Working Days</p>
            <ul className='px-4 list-disc'>
                <li>Weekly: 5 days..</li>
                <li>Weekend: Friday.Saturday</li>
               
            </ul>  
            </div>
            
            <div>
               <p className='mt-16 text-2xl font-semibold'>Perks & Benefits You’ll Get </p>
            <ul className='px-4 list-disc'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam dictum ligula a gravida porta.</li>
                <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
                <li>Vestibulum porta libero nec aliquet blandit.</li>
                <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                <li>Cras ut erat eu ante suscipit rutrum.</li>    
            </ul>
             
            </div>
            
        </div>

        <div className='flex flex-col items-center mb-10'>

     
        <div className='min-w-[280px] w-full bg-indigo-100 rounded-lg md:pb-3'>
        <div className='flex justify-center max-md:self-center'>
           <button
            className=" w-40 h-14  font-semibold rounded-[50px]  bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white  mr-5 my-6 px-6  max-md:self-center  max-md:mx-6 max-md:w-40 box-shadow mt-12 "
            type="button">Apply Now</button> 
         </div> 
         <div className=''>
           <h1 className='text-xl font-bold text-gray-800 max-md:text-center ml-14 max-md:ml-0 mb-6'>Job Summary</h1> 
         </div>
         
         <div className='grid grid-cols-1 sm:grid-cols-2 px-8 md:pr-8  md:grid-cols-1 lg:grid-cols-1  '>
         <div className='flex items-center m-4'>
            <Image src='/assets/location.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Location</p>
                <p className='text-gray-900'>Panjim, Goa</p>
            </div>
         </div>

         <div className='flex items-center m-4'>
            <Image src='/assets/office-bag.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Job Type</p>
                <p className='text-gray-900'>Full Time</p>
            </div>
         </div>
         <div className='flex items-center  m-4'>
            <Image src='/assets/calender.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Date posted</p>
                <p className='text-gray-900'>posted 1 month ago</p>
            </div>
         </div>
         <div className='flex items-center m-4'>
            <Image src='/assets/book.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Exprience</p>
                <p className='text-gray-900'>Experience:1-3 year</p>
            </div>
         </div>
         <div className='items-center flex m-4'>
            <Image src='/assets/clock.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Working Hours</p>
                <p className='text-gray-900'>9AM - 6PM</p>
            </div>
         </div>
         <div className='flex  items-center  m-3'>
            <Image src='/assets/calender-days.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Working Days</p>
                <p className='text-gray-900'>Weekly: 5days</p>
                <p className='text-gray-900 break-normal'>Weekend: Saturday,Sunday</p>
            </div>
         </div>
         <div className='items-center flex m-4'>
            <Image src='/assets/chair.svg' width={30} height={30} className='m-2' alt=""/>
            <div className='pl-2 text-lg font-semibold'>
                <p className='text-pink-400'>Vacancy</p>
                <p className='text-gray-900'>Weekly: 5days</p>
            </div>
            
         </div>
         
         </div>
         <div className='pt-10 pl-8 mb-10 m-4'>
            <Link href='#' className='text-xl font-semibold text-gray-900 underline'>View all jobs</Link>
            </div>
        </div>
      
        <h1>Share this:</h1>
        <div className="flex items-center justify-start gap-5 mt-3 logos">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <Image src='/assets/Facebook.svg'  width={54} height={54} alt="Facebook Logo" className="logo" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
             <Image src='/assets/Twiter.svg' width={54} height={54}  alt="Instagram Logo" className="logo" />
           </a>
           <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
             <Image src='/assets/linkedin.svg'  width={54} height={54} alt="Group Logo" className="logo" />
           </a>
           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src='/assets/instagramJob.svg' width={54} height={54}  alt="LinkedIn Logo" className="logo" />
           </a>
       </div>

        </div>

        
     </div>

     <div className='flex-col px-12 my-10 '>
        
        <hr></hr>
        
     <p className='mt-16 text-2xl font-semibold'>The Application Process</p>
            <ul className='px-4 list-disc'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam dictum ligula a gravida porta.</li>
                <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
                <li>Vestibulum porta libero nec aliquet blandit.</li>
                <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                <li>Cras ut erat eu ante suscipit rutrum.</li>    
            </ul>
        <div className='w-full max-md:w-full pr-44 max-md:pr-4'>
            <h1 className='mt-16 text-2xl font-semibold'>Our Statement</h1>
        <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
            </div>    
        
         
         <div className='flex justify-center'>
           <button
            className=" w-40 h-14  font-semibold rounded-[50px]  bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white  mr-5 my-6 px-6  max-md:self-center  max-md:mx-6 max-md:w-40 box-shadow mt-12 "
            type="button"
          >
            Apply Now
          </button> 
         </div>
          
             
     </div>
     </div>
     

     
      <StayLoop/>
      <Footer/>
    </div>
  )
}

export default JobsItem