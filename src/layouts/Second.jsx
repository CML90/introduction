import { Intro  } from "../components/Introduction";
import '../App.css'
import food from "../Food.jpg"
import copper from "../Copper.jpg"
import art from "../Art.jpg"
import striker from "../Striker.jpg"

export function GTKY(){
    return(
    <div className="gtky">
        <aside>
            <h2>Interests</h2>
            <div className="imgCont">
                <img src={copper} alt="Copper"></img>
                <img src={art} alt="Art"></img>
                <img src={striker} alt="Striker"></img>
                <img src={food} alt="Food"></img>
            </div>
        </aside>
        <Intro />
        
    </div>
    );
}