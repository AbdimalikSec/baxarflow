
import Navbar from "../layout/navbar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./hero";
import { motion } from "framer-motion";
import Footer from "./Footer";
import WhychooseMe from "./WhychooseMe";
import Services from "./Services";
import Testimonial from "./testimonial";
import Aboutitem from './Aboutitem'

const WorkItem = () => {
  const [isopen, setopen] = useState(null);
  const handleSectionClick = (sectionName) => {
    setopen(isopen === sectionName ? null : sectionName);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      delay: 100, // Set the delay before animations start (in milliseconds)
    });
  }, []);

  return (
    <>
    <div className="all">
      <div className="gredient">
        <Navbar />
        <Hero />
      </div>
      <Services />

      <WhychooseMe />
    
      <Testimonial />
    </div>
      <Footer />
    </>
  );
};

export default WorkItem;

/* 

*/