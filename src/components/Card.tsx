'use client'
import Link from "next/link";
import { useState } from "react";

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

    return(
        <>
            <div onClick={props?.buttonclick}
                onMouseEnter={toggle}
                onMouseLeave={toggle}
                className="block max-w-[408px] h-[402px] ">
                <Link href={`${props?.link}`}>
                    <img src={`${props?.picture}`}
                        className="w-full"
                        alt={""}                
                    />
                    <div className={`w-full flex flex-col items-start ${colorChange} p-[18px] gap-3`}>
                        <div className="inline-flex font-poppins font-semibold text-xl text-[#F2F2F2]">
                            {props?.title}
                        </div>
                        <div className="inline-flex font-poppins font-normal text-sm text-[#ABABAB]">
                            {props?.description}
                        </div>
                        <div className="flex gap-2.5">
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle}</div>
                            </div>
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle2}</div>
                            </div>
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle3}</div>
                            </div>
                            <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
                                <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle4}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

// const CardItemWeb =(props:Card)=> {

//     const [ color, setColor ] = useState(false)

//     const toggle =()=> {
//         setColor(prevState => !prevState)
//     }

//     const colorChange = color? "bg-textback":"bg-cardgrey"

//     return(
//         <>
//             <div onClick={props?.buttonclick}
//                 onMouseEnter={toggle}
//                 onMouseLeave={toggle}
//                 className="block max-w-[408px] h-[402px] ">
//                 <Link href={`${props?.link}`}>
//                     <img src={`${props?.picture}`}
//                         className="w-full"
//                         alt={""}                
//                     />
//                     <div className={`w-full flex flex-col items-start ${colorChange} p-[18px] gap-3`}>
//                         <div className="inline-flex font-poppins font-semibold text-xl text-[#F2F2F2]">
//                             {props?.title}
//                         </div>
//                         <div className="inline-flex font-poppins font-normal text-sm text-[#ABABAB]">
//                             {props?.description}
//                         </div>
//                         <div className="flex gap-2.5">
//                             <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
//                                 <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle}</div>
//                             </div>
//                             <div className="flex items-center bg-textback p-2 rounded-[5px] h-[20px]">
//                                 <div className="font-poppins font-normal text-skyblue text-xs">{props?.subtitle2}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         </>
//     )
// }

export default CardItemMobile;