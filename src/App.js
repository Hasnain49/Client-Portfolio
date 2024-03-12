import Navbar from "./components/Navber.js/Navbar";
import "./App.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
function App() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();
  return (
    <div className="">
      <Navbar />
      <div className="Section-one" id="home">
        <div >
        <div className="main-image-text">
          <div className="main-image">
            <img src="/Images/man.png" alt="" />
          </div>
          <div className="text-side">
            <p className="back-color-text">Angel Cisneros</p>
            <h1>
              Visionary Tech <span>Entrepreneur</span> and Angel Investor
            </h1>
            <p className="head-section-para">
              Meet Angel Cisneros, a pioneering tech entrepreneur, investor, and
              mentor with over two decades of experience leading successful tech
              startups to global acclaim and lucrative exits.
            </p>
            <div className="firstsec-buttons">
              {/* <button>Learn more</button> */}
              <a href="#contact-form">
                <button id="contact-now-outlined">Contact Now</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className="section-two max-width-1440">
        <div className="secondsec-text-side">
          <p className="sectwo-color-text">About Me</p>
          <h1>
            Welcome to the Official Website of <span>Angel Cisneros</span>
          </h1>
          <p className="sectwo-para">
            In the dynamic realms of technology and investment, few names
            resonate as profoundly as Angel Cisneros. With a storied career
            spanning over two decades, Angel has cemented his legacy as a
            visionary tech entrepreneur, discerning angel investor, and
            dedicated mentor. His journey is a testament to the power of
            innovation, leadership, and strategic foresight in the tech and
            telecom industries.
          </p>
          <div className="firstsec-buttons">
            <a href="#contact-form">
              <button>Contact Now</button>
            </a>
          </div>
        </div>
        <div className="secondsec-image-side">
          <img src="/Images/223.png" alt="" />
        </div>
      </div>

      <div className="section-3 max-width-1440">
        <div className="sec3-card">
          <img src="/images/startups.png" alt="" />
          <h2 className="section-3-card-head">
            Empowering Tech Startups and Entrepreneurs
          </h2>
          <p className="section-3-card-para">
            Angel's professional odyssey is marked by groundbreaking ventures
            and strategic investments that have redefined industry standards. As
            the mastermind behind Quiubas Mobile, Angel led the company to
            become a preeminent messaging aggregator in Mexico, securing its
            place as one of only four exclusive messaging vendors for Google
            globally. This achievement is a highlight in a career filled with
            pioneering initiatives and successful tech exits, including the
            notable acquisition of Quiubas Mobile by Twilio in 2020.
          </p>
        </div>
        <div className="sec3-card">
          <img src="/images/leadership.png" alt="" />
          <h2 className="section-3-card-head">
            A Legacy of Innovation and Leadership
          </h2>
          <p className="section-3-card-para">
            Before his monumental success with Quiubas Mobile, Angel founded
            C-Technologies in Guanajuato, Mexico. Under his leadership, the
            company evolved into a leading software enterprise, delivering
            bespoke, award-winning solutions. Among its many achievements,
            C-Technologies developed critical software for FEMA's post-hurricane
            cleanup efforts in the United States, showcasing Angel's commitment
            to leveraging technology for societal benefit.
          </p>
        </div>
        <div className="sec3-card">
          <img src="/images/startups.png" alt="" />
          <h2 className="section-3-card-head">
            Shaping the Future of Tech Investment
          </h2>
          <p className="section-3-card-para">
            Transitioning into angel investing in 2017, Angel has since played a
            pivotal role in nurturing the growth of nascent startups. His
            investments and mentorship reflect a deep-seated belief in the
            transformative potential of technology. As a limited partner in
            several eminent VC funds and a founding partner at CISA Ventures,
            Angel continues to fuel innovation and entrepreneurship, guiding
            visionary founders from ideation to market dominance.
          </p>
        </div>
      </div>

      <div className="section-4 max-width-1440">
        <div className="section-4-left">
          <img src="/images/section-4-img.png" alt="" />
        </div>
        <div className="section-4-right">
          <p className="back-color-text">Join The Journey</p>
          <h1 className="section-4-heading">
            Join the Journey of{" "}
            <span className="primary-color">Innovation</span>
          </h1>
          <p className="section-4-para">
            Angel Cisneros's journey is more than a narrative of personal
            achievement; it's a blueprint for aspiring entrepreneurs and
            investors. Through this website, Angel shares insights, lessons
            learned, and the philosophies that have guided his remarkable
            career. Whether you're a budding entrepreneur seeking guidance or an
            investor looking for the next big opportunity, you'll find
            inspiration and wisdom in Angel's story.
          </p>
          <div className="firstsec-buttons">
            <a href="#contact-form">
              <button>Contact Now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="section-5 max-width-1440">
        <div className="section-5-left">
          <p className="sectwo-color-text">About Me</p>
          <h1 className="section-5-left-heading">Connect with Angel</h1>
          <p className="section-5-left-para">
            Embark on a journey of discovery and innovation with Angel Cisneros.
            For collaboration opportunities, mentorship, or to learn more about
            Angel's ventures and vision for the future of tech.Contact: &nbsp;
            <span className="primary-color">pr@cisaventures.com</span>
          </p>
        </div>
        <div className="section-5-right" id="contact-form">
          <form
            ref={form}
            onSubmit={handleSubmit((values) => {
              setLoading(true)
              emailjs
                .sendForm(
                  "service_a4anz8h",
                  "template_umyup0q",
                  form.current,
                  "nW1prk37Oh-CBSew4"
                )
                .then(
                  (result) => {
                    setLoading(false);
                    setSuccess(true)
                    setError(false)
                  },
                  (error) => {
                    setError(true)
                    setSuccess(false)
                  }
                );
            })}
          >
            <h1 className="section-5-right-heading">Please submit details</h1>
            <input
              type="text"
              placeholder="Full Name / Company Name"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <input
              type="text"
              placeholder="Your Message"
              {...register("message", { required: true })}
            />

            <button type="submit">{loading ? "LOADING..." : "SUBMIT"}</button>
          </form>

          <p className="message-success">
            {success && "Email Sent successfully "}
          </p>
          <p className="message-error">{error && "Some error occured"}</p>
        </div>
      </div>

      <div className="footer max-width-1440">
        <div className="footer-top">
          <div className="logo-side">
            <h1>
            angelcisneros03
            </h1>
          </div>
          <div className="socialicon-side">
            <span className="footer-top-span">Privacy Policy</span>
            <span className="footer-top-span">Contact</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-bottom-span">
            ©2024 angel-cisneros. All Rights Reserved
          </span>
          <div className="socialicon-side">
            {/* <a
              href="https://www.linkedin.com/company/khosla-ventures/"
              target="_blank"
            >
              <img src="/icons/linkedIn.svg" alt="" />
            </a>
            <a href="https://twitter.com/khoslaventures" target="_blank">
              <img src="/icons/x.svg" alt="" />
            </a>

            <a
              href="https://www.youtube.com/user/khoslaventures"
              target="_blank"
            >
              <img src="/icons/youtube.svg" alt="" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
