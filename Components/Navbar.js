import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { useState } from "react"
import Image from 'next/image'
import {useRouter} from 'next/router'
export default function Navbar(){
    let[showNav,setShowNav]=useState(false)
    const router = useRouter();
    return(
        <div className="fixed w-[100%] shadow z-40">
            <div className="bg-pink z-40 relative w-[100%]">
            <nav className="container px-6 py-3 mx-auto">
            <div className="flex">
                <div className="flex-grow">
                    <Image src="/images/logo.png" width="170px" height="40px"/>
                </div>
                <div className={`absolute top-[50px] left-0 w-[100%] p-3 ${showNav?"flex":"hidden"} text-center 
                lg:relative lg:top-0 lg:p-0 lg:w-fit lg:flex bg-pink ${showNav&&"shadow"} lg:shadow-none`}>
                    <ul className={`flex flex-col lg:flex-row text-center m-auto`}>
                        <li className="flex items-center text-nav mr-7 justify-center mb-2"><Link href="/"><a className={`${router.pathname=="/"?'active':""} hover:text-green relative before:absolute before:h-[2px] before:bg-green before:bottom-[-3px] hover:before:w-[60%] duration-300`}>Home</a></Link></li>
                        <li className="flex items-center text-nav mr-7 justify-center mb-2"><Link href="/shop"><a className={`${router.pathname=="/shop"?'active':""} hover:text-green relative before:absolute before:h-[2px] before:bg-green before:bottom-[-3px] hover:before:w-[60%] duration-300`}>Shop</a></Link></li>
                        <li className="flex items-center text-nav mr-7 justify-center mb-2"><Link href="/blog"><a className={`${router.pathname=="/blog"?'active':""} hover:text-green relative before:absolute before:h-[2px] before:bg-green before:bottom-[-3px] hover:before:w-[60%] duration-300`}>Blog</a></Link></li>
                        <li className="flex items-center text-nav mr-7 justify-center mb-2"><Link href="/about"><a className={`${router.pathname=="/about"?'active':""} hover:text-green relative before:absolute before:h-[2px] before:bg-green before:bottom-[-3px] hover:before:w-[60%] duration-300`}>About</a></Link></li>
                        <li className="flex items-center text-nav mr-7 justify-center mb-2"><Link href="/contact"><a className={`${router.pathname=="/contact"?'active':""} hover:text-green relative before:absolute before:h-[2px] before:bg-green before:bottom-[-3px] hover:before:w-[60%] duration-300`}>Contact</a></Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <button className="ml-3" onClick={()=>router.push('/market')}><FontAwesomeIcon icon={faCartShopping} className={`${router.pathname=="/market"?' text-green':""} duration-300 hover:text-green`}/></button>
                </div>
                <div className="border px-[5px] cursor-pointer ml-[6px] lg:hidden flex items-center duration-300 hover:text-green" onClick={()=>setShowNav(!showNav)}>
                    <FontAwesomeIcon icon={faBarsStaggered}/>
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}