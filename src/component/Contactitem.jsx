import React from "react";
import Navbar from "../layout/navbar";
import { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Contactitem = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [fillFieldsError, setFillFieldsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setFillFieldsError(true);
      setTimeout(() => {
        setFillFieldsError(false);
      }, 3000); 
      return;
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    console.log(formData);
    setSubmitted(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => setSubmitted(false), 2000); // Timeout after 2 seconds
      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
    }
  }, [submitted]);

  return (
    <>
      <Navbar />
      {submitted && !fillFieldsError && (
        <p className="success-message">
          Your message has been sent! We'll be in touch shortly.
        </p>
      )}

      {fillFieldsError && (
        <p className="error-message">Please fill in all the required fields.</p>
      )}

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
            <form
              action="https://formspree.io/f/xwkgrkop"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label htmlFor="">enter your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="enter your Name"
              />
              <label htmlFor="">enter your Email</label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                placeholder="enter your Email"
              />

              <textarea
                name="message"
                id=""
                value={formData.message}
                onChange={handleChange}
                placeholder="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="Btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactitem;