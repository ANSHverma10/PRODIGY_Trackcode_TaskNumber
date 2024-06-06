import cardpic from "./assets/win.jpg";
import "./card.css";

function Card() {
  return (
    <div className="card-whole">
      <div className="card">
        <img className="profilepic" src={cardpic} alt="Profile Picture" />
        <h2 className="card-title">Ansh Verma</h2>
        <p className="card-des">I am currently learning Reactjs</p>
      </div>
    </div>
    
  );
}
export default Card;
