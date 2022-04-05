import Image from 'next/image'
export default function Reading(props)
{
    return(
        <div className='flex sm:gap-8 mb-20 sm:flex-row flex-col relative'>
            <div>
                <Image src={`/images/blog/${props.img}`} height="380px" width="500px"/>
            </div>
            <div className='flex flex-col justify-center mt-3'>
                <h2 className='text-xl font-semibold mb-3'>{props.title}</h2>
                <p className=' text-parg'>{props.desc}</p>
            </div>
            <span className={`absolute -top-[42px] font-bold -z-10 text-[#777] text-6xl`}>{props.date}</span>
        </div>
    )
}