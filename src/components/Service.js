/* eslint-disable @next/next/no-img-element */
import { content } from "../data/Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="font-Inria text-5xl font-bold" data-aos="fade-down">
          Types of Notes
        </h2>
        <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika" data-aos="fade-down">
          What We Offer
        </h4>
        <br />
        <div className="flex gap-8 mx-4 justify-between flex-wrap group">
          
            <div
              data-aos="fade-up"
              data-aos-delay={600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-blue-100 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src="notes2.gif" alt="..." className="mx-auto" />
              <h6 className="my-3 font-Paprika font-bold text-[#253D57] leading-8">Hand Written Short Notes</h6>
              <p className="leading-7 font-Poppins text-[0.95rem]">Dont be a machine during exams - let PadhoGs handwritten notes bring a personal touch to your studying routine and make it feel like you are getting notes from your cool older sibling.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={ 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-blue-100 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src="gate2.gif" alt="..." className="mx-auto" />
              <h6 className="my-3 font-Paprika font-bold text-[#253D57] leading-8">Gate Notes</h6>
              <p className="leading-7 font-Poppins text-[0.95rem]">Dont let the GATE exam be a scary monster that keeps you up at night - with PadhoG unit-wise GATE notes in aasan bhasa mein, you all have the ultimate monster-slaying tool that all make you feel like a superhero!</p>
            </div>
            <div
             
              data-aos="fade-up"
              data-aos-delay={ 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-blue-100 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src="question1.gif" alt="..." className="mx-auto" />
              <h6 className="my-3 font-Paprika font-bold text-[#253D57] leading-8">Previous Year Questions Paper</h6>
              <p className="leading-7 font-Poppins text-[0.95rem]">Dont let exam day be a surprise party you are not prepared for - with PadhoG previous year question papers, you all feel like the ultimate party planner who knows exactly what to expect!</p>
            </div>
            <div
             
              data-aos="fade-up"
              data-aos-delay={ 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-blue-100 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src="book2.gif" alt="..." className="mx-auto" />
              <h6 className="my-3 font-Paprika font-bold text-[#253D57] leading-8">Books</h6>
              <p className="leading-7 font-Poppins text-[0.95rem]">Why settle for just one type of book when you can have a whole collection of them with PadhoG? Its like having a library at your fingertips, but without the cranky librarian!</p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;