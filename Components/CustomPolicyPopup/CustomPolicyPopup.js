import { useState } from "react"


const CustomPolicyPopup = () => {
    const [inputPolicyTerm, setInputPolicy] = useState('')

    const onChangeInput = (e) => {
        setInputPolicy(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className="flex flex-col p-4 w-[400px] gap-3">               
            <h1 class="text-black text-base font-medium font-['Figtree'] leading-tight">Add your Custom Policy terms below :</h1>

            <div className="flex items-center">
            <div className="w-full h-12 pl-4 pr-[326px] py-[18.50px] bg-slate-50 rounded flex justify-between
             items-center inline-flex">
                <input value={inputPolicyTerm} type="text" onChange={onChangeInput} placeholder="Add your policy term here..." className="outline-none"/>
            </div>
            <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="mdi:tick">
                    <path id="Vector" d="M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z" fill="#629E69"/>
                    </g>
                    </svg>
                </div>
            </div>

            <div class="w-[170px] h-10 px-6 py-2.5 bg-white rounded-lg border border-indigo-500 justify-start items-start gap-2.5 inline-flex">
                <div class=" h-[17px] relative">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="ph:plus-bold">
                <path id="Vector" d="M15.1406 8.5C15.1406 8.71134 15.0567 8.91403 14.9072 9.06348C14.7578 9.21292 14.5551 9.29688 14.3438 9.29688H9.29688V14.3438C9.29688 14.5551 9.21292 14.7578 9.06348 14.9072C8.91403 15.0567 8.71134 15.1406 8.5 15.1406C8.28866 15.1406 8.08597 15.0567 7.93652 14.9072C7.78708 14.7578 7.70312 14.5551 7.70312 14.3438V9.29688H2.65625C2.44491 9.29688 2.24222 9.21292 2.09277 9.06348C1.94333 8.91403 1.85938 8.71134 1.85938 8.5C1.85938 8.28866 1.94333 8.08597 2.09277 7.93652C2.24222 7.78708 2.44491 7.70312 2.65625 7.70312H7.70312V2.65625C7.70312 2.44491 7.78708 2.24222 7.93652 2.09277C8.08597 1.94333 8.28866 1.85938 8.5 1.85938C8.71134 1.85938 8.91403 1.94333 9.06348 2.09277C9.21292 2.24222 9.29688 2.44491 9.29688 2.65625V7.70312H14.3438C14.5551 7.70312 14.7578 7.78708 14.9072 7.93652C15.0567 8.08597 15.1406 8.28866 15.1406 8.5Z" fill="#6979F8"/>
                </g>
                </svg>

                </div>
            <p class="text-center text-indigo-500 text-base font-semibold font-['Figtree'] leading-tight">Add more</p>
            </div>

            <div className="text-center text-white bg-[#6979F8] text-base font-medium font-['Figtree'] rounded p-2 mt-12">
            <button>Add and Continue</button>
            </div>
        </div>
    )
}

export default CustomPolicyPopup