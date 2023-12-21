import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { RiTwitterXFill , RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareBehance } from "react-icons/fa6";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full bg-bgBlack px-[120px] py-12">

        <div className="absolute -left-10 z-50 flex items-center rotate-90 gap-2">
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
                                RESUME  <HiOutlineDownload className="text-2xl"/>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="flex w-full pt-5">
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <img className="w-[224px]" src="/Profile.svg" alt=""/>
                        <div className="inline-flex font-poppins font-bold text-Gray text-[80px] opacity-20">HELLO</div>
                    </div>
                </div>
                <div className="flex flex-col">

                </div>
            </div>
        </div>
      </div>
    </>
  )
}