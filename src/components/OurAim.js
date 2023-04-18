/* eslint-disable @next/next/no-img-element */
import { content } from "../data/Content";

const OurAim = () => {
  const { OurAim } = content;

  return (
    <section className="bg-blue-100">
      <div className="md:container px-5 pt-14">
        <h2 className="font-Inria text-5xl font-bold" data-aos="fade-down">
          Our Aim !
        </h2>
       
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src="robot.gif"
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src="robot.gif"
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary mx-w-2xl
           p-1 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 font-serif  text-[1.20rem]">
            Well, well, well! Look who we have here - its PadhoG, the ultimate education 
            hub for all the students out there! Are you tired of boring, dull study materials? Fear not, because PadhoG is here to save the day!

We provide handwritten notes that are so clear, you all think the writer was sitting right beside you! Previous year paper questions that will make you feel like you are traveling back in time to ace those exams! And important books in PDF format that will make your life so much easier!

But wait, theres more! We are aiming to add mock tests of all exams, so you can test your knowledge and prepare like a boss! We are not just here to help you pass, we are here to help you excel!

So, what are you waiting for? Come join the PadhoG family and let us help you achieve your academic dreams!
              </p>
            <br />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;