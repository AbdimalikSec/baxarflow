import React from "react";
import { why, whyme } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa6";
const WhychooseMe = () => {
  return (
    <div className="whyme">
      <h1>Why Me</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dicta!
      </span>
      <div className="me">
        <div className="mecol">
          <h3>Why choose me</h3>
          <p>
            I bring over 2 years of experience to the table, adept at crafting
            compelling visuals and interactive experiences. My expertise spans
            video editing, website creation, movie poster design, and UI/UX
            design. This diverse skillset allows me to approach your project
            from multiple angles, ensuring a cohesive and impactful final
            product.
          </p>
          <h4>Check out my work</h4>
          <Link to="https://github.com/saacidyuusuf">
          <FaGithub className="icons"/>
          </Link>
          <Link to="https://github.com/saacidyuusuf">
          <FaInstagram className="icons"/>
          </Link>
        </div>
        <motion.div
          className="mecol"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.14 }}
        >
          <img src={why} alt="why choose me" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhychooseMe;
