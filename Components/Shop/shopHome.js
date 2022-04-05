export default function ShopHome(props)
{
    return(
        <div className="shop px-6 py-14 text-white h-[40vh] flex flex-col justify-center items-center">
           <div className="text-center pt-10">
                <h2 className="text-4xl font-semibold mb-1">{props.title}</h2>
                <p>{props.desc}</p>
           </div>
        </div>
    )
}