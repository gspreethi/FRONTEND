import { useState,useEffect } from "react"
import { useHistory,Link, BrowserRouter, Switch,Route } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { useForm } from "react-hook-form";
import LoginCreator from './LoginCreator';
import {bindActionCreators} from "redux";



function UserLogin()
{
    let {register,handleSubmit,formState:{errors}}=useForm();
    const dispatch=useDispatch();
  const{uploadaadhar,uploadname,uploadpassword,uploadcontact,uploademail,validateInfo,getuserInfo,postuserInfo}=bindActionCreators(LoginCreator,dispatch)
    const storeObj=useSelector((store)=>store)
    const [id,setId]=useState(storeObj.state.id);
    const [pw,setPw]=useState(storeObj.state.pw);
    const [category,setCategory]=useState(" ");

    let history=useHistory();
    let obj={id:id,pw:pw}
    

    function OnFormSubmit(){
        let url=`http://localhost:8080/insert/${id}/${pw}`;
                fetch("http://localhost:8080/insert/"+id+"/"+pw,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(obj)
                })
        
                .then(res=>{
                    console.log("response",res)
                    if(res.status==200){
                        
                        alert("Login successful")
                        history.push("/UserPage")
                    }
                    else {
                        alert("invalid Credentials")
                    }
                })
                .then(data=>{
                dispatch({
                    type:"validate",
                    payload:url
                })
              })
           }
            
        
return(
    <div>
    <div className="container pt-5">
  <div className="row justify-content-sm-center pt-5">
    <div className="col-sm-6 shadow round pb-3">
        <h1>User Login</h1>
         <form onSubmit={handleSubmit(OnFormSubmit)}  style={{border:'1px solid blue',paddingLeft:"30px",width:"500px"}}>
        UserID:<input type="number" id="id"  className="form-control"  
                onChange={(e)=>setId(e.target.value)}
                value={id}
                required /><br/>
                {errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*required</p>}                          
        Password:<input type="password" id="pw" className="form-control"  
                onChange={(e)=>setPw(e.target.value)}
                value={pw}
                required/><br/>
                {errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*password is required</p>}    
                <button className="btn btn-warning" type="submit" >Login</button> 


                {/* <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/ForgotPassword" >Forgot Password</Link>
        </nav><br/> */}

        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/ForgotId" >Forgot Id</Link>
        </nav>
           </form> 
            </div>
            </div>
            </div>
    </div>
    
    
)


}

export default UserLogin;
