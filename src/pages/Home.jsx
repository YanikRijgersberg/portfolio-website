import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/App.css";
import hiccup from "../assets/img/hiccup.png";
import OMimg2 from "../assets/img/OM-pfp-port.jpg";
import SkillCard from "../components/SkillCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import emailjs from "emailjs-com";
import undercon from "../assets/img/undercon2.png";
import project1 from "../assets/img/Screenshot 2025-11-13 125724.png";
import linkin from "../assets/img/linkedin-icon-logo-png-transparent.png";
import github from "../assets/img/github-icon-1-logo-black-and-white.png";
import instagram from "../assets/img/three-dimensional-instagram-icon-social-software-likes_494359_wh1200.png";

const Home = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8dk3z6",
        "template_wuo06vl",
        form.current,
        "PI4LjA-SfB-6uqREp"
      )
      .then((result) => {
        e.target.reset();
      });
  };

  return (
    <>
      <Navbar />
      <img id="Himg1" src={hiccup} alt="img" />
      <h1 className="Htext1">Hi, my name is</h1>
      <h1 className="Htext2">Yanik Nicai Rijgersberg</h1>
      <h3 className="Htext3">front-end developer</h3>
      <p className="Htext4">
        Ik ben een front-end dev die erg
        <br /> gepassioneerd is in design en code
      </p>

      {/* About Me Section */}
      <section className="OMcontainer">
        <div className="OMcontent">
          <div className="OMtext1">
            <h2 id="OMtitle1">Wie ben ik</h2>
            <p>
              Mijn naam is Yanik Rijgersberg, ik ben 17 jaar oud en studeer
              Software Development aan het Techniek College Rotterdam. Tijdens
              mijn opleiding leer ik werken met verschillende programmeertalen
              en frameworks, met de focus op front-end development. Ik heb
              ervaring met HTML, CSS, JavaScript, React, PHP, MySQL, Tailwind
              CSS, en ik begin ook al TypeScript te leren.
            </p>
            <p>
              Ik kan snel nieuwe dingen oppakken en leren, ben sociaal en goed
              in probleemoplossend denken. Deze eigenschappen helpen mij om
              efficiënt te werken, samen te bouwen aan projecten en creatieve
              oplossingen te vinden voor technische uitdagingen.
            </p>
          </div>

          <div className="OMprofile1">
            <img src={OMimg2} alt="Profielfoto" className="OMimg1" />
            <div className="OMfacts1">
              <h3 className="OMfactsTitle1">Snelle feiten</h3>
              <p>
                <strong>Locatie:</strong> Nederland
              </p>
              <p>
                <strong>Ervaring:</strong> 1 jaar
              </p>
              <p>
                <strong>Focus:</strong> front-end development
              </p>
              <p>
                <strong>Beschikbaarheid:</strong> Beschikbaar voor stage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skillsSection">
        <h2 className="skillsTitle">skills</h2>

        <div className="skillsScrollContainer">
          <SkillCard
            name="JavaScript"
            color="#f7df1e"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <SkillCard
            name="PHP"
            color="#6c63a6"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          />
          <SkillCard
            name="React"
            color="#2f9cb9ff"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <SkillCard
            name="HTML / CSS"
            color="#e44d26"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <SkillCard
            name="Tailwind CSS"
            color="#38bdf8"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <SkillCard
            name="TypeScript"
            color="#3178c6"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <SkillCard
            name="React Native"
            color="#2f9cb9ff"
            textColor="#000"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </div>

        <div className="extraSkillsBox">
          <h3 className="extraTitle">extra skills</h3>
          <div className="extraSkills">
            <span>Firebase</span>
            <span>Scrum</span>
            <span>MySQL</span>
            <span>Figma</span>
            <span>GitHub</span>
          </div>
        </div>
      </section>

      {/* Projecten */}
      <section id="projecten" className="Psection">
        <h2 id="PmainTitle">projecten</h2>

        <div className="Pgrid">
          <ProjectCard
            title="Random Outfit Generator"
            description="Een webproject gemaakt met HTML, CSS en JavaScript dat willekeurige outfits samenstelt uit vooraf ingestelde kledingstukken.
                          De gebruiker kan met één klik een nieuwe combinatie genereren, waardoor elke outfit uniek is.
                          De site heeft een mobielvriendelijk ontwerp, zodat hij ook op de telefoon soepel werkt — ideaal om snel outfitinspiratie op te doen."
            image={project1}
            github="https://github.com/YanikRijgersberg/radom-kleding"
            demo="https://yanikrijgersberg.github.io/radom-kleding"
          />

          <ProjectCard
            title="piem"
            description="piem"
            image={undercon}
            github="#"
            demo="#"
          />

          <ProjectCard
            title="peim"
            description="peim"
            image={undercon}
            github="#"
            demo="#"
          />

          <ProjectCard
            title="poem"
            description="poem"
            image={undercon}
            github="#"
            demo="#"
          />
        </div>
      </section>

      {/* Contact Section///////////////////////////////////////////////////////// */}
      <section id="contact" className="Csection">
        <h2 id="Ctitle">neem contact met mij op</h2>

        <div className="Ccontainer">
          <form ref={form} onSubmit={sendEmail} className="Cform">
            <h3 className="CformTitle">Stuur me een bericht</h3>

            <label>Naam</label>
            <input
              type="text"
              name="user_name"
              placeholder="Jouw naam"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="jouw.email@example.com"
              required
            />

            <label>Bericht</label>
            <textarea name="message" placeholder="Work with me..." required />

            <button type="submit" className="Cbtn">
              Verstuur bericht
            </button>

            {status && <p className="Cstatus">{status}</p>}
          </form>

          <div className="Cinfo">
            <div className="Ccard">
              <h4>Contact informatie</h4>
              <p>
                <strong>Email:</strong> Rijgje1@gmail.com
              </p>
              <p>
                <strong>Telefoon:</strong> +31 6 24499250
              </p>
              <p>
                <strong>Locatie:</strong> Nederland
              </p>
            </div>

            <div className="Ccard">
              <h4>Social Media</h4>
              <div className="Csocials">
                <a
                  href="https://github.com/YanikRijgersberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cicon"
                >
                  <img
                    className="Cimg"
                    src={github}
                    alt="github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/yaník-rijgersberg-437979398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cicon"
                >
                  <img
                    className="Cimg"
                    src={linkin}
                    alt="linkdin"
                  />
                </a>
                <a
                  href="https://www.instagram.com/rijgje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cicon"
                >
                  <img
                    className="Cimg"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>

            <div className="Ccard">
              <h4>Beschikbaarheid</h4>
              <p>
                <strong>Status:</strong>{" "}
                <span className="Cavailable">Beschikbaar</span>
              </p>
              <p>
                <strong>Reactietijd:</strong> Binnen 48 uur
              </p>
              <p>
                <strong>Tijdzone:</strong> CET (UTC+1)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
