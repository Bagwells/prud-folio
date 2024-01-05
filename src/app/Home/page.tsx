'use client'
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { RiTwitterXFill , RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareBehance } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react"

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
    })


    const [slideShow, setSlideShow] = useState(false);

    const slideToggle =()=> {
       setSlideShow (prevState => !prevState)
    }

    const designShift = slideShow? "hidden opacity-20" : "opacity-100"
    const designShift2 = slideShow? "opacity-100": "hidden opacity-20"
    const height = slideShow? "h-fit" : "h-0"
      

  return (
    <>
    <div className="flex flex-col w-full bg-bgBlack px-5 md:px-20 lg:px-[120px] 2xl:px-80 py-5 md:py-12 overflow-hidden">

        <div className={`fixed left-[-180px] md:left-[-140px] lg:-left-20 z-0 md:z-50 flex items-center rotate-90 ${swipeUp} ${swipeUpRev} duration-300 gap-2 `}>
            <div className="w-80 h-0.5 bg-grey" />
            <div className="flex gap-2 cursor-pointer">
                <a href="">
                    <RiTwitterXFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <RiLinkedinBoxFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <RiInstagramFill className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <FaSquareBehance className="text-xl md:text-[32px] text-grey -rotate-90"/>
                </a>
            </div>
        </div>
        <div className="flex flex-col w-full">
            <div className="relative flex w-full h-fit">
                <nav className={`absolute flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 z-50 md:z-0`}>
                    <div className={`flex flex-col w-full justify-center items-end`}>
                        {/* hamburger menu */}
                        <div onClick={slideToggle}
                            className="flex w-fit items-center lg:hidden">
                            <RxHamburgerMenu className={`text-white text-[34px] motion-reduce:transition-all duration-500 ${designShift}`} />
                        </div>
                        <div className={`flex flex-col w-full transition-[height] ease-out ${height} delay-75 duration-500 justify-center items-end gap-6 overflow-hidden`}>
                            <IoIosCloseCircle onClick={slideToggle} className={`text-3xl text-white motion-reduce:transition-all ease-in-out duration-500 ${designShift2}`}/>
                                <div className="flex flex-col w-full items-center px-2.5 py-10">    
                                    <div className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                                        <a href='/'>
                                            <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                                RESUME <HiOutlineDownload className="text-xl"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                        </div>
                        <div className="hidden lg:flex w-fit p-2.5 items-center justify-center cursor-pointer">
                            <a href='/'>
                                <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                    RESUME  <HiOutlineDownload className="text-xl"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex lg-hidden w-full h-10 md:h-20"/>
            <div className="flex flex-col pl-8 md:pl-12 lg:pl-0 lg:flex-row w-full lg:gap-10">
                <div className={`flex flex-col pt-5  lg:w-[65%] lg:pl-14 gap-20 ${swipeLeft} ${swipeLeftRev} duration-300`}>
                    <div className="flex flex-col lg:flex-row">
                        <img className="w-[151px] lg:w-[224px]" src="/Profile.svg" alt=""/>
                        <div className="inline-flex my-2 font-poppins font-bold text-Gray text-5xl md:text-6xl xl:text-[80px] mix-blend-screen opacity-20">HELLO</div>
                    </div>
                    <div className={`w-fit hidden gap-4 lg:flex flex-col`}>
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
                    <div className="flex flex-col ">
                        <div className="inline-flex gap-1 sm:gap-4 ">
                            <div className="inline-flex font-bold font-poppins text-xl sm:text-3xl xl:text-[50px] text-light p-0">I'm <br/> Prudence</div>
                            <div className="inline-flex self-end font-bold font-poppins text-xl sm:text-3xl xl:text-[50px] text-skyblue">Francis</div>
                        </div>
                        <img className="w-[136px] md:w-[200px]" src="/underline.svg" alt=""/>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="inline-flex gap-1 sm:gap-2">
                                <div className="font-poppins font-normal text-light text-xs md:text-base lg:text-2xl">Crafting</div>
                                <div className="font-poppins font-bold text-light text-xs md:text-base lg:text-2xl">Immersive</div>
                                <div className="font-poppins font-normal text-light text-xs md:text-base lg:text-2xl">digital</div>
                                <div className="flex lg:hidden font-poppins font-normal text-xs md:text-base">experience</div>
                            </div>
                            <div className="inline-flex flex-wrap max-w-md gap-1 sm:gap-2">
                                <div className="hidden lg:flex flexfont-poppins font-normal text-light text-2xl">experience through intuitive</div>
                                <div className="lg:hidden font-poppins font-normal text-light text-xs md:text-base">through intuitive</div>
                                <div className="font-poppins font-bold text-light text-xs md:text-base lg:text-2xl">design.</div>
                            </div>
                        </div>
                        <img className="w-[78px] md:w-[215px] animate-pulse rotate-45 lg:rotate-0" src="/CurvedArrow.svg" alt=""/>
                    </div>
                    <div className="flex relative w-fit lg:w-full h-fit items-center justify-start lg:justify-end lg:pr-20">
                        <div className="flex w-fit flex-col lg:mr-7 gap-2 z-50">
                            <div className="inline-flex font-normal text-light text-sm sm:text-xl">
                                Brand designer
                            </div>
                            <div className="inline-flex font-normal text-light text-sm sm:text-xl">
                                UIUX designer
                            </div>
                        </div>
                        <img src="/Roundline.svg" className="absolute animate-pulse w-[125px] sm:w-[200px]" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`w-fit flex lg:hidden flex-col ml-8 md:ml-12 mt-5 transition-all ${swipeLeft} ${swipeLeftRev} duration-300`}>
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