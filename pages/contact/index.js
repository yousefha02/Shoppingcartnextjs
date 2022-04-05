import ShopHome from '../../Components/Shop/shopHome'
import Maps from '../../Components/Contact/Maps'
import Form from '../../Components/Contact/Form'
import Discount from '../../Components/Homes/Discount'
import Head from 'next/head'

export default function Contact()
{
    return(
        <div>
            <Head>
                <title>Contact Page</title>
            </Head>
            <ShopHome title="#To_talk" desc="LEAVE A MESSAGE, We love to hear from you!"/>
            <Maps/>
            <Form/>
            <Discount/>
        </div>
    )
}