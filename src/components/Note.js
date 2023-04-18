/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
// import content
import { createElement, useState } from "react";
import { content } from "../data/Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

const Note = () => {
    const { skills } = content;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectSkill, setSelectSkill] = useState(null);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <section className="min-h-fit bg-blue-100" id="skills">
        {/* modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex items-center gap-2">
            <img className="h-10" src={selectSkill?.logo} alt="..." />
            <h6>{selectSkill?.name}</h6>
          </div>
          <br />
          <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>
              Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
              beatae quos rem.
            </li>
          </ul>
          <br />
          <div className="flex justify-end">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </Modal>
  
        {/* content */}
        <div className="md:container px-5  py-14">
          <h2 className="font-mono text-5xl " data-aos="fade-down">
            Notes Kha Milega !
          </h2>
          <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika text-amber-300 " data-aos="fade-down">
            Notes Yha Milega !
          </h4>
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
                <a href="/Class10" >
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
                <a href="/Class12" >
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
      </section>
    );
  };

export default Note