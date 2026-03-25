import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const ContactFooter = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:Pushkarzope19@gmail.com"
                target="_self"
                data-cursor="disable"
              >
                pushkarzope19@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BFA in Animation & VFX</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.instagram.com/p_u_s_h_k_a_r_z_o_p_e/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-zope-20502221b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/zopepushkar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pushkar Zope</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;

