import Image from 'next/image'
export default function Features(props)
{
    const styles =
    {
        backgroundColor:`${props.color}`
    }
    return(
        <div className="border p-6 border-[#cce7d0] shadow text-center">
            <Image src={`/images/features/${props.img}`} width="130px" height="80px"/>
            <h3 className='text-sm mt-2 text-green font-semibold py-1 px-[2px]' style={styles}>{props.title}</h3>
        </div>
    )
}