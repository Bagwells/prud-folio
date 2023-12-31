'use client'
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { FaArrowLeftLong, FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useState } from "react";


const WorkOverview =()=> {

    const [design, setDesign] = useState(false)
    
    const swipe = design? "" : "-translate-x-full"
    const buttonSwipe = design? "opacity-100" : "opacity-0"

    useEffect(()=>{
        setDesign(true)
    })

    return(
        <>
            <div className="w-full h-full pverflow-hidden">
                <div className="flex w-full h-full bg-bgBlack px-[120px] pt-12 pb-14 overflow-hidden">
                    <div className="flex flex-col w-full">
                        <nav className="flex w-full bg-navBlack px-[120px] py-2.5 items-center">
                            <div className="flex w-full items-center justify-end gap-[75px]">
                                <div className="flex gap-5 items-center">
                                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/Home">
                                            Home
                                        </Link> 
                                    </span>
                                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/About">
                                            About
                                        </Link> 
                                    </span>
                                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/Contact">
                                            Contact
                                        </Link> 
                                    </span>
                                </div>
                                <div className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                                    <a href='/'>
                                        <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white items-center ">
                                            RESUME <HiOutlineDownload className="text-base"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </nav>

                        <div id="main"
                            className="flex w-full h-fit items-center my-2 gap-6 overflow-hidden">
                            <Link href="/Work">
                                <div className={`flex w-[53px] items-center justify-center h-[52px] rounded-full py-2.5 px-4 bg-[#0C0D0F] ${buttonSwipe} motion-reduce:transition-opacity ease-in delay-500`}>
                                    <FaArrowLeftLong className="text-skyblue text-2xl"/>
                                </div>
                            </Link>
                            <div className={`inline-flex w-fit font-bold font-poppins text-skyblue text-[40px] ${swipe} duration-300`}>
                                Works
                            </div>
                        </div>

                        <div className="flex w-full pl-[120px]">
                            <div className="flex flex-col w-full gap-6">
                                <div className="flex flex-col gap-2.5">
                                    <div className="font-poppins font-semibold text-[#F2F2F2] text-[26px]">
                                        Pluhg
                                    </div>
                                    <div className="font-poppins font-normal text-[#F2F2F2] text-base">
                                        Connecting two people without sharing their personal details
                                    </div>
                                    <div className="flex gap-2.5">
                                        <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                            <div className="font-poppins font-normal text-skyblue text-xs">Logo</div>
                                        </div>
                                        <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                            <div className="font-poppins font-normal text-skyblue text-xs">UIUX Design</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid w-full grid-cols-1 gap-[22px]">
                                    <img className="w-full" 
                                        src="/Plugh1.svg"
                                        alt=""
                                    />

                                    <img className="w-full" 
                                        src="/Plugh2.svg"
                                        alt=""
                                    />

                                    <img className="w-full" 
                                        src="/Plugh3.svg"
                                        alt=""
                                    />

                                    <img className="w-full" 
                                        src="/Plugh4.svg"
                                        alt=""
                                    />
                                    <img className="w-full" 
                                        src="/Plugh5.svg"
                                        alt=""
                                    />
                                    <img className="w-full" 
                                        src="/Plugh6.svg"
                                        alt=""
                                    />
                                    <img className="w-full" 
                                        src="/Plugh7.svg"
                                        alt=""
                                    />
                                    <img className="w-full" 
                                        src="/Plugh8Op.svg"
                                        alt=""
                                    />

                                </div>
                            </div>
                            <div className="w-[120px] h-full justify-center flex">
                                <Link href="#main">
                                    <div className={`fixed top-[50%] flex w-[53px] items-center justify-center h-[52px] rounded-full py-2.5 px-4 bg-[#0C0D0F]`}>
                                        <FaArrowUpLong className="text-skyblue text-2xl"/>
                                    </div> 
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default WorkOverview;

