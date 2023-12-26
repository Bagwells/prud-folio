'use client'
import { HiOutlineDownload } from "react-icons/hi"
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";


const AboutPage = ()=> {
    
    const [ design , setDesign ] = useState(false)

    useEffect(()=>{
        setDesign(true)
    })

    const dynamicDesign = design? "-translate-y-80" : ""

    return (
        <>
            <div className="flex w-full bg-bgBlack px-[120px] pt-12 pb-14  overflow-hidden">
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
                                    <Link href="/Work">
                                        Works
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
                                    <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                        RESUME  <HiOutlineDownload className="text-xl"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>

                    <div className="flex w-full gap-10 pt-6">
                        <div className="flex flex-[0.6]">
                            <div className={`flex h-full items-center w-fit font-bold font-poppins text-skyblue text-[40px] ${dynamicDesign} duration-500`}>
                                About
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex relative">
                                    <img className="w-[468px]" src="/Aboutme.svg" alt=""/>
                                    <div className="absolute flex flex-col left-[350px] top-10 gap-8">
                                        <div className="inline-flex font-poppins font-bold text-light text-[35px] text-left tracking-[7px] max-w-52">
                                            Prudence Francis
                                        </div>
                                        <div className="flex w-full h-fit items-center justify-start">
                                            <div className="flex w-fit ml-5 flex-col gap-2 z-50">
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
                                <button className="w-[294px] px-4 py-2 content-center font-poppins font-normal text-light text-[22px]  border hover:border-2 border-white">
                                    Contact Me
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-[0.3] pt-40 gap-8">
                            <div className="inline-flex gap-2">
                                <div className="font-fira font-normal text-Gray text-base">Hello, I'm</div>
                                <div className="font-fira font-bold text-skyblue text-base">Prudence!</div>
                            </div>
                            <div className="font-fira font-normal text-Gray text-base">
                                I'm a self-taught product designer based in Lagos, Nigeria. I believe that a great design
                                is not one that is only pleasing aesthetically but also solve real-world problems.
                            </div>
                            <div className="font-fira font-normal text-Gray text-base">
                                Transforming my creativity and knowledge into a product through UI design, Ux design, and prototyping.
                                It has been my passion for over 5years. My work is driven by a deep curiosity and desire to create products 
                                that are both functional and delightful to use.
                            </div>
                            <div className="font-fira font-normal text-Gray text-base">
                                When I'm not designing, you can find me exploring new cultures, trying out new recipes, or indulging in my 
                                love for photography.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;