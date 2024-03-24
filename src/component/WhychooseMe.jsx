import React from "react";
import { whyme } from "../assets/index";
import { motion } from "framer-motion";
import { slideIn } from "../utilist/motion";

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
          variants={slideIn("right", "tween", 0.8, 0.8)}
          initial="hidden"
          whileInView="show"
        >
          <img src={whyme} alt="why choose me" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhychooseMe;
