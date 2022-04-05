import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"

export default function Maps()
{
    return(
        <div className="container mx-auto py-14 px-6 lg:grid-cols-2 grid gap-4">
            <div className="pt-8">
                <h3 className="text-parg uppercase text-sm mb-4 font-semibold">get in touch</h3>
                <h2 className="text-headers text-2xl sm:text-3xl font-semibold mb-4">Visit one of our agency locations or contact us today</h2>
                <h3 className="text-headers font-semibold mb-4">Head Office</h3>
                <div>
                    <p className=" text-parg mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3"/>
                        56 Glassford Street GI NewYork
                    </p>
                    <p className=" text-parg mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-3"/>
                        Contact@example.com
                    </p>
                    <p className=" text-parg mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-3"/>
                        Contact@example.com
                    </p>
                    <p className=" text-parg mb-2">
                        <FontAwesomeIcon icon={faClock} className="mr-3"/>
                        Monday to Saturday 9:00am to 16pm
                    </p>
                </div>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19756.241503309942!2d-1.226237624682325!3d51.75991399933934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zb3hmb3JkIHVuaXZlcnNpdHkg2KPZg9iz2YHZiNix2K_YjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1648206726235!5m2!1sar!2s" 
            width="600" height="400" allowfullscreen="" loading="lazy" className=" max-w-full"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}