import {useRouter} from 'next/router'
import Discount from '../../Components/Homes/Discount'
import React,{ useEffect,useState } from "react"
import Image from 'next/image';
import Head from 'next/head'
import products from '../../Data/products'

export default function Service()
{

    const [product,setProducts]=useState({});
    const router = useRouter()
    const {shopid}= router.query;

    const [size,setSize] = useState('Xl')
    const [quantity,seQuantity]= useState('1')
    const [info,setInfo] = useState({})
    
    const [load,setLoad] = useState(false);
    const [on,setOn]= useState(false)

    let arr = [];

    useEffect(()=>
    {
        if(typeof window !== "undefined"){
            if(window.localStorage.getItem("products"))
        {
            arr = JSON.parse(window.localStorage.getItem("products"))
        }
        }
    },[])

    useEffect(()=>
    {
            let data=products.filter(box=> box.id===parseInt(shopid))
            setProducts(data[0])
            setLoad(true)

        if(on)
        if(typeof window !== "undefined"){
            {
                arr = arr.filter(box=>product.id!=box.id)
                arr.push(info)
                window.localStorage.setItem("products",JSON.stringify(arr))
            }
        }
    },[info])

    function save()
    {
        setInfo(back=>
        {
            return{
                ...back,
                srcImage:product.img,
                price:product.price,
                quantity:quantity,
                size:size,
                id:product.id
            }
        })
        setOn(true)
    }

    return(
        <div>
            <Head>
                <title>Product Page</title>
            </Head>
        <div>
            {
                load &&
                <div className='container mx-auto gap-4 px-6 pb-14 pt-28'>
                <div className='flex gap-5 lg:flex-row flex-col'>
                    <div className='lg:w-[35%]'>
                    <Image src={`/images/products/${product.img}`} height="1000px" width="880px"/>    
                    </div> 
                    <div className='lg:w-[65%] xl:pt-4'>
                        <h3 className='mb-4'>Home/T-shirt</h3>
                        <h2 className='text-2xl font-semibold mb-4'>{product.title}</h2>
                        <h2 className='text-2xl font-semibold mb-4'>{product.price}$</h2>
                        <select className='border border-black bg-white mb-3' onChange={(e)=>setSize(e.target.value)}>
                            <option value="Xl">Select Size</option>
                            <option value="Xl">Xl</option>
                            <option value="XXl">XXl</option>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                        </select>
                        <div className='mb-5'>
                            <input onChange={(e)=>seQuantity(e.target.value)} type="number" defaultValue="1" min="1" className='rounded border-2 boreder-black px-2 py-2 w-14 mr-3'/>
                            <button className='bg-green text-white rounded text-sm px-3 py-2' onClick={save}>Add To Cart</button>
                        </div>
                        <h2 className='text-2xl font-semibold mb-4'>Product Details</h2>
                        <p className='text-parg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
                </div>
            }
        </div>
        <Discount/>
        </div>
    )
}