import Image from 'next/image'
export default function LandingHome()
{
    return(
        <div className="Home h-[100vh] bg-no-repeat bg-center bg-cover">
            <div className='container mx-auto px-6 h-full'>
                <div className='flex flex-col justify-center h-full'>
                    <h3 className=' text-headers text-xl sm:text-2xl mb-1'>Trade-in-offer</h3>
                    <h2 className='text-headers text-3xl sm:text-5xl font-semibold mb-1'>Super value deals</h2>
                    <h2 className='text-green text-4xl sm:text-5xl font-semibold mb-2'>On all products</h2>
                    <p className='text-parg mb-6'>Save more with coupons up to 90% off!</p>
                    <div>
                    <button className='bg-no-repeat bg-center bg-cover w-[180px] h-[45px] ml-3 text-green text-sm font-semibold'>Shop Now</button>
                </div>
                </div>
            </div>
        </div>
    )
}