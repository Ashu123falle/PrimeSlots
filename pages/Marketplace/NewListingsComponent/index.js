import Image from "next/image";
import newbg1 from "@/pages/assets/newbg1.png"


const NewListingsComponent = () => {
    return (
        <>
        <div className="mx-8">
            <h1 className="text-slate-750 text-sm font-semibold font-['Inter'] uppercase leading-tight lg:mx-9 ml-9">Featured</h1>
            <h1 className="text-slate-950 text-2xl font-bold font-['Inter'] leading-[32px] tracking-wider ml-9">New Listings</h1>
            
        </div>
        <div className="flex justify-center items-center md:px-10">
            <div className="flex flex-col justify-center sm:items-center p-6 md:flex-row w-full  h-50 ">
                <div className="bg-cover w-[100%]  sm:w-[480px] bg-cover sm:h-[25vh] px-4 md:flex-1 md:w-[300px] md: bg-cover md:h-[500px] rounded-lg w-full" style={{ backgroundImage: `url(${newbg1.src})` }}>
                    <div className="h-3/4 flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                            <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" fill="#7C8B9D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" fill="#7C8B9D"/>
                            <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" stroke="#7C8B9D" stroke-width="1.67"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" stroke="#7C8B9D" stroke-width="1.67"/>
                        </svg>
                    </div>  
                    <div className="h-1/4 flex flex-col justify-end py-10">
                        <div class="w-[74.82px]  bg-stone-50 rounded-[40.93px] justify-center items-center  flex">
                            <div class="text-amber-500 text-base font-normal font-['Figtree'] leading-[20.85px]">Billboard</div>
                        </div>
                        <div class="self-stretch flex-col justify-start items-start flex">
                            <div class="w-[296px]  text-white text-base font-normal font-['Figtree'] leading-[20.85px]">Title of the media will come here....</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex-col  ">
                    <div className="h-[240px] w-[94%] sm:w-[480px] md:w-[430px] p-10 bg-cover m-2 rounded-lg box-border"  style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/122d/0889/0a9d1360c775b957644e2a568727a3fd?Expires=1704067200&Signature=P1GONPwFMsJjEzDXl6IffyLgm6IuFudKV7AqIYdVgqYbB4syqBpPvt2AnLAUuVyxSZAYzj0H~oQS1EbOh-lqIT8BLMJ5PjoIjcAYVHBK9ANLjxCE7pVKc~MKwO3~gFcetg1Rh1mFrqrlWhmx5o9OOVhCYXM5KxIXhDYZOasG0M9dzoUSwVSaKOzh5vn7M-fY1AbiFk5LWUzUE75nFhKYVXpb~lSRNfgrQntV~QaOGwoKaPPaV0olCPF2Qic7xN9vlDFiDD1WOMrWsoTTYlqXVFkb3huU-3kVwBEsv0N8aN13hEmX~23WDjK5sTS7rNbvqPZXe03WnBRSbEyuC~24TA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` }}>
                        <div className="h-3/4 flex flex-row justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" fill="#7C8B9D"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" fill="#7C8B9D"/>
                                <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" stroke="#7C8B9D" stroke-width="1.67"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" stroke="#7C8B9D" stroke-width="1.67"/>
                            </svg>
                        </div>  
                        <div className="h-1/4 flex flex-row justify-between p-3">
                            <div className="w-max-[90%]">
                                <div class="w-[74.82px]  bg-stone-50 rounded-[40.93px] justify-center items-center  flex">
                                    <div class="text-amber-500 text-base font-normal font-['Figtree'] leading-[20.85px]">Billboard</div>
                                </div>
                                <div class="self-stretch flex-col justify-start items-start flex">
                                    <p class="text-white text-base font-normal font-['Figtree'] leading-[20.85px]">Title of the media will come here....</p>
                                </div>
                            </div>
                            <div class="h-[35px] p-[10.74px] bg-white rounded-md border border-indigo-500 justify-center items-center gap-[10.74px] inline-flex">
                                <button class="text-indigo-500 text-xs mx-1 font-normal w-[60px] font-['Figtree'] leading">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex  w-[94%] md:flex-row">
                        <div className="h-[250px] w-[45%] sm:w-[230px] md:w-[200px] bg-cover m-2 rounded-lg" style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/2a21/4494/563732292ac708c460526b2902f8ec93?Expires=1704067200&Signature=EkO84ADHWOmcpboGVf2fpHBn2a1~nZbHVHz8pmx3jWCRVmNNhOPWhyj-7ArZiLqxihWVkfJF3D6fgYiKVThtABmcUWGJ9EMSX5OQZOMfNAnGC1qQ9slgZQxSmdHHe~NnUxEuLfdjr1sLQxZ7IcK0724-kxIK6VBSHBXhARo2Ir40wg5GLblqNWd2mEXUcLESz4Frrv3o3ec56IMOnIPZY2f2~GQCE~9uDWU27HA5~sDtWt3C4RW91GnWf5edAtJ0nHysbvV14e~jbhKoqL5Vwu8o2q4FLWrSagb42E~vO1PDWTw2l9ZtawW6MIuXIHLSZofYyabij-L7l5pSUhWHtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` }}>
                            <div className="h-3/4 flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                    <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" fill="#7C8B9D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" fill="#7C8B9D"/>
                                    <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" stroke="#7C8B9D" stroke-width="1.67"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" stroke="#7C8B9D" stroke-width="1.67"/>
                                </svg>
                            </div>  
                            <div className="h-1/4 flex flex-col justify-end p-3">
                        <div class="w-[74.82px]  bg-stone-50 rounded-[40.93px] justify-center items-center  flex">
                            <div class="text-amber-500 text-base font-normal font-['Figtree'] leading-[20.85px]">Billboard</div>
                        </div>
                        <div class="self-stretch flex-col justify-start items-start flex">
                            <div class="text-white text-base font-normal font-['Figtree'] leading-[20.85px]">Title of the media will come here....</div>
                        </div>
                            </div>
                        </div>

                        <div className="h-[250px] w-[45%] sm:w-[230px] md:w-[200px] bg-cover m-2 rounded-lg" style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/b3fd/22ae/0a3a3ac0b798ab9e8a666484496cdf1f?Expires=1704672000&Signature=ozHDZI~hIOVG10ArD1DqRrFs-z4rOEDCILigV8Kvna3bLbQ9qKBqnTKQaPYawmxtoAxP7hjXRFEv6U1xpNzJm6fwwk6I3Bm614i5BLPvYPVMf9jdAd7FPnab6~eq~ohPnbM8UHEd1uVGwX3ANxZchJZ7OtLrU3S0fmwopCMWNHNwUJqxjVNryyg-jnzelaChF9BIYNsDLtuE9oJL1lh9ikigz34PQA~GJy21cuuXnM6CcO57r6yDpqOX5UbfRJ6J~T3BlktqX8eryQBb6YuLTIaUM2mpdEXJ9nBiKNLAi~qLF-gwWRkjybbJhhHJudnomg5MayQmK8HTajSCf-md6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` }}>
                            <div className="h-3/4 flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                    <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" fill="#7C8B9D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" fill="#7C8B9D"/>
                                    <path d="M19.3333 12.202C19.3333 9.85861 21.1988 7.95893 23.5 7.95893C25.8012 7.95893 27.6667 9.85861 27.6667 12.202C27.6667 14.5454 25.8012 16.445 23.5 16.445C21.1988 16.445 19.3333 14.5454 19.3333 12.202Z" stroke="#7C8B9D" stroke-width="1.67"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9271 1.17004C13.6553 1.17003 11.8486 1.17002 10.391 1.2913C8.8983 1.41549 7.62551 1.67527 6.4601 2.27996C4.57847 3.25627 3.04867 4.81412 2.08994 6.73024C1.49613 7.91702 1.24103 9.21314 1.11907 10.7332C0.999976 12.2175 0.999987 14.0574 1 16.3708V23.3082C0.999987 25.6216 0.999976 27.4614 1.11907 28.9458C1.24103 30.4658 1.49613 31.762 2.08994 32.9487C3.04867 34.8649 4.57847 36.4227 6.4601 37.399C7.62551 38.0037 8.8983 38.2635 10.391 38.3877C11.8486 38.509 13.6552 38.5089 15.9269 38.5089H22.7396C25.0113 38.5089 26.8181 38.509 28.2757 38.3877C29.7684 38.2635 31.0412 38.0037 32.2066 37.399C34.0882 36.4227 35.618 34.8649 36.5767 32.9487C37.1705 31.762 37.4256 30.4658 37.5476 28.9458C37.6667 27.4615 37.6667 25.6217 37.6667 23.3084V16.3707C37.6667 14.0574 37.6667 12.2175 37.5476 10.7332C37.4256 9.21314 37.1705 7.91702 36.5767 6.73024C35.618 4.81412 34.0882 3.25627 32.2066 2.27996C31.0412 1.67527 29.7684 1.41549 28.2757 1.2913C26.8181 1.17002 25.0113 1.17003 22.7396 1.17004H15.9271ZM7.9734 5.30443C8.59058 4.9842 9.37587 4.78151 10.6624 4.67447C11.9684 4.56581 13.6389 4.56449 16 4.56449H22.6667C25.0277 4.56449 26.6983 4.56581 28.0043 4.67447C29.2908 4.78151 30.0761 4.9842 30.6933 5.30443C31.9477 5.95531 32.9676 6.99388 33.6067 8.27129C33.9212 8.89979 34.1202 9.69947 34.2253 11.0096C34.332 12.3395 34.3333 14.0407 34.3333 16.445V23.2339C34.3333 23.8422 34.3333 24.4055 34.3314 24.9292L31.6904 22.2397C30.3886 20.9141 28.2781 20.9141 26.9763 22.2397L23.2559 26.0283C22.9305 26.3597 22.4028 26.3597 22.0774 26.0283L11.6904 15.4508C10.3886 14.1252 8.27806 14.1252 6.97631 15.4508L4.33333 18.1423V16.445C4.33333 14.0407 4.33463 12.3395 4.44133 11.0096C4.54645 9.69947 4.74549 8.89979 5.05996 8.27129C5.69911 6.99388 6.71898 5.95531 7.9734 5.30443Z" stroke="#7C8B9D" stroke-width="1.67"/>
                                </svg>
                            </div>  
                            <div className="h-1/4 flex flex-col justify-end p-3">
                        <div class="w-[74.82px]  bg-stone-50 rounded-[40.93px] justify-center items-center  flex">
                            <div class="text-amber-500 text-base font-normal font-['Figtree'] leading-[20.85px]">Billboard</div>
                        </div>
                        <div class="self-stretch flex-col justify-start items-start flex">
                            <div class="text-white text-base font-normal font-['Figtree'] leading-[20.85px]">Title of the media will come here....</div>
                        </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                    
            </div>
        </div>
        
        </>
    )
}

export default NewListingsComponent