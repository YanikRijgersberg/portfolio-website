import Navbar from "../components/Navbar";
import "../css/App.css";
import hiccup from "../assets/img/hiccup.png";
import OMimg from "../assets/img/home-pfp-port.jpg";
import OMimg2 from "../assets/img/OM-pfp-port.jpg";
import javascript from "../assets/img/img_javascript_480.jpg";
import SkillCard from "../components/SkillCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <img id="Himg1" src={hiccup} alt="img" />
      <h1 className="Htext1">Hi, my name is</h1>
      <h1 className="Htext2">Yanik Nicai Rijgersberg</h1>
      <h3 className="Htext3">front-end developer </h3>
      <p className="Htext4">
        Ik ben een front-end dev die erg
        <br /> gepassioneerd is in design en code
      </p>
      {/* // about me section////////////////////////////////////////////////////////// */}
      <section className="OMcontainer">
        <div className="OMcontent">
          <div className="OMtext1">
            <h2 id="OMtitle1">Wie ben ik</h2>
            <p>
              Mijn naam is Yanik Rijgersberg, ik ben 17 jaar oud en studeer{" "}
              <br />
              Software Development aan het Techniek College Rotterdam. Tijdens{" "}
              <br />
              mijn opleiding leer ik werken met verschillende programmeertalen{" "}
              <br />
              en frameworks, met de focus op front-end development. Ik heb{" "}
              <br />
              ervaring met HTML, CSS, JavaScript, React, PHP, MySQL, Tailwind{" "}
              <br />
              CSS, en ik begin ook al TypeScript te leren.
            </p>
            <p>
              Ik kan snel nieuwe <br />
              dingen oppakken en leren, ben sociaal en goed in probleemoplossend{" "}
              <br />
              denken. Deze eigenschappen helpen mij om efficiënt te werken,{" "}
              <br />
              samen te bouwen aan projecten en creatieve oplossingen te vinden{" "}
              <br />
              voor technische uitdagingen.
            </p>
          </div>

          <div className="OMprofile1">
            <img src={OMimg2} alt="Profielfoto" className="OMimg1" />
            <div className="OMfacts1">
              <h3 className="OMfactsTitle1">Snelle feiten</h3>
              <p className="OMfact1">
                <strong>Locatie:</strong> Nederland
              </p>
              <p className="OMfact2">
                <strong>Ervaring:</strong> 1 jaar
              </p>
              <p className="OMfact3">
                <strong>Focus:</strong> front-end development
              </p>
              <p className="OMfact4">
                <strong>Beschikbaarheid:</strong> Beschikbaar voor stage
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // skills section////////////////////////////////////////////////////////// */}
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
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <SkillCard
            name="Tailwind CSS"
            color="#38bdf8"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <SkillCard
            name="TypeScript"
            color="#3178c6"
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
      {/* projectPage////////////////////////////////////////////////// */}
      <section id="projecten" className="Psection">
        <h2 id="PmainTitle">projecten</h2>

        <div className="Pgrid">
          <ProjectCard
            title="PHP CRUD bread company"
            description="Voor de Bread Company maakte ik een CRUD-website met login en registratie, een adminpaneel en klantoverzicht. Beheerders kunnen producten en gebruikers beheren, terwijl klanten hun eigen gegevens kunnen aanpassen."
            image="../src/assets/img/project404img.jpg"
            github="#"
            demo="#"
          />

          <ProjectCard
            title="Portfolio website"
            description="Mijn persoonlijke portfolio gebouwd met React en Tailwind CSS. De site is volledig responsive en toont mijn projecten, skills en contactinformatie."
            image="../src/assets/img/project404img.jpg"
            github="#"
            demo="#"
          />

          <ProjectCard
            title="Weather App"
            description="Een simpele React-app die actuele weerinformatie toont via de OpenWeather API, met moderne UI en lokale opslag van favoriete steden."
            image="../src/assets/img/project404img.jpg"
            github="#"
            demo="#"
          />

          <ProjectCard
            title="Kleding Organizer App"
            description="Een mobiele app in React Native waarmee gebruikers hun kleding kunnen organiseren, tags toevoegen en outfits genereren — alles lokaal opgeslagen."
            image="../src/assets/img/project404img.jpg"
            github="#"
            demo="#"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
