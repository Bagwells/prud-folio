import { FaRegCopyright } from "react-icons/fa";

const Footer = ()=> {
    return(
        <>
            <div className="w-full flex bg-bgBlack py-[38px] px-5 md:px-20 lg:px-60 items-center border-t border-t-Gray z-50">
                <div className="flex w-full h-5 justify-between items-center">
                    <div className=" grid grid-cols-2 md:flex gap-x-10 gap-y-4 lg:gap-[50px]">
                        <span className="font-inter font-normal text-xs md:text-base text-white">
                            <a href="">
                                Twitter
                            </a>
                        </span>
                        <span className="font-inter font-normal text-xs md:text-base text-white">
                            <a href="">
                                Linkedin
                            </a>
                        </span>
                        <span className="font-inter font-normal text-xs md:text-base text-white">
                            <a href="">
                                Instagram
                            </a>
                        </span>
                        <span className="font-inter font-normal text-xs md:text-base text-white">
                            <a href="">
                                Dribbble
                            </a>
                        </span>                        
                    </div>
                    <div className="flex items-start lg:items-center">
                        <div className="inline-flex items-center font-inter font-normal text-base text-white gap-1"><FaRegCopyright />2024</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;