import { FaRegCopyright } from "react-icons/fa";

const Footer = ()=> {
    return(
        <>
            <div className="w-full flex bg-bgBlack py-[38px] px-60 items-center border-t border-t-Gray">
                <div className="flex w-full h-5 justify-between items-center">
                    <div className="flex gap-[50px]">
                        <span className="font-inter font-normal text-base text-white">
                            <a href="">
                                Twitter
                            </a>
                        </span>
                        <span className="font-inter font-normal text-base text-white">
                            <a href="">
                                Linkedin
                            </a>
                        </span>
                        <span className="font-inter font-normal text-base text-white">
                            <a href="">
                                Instagram
                            </a>
                        </span>
                        <span className="font-inter font-normal text-base text-white">
                            <a href="">
                                Behance
                            </a>
                        </span>                        
                    </div>
                    <div className="flex items-center">
                        <div className="inline-flex items-center font-inter font-normal text-base text-white gap-1"><FaRegCopyright />2023</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;