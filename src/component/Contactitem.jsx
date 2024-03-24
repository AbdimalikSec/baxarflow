import React from "react";
import Navbar from "../layout/navbar";

import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Contactitem = () => {
  return (
    <>
      <Navbar />
      <div className="contacthaye">
        <h1>Contact</h1>
        <div className="contacts">
          <div className="contactcol color">
            <div className="iconhaye">
              <FaFacebook className="conIcons" />
              <FaTwitter className="conIcons" />
              <FaGithub className="conIcons" />
              <FaInstagram className="conIcons" />
            </div>
            <p>Check Out my Social Media</p>
          </div>
          <div className="contactcol">
            <form action="">
              <label htmlFor="">enter your name</label>
              <input type="text" placeholder="enter your Name" />
              <label htmlFor="">enter your Email</label>
              <input type="email" placeholder="enter your Email" />

              <textarea name="" id="" cols="30" rows="10">
                Message
              </textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactitem;
