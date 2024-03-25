import React from "react";
import { whyme } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit illo
            veritatis ipsa quae ex, non neque. Cum vel consequatur dolores
            dolore saepe quo? Dolores quidem iure veritatis, rem tenetur tempora
            dolorem eum, maxime, at amet pariatur ipsum accusamus aut blanditiis
            deserunt. Optio ad asperiores voluptatem, fugiat quam totam
            accusantium eius.
          </p>
        </div>
        <motion.div
          className="mecol"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.14 }}
        >
          <img src={whyme} alt="why choose me" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhychooseMe;
