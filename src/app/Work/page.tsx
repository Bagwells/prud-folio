'use client'
import Footer from "@/components/Footer"
import Link from "next/link"
import { HiOutlineDownload } from "react-icons/hi"
import { Tab } from "@headlessui/react"
import { useState, useEffect } from "react"
import CardItem from "@/components/Card"
import { FaArrowUpLong } from "react-icons/fa6"


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

    return(
        <>
            <div className="flex flex-col w-full bg-bgBlack px-[120px] pt-12 pb-14 ">
                <div className="flex flex-col h-full w-full">
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
                                    <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                                        RESUME  <HiOutlineDownload className="text-base"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>

                    <div id="main"
                        className="flex w-full h-fit items-center my-2 gap-40">
                        <div className={`inline-flex w-fit font-bold font-poppins text-skyblue text-[40px] ${dynamicDesign} duration-300`}>
                            Works
                        </div>
                        <div className="inline-flex pt-3 w-fit font-normal font-poppins text-lg text-white">
                            I have made a few things, here are some of my favorite's
                        </div>
                    </div>
                    
                    <div className="w-full flex pl-10 my-8">
                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                            <Tab.List className={`flex flex-col w-[194px] ml-5 items-start gap-6 ${swipeLeftRev} ${swipeLeft} duration-500`}>
                                <Tab className="font-poppins font-normal text-2xl text-white hover:ml-4 ui-selected:ml-4 ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px]">
                                    UIUX Design
                                </Tab>
                                <Tab className="font-poppins font-normal text-2xl text-white hover:ml-4 ui-selected:ml-4 ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px]">
                                    Branding
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="ml-12 h-full">
                                <Tab.Panel>
                                    <div className="flex flex-col w-full items-center">
                                        <div className="w-fit grid grid-cols-2 gap-[18px]">
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                             <CardItem 
                                                picture="/LandingPage.svg"
                                                title="Plugh Landing Page"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="flex flex-col w-full items-center">
                                        <div className="w-fit grid grid-cols-2 gap-[18px]">
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                             <CardItem 
                                                picture="/LandingPage.svg"
                                                title="Plugh Landing Page"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                            <CardItem 
                                                picture="/Plugh.svg"
                                                title="Plugh Mobile App"
                                                description="Connecting two people without sharing their personal details"
                                                link="/WorkOverview"
                                                buttonclick={toggle}
                                            />
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                        <div className="flex w-[120px] h-full justify-center">
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
        </>
    )
}

export default WorkPage;