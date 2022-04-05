import { useEffect, useState } from "react"
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"

export default function Table()
{   
    const [info,setInfo] = useState([])
    const [total,setTotal]= useState(0);

    useEffect(()=>
    {
        if(window.localStorage.getItem("products"))
            setInfo(JSON.parse(window.localStorage.getItem("products")))
    },[])

    useEffect(()=>
    {
        window.localStorage.setItem("products",JSON.stringify(info))
    },[info])

    useEffect(()=>
    {
        setTotal(0)
        for(let i=0; i<info.length; i++)
        {
            setTotal(back=>back+(info[i].price * info[i].quantity))
        }
    },[info])

    function deleteItem(id)
    {  
        const arr = info.filter(box=>box.id!=id)
        setInfo(arr)
        window.localStorage.setItem("products",info)
    }

    return(
        <>
        <div className="container mx-auto px-6 py-14 text-center overflow-auto ">
                <table className="md:w-full w-[600px]">
                <tr className=" border-t border-b">
                <th className="uppercase py-4 w-2/12">Remove</th>
                <th className="uppercase py-4 w-2/12">Image</th>
                <th className="uppercase py-4 w-2/12">Size</th>
                <th className="uppercase py-4 w-2/12">Price</th>
                <th className="uppercase py-4 w-2/12">Quantity</th>
                <th className="uppercase py-4 w-2/12">Subtotal</th>
                </tr>
                {
                    info.length>0?
                    
                        info.map(box=>
                            {
                                return(
                                    <tr key={box.id} className="pt-3">
                                        <td className="py-2 cursor-pointer" onClick={()=>deleteItem(box.id)}><FontAwesomeIcon icon={faCircleMinus}/></td>
                                        <td className="py-2"><Image src={`/images/products/${box.srcImage}`} width="60px" height="60px"/></td>
                                        <td className="py-2">{box.size}</td>
                                        <td className="py-2">{box.price}</td>
                                        <td className="py-2">{box.quantity}</td>
                                        <td className="py-2">{parseInt(box.price)*parseFloat(box.quantity)}</td>
                                    </tr>
                                )
                            }):""
                    }
                
                </table>
        </div>
        <div className="container mx-auto py-14 px-6 grid md:grid-cols-2">
            <div className="mb-5">
                <h2 className="text-headers text-2xl font-semibold mb-3">Apply Coupon</h2>
                <div>
                    <input type="text" placeholder="Enter your coupon"
                    className="border p-1 w-5/12"/>
                    <button className="text-white bg-green rounded ml-2 py-2 px-4">Apply</button>
                </div>
            </div>
            <div className="border p-5">
                <h2 className="text-2xl font-bold mb-4 text-headers">Card Totals</h2>
                <table className="w-full">
                    <tr>
                        <td className="border p-2 text-parg">Cart Subtotal</td>
                        <td className="border p-2 text-parg">{total}$</td>
                    </tr>
                    <tr>
                        <td className="border p-2 text-parg">Shipping</td>
                        <td className="border p-2 text-parg">Free</td>
                    </tr>
                    <tr>
                        <td className="border p-2 ">Total</td>
                        <td className="border p-2">{total}$</td>
                    </tr>
                </table>
                <button className="bg-green text-white text-sm font-semibold rounded px-2 py-1 mt-3">Proceed to checkout</button>
            </div>
        </div>
        </>
    )
}