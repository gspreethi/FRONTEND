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
        <h2 style={{textAlign:'center',color:'black'}}>WELCOME!</h2>
        <h3 style={{textAlign:'center',color:'skyblue'}}>Browse to select your gift</h3>
        <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px",marginTop:'10px',marginLeft:'1100px',marginRight:'50px'}}>LogOut</button>
    <nav className="nav-item "  style={{marginTop:'20px',textAlign:'center'}}>
     <Link className="nav-link" to="/BrowseCategory" style={{fontSize:"35px",color:"burlywood"}}> <b>Browse Categories</b></Link>
    </nav>
    {/* <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}>
     <Link className="nav-link" to="/AddItem" style={{fontSize:"35px",color:"black"}} ><b>Add Item</b></Link>
    </nav>
    {/* <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}> 
     <Link className="nav-link" to="/Delete" style={{fontSize:"35px",color:"black"}} ><b>Delete </b></Link>
    </nav> */}
    {/* <ViewOrders /> */}
    </div>
    )
}
