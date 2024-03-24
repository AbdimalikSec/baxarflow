import Classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileNavbar from "./mobilenav";

const Navbar = () => {
  const [ismenuopen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={Classes.flex}>
        <a href="#" className={Classes.logo}>
          Portfolio
        </a>
        <div className={Classes.navbar}>
          <div className={Classes.link}>
            <nav>
              <ul className={Classes.navmenu}>
                <li>
                  <Link to="/" className={Classes.singlelink}>
                    work
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
      </div>

    {ismenuopen && (
        <div className={Classes.bac}>
        <div className={Classes.times}>
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>
        <nav>
          <ul className={Classes.mobile}>
            <li>
              <Link to="/" className={Classes.singlelink}>
                work
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
===============================================
fade: Fades the element in or out.
fade-up: Fades the element in while moving it upward.
fade-down: Fades the element in while moving it downward.
fade-left: Fades the element in while moving it to the left.
fade-right: Fades the element in while moving it to the right.
zoom-in: Zooms in the element.
zoom-out: Zooms out the element.
slide-up: Slides the element upward.
slide-down: Slides the element downward.
slide-left: Slides the element to the left.
slide-right: Slides the element to the right.
flip-left: Flips the element to the left.
flip-right: Flips the element to the right.
rotate: Rotates the element.
=====================================
import {useRef, useState } from "react";

/* const [width, setwidth] = useState(0)

  const car = useRef();

  useEffect(() =>  {
    console.log(car.current.scrollWidth, car.current.offsetWidth)
    setwidth(car.current.scrollWidth - car.current.offsetWidth);
  },[]) */


   <section className={Classes.testimonial}>
        <motion.div ref={car} className={Classes.car} whileTap={{cursor:'grabbing'}}>
          <motion.div drag='x' dragConstraints={{right:0, left: -width}} className={Classes.inercar}>
            {images.map((image ,index) => {
              return ( 
              <motion.div key={index} className={Classes.item}>
                <img src={image} alt="" />
              </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>



========================================

/* eslint-disable */

/* eslint-disable */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { threejs1, threejs2, threejs3 } from "../assets";
const MovingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls, clock, o_mes;

    const texture = {
      matcap: threejs1,
      skin: threejs2,
      env: threejs3,
    };

    const config = {
      scene: {
        speed: 0.2,
      },
      object: {
        speed: 0,
      },
    };

    const init = () => {
      const canvas = canvasRef.current;

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, -1.7, 5);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.rotateSpeed = 0.9;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.02;

      clock = new THREE.Clock();

      scene.background = new THREE.Color(0x000a0b);

      const light = new THREE.HemisphereLight(0xffffff, 0xaaaacc, 1);
      scene.add(light);

      const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
      const o_mat = new THREE.MeshMatcapMaterial({
        color: 0xffffff,
        matcap: new THREE.TextureLoader().load(texture.matcap),
        skin: new THREE.TextureLoader().load(texture.skin),
        map: new THREE.TextureLoader().load(texture.env),
      });

      o_mes = new THREE.Mesh(o_geo, o_mat);

      scene.add(o_mes);

      animate();
      window.addEventListener("resize", handleResize);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      scene.rotation.y = elapsedTime * config.scene.speed;
      o_mes.rotation.y = -elapsedTime * config.object.speed;
      o_mes.rotation.z = elapsedTime * config.object.speed;
      o_mes.rotation.x = elapsedTime * config.object.speed;
      o_mes.position.y = Math.sin(elapsedTime * config.object.speed) * 0.2;

      controls.update();

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MovingBackground;
===========================================
import { projectimg1, projectimg2, saacid } from "../assets";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonial = () => {
  const [show, setShow] = useState('saacid'); // Initialize the state with null

  const handleSectionClick = (sectionName) => {
    setShow(sectionName);
  };

  return (
    <section className="testi">
      <h1 className="title">Clients</h1>
      <div className="haye">
        <div className="imgs">
          <motion.div className={`imgs1 ${show === 'projectimg1' ? 'active' : ''}`} onClick={() => handleSectionClick('projectimg1')}>
            <img src={projectimg1} alt="" />
          </motion.div>
          <motion.div className={`imgs2 ${show === 'projectimg2' ? 'active' : ''}`} onClick={() => handleSectionClick('projectimg2')}>
            <img src={projectimg2} alt="" />
          </motion.div>
          <motion.div className={`imgs3 ${show === 'saacid' ? 'active' : ''}`} onClick={() => handleSectionClick('saacid')}>
            <img src={saacid} alt="" />
          </motion.div>
        </div>

        {show === 'projectimg1' && (
          <div className="imgscontent">
            <h1>Project Image 1</h1>
            <span>CEO</span>
            <p>Content for Project Image 1</p>
          </div>
        )}
        {show === 'projectimg2' && (
          <div className="imgscontent">
            <h1>Project Image 2</h1>
            <span>CEO</span>
            <p>Content for Project Image 2</p>
          </div>
        )}
        {show === 'saacid' && (
          <div className="imgscontent">
            <h1>Saacid</h1>
            <span>CEO</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              blanditiis <br /> tempore Natus ab vero asperiores sunt velit!
              Aliquam, repudiandae reiciendis. Natus ab vero asperiores sunt
              velit! Aliquam, repudiandae reiciendis. Natus ab vero asperiores
              sunt velit! Aliquam, repudiandae reiciendis.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;