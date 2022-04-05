import React, { useEffect,useState } from 'react';
import Features from '../../Components/Homes/Features';
import ShopHome from '../../Components/Shop/shopHome'
import Who from '../../Components/About/Who'
import Download from '../../Components/About/Download'
import Discount from '../../Components/Homes/Discount'
import Head from 'next/head'
import features from '../../Data/features'
export default function About()
{
    const [feature,setFeature] = React.useState([])

    useEffect(()=>
    {
      setFeature(features)
    },[])

    return(
        <div>
            <Head>
                <title>About Page</title>
            </Head>

            <ShopHome title="#KnowUs" desc="Lorem ipusme dolar sit omet, consectular"/>
            <Who/>
            <Download/>
            <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  px-6 py-14 gap-3'>
            {
            feature.map((box,index)=><Features key={index+500} {...box}/>)
            }
            </div>
            <Discount/>
        </div>
    )
}