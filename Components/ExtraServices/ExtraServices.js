
import Image from 'next/image';


function ExtraServices(props) {
  return (
   <>
    <div class=" p-4 mr-150 ml-110 rounded-lg flex flex-col items-center justify-center w-full">
    <h1 class="self-start text-3xl font-bold mb-4 pl-5">Our Extra Services</h1>
  
    <div class="position:relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-10 pl-5">
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <img src='/assets/image_1.png' alt="Image 1" class="w-full h-32 object-cover mb-2"/>
         
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/search.svg' width={24} height={24} />
                </span>
          
        <p class="text-base font-sans font-bold pt-4">Camera Source from Industry Hubs</p>
        
      </div>
  
      
      <div class=" border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <img src='/assets/image_2.png' alt="Image 2"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/box.svg' width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Customize Your Media according to trends</p>
         
      </div>
  
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col"  >
        <img src='/assets/image_3.jpeg' alt="Image 3"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/send.svg' width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Fast, reliable delivery by PrimeSlots Exclusive</p>
        
      </div>
  
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <img src='/assets/image_4.png' alt="Image 4"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/shield.svg' width={24} height={24} />
                </span>
        <p class="text-base font-sans font-bold pt-4">Media monitoring and inspection</p>
        
      </div>
    </div>
  </div>
  </>
  );
}




export default ExtraServices

