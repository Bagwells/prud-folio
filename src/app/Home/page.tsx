'use client'
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { RiTwitterXFill , RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react"
import { PiDribbbleLogoFill } from "react-icons/pi";

export default function HomePage() {

    const [ design , setDesign ] = useState(false);

    const [ designRev , setDesignRev ] = useState(false);


    const toggle = () => {
        setDesign(true)
    }

    const swipeLeft = design? "-translate-x-full":""
    const swipeRight = design? "translate-x-full":""
    const swipeUp = design? "-translate-y-[224px]" : ""

    const swipeLeftRev = designRev? "": "-translate-x-full"
    const swipeRightRev = designRev? "": "translate-x-full"
    const swipeUpRev = designRev? "": "-translate-y-[224px]"

    useEffect(()=> {
        setDesignRev(true)
    },[])


    const [slideShow, setSlideShow] = useState(false);

    const slideToggle =()=> {
       setSlideShow (prevState => !prevState)
    }

    const designShift = slideShow? "hidden opacity-20" : "opacity-100"
    const designShift2 = slideShow? "opacity-100": "hidden opacity-20"
    const height = slideShow? "h-fit" : "h-0"

    const resumeDownload =()=> {
        const resumeUrl = "/Resume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
    }
      
  return (
    <>
    <div className="flex flex-col w-full lg:h-[100vh] bg-bgBlack px-5 md:px-20 2xl:px-80 py-5 md:py-10 overflow-hidden">
        <div className={`fixed left-[-180px] md:left-[-140px] lg:-left-[120px] z-30 md:z-50 flex items-center rotate-90 ${swipeUp} ${swipeUpRev} duration-300 gap-2 `}>
            <div className="w-80 h-0.5 bg-grey"/>
            <div className="flex gap-2 cursor-pointer">
                <a href="https://twitter.com/Francisprudenc" target="_blank" rel="noopener noreferrer">
                    <RiTwitterXFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="https://www.linkedin.com/in/francis-prudence-8a407a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <RiLinkedinBoxFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="https://www.instagram.com/prud.ence.fa?igsh=a216eHEzeHFocDJh&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="https://dribbble.com/pruddence" target="_blank" rel="noopener noreferrer">
                    <PiDribbbleLogoFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
            </div>
        </div>
        <div className="fixed inset-0 w-full h-14 bg-bgBlack z-20"/>
        <div className="flex flex-col w-full">
            <div className="fixed inset-x-0 flex w-full h-fit bg-bgBlack z-50 px-5 md:px-20 lg:px-[100px] 2xl:px-80">
                <nav className={`flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 z-50 md:z-0`}>
                    <div className={`flex flex-col w-full justify-center items-end`}>
                        {/* hamburger menu */}
                        <div onClick={slideToggle}
                            className="flex w-fit items-center lg:hidden">
                            <RxHamburgerMenu className={`text-white text-[34px] motion-reduce:transition-all duration-500 ${designShift}`} />
                        </div>
                        <div className={`flex flex-col w-full transition-[height] ease-in-out ${height} delay-75 duration-500 justify-center items-end gap-6 overflow-hidden`}>
                            <IoIosCloseCircle onClick={slideToggle} className={`text-3xl text-white transition-all ease-in-out duration-500 ${designShift2}`}/>
                                <div className="flex flex-col w-full items-center px-2.5 py-10  gap-10">    
                                    <div onClick={resumeDownload} className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                                        <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                            RESUME <HiOutlineDownload className="text-xl"/>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col gap-5 items-center">
                                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                            <Link href="/Home">
                                                Home
                                            </Link> 
                                        </span>
                                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                            <Link href="/About">
                                                About
                                            </Link> 
                                        </span>
                                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                            <Link href="/Work">
                                                Works
                                            </Link> 
                                        </span>
                                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                            <Link href="/Contact">
                                                Contact
                                            </Link> 
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div onClick={resumeDownload} className="hidden lg:flex w-fit p-2.5 items-center justify-center cursor-pointer">
                            <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                RESUME  <HiOutlineDownload className="text-xl"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex lg-hidden w-full h-10 md:h-20"/>
            <div className="flex flex-col pl-8 md:pl-12 lg:pl-0 lg:flex-row w-full lg:gap-10">
                <div className={`flex flex-col pt-5 lg:w-[75%] lg:pl-14 gap-[36px] ${swipeLeft} ${swipeLeftRev} duration-300`}>
                    <div className="flex flex-col lg:flex-row">
                        <img className="w-[151px] md:w-[224px]" src="/Profile.svg" alt=""/>
                        <div className="inline-flex my-2 font-poppins font-bold text-Gray text-5xl md:text-6xl xl:text-[80px] mix-blend-screen opacity-20">
                            HELLO
                        </div>
                    </div>
                    <div className={`w-fit hidden gap-2 lg:flex flex-col`}>
                        <span onClick={toggle} 
                            className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                                <Link href="/About">
                                    About
                                </Link> 
                        </span>
                        <span onClick={toggle} 
                            className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                                <Link href="/Work">
                                    Works
                                </Link> 
                        </span>
                        <span onClick={toggle} className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                                <Link href="/Contact">
                                    Contact
                                </Link> 
                        </span>
                    </div>
                </div>

                <div className={`flex flex-col lg:pt-12 gap-3 lg:gap-6 ${swipeRight} ${swipeRightRev} duration-300`}>
                    <div className="flex flex-col gap-1">
                        <div className="tracking-normal font-bold font-poppins text-3xl xl:text-[50px] text-light">I'm</div>
                        <div className="tracking-normal font-bold font-poppins text-3xl xl:text-[50px] text-light">
                            Prudence<span className="text-skyblue"> Francis</span>
                        </div>
                        <img className="w-[136px] md:w-[200px]" src="/underline.svg" alt=""/>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="font-poppins font-normal text-light text-sm md:text-2xl">
                                Crafting <span className="font-bold">Immersive</span> digital experience through intuitive <span className="font-bold">design.</span>
                            </div>
                        </div>
                        <img className="w-[100px] md:w-[215px] animate-pulse rotate-45 lg:rotate-0" src="/CurvedArrow.svg" alt=""/>
                    </div>
                    <div className="flex relative lg:w-full items-center lg:justify-end lg:pr-20">
                        <div className="flex flex-col gap-2 z-10 ml-7 lg:mr-8">
                            <div className="font-normal text-light text-sm md:text-xl">
                                Brand designer
                            </div>
                            <div className="font-normal text-light text-sm md:text-xl">
                                UIUX designer
                            </div>
                        </div>
                        <img src="/Roundline.svg" className="absolute animate-pulse w-[160px] md:w-[220px]" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`w-fit flex lg:hidden flex-col ml-8 md:ml-12 mt-3 transition-all ${swipeLeft} ${swipeLeftRev} duration-300`}>
            <span onClick={toggle} 
                className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                    <Link href="/About">
                        About
                    </Link> 
            </span>
            <span onClick={toggle} 
                className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                    <Link href="/Work">
                        Works
                    </Link> 
            </span>
            <span onClick={toggle} className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                    <Link href="/Contact">
                        Contact
                    </Link> 
            </span>
        </div>
      </div>
    </>
  )
}