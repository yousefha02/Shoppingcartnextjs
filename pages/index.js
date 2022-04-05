import LandingHome from '../Components/Homes/landingHome';
import Features from '../Components/Homes/Features'
import React, { useEffect } from 'react';
import Products from '../Components/Homes/Products';
import Discount from '../Components/Homes/Discount';
import Deals from '../Components/Homes/Deals';
import Sign from '../Components/Homes/Sign';
import Head from 'next/head'
import features from "../Data/features";
import products from "../Data/products";

export default function Home() {
  const [feature,setFeature] = React.useState([])
  const [product,setProducts] = React.useState([])

    useEffect(()=>
    {
      setFeature(features)
      setProducts(products)
    },[])

  return (
    <div className="pt-[62px]">
      <Head>
        <title>Home Page</title>
      </Head>
      <LandingHome/>

      <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  px-6 py-14 gap-3'>
        {
          feature.map((box,index)=><Features key={index+200} {...box}/>)
        }
      </div>

      <div className='px-6 py-14'>
        <h2 className='text-3xl sm:text-5xl font-semibold mb-3 text-center'>Featured Products</h2>
        <p className='mb-10 text-parg text-center'>Summer Collections New Modren Design</p>
        <div className='container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8'>
          {
            product.slice(0,8).map((box,index)=><Products key={index+300} {...box}/>)
          }
        </div>
      </div>

      <Discount/>

      <div className='px-6 py-14'>
        <h2 className='text-3xl sm:text-5xl font-semibold mb-3 text-center'>New Arrival</h2>
        <p className='mb-10 text-parg text-center'>Summer Collections New Modren Design</p>
        <div className='container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8'>
          {
            products.slice(8).map((box,index)=><Products key={index+400} {...box}/>)
          }
        </div>
      </div>

      <Deals/>

      <Sign/>
    </div>
  )
}