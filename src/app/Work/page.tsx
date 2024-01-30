'use client'
import Footer from "@/components/Footer"
import Link from "next/link"
import { HiOutlineDownload } from "react-icons/hi"
import { Tab } from "@headlessui/react"
import { useState, useEffect } from "react"
import CardItemMobile from "@/components/Card"
import { FaArrowUpLong } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosCloseCircle } from "react-icons/io"


const WorkPage = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    const [ designRev, setDesignRev ] = useState(false)
    const [ design , setDesign ] = useState(false)

    const dynamicDesign = designRev? '' : 'translate-x-24 translate-y-56'
    const swipeLeftRev = designRev? '' : '-translate-x-3/4'

    const swipeLeft = design? '-translate-x-[80%]' : ''

    const toggle =()=> {
        setDesign(true)
    }

    useEffect(()=>{
        setDesignRev(true)
    })

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

    const scrollToTop=()=>{
        let scroll:any = document.getElementById("main")
         const scrollUp:any = scroll.scrollTop = 0;
         return scrollUp;
    }

    return (
        <>
            <div className="flex flex-col w-full bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80 pt-5 lg:pt-12 pb-10 overflow-x-hidden">
                <div className="flex flex-col h-full w-full">
                    <div className="relative flex w-full">
                        <nav className="absolute flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 items-center z-50">
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
                                        <Link href="/About">
                                            About
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
                    <div className="w-full h-16"/>
                    <div
                        className="flex w-full h-full items-center my-2 gap-40">
                        <div className={`inline-flex bg-bgBlack w-fit font-bold font-poppins text-skyblue text-xl lg:text-[40px] ${dynamicDesign} duration-300`}>
                            Works
                        </div>
                        <div className="hidden lg:inline-flex pt-3 w-fit font-normal font-poppins text-lg text-white">
                            I have made a few things, here are some of my favorite's
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row lg:pl-10 lg:pr-[120px] lg:my-8">
                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                            <Tab.List className={`flex lg:flex-col w-full lg:w-[200px] lg:ml-5 items-start gap-5 lg:gap-6 ${swipeLeftRev} ${swipeLeft} duration-500`}>
                                <Tab className="flex w-full justify-center font-poppins font-normal text-xl md:text-2xl text-white hover:ml-4 ui-selected:ml-4 ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px]">
                                    UIUX Design
                                </Tab>
                                <Tab className=" flex w-full justify-center font-poppins font-normal text-xl md:text-2xl text-white hover:ml-4 ui-selected:ml-4 ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px]">
                                    Branding
                                </Tab>
                            </Tab.List> 
                            <Tab.Panels className="lg:ml-12 h-full gap-4 pb-4 lg:pb-0 px-3.5">
                                <div className="lg:hidden inline-flex w-fit font-normal font-poppins text-base text-white mb-2">
                                    I have made a few things, here are some of my favorite's
                                </div>
                                <Tab.Panel>
                                    <div className="flex flex-col w-full lg:h-[450px] items-center overflow-hidden">
                                        <div id="main" className="w-fit grid grid-col-1 md:grid-cols-2 gap-[18px] overflow-y-auto">
                                            <CardItemMobile 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/PlughMobile"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"UIUX Design"} subtitle3={"Social"} subtitle4={"Mobile"}/>
                                            <CardItemMobile
                                                picture="/Componentgrid.svg"
                                                title="Components & Cards"
                                                description="Snapshot of admin dashboard and components"
                                                link="/Components-card"
                                                buttonclick={toggle} subtitle={"Cards"} subtitle2={"Components"} subtitle3={"Dashboard"} subtitle4={""}/>
                                             <CardItemMobile
                                                picture="/LandingPage.svg"
                                                title="Plugh"
                                                description="Connecting two people without sharing their personal details"
                                                link="/PlughWeb"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"UIUX Design"} subtitle3={""} subtitle4={""}/>
                                            <CardItemMobile 
                                                picture="/G-M.svg"
                                                title="Google Meal"
                                                description="A google course case study for a restaurant delivery app."
                                                link="/GoogleMeal"
                                                buttonclick={toggle} subtitle={"Food"} subtitle2={"UIUX Design"} subtitle3={"Mobile"} subtitle4={"Case Study"}/>
                                            <CardItemMobile
                                                picture="/TheQue.svg"
                                                title="The Que"
                                                description="Create post, go live, write petitions, banter on topics that interests you and let your vote count!"
                                                link="/TheQue"
                                                buttonclick={toggle} subtitle={"Social"} subtitle2={"Mobile"} subtitle3={"UIUX Design"} subtitle4={""}/>
                                            <CardItemMobile
                                                picture="/Velion.svg"
                                                title="Velion"
                                                description="Responsive landing page for an agency, with the goal to bring innovation to business and brands."
                                                link="/Velion"
                                                buttonclick={toggle} subtitle={"Landing Page"} subtitle2={"UIUX Design"} subtitle3={""} subtitle4={""}/>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="flex flex-col w-full lg:h-[500px] items-center overflow-hidden">
                                        <div id="main" className="w-fit grid grid-col-1 md:grid-cols-2 gap-[18px] overflow-y-auto">
                                            <CardItemMobile 
                                                picture="/Veliongrid.svg"
                                                title="Velion"
                                                description="A tech company that focuses on solving real world problems"
                                                link="/VelionBrand"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"Branding"} subtitle3={"Brand Guide"} subtitle4={"Agency"}/>
                                             <CardItemMobile
                                                picture="/Tazagrid.svg"
                                                title="Taza"
                                                description="Not your regular Jewel store"
                                                link="/Taza"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"Branding"} subtitle3={"Wears"} subtitle4={""}/>
                                            <CardItemMobile 
                                                picture="/Taza-beautygrid.svg"
                                                title="Taza Beauty"
                                                description="A testament to the power of self-expression through self-care."
                                                link="/TazaBeauty"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"Branding"} subtitle3={"Beauty"} subtitle4={""}/>
                                            <CardItemMobile
                                                picture="/ourcontinentgrid.svg"
                                                title="OurKontinent"
                                                description="Bringing change and impact to African Continent"
                                                link="/OurKontinent"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"Branding"} subtitle3={"Humanity"} subtitle4={""}/>
                                            <CardItemMobile
                                                picture="/Beebitesgrid.svg"
                                                title="Beebites"
                                                description="The Goodness in every bite"
                                                link="/Beebites"
                                                buttonclick={toggle} subtitle={"Logo"} subtitle2={"Branding"} subtitle3={"Food"} subtitle4={""}/>
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                        <div className="flex fixed flex-col w-fit h-fit top-[78%] left-[86%]">
                            <Link href="#main" onClick={scrollToTop}
                                className={`flex items-center justify-center w-[53px] h-[52px] rounded-full py-2.5 px-4 bg-[#0C0D0F]`}>
                                    <FaArrowUpLong className="text-skyblue text-2xl"/> 
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WorkPage;