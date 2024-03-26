import { whyme, two, que, que2 } from "../assets";
import { motion } from "framer-motion";
import { useState } from "react";
import { navVariants, slideIn } from "../utilist/motion";

const Testimonial = () => {
  const [selectedPicture, setSelectedPicture] = useState(1);

  const handlePictureClick = (pictureIndex) => {
    setSelectedPicture(pictureIndex);
  };

  return (
    <>
      <h1 className="testiTitle">Testimonial</h1>
      <div className="picture">
        <motion.div className="picture-container">
          <motion.img
            variants={slideIn("left", "tween", 0.8, 0.5)}
            initial="hidden"
            whileInView="show"
            src={whyme}
            alt="Picture 1"
            className={selectedPicture === 0 ? "selected img1" : ""}
            onClick={() => handlePictureClick(0)}
          />
          <motion.img
            variants={slideIn("left", "tween", 0.12, 0.5)}
            initial="hidden"
            whileInView="show"
            src={two}
            alt="Picture 2"
            className={selectedPicture === 1 ? "selected img2" : ""}
            onClick={() => handlePictureClick(1)}
          />
          <motion.img
            variants={slideIn("left", "tween", 0.4, 0.5)}
            initial="hidden"
            whileInView="show"
            src={whyme}
            alt="Picture 3"
            className={selectedPicture === 2 ? "selected img3" : ""}
            onClick={() => handlePictureClick(2)}
          />
        </motion.div>
        <div className="content-container">
          {selectedPicture === 0 && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="imgscontent"
            >
              <img src={que} className="que" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cum harum voluptatum sint aut praesentium esse ipsa
                similique est odio?
              </p>
              <img src={que2} className="que" alt="" />
            </motion.div>
          )}
          {selectedPicture === 1 && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="imgscontent"
            >
              <img src={que} className="que" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cum harum voluptatum sint aut praesentium esse ipsa
                similique est odio?
              </p>
              <img src={que2} className="que" alt="" />
            </motion.div>
          )}
          {selectedPicture === 2 && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="imgscontent"
            >
              <img src={que} className="que" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cum harum voluptatum sint aut praesentium esse ipsa
                similique est odio?
              </p>
              <img src={que2} className="que" alt="" />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
