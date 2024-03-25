import Navbar from "../layout/navbar";
//import { motion } from "framer-motion";
import Classes from "./About.module.css";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
import Testimonial from "./testimonial";
import Footer from "./Footer";

const Aboutitem = () => {
  return (
    <>
      <section data-aos="fade-in" className={Classes.myjourney}>
        <h1>About me</h1>
        <div className={Classes.containert}>
          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={Classes.journeyhaye}
          >
            <div className={Classes.coloraboutme}></div>
            <div className={Classes.gadalcols}>
              <h4>Journey</h4>
              <p>
                I'm a software engineer over 2 years of Experience i worke with
                agencies across the world to create high level projects
                websites,sofware Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quam, a delectus. <br />
                Doloremque eligendi, enim corporis sapiente rerum deserunt ut
                quos odio voluptates aspernatur, quo optio? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Iure sint dicta ullam
                excepturi eligendi rerum sunt ad ducimus fugit nostrum.
              </p>
              <a href="" className={Classes.resume}>
                Resume
              </a>
            </div>
           {/* inta img kaga dhig */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Aboutitem;
