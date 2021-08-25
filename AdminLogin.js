import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

export default function AdminLogin() {

    let history=useHistory();
    

    const [user,setUser]=useState({})
    const [val,setVal]=useState({
        "id":"",
        "password":""
    })
    
    const handleSubmit=(e)=>{
          e.preventDefault();
          
         console.log("data for validation",val);

         fetch("http://localhost:8080/get/123")
        .then((response) => response.json())
        .then((res) => {
          
          console.log(res);
          setUser(res);

         
          if((val.id != res.id) )
                {
                  alert("User ID not present");
               
                
               }

          else if( (val.password !== res.password)){
                 alert("Password not matching");
                }
          else if((val.id == res.id) && (val.password === res.password) )
          {
            alert("Login successfull");
            history.push('AdminPage')
          }
          else{
            alert("Login not successfull");
          }

            
  
          });
        }


       
    //}
    return (
        <div>
        <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-primary">Admin Login Form</h1>
         <form onSubmit={handleSubmit} >
              <div className="form-group">
                <label htmlFor="id" className="form-label">User ID</label>
                <input type="number" className="form-control" id="id" 
                name="id"onChange={(e)=>{setVal({...val,id:e.target.value})}}/>
                
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"  id="exampleInputPassword1" 
                aria-describedby="password1" name="password" 
                onChange={(e)=>{setVal({...val,password:e.target.value})}} />
               
              </div>

              
            
              <button type="submit" className="btn btn-primary"  
               
              >Submit</button>
               
              
            </form>
</div>
</div>
</div>
</div>
    )
}