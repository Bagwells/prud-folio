import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { RiTwitterXFill , RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareBehance } from "react-icons/fa6";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full bg-bgBlack px-[120px] py-12">

        <div className="absolute -left-20 z-50 flex items-center rotate-90 gap-2">
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
                            <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white items-center ">
                                RESUME  <HiOutlineDownload className="text-base"/>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="flex w-full gap-10">
                <div className="flex flex-col pt-5 pl-14 gap-20">
                    <div className="flex">
                        <img className="w-[224px]" src="/Profile.svg" alt=""/>
                        <div className="inline-flex my-2 font-poppins font-bold text-Gray text-[80px] opacity-20">HELLO</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                            <a href="">
                                About
                            </a> 
                        </span>
                        <span className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                            <a href="">
                                Works
                            </a> 
                        </span>
                        <span className="font-poppins font-bold text-white text-[40px] hover:text-skyblue cursor-pointer">
                            <a href="">
                                Contact
                            </a> 
                        </span>
                    </div>
                </div>

                <div className="flex flex-col pt-12 gap-6">
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