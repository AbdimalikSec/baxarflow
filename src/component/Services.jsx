import React from "react";

import { poster, poster1, web, weblayout, edit, web2 } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
//vedio editing,ui/ux/ website creation/movie poster
//movie poster

//<a href="https://www.flaticon.com/free-icons/video-editing" title="video editing icons">Video editing icons created by Hilmy Abiyyu A. - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/design" title="design icons">Design icons created by Freepik - Flaticon</a>

const Services = () => {
  return (
    <div className="servicesHaye">
      <h1>Services</h1>
      <div className="service">
        <motion.div
          className="serviceCol"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={web2} alt="web creation" />
          <p>
            I offer website creation services, helping you establish a strong
            online presence. From crafting user-friendly layouts to optimizing
            website performance
          </p>
          <h3>Website creation</h3>
        </motion.div>
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.14 }}
          className="serviceCol"
        >
          <img src={weblayout} alt="web creation" />
          <p>
            My expertise lies in user research, information architecture, and
            interaction design, ensuring your users have a seamless and
            enjoyable experience.
          </p>
          <h3>UI/UX Design</h3>
        </motion.div>
        <motion.div
          className="serviceCol"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.16 }}
        >
          <img src={edit} alt="web creation" />
          <p>
            Leverage my movie poster design skills to create visually striking
            posters that grab attention and capture the essence of your movie
          </p>
          <h3>Video Editing</h3>
        </motion.div>
        <motion.div
          className="serviceCol"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <img src={poster1} alt="web creation" />
          <p>
            Leverage my movie poster design skills to create visually striking
            posters that grab attention and capture the essence of your movie
          </p>
          <h3>Movie Poster</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
/* 
Here are the descriptions rewritten in a more natural and easy-to-understand style, avoiding overly complex language:

**1. Video Editing:**

> **I can turn your shaky phone footage into a polished masterpiece!**  Need a commercial, explainer video, or a heart-warming family montage?  I'll add music, effects, and smooth transitions to make your video stand out.

**2. UI/UX Design:**

> **Websites and apps should be easy to use, right?** I design interfaces that are clear, beautiful, and make sense.  No more getting lost clicking around! I'll focus on what users need and make your website or app a joy to use.

**3. Website Creation:**

> **Want a website that looks amazing and actually works?**  I can build you one! From creating a user-friendly layout to making sure your website loads fast, I'll take care of everything so you can focus on your business.

**4. Movie Poster Design:**

> **Your movie deserves a poster that pops!** I'll create a visually stunning poster that captures the heart of your film and makes people want to watch it. Whether it's a hilarious comedy or a thrilling action flick, I'll design a poster that reflects your movie's unique style.


*/
