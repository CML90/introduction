import { GoodDay } from "../components/Day";
import '../App.css'

export function GreetingLayout(){
    return(
        <div className = "main">
            <div className="Sun">
            <GoodDay />
            </div>
        </div>
    );
}