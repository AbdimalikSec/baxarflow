/* eslint-disable */
import { staggerContainer, textVariant } from "../utilist/motion";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const router = useNavigate()
  const handlenavigate = () =>{
    router('/contact')
  }
  return (
    <>
      <section className="textbox">
        <motion.div
          className="textcontent"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant(1.2)} className="herotitle">
            I bring your <br />  creative visions  to life
          </motion.h1>
          <motion.p variants={textVariant(1.3)}>
            video editing, website creation, UI/UX design, movie poster design
          </motion.p>
          <button onClick={handlenavigate}>Contact me</button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
