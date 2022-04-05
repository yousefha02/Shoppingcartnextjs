import Image from "next/image"
export default function Footer()
{
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 container mx-auto px-6 py-14">
            <div className="mb-5">
            <Image src="/images/logo.png" width="140px" height="35px"/>
            <h2 className="mt-5 font-semibold mb-2">Contact</h2>
            <p className=" text-parg"><span className="font-semibold text-black">Address :</span> Gaza - Palstine</p>
            <p className=" text-parg"><span className="font-semibold text-black">Phone :</span> +059-237-4719</p>
            <p className=" text-parg"><span className="font-semibold text-black">Hours :</span>8:00 : 20:00</p>
            </div>
            <div>
            <h2 className="font-semibold mb-2">About</h2>
            <p className=" text-parg">About Us</p>
            <p className=" text-parg">Dielevry Information</p>
            <p className=" text-parg">Privacy Policy</p>
            <p className=" text-parg">Contact Us</p>
            </div>
            <div>
            <h2 className="font-semibold mb-2">My Account</h2>
            <p className=" text-parg">Sign In</p>
            <p className=" text-parg">View Cort</p>
            <p className=" text-parg">My Wallet</p>
            <p className=" text-parg">Help</p>
            </div>
            <div>
            <h2 className="font-semibold mb-2">Install App</h2>
            <p className="text-parg mb-2">From App Store or Google PLay</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="border border-green rounded"><Image src="/images/pay/play.jpg" width="170px" height="40px"/></div>
            <div className="border border-green rounded"><Image src="/images/pay/app.jpg" width="170px" height="40px"/></div>
            </div>
            <p className="text-parg mb-3">Secured Payment Gateways</p>
            <Image src="/images/pay/pay.png" width="220px" height="40px"/>
            </div>
        </div>
    )
}