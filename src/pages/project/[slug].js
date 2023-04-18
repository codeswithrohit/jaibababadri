/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdFavorite } from 'react-icons/md';
import Head from 'next/head'
import Project from '../../models/Project';
import Error from 'next/error'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcQuestions, FcAnswers } from 'react-icons/fc';
import { AiFillDownCircle } from "react-icons/ai";


const Post = ({ bookNow , addToCart, project, variants, error }) => {
  const router = useRouter()
  const { slug } = router.query
const [pin,setPin] = useState()

const [service,setService] = useState()

const checkServiceability = async () =>{
  let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
  let pinJson =  await pins.json()
  if(pinJson.includes(parseInt(pin))){
    setService(true)
  }
  else{
    setService(false)
  }
}


 const onchangePin = (e) =>{
  setPin(e.target.value)
 }

  if (error == 404){
    return<Error statusCode={404}/>
  }

  return <>
  <div className='min-h-screen'>
  <Head>
        <title>Project</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head>

    <section className="text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={project.img}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-sm md:text-2xl title-font font-medium mb-1">{project.title}</h1>
            <div className="flex mb-4">
             
            <p className="leading-relaxed text-sm md:text-xl font-medium">{project.branch}</p>
             
            </div>
           
            
            <div className="flex">
              {project.availableQty>0 && <span className="title-font font-medium text-2xl text-gray-900">₹ {project.price} </span>}
              {project.availableQty<=0 && <span className="title-font font-medium text-2xl text-gray-900">No slot available! </span>}
              <button disabled={project.availableQty<=0} onClick={()=>(bookNow(slug, 1, project.price, project.title))} className="flex ml-auto text-white bg-indigo-500 disabled:bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
              
              
            </div>
            <div className='pin mt-6 flex space-x-2 text-sm'>
            <input onChange={onchangePin} placeholder='Enter Your Pincode' className='px-2 border-2 border-gray-400 rounded-md' type='text' />
            <button onClick={checkServiceability}  className='text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded' >Check</button>

           </div>
           {(!service && service!= null) && <div className='text-red-700 text-sm mt-3'>
            Sorry! We do not deliver to this pincode yet
           </div>}
         {(service && service!= null) &&<div className='text-green-700 text-sm mt-3'>
            Yay! This pincode is serviceable
           </div>}
          </div>
        </div>
        
      </div>
      <div className="p-6  shadow-lg rounded-lg bg-gray-200 text-gray-800 container m-auto">
  <h2 className="font-semibold text-3xl mb-5">OverView</h2>
  <p>
{project.desc}
  </p>
</div>

<div className="p-6  shadow-lg rounded-lg bg-gray-200 text-gray-800 container m-auto mt-6">
  <h2 className="font-semibold text-3xl mb-5">Component</h2>
  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      
                        <span className="mx-2 font-medium text-gray-900 "> ➤ {project.component}
                       
                        </span>
                    </p>
</div>



    </section> 

    


    </div>
    </>
}

export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let project = await Project.findOne({ slug: context.query.slug})
  if(project == null){
    return{
      props: {error: 404},
    }
  }

 
 



  return {
    props: {error: error, project: JSON.parse(JSON.stringify(project)) }, // will be passed to the page component as props
  }
}

export default Post