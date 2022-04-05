import ShopHome from "../../Components/Shop/shopHome"
import ShopProducts from "../../Components/Shop/shopProducts"
import Sign from '../../Components/Homes/Sign'
import Head from 'next/head'
export default function Shop()
{
    return(
        <>
        <Head>
            <title>Shop Page</title>
        </Head>
        <ShopHome title="#stayhome" desc={"Save more with coupons up to 90% off!"}/>
        <ShopProducts/>
        <Sign/>
        </>
    )
}