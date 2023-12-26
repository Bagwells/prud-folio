'use client'
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { RiTwitterXFill , RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareBehance } from "react-icons/fa6";
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

    

  return (
    <>
      <div className="flex w-full bg-bgBlack px-[120px] py-12 overflow-hidden">

        <div className={`fixed -left-20 z-50 flex items-center rotate-90 ${swipeUp} ${swipeUpRev} duration-300 gap-2 `}>
            <div className="w-80 h-0.5 bg-grey" />
            <div className="flex gap-2 cursor-pointer">
                <a href="">
                    <RiTwitterXFill className="text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <RiLinkedinBoxFill className="text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <RiInstagramFill className="text-[32px] text-grey -rotate-90"/>
                </a>
                <a href="">
                    <FaSquareBehance className="text-[32px] text-grey -rotate-90"/>
                </a>
            </div>
        </div>
        <div className="flex flex-col w-full">
            <nav className="flex w-full bg-navBlack px-[120px] py-2.5 items-center">
                <div className="flex w-full justify-end">
                    <div className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                        <a href='/'>
                            <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                RESUME  <HiOutlineDownload className="text-xl"/>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="flex w-full gap-10">
                <div className={`flex flex-col pt-5 pl-14 gap-20 ${swipeLeft} ${swipeLeftRev} duration-300`}>
                    <div className="flex">
                        <img className="w-[224px]" src="/Profile.svg" alt=""/>
                        <div className="inline-flex my-2 font-poppins font-bold text-Gray text-[80px] opacity-20">HELLO</div>
                    </div>
                    <div className=" w-fit flex flex-col gap-4">
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

                <div className={`flex flex-col pt-12 gap-6 ${swipeRight} ${swipeRightRev} duration-300`}>
                    <div className="flex flex-col ">
                        <div className="inline-flex gap-4">
                            <div className="inline-flex font-bold font-poppins text-[50px] text-light p-0">I'm <br/>Prudence</div>
                            <div className="inline-flex self-end font-bold font-poppins text-[50px] text-skyblue">Francis</div>
                        </div>
                        <img className="w-[200px]" src="/underline.svg" alt=""/>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="inline-flex gap-2">
                                <div className="font-poppins font-normal text-light text-2xl">Crafting</div>
                                <div className="font-poppins font-bold text-light text-2xl">Immersive</div>
                                <div className="font-poppins font-normal text-light text-2xl">digital</div>
                            </div>
                            <div className="inline-flex flex-wrap max-w-md gap-2">
                                <div className="font-poppins font-normal text-light text-2xl">experience through intuitive</div>
                                <div className="font-poppins font-bold text-light text-2xl">design.</div>
                            </div>
                        </div>
                        <img className="animate-pulse" src="/CurvedArrow.svg" alt=""/>
                    </div>

                    <div className="flex relative w-full h-fit items-center justify-end pr-20">
                        <div className="flex w-fit flex-col mr-7 gap-2 z-50">
                            <div className="inline-flex font-normal text-light text-xl">
                                Brand designer
                            </div>
                            <div className="inline-flex font-normal text-light text-xl">
                                UIUX designer
                            </div>
                        </div>
                        <img src="/Roundline.svg" className="absolute animate-pulse w-[200px]" alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}