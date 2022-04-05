import Image from "next/image"
export default function Deals()
{
    const obj = 
    [
        {
            title:"seasonal sale collections",
            des:"Spring/Summer 2022",
            id:1
        },
        {
            title:"seasonal sale",
            des:"Spring/Summer 2022",
            id:2
        },
        {
            title:"seasonal sale",
            des:"Spring/Summer 2022",
            id:3
        }
    ]

    return(
        <div className="container mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-2">
        <div className="deal_1 bg-no-repeat bg-center bg-cover p-10 text-white">
            <div>
            <h4 className=" text-xl">crazy deals</h4>
            <h2 className="text-3xl font-bold mb-2">buy 1 get 1 free</h2>
            <p className="mb-3">The best classic dress is on sale at care</p>
            <button className="border px-3 py-[.4rem] hover:bg-green hover:border-none duration-300">Learn More</button>
            </div>
        </div>  
        <div>
            <div className="deal_2 bg-no-repeat bg-center bg-cover p-10 text-white">
            <h4 className=" text-xl">spring/summer</h4>
            <h2 className="text-3xl font-bold mb-2">buy 1 get 1 free</h2>
            <p className="mb-3">The best classic dress is on sale at care</p>
            <button className="border px-3 py-[.4rem] hover:bg-green hover:border-none duration-300">Collection</button>
            </div>
        </div> 
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-5">
            {
                obj.map(box=>
                    {
                        return(
                            <div className={`detail-${box.id} bg-no-repeat bg-center bg-cover h-[40vh] flex flex-col justify-center p-4`} key={box.id}>
                                <h2 className="text-white font-semibold text-3xl uppercase">{box.title}</h2>
                                <p className="text-red-600">{box.des}</p>
                            </div>
                        )
                    })
            }
        </div>
        </div>
    )
}