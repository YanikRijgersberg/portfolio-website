import Navbar from "../components/Navbar";
import "../css/App.css";
import hiccup from "../assets/img/hiccup.png";
import OMimg from "../assets/img/home-pfp-port.jpg";
import OMimg2 from "../assets/img/OM-pfp-port.jpg";

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
      {/* //////overmijn/////////////////////////////////////////////////////// */}
      <section class="OMcontainer">
        <div class="OMcontent">
          <div class="OMtext1">
            <h2 id="OMtitle1">Wie ben ik</h2>
            <p class="OMpara1">
              Mijn naam is Yanik Rijgersberg, ik ben 17 jaar oud en studeer <br />
              Software Development aan het Techniek College Rotterdam. Tijdens <br />
              mijn opleiding leer ik werken met verschillende programmeertalen <br />
              en frameworks, met de focus op front-end development. Ik heb <br />
              ervaring met HTML, CSS, JavaScript, React, PHP, MySQL, Tailwind <br />
              CSS, en ik begin ook al TypeScript te leren.
            </p>
            <p class="OMpara1">
              Ik kan snel nieuwe <br />
              dingen oppakken en leren, ben sociaal en goed in probleemoplossend <br />
              denken. Deze eigenschappen helpen mij om efficiënt te werken, <br />
              samen te bouwen aan projecten en creatieve oplossingen te vinden <br />
              voor technische uitdagingen.
            </p>
          </div>

          <div class="OMprofile1">
            <img src={OMimg2} alt="Profielfoto" class="OMimg1" />
            <div class="OMfacts1">
              <h3 class="OMfactsTitle1">Snelle feiten</h3>
              <p class="OMfact1">
                <strong>Locatie:</strong> Nederland
              </p>
              <p class="OMfact2">
                <strong>Ervaring:</strong> 1 jaar
              </p>
              <p class="OMfact3">
                <strong>Focus:</strong> front-end development
              </p>
              <p class="OMfact4">
                <strong>Beschikbaarheid:</strong> Beschikbaar voor stage
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
