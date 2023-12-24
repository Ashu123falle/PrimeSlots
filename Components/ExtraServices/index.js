import searchicon from '@/pages/assets/search.svg'
import box from '@/pages/assets/box.svg'
import sendicon from '@/pages/assets/send.svg'
import shield from '@/pages/assets/shield.svg'
import image_1 from '@/pages/assets/image_1.png'
import image_2 from '@/pages/assets/image_2.png'
import image_3 from '@/pages/assets/image_3.jpeg'
import image_4 from '@/pages/assets/image_4.png'
import Image from 'next/image';


function ExtraServices(props) {
  return (
   <>
    <div class="bg-gray-200 p-4 mr-150 ml-110 rounded-lg">
    <h2 class="text-2xl font-bold mb-4 pl-5">Our Extra Services</h2>
  
    <div class="position:relative grid grid-cols-2 lg:grid-cols-4 gap-4 pr-10 pl-5">
      
      <div class=" relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src={image_1} alt="Image 1" class="w-full h-32 object-cover mb-2"/>
         
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src={searchicon} width={24} height={24} />
                </span>
          
        <p class="text-base font-sans font-bold pt-4">Camera Source from Industry Hubs</p>
        
      </div>
  
      
      <div class="relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src={image_2} alt="Image 2"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src={box} width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Customize Your Media according to trends</p>
         
      </div>
  
      
      <div class="relative bg-white p-4 rounded-lg shadow flex flex-col"  >
        <Image src={image_3} alt="Image 3"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src={sendicon} width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Fast, reliable delivery by PrimeSlots Exclusive</p>
        
      </div>
  
      
      <div class="relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src={image_4} alt="Image 4"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src={shield} width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Media monitoring and inspection</p>
        
      </div>
    </div>
  </div>
  </>
  );
}




export default ExtraServices

