'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiLoader2Line } from "react-icons/ri";

type Card = {
    
    picture:string
    title:string
    description:string
    link:string
    buttonclick:any
    subtitle:string
    subtitle2:string
    subtitle3:string
    subtitle4:string
}

const CardItemMobile =(props:Card)=> {

    const [ color, setColor ] = useState(false)

    const toggle =()=> {
        setColor(prevState => !prevState)
    }

    const colorChange = color? "bg-textback":"bg-cardgrey"

    const [load, setLoad] = useState(false);
    const LoadEffect = load? "hidden" : "flex";
    const loadImage = load? "" : "hidden";
    const textEffect = load? "visible" : "invisible"
    const effect = load? "" : "animate-pulse"

    useEffect(()=>{
        setTimeout(()=> {
            setLoad(true);
        },1000)
    },[])


    return(
            <div onClick={props?.buttonclick}
                onMouseEnter={toggle}
                onMouseLeave={toggle}
                className={`block max-w-[408px] h-fit z-10 ${effect}`}>
                <Link href={`${props?.link}`}>
                    <div className={`${LoadEffect} h-[215px] w-full items-center justify-center transition-all ease-out`}>
                        <RiLoader2Line className="animation-spin text-2xl"/>
                    </div>
                    <img src={`${props?.picture}`}
                        className={`${loadImage} w-full`}
                        alt={""}                
                    />
                    <div className={`w-full flex flex-col items-start justify-between h-[150px] ${colorChange} p-3 md:p-[18px] gap-3`}>
                        <div className={`${textEffect} inline-flex font-poppins font-semibold text-xl text-[#F2F2F2]`}>
                            {props?.title}
                        </div>
                        <div className={`${textEffect} inline-flex font-poppins font-normal text-xs sm:text-sm text-[#ABABAB]`}>
                            {props?.description}
                        </div>
                        <div className="flex gap-2.5">
                            <div className={`${textEffect} inline-flex items-center bg-textback p-2 rounded-[5px] h-[20px] font-poppins font-normal text-skyblue text-[8px] sm:text-xs`}>
                                {props?.subtitle}
                            </div>
                            <div className={`${textEffect} inline-flex items-center bg-textback p-2 rounded-[5px] h-[20px] font-poppins font-normal text-skyblue text-[8px] sm:text-xs`}>
                                {props?.subtitle2}
                            </div>
                            {props?.subtitle3 ? <div className={`${textEffect} inline-flex items-center bg-textback p-2 rounded-[5px] h-[20px] font-poppins font-normal text-skyblue text-[8px] sm:text-xs`}>
                                {props?.subtitle3}
                            </div>: null}
                            {props?.subtitle4 ? <div className={`${textEffect} inline-flex items-center bg-textback p-2 rounded-[5px] h-[20px] font-poppins font-normal text-skyblue text-[8px] sm:text-xs`}>
                                {props?.subtitle4}
                            </div>: null}
                        </div>
                    </div>
                </Link>
            </div>
    )
}
export default CardItemMobile;