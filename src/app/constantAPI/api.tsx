import navFeaturedImg from '../../../public/img1.jpg';
import bloImg from '../../../public/blog.jpg'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const navApi = [
 
  {
    id: 0,
    title: null,
    link: '',
    Icon:<AiOutlineLinkedin/>,
    dropDown:null,
  },
  {
    id: 1,
    title:"why botonetics",
    link: '#WhyChooseUs',
    Icon:null,
    dropDown:null,
  },

  {
    id: 3,
    title: "Services",
    link: '#Services',
    Icon:null,
    dropDown: null
  },
  {
    id: 4,
    title: "Contact Us",
    link: '#ContactUs',
    Icon:null,
    dropDown: null
  },
  {
    id: 5,
    title: "More",
    link: '',
    Icon:null,
    dropDown: [
      {
        id:0,
        title:'Learn',
        link:'',

      },
      {
        id:1,
        title:'Work Samples',
        link:'',

      },
      {
        id:2,
        title:'Blogs',
        link:'#Blog',

      },
      
    ]
  },




];



export const servicesCard = [

  {
    id:0,
    title:"App developemnt",
    description:"tempor Duis eu consequat sunt occaecat ullamco non minim sunt velit eu id eu elit officia minim nisi nostrud.",
    image:navFeaturedImg,
    link:''
  },
  {
    id:1,
    title:"Full Stack Web-Developemnt",
    description:"tempor Duis eu consequat sunt occaecat ullamco non minim sunt velit eu id eu elit officia minim nisi nostrud.",
    image:navFeaturedImg,
    link:''
  },
  {
    id:2,
    title:"App developemnt",
    description:"tempor Duis eu consequat sunt occaecat ullamco non minim sunt velit eu id eu elit officia minim nisi nostrud.",
    image:navFeaturedImg,
    link:''
  },
  
  
]



export const whyChooseUsAPI = 

{
  heading:"WHY CHOOSE Botonetics",
  excript:"When you choose Botonetics to empower the technical side of your business, you'll get:",
  trustAndNetworthy:
  [
  {
    id:0,
    title:'Technological competitive advantage',
  },
  {
    id:1,
    title:'Technological competitive advantage',
  },
  {
    id:2,
    title:'Technological competitive advantage',
  },
  {
    id:3,
    title:'Technological competitive advantage',
  },
  

],
description:'Make customers notice you and be the differentiator from your competitors. As a dedicated software solutions company, we will solve problems with any potentially outdated software, inefficient processes, lack of digital presence, etc. Our mission is to help your business reach a new, exciting level!'

}



// whats next portion

export const ContactUsAPI = [

  {
    id:0,
    descripton:'We will send a short email notifying you that we successfully received your request and started working on it.'
  },
  {
    id:1,
    descripton:'Our solution advisor analyzes your requirements and will reach back to you within 3 business days.'
  },
  {
    id:2,
    descripton:'We may sign an optional mutual NDA within 1-2 business days to make sure you get the highest confidentiality level.'
  },
  {
    id:3,
    descripton:'Our business development manager presents you an initial project estimation, ballpark figures, or our project recommendations within approximately 3-5 days.'
  },
  
]




// blog components api


export const blogAPi ={
  heading:'Our latest News And Insights',
  blogWebsiteURL:'',
  blogdata:[
    {
      id:0,
      blogType:"Business",
      title:'Staff Augmentation Model vs.In-House Recuirment in It',
      description:'If you want to build a new product for your business, you are likely trying to choose between these two options – in-house hiring and…',
      blogImageURL:bloImg,
      blogLink:'/'
    },
    {
      id:1,
      blogType:"Business",
      title:'Staff Augmentation Model vs.In-House Recuirment in It',
      description:'If you want to build a new product for your business, you are likely trying to choose between these two options – in-house hiring and…',
      blogImageURL:bloImg,
      blogLink:'/'
    },
    {
      id:2,
      blogType:"Business",
      title:'Staff Augmentation Model vs.In-House Recuirment in It',
      description:'If you want to build a new product for your business, you are likely trying to choose between these two options – in-house hiring and…',
      blogImageURL:bloImg,
      blogLink:'/'
    },
    {
      id:3,
      blogType:"Business",
      title:'Staff Augmentation Model vs.In-House Recuirment in It',
      description:'If you want to build a new product for your business, you are likely trying to choose between these two options – in-house hiring and…',
      blogImageURL:bloImg,
      blogLink:'/'
    },
    

  ]
} 



// SocialLinks

export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: '',
    style: 'rounded-tr-md',
  },

  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: '',
  },
  {
    id: 3,
    child: (
      <>
        Mail
        <HiOutlineMail size={30} />
      </>
    ),
    href: '',
  },
  {
    id: 4,
    child: (
      <>
        Resume
        <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '',
    style: 'rounded-br-md',
    download: true,
  },
];