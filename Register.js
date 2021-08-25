import {useSelector,useDispatch} from "react-redux";
import LoginCreator from './LoginCreator';
import {bindActionCreators} from "redux";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React from 'react';
import SecurityQuestionForm from "./SecurityQuestionForm";


function Register(props) {
  let {register,handleSubmit,formState:{errors}}=useForm();
  let trigger=props.setTrigger;
  const [buttonPopup,setButtonPopup]=useState(false);
  const storeObj=useSelector((store)=>store)
  const [id,setId]=useState(storeObj.state.id)
  const [firstname,setFirstname]=useState(storeObj.state.firstname)
  const [lastname,setLastname]=useState(storeObj.state.lastname)
  const [gender,setGender]=useState(storeObj.state.gender)
  const [usercategory,setUsercategory]=useState(storeObj.state.usercategory)
  const [dob,setDob]=useState(storeObj.state.dob)
  const [password,setPassword]=useState(storeObj.state.password)
  const [contact,setContact]=useState(storeObj.state.contact)
  const [email,setEmail]=useState(storeObj.state.email)
  const dispatch=useDispatch();
  const{uploadid,uploadfirstname,uploadlastname,uploaddob,uploadgender,uploadcontact,uploademail,uploadpassword,getuserInfo,postuserInfo}=bindActionCreators(LoginCreator,dispatch)
    let dobs=''+dob,ids=''+id,firstnames=''+firstname,lastnames=''+lastname,genders=''+gender,emails=''+email,passwords=''+password,
    contacts=''+contact;
  let obj={id:ids,firstname:firstnames,lastname:lastnames,dob:dobs,gender:genders
        ,password:passwords,contact:contacts,email:emails}
       
  let history=useHistory();
   const onFormSubmit=(userObj)=>{

    alert("Registered successfully");
    postuserInfo(userObj)
    console.log(userObj);
   
    
    history.push('/userLogin')
  }


  return(
    <div>
    <div className="container pt-5">
  <div className="row justify-content-sm-center pt-5">
    <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-primary"> Registration Form<br/></h1> 
    
     <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)} >
    
    <label > USer ID</label>: <input type="number" name="id" 
              className="form-control"
                //onChange={(e)=>setId(e.target.value)}
                //value={id}
                //required
                {...register('id',{required:true})}
                >
                  </input><br/>
     {errors.id?.type === 'required'  && <p style={{color:"red"}}>*User Id is required</p>}   

     <label htmlFor="fname">First Name</label>   : <input type="text"  id="fname"  className="form-control"  
                // onChange={(e)=>setFirstname(e.target.value)}
                // value={firstname}
                // required
                {...register('firstname',{required:true})}
                
                ></input><br/>
        {errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}

    <label htmlFor="lname"> Last Name</label>   : <input type="text"  id="lname"  className="form-control"  
                // onChange={(e)=>setLastname(e.target.value)}
                // value={lastname}
                // required
                {...register('lastname',{required:true})}
                
                ></input><br/>
            {errors.lastname?.type === "required" && <p className="text-danger" style={{color:'red'}}>*LastName is required</p>}  
   
                           <label htmlFor="gender">Gender</label><br/><rb/>
                 <div > 
                 <input
              type="radio"
              value="Male"
              {...register('gender',{required:true})}
             
            />Male
          
          
            <input
              type="radio"
              value="Female"
              {...register('gender',{required:true})}
              
            />Female
          
                 </div>
                 
                            {errors.gender?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Gender is required</p>}
  
    <label htmlFor="dob">Date Of Birth</label>   : <input type="date"  id="dob"  className="form-control"  
               
               {...register('dob',{required:true})}
                
                ></input><br/>
                {errors.dob?.type==='required' && <p className="text-danger" style={{color:'red'}}>*DOB is required</p>}
   
    <label htmlFor="pw">Password</label> : <input type="password"  id="pw"  className="form-control" 
               
               {...register('password',{required:true})}
                ></input><br/>
                {errors.password?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Password_ is required</p>}  
  
    <label htmlFor="contact">Contact Number :</label><input type="number"  id="contact"  className="form-control"
                {...register('contact',{required:true})}
                ></input><br/>
                 {errors.contact?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Contact_Number is required</p>}  
    
    <label htmlFor="email">Email ID</label>: <input  type="email" id="email" className="form-control"
               
               {...register('email',{required:true})}
                ></input><br/> 
                {errors.email?.type==='required' && <p className="text-danger" style={{color:'red'}}>*EmailAddress is required</p>}   
    
        {/* <SecurityQuestionForm /> */}

        <div style={{textAlign:'marginLeft'}} >
          <button type="button"  onClick={()=>setButtonPopup(true)} required >Password Recovery Questions</button>       
          <SecurityQuestionForm trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>

        <button type="submit" className="btn btn-primary">Register</button><br/>
    
    
    

   </form><br/>
</div>
</div>
</div>
    </div>
  )

}
export default Register;