/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import React, { useState } from "react";
import Axios from 'axios';
import Project from '../models/Project'
import mongoose from "mongoose";


const search = ({project}) => {

  
   
  return (
    <div className='min-h-screen'>
        <Head>
        <title>Electrical Projects</title>

        <link rel="icon" href="/icon.png" />
      </Head>
      
                    <section className="text-gray-600 body-font min-h-screen">
        
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
           {project.length === 0 ? <div className=" place-content-center bg-white">
  <div className="text-center">
    <strong className="text-9xl font-black text-gray-200">Sorry</strong>

    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Comming Soon!
    </h1>
    

    <h className="mt-4 text-gray-500">Doctor On this location</h>
    <h1 className="text-xl bg-green-400 font-bold tracking-tight text-gray-900 sm:text-2xl">
    Stay tuned!
    </h1>
  </div>
</div>
:project.map((item)=>{
            
            return<Link passHref={true} key={item._id} href={`/project/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
            <a className="block relative  rounded overflow-hidden">
          <img alt="doctor" className="m-auto  h-[30vh] md:h-[36vh] block" src={item.img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.branch}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          
          <p className="mt-1">₹ {item.price}</p>
        </div>
      </div>
      </Link>})}
      
      
    </div>
  </div>
</section>
 </div>
  )
}

export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let project = await Project.find({branch: "EE"})
  
  return {
    props: { project: JSON.parse(JSON.stringify(project)) }, // will be passed to the page component as props
  }
}

export default search