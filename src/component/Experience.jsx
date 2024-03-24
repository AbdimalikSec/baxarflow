import classes from "./work.module.css";
import { motion } from "framer-motion";
import { navVariants, slideIn, textVariant } from "../utilist/motion";

const Experience = () => {
  return (
    <section className={classes.work}>
      <div className={classes.worktitle}>
        <motion.h1
        variants={textVariant(1.1)}
        >Experience</motion.h1>
      </div>
      <div className={classes.works}>
        <motion.div
          variants={slideIn("right", "tween", 0.4, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${classes.workone}
          ${classes.one}`}
        >
          <div className={classes.row}>
            <h2>Web develoment</h2>
            <span>Backend</span>
          </div>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${classes.workone} ${classes.two}`}
        >
          <div className={classes.row}>
            <h2>UI/UX Designer</h2>
            <span>Visual designer</span>
          </div>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={slideIn('left', 'tween', 0.5, 0.6)}
          initial="hidden"
          whileInView="show"
          className={`${classes.workone} ${classes.three}`}
        >
          <div className={classes.row}>
            <h2>Web developer</h2>
            <span>work</span>
          </div>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam adipisci ullam magnam esse magni.
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={classes.workbottom}>
        <div className={classes.recentwork}>
          <motion.h5
          initial='hidden'
         /*  whileHover={hero1} */
          >BaxarFlow</motion.h5>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
