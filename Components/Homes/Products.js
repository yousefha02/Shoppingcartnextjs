import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/router'
export default function Products(props)
{
    const router = useRouter();
    return(
        <div className=' border shadow py-2 px-2 rounded-2xl'>
            <div className='text-center'>
                <Image src={`/images/products/${props.img}`} width="250px" height="220px" className='rounded-2xl'/>
            </div>
            <p className=' text-parg'>{props.type}</p>
            <h3 className='text-green font-semibold text-[14px] sm:text-[16px]'>{props.title}</h3>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <FontAwesomeIcon icon={faStar} className="text-[gold] text-sm sm:text-[16px]"/>
                        <FontAwesomeIcon icon={faStar} className="text-[gold] text-sm sm:text-[16px]"/>
                        <FontAwesomeIcon icon={faStar} className="text-[gold] text-sm sm:text-[16px]"/>
                        <FontAwesomeIcon icon={faStar} className="text-[gold] text-sm sm:text-[16px]"/>
                        <FontAwesomeIcon icon={faStar} className="text-[gold] text-sm sm:text-[16px]"/>
                        <h5 className='text-green font-semibold'>{props.price}$</h5>
                    </div>
                    <div className='duration-300 hover:rotate-180 flex items-center justify-center bg-[#C3E5AE] w-[40px] h-[40px] rounded-full cursor-pointer' 
                    onClick={()=>router.push(`shop/${props.id}`)}>
                        <FontAwesomeIcon  icon={faCartShopping} 
                        className="text-green"/>
                    </div>
                </div>
            </div>
        </div>
    )
}