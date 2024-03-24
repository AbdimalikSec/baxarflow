import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
   
      <section className="portfolio-footer">
        <div className="pro-container">
          <footer>
            <div className="footer-p">
              <div className="por-col">
                <h1>contact me</h1>
                <div className="por-icons">
                  <a href="">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com/saacidyuusuf/cabdimalik">
                    <FaGithub />
                  </a>
                  <a href="">
                    <FaTwitter/>
                  </a>
                  <a href="">
                    <FaInstagram/>
                  </a>
                </div>
              </div>
            </div>
            <div className="por-two-foter">
              <div className="por-two-col">
                <h2>Cabdimalik</h2>
              </div>
              <div className="por-two-col por-display">
                <h3>
                  Copyright &copy;<span className="date"></span> Cabdimalik
                </h3>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
};

export default Footer;
