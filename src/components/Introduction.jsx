import { useLocation } from 'react-router-dom';
import '../App.css';

export function Intro(){
    const location = useLocation();
    const newItem = location.state.newItem;
    console.log(newItem);

    return(
        <div className = "intro">
            <div className = "introdiv" >
            <h1 className='NM'>Nice to meet you, {newItem}!</h1>
            <h3 className='NM'>I'm Caitlin Lindsay, a 3rd year Computer Science student and an aspiring Software Engineer.</h3>
            <p>I have experience with HTML and CSS, but need to work on my JavaScript. However, I have created several projects:</p>
            <ul>
                <li>Websites:</li>
                <ul>
                    <li>Informational: Dog-breed</li>
                    <li>E-commerce: Product Landing Page, Plant Online Shop</li>
                    <li>Personal: Portfolio, Voting System, Grievance System</li>
                </ul>                
            </ul>
                <p>I look forward to learning more modern tools for development.</p>
            </div>
            <h1 className='center'>Have a Good Day!</h1>
        </div>
    )
}