import {useState} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export function GoodDay(){
    const [newItem, setNewItem] = useState("");
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(newItem);

        navigate('/GTKY', {
          state: {newItem },
        });
    }

    return(
        <form>
        <div className="App">
          <header className="App-header">
            <h1 className="GD">Good Day {newItem}!</h1>
            <label htmlFor="name">What should I call you?</label>
            <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="name"></input>
          </header>
        </div>
        
        
        <button onClick = {handleSubmit}>Next</button>

        
      </form>
    )
}