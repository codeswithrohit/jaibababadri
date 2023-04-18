/* eslint-disable @next/next/no-img-element */
// import content
import React, { useState,useEffect } from 'react';
import { content } from "../data/Content";

const Hero = () => {
  const { hero } = content;
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Log' },
    { id: 2, name: 'Poster' },
    { id: 3, name: 'Video' },
    { id: 4, name: 'Image' },
    { id: 5, name: 'Text' },
    { id: 6, name: 'Audio' },
  ]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);
  
  // Define an array of placeholder texts to cycle through
  const texts = ['Search Notes', 'Search Projects'];

  // Use the useEffect hook to update the placeholder state variable
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(texts[index]);
      setIndex((index + 1) % texts.length);
    }, 3000); // Change the duration here as desired
    
    return () => clearInterval(intervalId);
  }, [index, texts]);

  const results = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  
  const [text, setText] = useState('');
  const [aindex, setAindex] = useState(0);
  const messages = [
    'Free Notes: Access our extensive library of study material',
    'Test Your Knowledge: Take our Free Mock Tests',
    'DIY Project Ideas: Learn by Doing with Step-by-Step Guides',
    'Resources for Students: Everything you need to succeed',
    'Join Our Community: Collaborate, Learn, and Grow with Us',
  ];

  useEffect(() => {
    if (aindex < messages.length) {
      setTimeout(() => {
        setText(messages[aindex]);
        setAindex(aindex + 1);
      }, 3000);
    } else {
      setAindex(0);
    }
  }, [aindex, messages]);

 

  return (
    <>
    <section id="home" >
      <div className="md:hidden  pt-5">
     
        <h2 className="text-blue-400 mt-5 text-center text-2xl font-mono " >Padho Chahein Kahi Pe!</h2>
        <h2 className="text-blue-400  text-2xl text-center font-mono " >Notes Milega Yahi Pe!</h2>
        
        <div className=" items-center h-18rem">
          <img
            src="home23.png"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
         
        </div>
        
    <div className="container flex items-center    mx-auto">
        <div>


            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://i.pinimg.com/originals/c8/a6/2c/c8a62c3f14fdf027de13e1755ddd0ec6.gif"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div><a href="/Engineering" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Engineering</h6>
              <p className="italic font-Poppins text-[0.95rem]">UTU,BCECE,AKTU etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaXlBHsQ3BiEPmlLYebcUMrGTUpbGzWEGm8rbTEOc-iPT1IHxIw9m3iVkogNyRzxZeQk&usqp=CAU"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/Class12" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Class 12</h6>
              <p className="italic font-Poppins text-[0.95rem]">CBSE,ICSE,UP,UK,BIHAR BOARD etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://media.tenor.com/aatjRHQTYmIAAAAj/ten-symbols.gif"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/Class10" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Class 10</h6>
              <p className="italic font-Poppins text-[0.95rem]">CBSE,ICSE,UP,UK,BIHAR BOARD etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vhsStT4yg4TCr8TW70sN6IIZ00YsiGO8jg&usqp=CAU"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/IITJEE" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">IIT-JEE</h6>
              <p className="italic font-Poppins text-[0.95rem]">Short notes, Hand book, Mock test etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://india.postsen.com/content/uploads/2023/03/07/e7a0c08612.jpg"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/NEET" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">NEET</h6>
              <p className="italic font-Poppins text-[0.95rem]">Short notes, Hand book, Mock test etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-blue-100 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://play-lh.googleusercontent.com/5AB1djgmuCGynvFe2NE7IFc7V3VPSmB_m4uhUE_5oFEky6MupqmylBXUWXNPz9hU4Q"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/NonTech" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Non-Techanical Exams</h6>
              <p className="italic font-Poppins text-[0.95rem]">UPSC,SSC,BANKING,RAILWAY etc...</p>
              
            </div></a>
          </div>
            </div>
        </div>
    </div>
    

      </div>
      
      
      
      <div className="relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
       

        {/* first col */}
        <div className="pb-16 px-12 hidden lg:block  " data-aos="fade-down">
        
       

<h2 className=" text-blue-400 text-4xl font-mono">Padho Chahein Kahi Pe!</h2>
<h2 className=" text-blue-400 text-4xl font-mono">Notes Milega Yahi Pe!</h2>


          
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
          
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://i.pinimg.com/originals/c8/a6/2c/c8a62c3f14fdf027de13e1755ddd0ec6.gif"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div><a href="/Engineering" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Engineering</h6>
              <p className="italic font-Poppins text-[0.95rem]">UTU,BCECE,AKTU etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaXlBHsQ3BiEPmlLYebcUMrGTUpbGzWEGm8rbTEOc-iPT1IHxIw9m3iVkogNyRzxZeQk&usqp=CAU"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/Class12" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Class 12</h6>
              <p className="italic font-Poppins text-[0.95rem]">CBSE,ICSE,UP,UK,BIHAR BOARD etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://media.tenor.com/aatjRHQTYmIAAAAj/ten-symbols.gif"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/Class10" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Class 10</h6>
              <p className="italic font-Poppins text-[0.95rem]">CBSE,ICSE,UP,UK,BIHAR BOARD etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vhsStT4yg4TCr8TW70sN6IIZ00YsiGO8jg&usqp=CAU"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/IITJEE" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">IIT-JEE</h6>
              <p className="italic font-Poppins text-[0.95rem]">Short notes, Hand book, Mock test etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://india.postsen.com/content/uploads/2023/03/07/e7a0c08612.jpg"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/NEET" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">NEET</h6>
              <p className="italic font-Poppins text-[0.95rem]">Short notes, Hand book, Mock test etc...</p>
              
            </div></a>
          </div>
          <div
            
            data-aos="fade-up"
            data-aos-delay={400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                 src="https://play-lh.googleusercontent.com/5AB1djgmuCGynvFe2NE7IFc7V3VPSmB_m4uhUE_5oFEky6MupqmylBXUWXNPz9hU4Q"
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <a href="/NonTech" >
            <div>
              <h6 className="font-Paprika font-bold text-[#253D57] leading-8">Non-Techanical Exams</h6>
              <p className="italic font-Poppins text-[0.95rem]">UPSC,SSC,BANKING,RAILWAY etc...</p>
              
            </div></a>
          </div>
       
      </div>
        </div>

        {/* sec col */}
        <div className="hidden lg:block md:h-[37rem]">
          <img
            src="home21.png"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
         
        </div>
      </div>
    </section></>
  );
};

export default Hero;