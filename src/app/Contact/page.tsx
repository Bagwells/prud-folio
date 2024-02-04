'use client'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu, RxInstagramLogo } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { RiBehanceFill, RiLinkedinBoxFill, RiTwitterXLine } from "react-icons/ri";
import Footer from "@/components/Footer";
import { PiDribbbleLogoFill } from "react-icons/pi";


const Contact =()=> {

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
    return(
        <>
            <div className="flex flex-col w-full bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80 pb-14">
                <div className="fixed inset-x-0 w-full h-14 bg-bgBlack z-50"/>
                <div className="flex flex-col h-full w-full mt-12">
                    <div className="fixed inset-0 top-12 w-full h-fit bg-bgBlack z-50 px-5 md:px-20 lg:px-[100px] 2xl:px-80">
                        <nav className="flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 items-center z-50">
                            <div className="flex flex-col lg:hidden w-full justify-center items-end">
                                <div onClick={slideToggle}
                                    className="flex w-fit items-center lg:hidden">
                                    <RxHamburgerMenu className={`text-white text-[34px] motion-reduce:transition-all duration-500 ${designShift}`} />
                                </div>
                                <div className={`flex flex-col w-full transition-[height] ease-out ${height} delay-75 duration-500 justify-center items-end gap-6 overflow-hidden`}>
                                    <IoIosCloseCircle onClick={slideToggle} className={`text-3xl text-white motion-reduce:transition-all ease-in-out duration-500 ${designShift2}`}/>
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
                            </div>
                            <div className="hidden lg:flex w-full items-center justify-end gap-[75px]">
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
                                        <Link href="/Work">
                                            Works
                                        </Link> 
                                    </span>
                                </div>
                                <div onClick={resumeDownload} className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                                    <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                        RESUME  <HiOutlineDownload className="text-xl"/>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="w-full h-14 lg:h-16"/>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:inline-flex hidden w-fit h-fit font-poppins font-bold text-skyblue text-[40px]">
                            Contact
                        </div>
                        <div className="relative flex flex-col bg-[url('/Aboutme.png')] bg-cover items-start lg:hidden max-w-[420px] h-[400px]">
                            <div className="inline-flex w-fit font-poppins font-bold text-skyblue text-[40px]">
                                Contact
                            </div>
                            <div className="absolute top-[80%] inline-flex w-fit font-Sofia font-bold text-white text-[76px]">
                                Hello,
                            </div>
                        </div>
                        <div className=" hidden lg:flex  w-full">
                            <img className="w-[500px]" src="/Aboutme.png" alt=""/>
                        </div>
                        <div className="flex flex-col w-full items-start mt-10 gap-10">
                            <div className="hidden lg:inline-flex w-fit font-Sofia font-bold text-white text-[76px]">
                                Hello,
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex font-Sofia font-semibold text-white text-2xl">
                                    Prudence Francis
                                </div>
                                <div className="inline-flex font-Sofia font-normal text-skyblue text-base">
                                    Brand Designer, UI/UX Designer <br/> and Digital Artist.
                                </div>
                            </div>
                            <div className="flex px-[25px] py-5 max-w-[620px] rounded-xl bg-skyblue ">
                                <div className="font-Sofia font-normal text-xl text-darkgrey whitespace-normal">
                                    I am open to <span className="text-white">collaborating on design-related projects</span> and also ready to partner with
                                    like-minded individuals to <span className="text-white">create new brands and friendly experiences.</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex font-Sofia font-normal text-xl">
                                    <a href="mailto:prudence.fran.ay@gmail.com" target="_blank" rel="noopener noreferrer">
                                        prudence.fran.ay@gmail.com
                                    </a>
                                </div>
                                <span className="flex items-center gap-5">
                                    <a href="https://www.instagram.com/prud.ence.fa?igsh=a216eHEzeHFocDJh&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <RxInstagramLogo className="text-xl md:text-[36px] text-white"/>
                                    </a>
                                    <a href="https://twitter.com/Francisprudenc" target="_blank" rel="noopener noreferrer">
                                        <RiTwitterXLine className="text-xl md:text-[36px] text-white"/>
                                    </a>
                                    <a href="https://dribbble.com/pruddence" target="_blank" rel="noopener noreferrer">
                                        <PiDribbbleLogoFill className="text-xl md:text-[40px] text-white"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/francis-prudence-8a407a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                        <RiLinkedinBoxFill className="text-xl md:text-[40px] text-white"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;