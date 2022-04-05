export default function Sign()
{
    return(
        <div className="sign px-6 py-14">
            <div className="container mx-auto text-white grid md:grid-cols-2 md:text-left text-center">
            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-1">Sign Up For Newsletters</h2>
                <p>Get E-mail updates about our latest shop and <span className="text-[#FFD93D]">special offers</span></p>
            </div>
            <div className="flex items-center justify-center">
                <input type="text" placeholder="Your email address" className=" px-2 py-2 rounded rounded-r-none w-6/12"/>
                <button className="bg-green py-2 rounded rounded-l-none px-3">Sign Up</button>
            </div>
            </div>
        </div>
    )
}