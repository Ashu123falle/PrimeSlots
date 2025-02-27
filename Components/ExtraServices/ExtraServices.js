
import Image from 'next/image';


function ExtraServices(props) {
  return (
   <>
    <div class=" sm:p-4 sm:mr-150 sm:ml-110 rounded-lg flex flex-col items-center justify-center w-full">
    <h1 class="self-start text-3xl font-bold mb-4 pl-5">Our Extra Services</h1>
  
    <div class="position:relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-5 pl-5 sm:pr-10 sm:pl-5">
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src='/assets/image_1.png'width={303} height={222} alt="Image 1" class="w-full h-32 object-cover mb-2"/>
         
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/search.svg' width={24} height={24} alt="icon" />
                </span>
          
        <p class="text-base font-sans font-bold pt-4">Camera Source from Industry Hubs</p>
        
      </div>
  
      
      <div class=" border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src='/assets/image_2.png' width={332} height={175} alt="Image 2"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/box.svg' width={24} height={24} alt="icon" />
                </span>
        <p class="text-base font-sans font-bold pt-4">Customize Your Media according to trends</p>
         
      </div>
  
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col"  >
        <Image src='/assets/image_3.jpeg ' width={292} height={152} alt="Image 3"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/send.svg' width={24} height={24} alt="icon" />
                </span>
        <p class="text-base font-sans font-bold pt-4">Fast, reliable delivery by PrimeSlots Exclusive</p>
        
      </div>
  
      
      <div class="border relative bg-white p-4 rounded-lg shadow flex flex-col">
        <Image src='/assets/image_4.png' width={288} height={192} alt="Image 4"  class="w-full h-32 object-cover mb-2"/>
        <span className=" absolute z- 50 self-end mt-[100px] border-white border-4 bg-blue-200 rounded-full w-14 h-14 flex justify-center items-center  ml-4">
            <Image src='/assets/shield.svg' width={24} height={24} alt="icon" />
                </span>
        <p class="text-base font-sans font-bold pt-4">Media monitoring and inspection</p>
        
      </div>
    </div>
  </div>
  </>
  );
}




export default ExtraServices

