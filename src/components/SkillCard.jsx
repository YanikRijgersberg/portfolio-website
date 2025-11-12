import "../css/Navbar.css";
const SkillCard = ({ img, name, color, textColor = "#fff" }) => {
  return (
    <div
      className="skillCard"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
       <img className="skilimg"  src={img} alt={name} /> 
  
      <h1>{name}</h1>
    </div>
  );
};

export default SkillCard;
