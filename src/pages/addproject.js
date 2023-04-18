/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import  { useEffect } from 'react'
import Link from 'next/link';
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'


const signup = () => {
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    } 
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  const [blockimg, setBlockimg] = useState('')
  const [component, setComponent] = useState('')
  const [branch, setBranch] = useState('')
  const [video, setVideo] = useState('')
  const [price, setPrice] = useState('')
  const [availableQty, setAvailableQty] = useState('')

  const handleChange = (e) => {
    if (e.target.name == 'title') {
      setTitle(e.target.value)
    }
    else if (e.target.name == 'slug') {
      setSlug(e.target.value)
    }
    else if (e.target.name == 'desc') {
        setDesc(e.target.value)
      }
      else if (e.target.name == 'img') {
        setImg(e.target.value)
      }
      else if (e.target.name == 'blockimg') {
        setBlockimg(e.target.value)
      }
      else if (e.target.name == 'component') {
        setComponent(e.target.value)
      }
      else if (e.target.name == 'branch') {
        setBranch(e.target.value)
      }
      else if (e.target.name == 'video') {
        setVideo(e.target.value)
      }
      else if (e.target.name == 'price') {
        setPrice(e.target.value)
      }
    if (e.target.name == 'availableQty') {
      setAvailableQty(e.target.value)
    }
  }

  console.log(title,slug,desc,img,blockimg,component,branch,video,price,availableQty)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { title,slug,desc,img,blockimg,component,branch,video,price,availableQty }

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproject`, {
      method: 'POST', // or 'PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    setTitle('')
    setSlug('')
    setDesc('')
    setImg('')
    setBlockimg('')
    setComponent('')
    setBranch('')
    setVideo('')
    setPrice('')
    setAvailableQty('')
    toast.success('Your Data has been Saved!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (


    <div className="bg-gray-100 min-h-screen">
      <Head>
      <title>Add Projects</title>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="icon" href="/icon.png" />
    </Head>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="px-6 py-4   ">

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
      
     

        <form onSubmit={handleSubmit} method="POST">
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={title}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="title"
                    name="title"
                    placeholder="Project Title"
                  />
            </div>

            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={slug}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="slug"
                    name="slug"
                    placeholder="Project Slug"
                  />
            </div>

            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={desc}
                    cols="30" row="2"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    id="desc"
                    name="desc"
                    placeholder="Project Description"
                  />
            </div>

            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={img}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="img"
                    name="img"
                    placeholder="Project Image Url"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={blockimg}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="blockimg"
                    name="blockimg"
                    placeholder="Project Block Image Url"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={component}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="component"
                    name="component"
                    placeholder="Project Components"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={branch}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="branch"
                    name="branch"
                    placeholder="Project Branch"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={video}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="video"
                    name="video"
                    placeholder="Project Video Url"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={price}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="price"
                    name="price"
                    placeholder="Project Price"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={availableQty}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="availableQty"
                    name="availableQty"
                    placeholder="Project AvailableQty"
                  />
            </div>

            <div className="flex items-center justify-between mt-4">
            <button
                    type="Submit"
                    className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                  >
                    Submit
                  </button>

                
            </div>
        </form>
    </div>

   
</div>









      
      </section>
    </div>






    
  )
}

export default signup