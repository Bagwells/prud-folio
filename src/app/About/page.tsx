'use client'
import { HiOutlineDownload } from "react-icons/hi"
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";


const AboutPage = ()=> {
    
    const [ design , setDesign ] = useState(false)

    const [ designRev , setDesignRev ] = useState(false)

    const toggle =()=> {
        setDesignRev(true)
    }


    useEffect(()=>{
        setDesign(true)
    })

    const dynamicDesign = design? "" : ""
    const dynamicDesignRev = designRev? "" : ""

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
            <div className="flex w-full bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80 pt-5 md:pt-12 pb-14 overflow-hidden">
                <div className="fixed inset-0 w-full h-14 bg-bgBlack z-50"/>
                <div className="flex flex-col w-full gap-2">
                    <div className="fixed inset-x-0 flex w-full h-fit bg-bgBlack z-50 px-5 md:px-20 lg:px-[100px] 2xl:px-80">
                        <nav className="flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 items-center z-50">
                            <div className="flex flex-col lg:hidden w-full justify-center items-end">
                                <div onClick={slideToggle}
                                    className="flex w-fit items-center lg:hidden">
                                    <RxHamburgerMenu className={`text-white text-[34px] motion-reduce:transition-all duration-500 ${designShift}`} />
                                </div>
                                <div className={`flex flex-col w-full transition-[height] ease-out ${height} delay-75 duration-500 justify-center items-end gap-6 overflow-hidden`}>
                                    <IoIosCloseCircle onClick={slideToggle} className={`text-3xl text-white motion-reduce:transition-all ease-in-out duration-500 ${designShift2}`}/>
                                        <div className="flex flex-col w-full items-center px-2.5 py-10  gap-10">    
                                            <div className="flex w-fit p-2.5 items-center justify-center cursor-pointer">
                                                <div onClick={resumeDownload} className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                                    RESUME <HiOutlineDownload className="text-xl"/>
                                                </div>
                                            </div>
                                            <div className="flex w-full flex-col gap-5 items-center">
                                                <span onClick={toggle} className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                                    <Link href="/Home">
                                                        Home
                                                    </Link> 
                                                </span>
                                                <span onClick={toggle} className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                                    <Link href="/About">
                                                        About
                                                    </Link> 
                                                </span>
                                                <span onClick={toggle} className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                                    <Link href="/Work">
                                                        Works
                                                    </Link> 
                                                </span>
                                                <span onClick={toggle} className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
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
                                    <span onClick={toggle} className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/Home">
                                            Home
                                        </Link> 
                                    </span>
                                    <span onClick={toggle} className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/Work">
                                            Works
                                        </Link> 
                                    </span>
                                    <span onClick={toggle} className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                                        <Link href="/Contact">
                                            Contact
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
                    <div className="flex lg-hidden w-full h-7"/>
                    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-10 pt-6">
                        <div className="flex flex-col lg:flex-row lg:flex-[0.6] items-start">
                            <div className={`flex lg:h-full w-fit font-bold font-poppins text-skyblue text-[40px] ${dynamicDesign} ${dynamicDesignRev} duration-300 z-10`}>
                                About
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex flex-col relative gap-4">
                                    <img className="w-[236px] md:w-[468px]" src="/Aboutme.svg" alt=""/>
                                    <Link href="/Contact" className="hidden lg:flex items-center justify-center w-full px-4 py-2 font-poppins font-normal 
                                        text-light text-[22px] visited:border-opacity-20 border hover:border-2 border-white"
                                    >
                                        Contact Me
                                    </Link>
                                    <div className="absolute flex flex-col left-[72%] lg:left-[75%] top-8 lg:top-10 lg:gap-8 ">
                                        <div className="inline-flex invisible lg:visible font-poppins font-bold text-light text-[35px] text-left tracking-[7px] w-fit md:max-w-52">
                                            Prudence Francis
                                        </div>
                                        <div className="flex w-full h-fit items-center justify-start">
                                            <div className="flex w-fit ml-5 flex-col gap-2 z-10">
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
                        </div>
                        <div className="flex flex-col flex-1 lg:flex-[0.3] lg:pt-40 gap-4 lg:gap-8">
                            <div className="inline-flex lg:hidden font-poppins font-bold text-light text-2xl lg:text-[35px] text-left tracking-[4px] w-fit">
                                Prudence Francis
                            </div>
                            
                            <div className="font-fira font-normal text-grey text-base">
                                Hello, I'm <span className="font-bold text-skyblue">Prudence!</span>
                            </div>
                            <div className="font-fira font-normal text-grey text-base">
                                I'm a self-taught product designer based in Lagos, Nigeria. I believe that a great design
                                is not one that is only pleasing aesthetically but also solve real-world problems.
                            </div>
                            <div className="font-fira font-normal text-grey text-base">
                                Transforming my creativity and knowledge into a product through UI design, Ux design, and prototyping.
                                It has been my passion for over 5years. My work is driven by a deep curiosity and desire to create products 
                                that are both functional and delightful to use.
                            </div>
                            <div className="font-fira font-normal text-grey text-base">
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