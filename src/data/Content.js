// import images
import Hero_person from "../assests/Hero/person.png";

import figma from "../assests/Skills/figma.png";
import sketch from "../assests/Skills/sketch.png";
import ps from "../assests/Skills/ps.png";
import reactjs from "../assests/Skills/react.png";
import nodejs from "../assests/Skills/node.png";
import python from "../assests/Skills/python.png";

import services_logo1 from "../assests/Services/logo1.png";
import services_logo2 from "../assests/Services/logo2.png";
import services_logo3 from "../assests/Services/logo3.png";

import project1 from "../assests/Projects/img1.png";
import project2 from "../assests/Projects/img2.png";
import project3 from "../assests/Projects/img3.png";
import person_project from "../assests/Projects/person.png";

import avatar1 from "../assests/Testimonials/avatar1.png";
import avatar2 from "../assests/Testimonials/avatar2.png";
import avatar3 from "../assests/Testimonials/avatar3.png";
import avatar4 from "../assests/Testimonials/avatar4.png";

import Hireme_person from "../assests/Hireme/person.png";
import Hireme_person2 from "../assests/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "JOHN",
    LastName: "ALEX",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "800+",
        text: "Available Notes",
      },
      {
        count: "50+",
        text: "Available Projects",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Engineering",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Class 10",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Class 12",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I have learned so much from PadhoG's educational resources, and I am grateful to be a part of this community that values knowledge and accessibility for all.”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“As a volunteer for PadhoG, I have had the opportunity to contribute to a meaningful cause and help make a difference in people's lives.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“The free lessons provided by PadhoG have helped me expand my knowledge and skills in a way that would have been impossible otherwise. Thank you for making education accessible to everyone.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“PadhoG has given me a platform to share my expertise and connect with others who share my passion for education and learning.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};