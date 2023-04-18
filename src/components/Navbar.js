/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useEffect, useState } from 'react'
import {  ImMenu } from 'react-icons/im';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useRef } from 'react';
import Link from 'next/link';
import { useSession,signOut} from "next-auth/react"
import { useRouter } from 'next/router';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const [dropdown, setDropdown] = useState(false)
  const [menubar, setMenubar] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
 


  const menuCart = () => {
    setMenubar(!menubar)
    //if (ref.current.classList.contains('translate-x-full')) {
    //ref.current.classList.remove('translate-x-full')
    //ref.current.classList.add('translate-x-0')

    //}
    //else if (!ref.current.classList.contains('translate-x-full')) {
    //ref.current.classList.remove('translate-x-0')
    // ref.current.classList.add('translate-x-full')

    //}

  }
  const ref = useRef()

 
  
  return (
    <>
    {!menubar && <span onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='fixed right-9 top-4 z-30 cursor-pointer'>
              {dropdown && <div  className='absolute right-5 bg-white shadow-lg border top-5 rounded-md px-5 py-4 w-64 z-30'>
                <ul>
                  <li className='py-1 hover:text-green-600 text-sm font-bold'> 
                  <div className="flex flex-col justify-center w-full  text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={session?.user?.image} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">{session?.user?.name}</p>
					<p>{session?.user?.email}</p>
				</div>
				
			</div>
        </li>
                  <Link href={'/orders'}><a><li className='py-2 hover:text-green-600 text-sm font-bold'>My Orders</li></a></Link>
                  <a onClick={() => signOut()} ><li className='py-1 hover:text-green-600 text-sm font-bold cursor-pointer'>Logout</li></a>
                </ul>

              </div>}
              {session && <RiAccountCircleFill className="text-xl md:text-2xl mx-6 " />}
            
            
            </span>}

            
    <div className={`sticky top-0 bg-white z-10 ${!menubar && 'overflow-hidden'}`}>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row  ">

        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

        <a href="/">
            <img className="w-auto h-9 cursor-pointer" src="padhog.png" alt=""/>
        </a>
      
    </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <div className=" fixed  top-4 z-30">
        <button
          className="font-bold text-xl mr-4 focus:outline-none "
          onClick={handleMenuClick}
        >
         Project
        </button>
        {isMenuOpen && (
          <div className="absolute z-30 left-0 top-full right-8 bg-white shadow-lg border  rounded-md px-5 py-4 w-64  ">
            <ul className="">
              <li>
              <a
                        href="/electrical"
                        className="px-4  hover:bg-blue-200 block"
                      >
                        1. Electrical Engineering
                      </a>
               
              </li>
              <li>
                <a href="#" className="px-4  hover:bg-blue-200 block">
                2. Computer Science Engineering
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>

    

    
    
          <div className="cursor-pointer items-center cart absolute  right-0 top-4 mx-5 flex ">
            

            {!session && <Link href={'/login'}><a>
              <button className='bg-green-600 px-2 py-1 rounded-md text-sm text-white mx-2 '>Login</button>
            </a></Link>}
            
            
           

          </div>


          <div ref={ref} className={`w-96 md:w-84 h-[100vh] sideCart overflow-y-scroll absolute top-0 bg-green-100 px-8 py-10  transition-all ${menubar ? 'left-0' : '-left-96'} `} >
            
            <span onClick={menuCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-green-500'><AiFillCloseCircle /></span>
            
            <div className="flex flex-col h-full p-3 w-96 dark:bg-gray-900 dark:text-gray-100">
	<div className="space-y-3">
	<div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Link href={'/'} ><span className="ml-3 cursor-pointer text-xl text-blue-500">a</span></Link><Link href={'/'} ><span className="cursor-pointer text-xl text-gray-400">
          <h1 className='font-bold text-4xl'>4</h1>
        </span></Link><Link href={'/'} ><span className="text-xl cursor-pointer text-blue-500">appoint</span>
              </Link>
      
    </div>
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm">
        <a href="/search" className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="data:image/png;base64,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"/>
    </span>
                            </span>
                            <div className="text-center ml-4 sm:text-left">
        <h1 className="text-xl font-bold text-gray-900 ">
         Book Your Appointment
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
         Search by name,Speciality,city and more.
        </p>
      </div>
                        </a>

                        <a href="/speciality" className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZBgZc33EFn93R0YTfGLslQkqA1CsTm7LdA&usqp=CAU"/>
    </span>
                            </span>
                            <div className="text-center ml-4 sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 ">
         Doctors by Speciality
        </h1>
      </div>
                        </a>
					
				
				<a href="/location" className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="data:image/jpeg;base64,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"/>
    </span>
                            </span>
                            <div className="text-center ml-4 sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 ">
         Doctors by City
        </h1>
      </div>
                        </a>
				</li>
			
			</ul>
		</div>
	</div>
</div>
          </div>
        </div>
      </header>
    </div>
    <style jsx>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navbar