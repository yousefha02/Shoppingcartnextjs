import Image from "next/image"
export default function Who()
{
    return(
        <div className="container mx-auto px-6 py-14">
            <div className="grid lg:grid-cols-2 gap-8">
            <Image src="/images/about/a6.jpg" height="400px" width="400px"/>
            <div className=" pt-6">
                <h2 className=" text-headers text-3xl sm:text-5xl font-semibold mb-4">Who We Are ?</h2>
                <p className=" text-parg mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin Content here, content here , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover</p>
                <abbr title="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</abbr>
                <div className="relative overflow-hidden h-[26px] bg-[#eee] mt-4 scroll">
                    <h3 className=" absolute w-full h-full text-center top-0 left-0 leading-[26px] translate-x-full">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</h3>
                </div>
            </div>
            </div>
        </div>
    )
}