import { useEffect, useState } from "react"
import Image from 'next/image'
import people from '../../Data/people'

export default function Form()
{
    const [info,setInfo] = useState([]);
    const [load,setLoad]=useState(false)

    useEffect(()=>
    {
            setInfo(people);
            setLoad(true);
    },[])

    function hand(e)
    {
        e.preventDefault();
    }

    return(
        <div className="container mx-auto px-6 py-14">
            {
                load&&
                <div className="flex flex-col md:flex-row gap-4 p-10 border justify-between">
                <form className="md:w-6/12 lg:w-7/12" onSubmit={(e)=>hand(e)}>
                    <h3 className=" text-parg uppercase font-medium text-sm mb-2">leave a message</h3>
                    <h2 className="text-2xl sm:text-3xl text-headers font-semibold mb-5">We love to hear from you</h2>
                    <div><input type="text" placeholder="Your Name" className="border w-full p-2 mb-4"/></div>
                    <div><input type="text" placeholder="E-mail" className="border w-full p-2 mb-4"/></div>
                    <div><input type="text" placeholder="Subject" className="border w-full p-2 mb-4"/></div>
                    <textarea placeholder="Your Message" className="border w-full p-2 mb-4"></textarea>
                    <div><input type="submit" value="Submit" className="bg-green text-white rounded py-2 px-3"/></div>
                </form>
                <div>
                {
                    info.map(box=>
                        {
                            return(
                                <div className='flex gap-4 mb-5 items-center'>
                                    <Image src={`/images/people/${box.img}`} width="70px" height="70px"
                                    className="rounded"/>
                                    <div>
                                        <h2 className="text-headers font-semibold">{box.name}</h2>
                                        <p className="text-parg">{box.job}</p>
                                        <p className="text-parg">Phone: {box.phone}</p>
                                        <p className="text-parg">Email: {box.email}</p>
                                    </div>
                                </div>
                            )
                        })
                }
                </div>
                </div>
            }
        </div>
    )
}