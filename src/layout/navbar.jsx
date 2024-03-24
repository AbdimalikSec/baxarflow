import Classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
import { logo3 } from "../assets/";

const Navbar = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const [ismenuopen, setMenuOpen] = useState(false);
  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={Classes.flex}>
        <img src={logo3} className={Classes.logo} />
        <div className={Classes.navbar}>
          <div className={Classes.link}>
            <nav>
              <ul className={Classes.navmenu}>
                <li>
                  <Link to="/" className={Classes.singlelink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={Classes.singlelink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={Classes.singlelink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={Classes.bar}>
            <FaBars onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </motion.div>

      {ismenuopen && (
        <div data-aos="slide-down" data-aos-delay="200" className={Classes.bac}>
          <div className={Classes.times}>
            <FaTimes className="close" onClick={() => setMenuOpen(false)} />
          </div>
          <nav>
            <ul className={Classes.mobile}>
              <li>
                <Link to="/" className={Classes.singlelink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={Classes.singlelink}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={Classes.singlelink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
