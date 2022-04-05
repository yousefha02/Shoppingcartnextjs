export default function Download()
{
    return(
        <div className="container mx-auto px-6 text-center py-14">
            <h2 className="text-3xl sm:text-5xl font-semibold mb-8 ">Download Our <span className="underline text-[#711A75]">App</span></h2>
            <video controls className=" w-[800px] max-w-full mx-auto rounded-2xl" autoPlay loop preload="auto">
                <source src="/images/about/1.mp4" />
            </video>
        </div>
    )
}