/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../Layout/Navbar'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import OurAim from '../components/OurAim'
import Contact from '../components/Contact'

import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Axios from 'axios';
import Project from '../models/Project'
import mongoose from "mongoose";



export default function Home({project}) {

 
    const [filterData, setFilterData] = useState([]);



   



    const [data, setData] = useState(project);
    const filterResult=(catItem)=>{
      const result=project.filter((curData)=>{
        return curData.branch===catItem;
      });
      setData(result);
    }

    

    

    useEffect(() => {
      Aos.init({
        duration: 1800,
        offset: 100,
        disable: "mobile",
      });
    }, []);
  return (
    <div >
      <Head>
        <title>PadhoG</title>
        <meta name="PadhoG" content="PadhoG provides learners with quick notes, project ideas, and book PDFs for competitive exams" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <NavBar/>
      <Hero />
      <Service />
      <Projects />
      <Testimonials />
      <OurAim />
      <Contact />







    </div >
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
