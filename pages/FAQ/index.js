
import Footer from '@/Components/Footer/Footer';
import StayLoop from '@/Components/StayLoop/StayLoop';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FAQ = () => {
  return (
  <div>
    <div className='w-full h-auto p-2 px-8 pb-12 text-white bg-gradient-to-b from-gray-900 to-indigo-900 sm:px-16'>
    
    <nav className="flex items-center justify-between ">
      <Link href="/" className="ml-20 bg-white max-md:ml-4 ">
        <Image src='/assets/FAQlogo.png' alt="Logo" height={32} width={136.7} />
      </Link>
      <div className="flex p-3 text-white nav-text">
      <Link href="/Marketplace" className="mx-2 text-sm sm:text-md md:text-base">Marketplace</Link>
      <Link href="/Partner" className="mx-2 text-sm sm:text-md md:text-base">Become a Partner</Link>
       </div> 
    </nav>
    
    
      
      <div className='flex flex-col items-center flex-nowrap justify-between mx-[250px] mt-24  text-indigo-200 max-md:mx-0'>
        <p className='text-sm h-[18px]'>FAQs</p>
        <h1 className='py-1 my-4 text-4xl font-semibold font-playfair'>Ask us anything</h1>
        <p className='mb-4 font-sm text-light '>Have any questions? We're here to assist you.</p>
        
        <div className='bg-white w-[275px] h-[40px] flex rounded-[8px] mt-4'>
          <Image src='/assets/search1.svg' width={25} height={1} className='p-1 mx-2'/>
          <input type='text' placeholder='Search here' className='w-full h-auto text-sm rounded placeholder-grey-900 focus:outline-none' ></input>
        </div>
      </div>
      </div>
      <div className='grid grid-cols-1 gap-4 ml-56 text-gray-700 mr-44 mt-14 sm:grid-cols-2 lg:grid-cols-3 max-md:mx-4 '>
        
        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/mail.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>How do I change my account email?</h1>
           <p className='text-sm'>You can log in to your account and change it from your Profile &gt; Edit Profile. Then go to the general tab to change your email.</p>
        </div>
        
        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/credit-card.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>What should I do if my payment fails?</h1>
           <p className='text-sm'>If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.</p>
        </div>
        
        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/slash.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>What is your cancellation policy?</h1>
           <p className='text-sm'>You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made.</p>
        </div>
        
        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/truck.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>How do I check order delivery status ?</h1>
           <p className='text-sm'>Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.</p>
        </div>

        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/dollar-sign.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>What is Instant Refunds?</h1>
           <p className='text-sm'>Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.</p>
        </div>
        
        <div className='flex-wrap w-full h-auto my-4 text-gray-700'>
           <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src='/assets/tag.svg' width={20} height={20} alt="icon" />
           </span>
           <h1 className='py-4 font-bold text-gray-700 '>How do I apply a coupon on my order?</h1>
           <p className='text-sm'>You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.</p>
        </div>
        
      </div>
     
     <div className='flex h-auto mt-10 ml-56 bg-indigo-200 rounded-xl mr-44 mb-44 max-lg:flex-col max-md:mx-4 '>
       <div className='w-full h-auto my-6 ml-8 break-normal '>
        <h1 className='text-lg font-bold text-gray-700'>Still have questions?</h1>
        <p className='my-2 text-lg text-gray-700'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
       
       <button
            className="h-16 w-72 rounded-[50px] flex-shrink-0 bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white py-1 px-1 mr-6 my-6 max-md:self-center  max-lg:self-center max-md:w-38 "
            type="button"
          >
            <h1 className='text-center'>Get in touch</h1>
          </button>
     </div> 
     
    <StayLoop/>
    <Footer/>
  
  </div>
  
  );
}

export default FAQ