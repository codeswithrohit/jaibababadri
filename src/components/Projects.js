/* eslint-disable @next/next/no-img-element */
import { content } from "../data/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-white" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="font-Inria text-5xl font-bold" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika" data-aos="fade-down">
            We offer
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src="https://media.istockphoto.com/id/1271230327/vector/engineers-make-and-programming-robot-robotics-hardware-and-software-engineering-in.jpg?s=612x612&w=0&k=20&c=gKU_PiBV5fGgSrtpt1zub326tt6uePGCgEd5htVgU1Q="
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://blog.hyperiondev.com/wp-content/uploads/2021/01/Software_Engineering.gif"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Computer Science Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <a href="/electrical" >
                <img src="https://media.istockphoto.com/id/1211747471/photo/electrician-with-tool-belt-on-a-white-background-electricity.jpg?s=612x612&w=0&k=20&c=K5zKCjqsbkYB2mrLNY5DlJVj_GPUpk-yHvVHfRUnFdI="alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Electrical Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Explore...
                  </button>
                </div></a>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://media.istockphoto.com/id/637867114/photo/office-desk-with-hydraulic-fittings-helmet-and-project-design.jpg?s=612x612&w=0&k=20&c=SHLJjH7YSBvMI1E0UKcUFhr_SOYmqYPlrixpii3hmyU="alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Mechanical Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://media.istockphoto.com/id/875500044/photo/artificial-intelligence-concept.jpg?s=612x612&w=0&k=20&c=Q9rvqXVv6mdFe4BTBP9c-H891h9UDTPDBcS99yeoJvs="alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Electronics Communication Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://media.istockphoto.com/id/1185806215/photo/future-building-construction-engineering-project.jpg?s=612x612&w=0&k=20&c=LNlx1S1Ym47qB_HsFATdhCi4mHwZwEWh5mA3HNNdEys="alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Civil Engineering</h5>
                  <button className="font-bold text-gray self-end">
                    Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;