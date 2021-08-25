import React,{useState} from 'react'
import { useHistory,Link, BrowserRouter, Switch,Route } from "react-router-dom";
import '../App.css';

export default function UserPage(props) {

    let trigger=props.setTrigger;
    const [buttonPopup,setButtonPopup]=useState(false);
    let history=useHistory();
    const styling={
        display:"none",
        backgroundColor:"red"
    }
    
    const logout=()=>{
        
        history.replace('/');
    }

    return (
        
        <div>
            <button className="btn btn-primary" onClick={()=>setButtonPopup(true)} style={{float:"right"}}>LogOut</button>
                   <div>
        {/* <nav className="nav-item "  style={{color:"white",fontSize:"35px"}}>
         <Link className="nav-link" to="/TailorSearch" style={{color:"white"}}><AiOutlineSearch />Search for Tailor</Link>
        </nav>
        <PaymentRequest />
        <nav className="nav-item "  style={{color:"white",fontSize:"35px"}}>
         <Link className="nav-link" to="/ViewByOrder" style={{color:"white"}}>ViewByOrder</Link>
        </nav> */}
        </div>
            
            
            
        
           
        </div>
    )
}