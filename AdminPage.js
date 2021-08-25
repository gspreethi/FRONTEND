import React from 'react'
import Pictures from './Carousal'
//import SortByAdmin from './SortByAdmin'
import {Link,useHistory} from "react-router-dom";

export default function AdminPage() {

    let history=useHistory();
    const logout=()=>{
        
        history.replace('/');
    }
    return (
<div style={{backgroundImage:`url(${admin})`,height:'600px'}}>   
            <h3 style={{textAlign:'center',color:'black'}}>WELCOME ADMIN</h3>
            <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px",marginTop:'10px',marginLeft:'1100px',marginRight:'50px'}}>LogOut</button>
        <nav className="nav-item "  style={{marginTop:'20px',textAlign:'center'}}>
         <Link className="nav-link" to="/AddCategory" style={{fontSize:"35px",color:"burlywood"}}> <b>Add Categories</b></Link>
        </nav>
        <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}>
         <Link className="nav-link" to="/AddItem" style={{fontSize:"35px",color:"black"}} ><b>Add Item</b></Link>
        </nav>
        <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}>
         <Link className="nav-link" to="/Delete" style={{fontSize:"35px",color:"black"}} ><b>Delete </b></Link>
        </nav>
        {/* <ViewOrders /> */}
        </div>



        
        
            )
   
}