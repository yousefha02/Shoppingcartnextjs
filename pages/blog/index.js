import { useEffect, useState } from "react"
import ShopHome from "../../Components/Shop/shopHome"
import Reading from "../../Components/Blog/Reading"
import Discount from '../../Components/Homes/Discount'
import blogs from '../../Data/blogs'
import Head from 'next/head'

export default function Blog()
{
    const [info,setInfo] = useState([])
    const [part,setPart]=useState([])
    const [load,setLoad]= useState(false)

    const nums = Array(Math.ceil((info.length/4)))

    for(let i=0; i<nums.length; i++)
    {
        nums[i]=i+1
    }

    useEffect(()=>
    {

            setInfo(blogs)
            setPart(blogs.slice(0,4))
            setLoad(true)
    },[])

    function change(val)
    {
        const len = part.length;
        setPart(info.slice((val-1)*len,len*val))
    }

    return(
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <ShopHome title="#readmore" desc="Read all case studies our products!"/>
            {
                load&&
                <div className="container mx-auto px-6 pb-14 pt-28">
                    <div className="">
                    {
                    part.map((box,index)=><Reading {...box} key={index+100}/>)
                    }
                </div>
                </div>
            }
            <div className="flex justify-center gap-1 mb-16">
            {
                nums.map(btn=><button key={btn} onClick={()=>change(btn)} className="bg-green text-white w-[40px] h-[40px] font-semibold rounded">{btn}</button>)
            }
            </div>

            <Discount/>
        </div>
    )
}