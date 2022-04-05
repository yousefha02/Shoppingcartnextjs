import Products from "../../Components/Homes/Products";
import React,{ useEffect,useState } from "react"
import products from "../../Data/products";


export default function ShopProducts()
{
    const [product,setProducts]=useState(products);
    const [part,setPart] = useState([])
    const nums = Array(product.length/8)
    for(let i=0; i<nums.length; i++)
    {
        nums[i]=i+1
    }

    useEffect(()=>
    {
        setProducts(products)
        setPart(product.slice(0,8))
    },[])

    function change(val)
    {
        const len = part.length;
        setPart(product.slice((val-1)*len,len*val))
    }

    return(
        <div>
        <div className='px-6 py-14'>
        <h2 className='text-3xl sm:text-5xl font-semibold mb-3 text-center'>Featured Products</h2>
        <p className='mb-10 text-parg text-center'>Summer Collections New Modren Design</p>
            <div className='container mb-10 mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8'>
            {
                part.map((box,index)=><div key={index+1100}><Products {...box}/></div>)
            }
        </div>
        <div className="flex justify-center gap-1">
            {
                nums.map(btn=><button onClick={()=>change(btn)} className="bg-green text-white w-[40px] h-[40px] font-semibold rounded">{btn}</button>)
            }
        </div>
        </div>
        </div>
    )
}