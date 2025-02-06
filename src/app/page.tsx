import React from 'react';


import HeroSection from "./components/heroSection";
import FoodyProduct from "./components/foodyProduct";
import Chef from "./components/chef";
import Iteam from "./components/iteam"
//import { ClerkProvider, SignUp } from "@clerk/nextjs";
import WhyChoose from "./components/whyChoose";
import Crockery from "./components/crockery";
import FromMenu from "./components/from Menu";
import Navbar from './components/navbar';
//import SignIn from "./components/signIn";




export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FoodyProduct />
    
      <Iteam />
      <WhyChoose />
      <Crockery />
      <FromMenu />
      <Chef />
      
    </>
  );
}
