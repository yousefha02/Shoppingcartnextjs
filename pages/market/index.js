import Table from "../../Components/Market/Table"
import ShopHome from "../../Components/Shop/shopHome"
import Head from 'next/head'
export default function Market()
{
    return(
        <div>
            <Head>
                <title>
                    Market Page
                </title>
            </Head>
            <ShopHome title="#cart" desc="Add your coupon code SAVE upto 70%! "/>
            <Table/>
        </div>
    )
}