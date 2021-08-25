import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css';

export default function SecurityQuestionForm(props) {
    let setTrigger=props.setTrigger;

    let history=useHistory();
    const[security,setSecurity]=useState({
        "userId":"",
        "securityanswer1":"",
        "securityanswer2":"",
        "securityanswer3":"",
        "contact":""

    })

    const handleSubmit=(e)=>{
        e.preventDefault();

        fetch('http://localhost:8080/insertSecurityQuestions',{
            method:'POST',
            body:JSON.stringify(security),
            headers:{'Content-Type':'application/json'},
        
        })

        .then(res=>res.json())
        .then(json=>setSecurity(json.security))

        alert("Answers submitted Successfully");
        history.push('Register');

       
    }

    
    return (props.trigger)?(
        <div className="popupsec">
            <div className="popupsec-inner">
        <form onSubmit={handleSubmit}
        
         style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'-moz-initial',color:'whitesmoke',alignItems:"center"}} >

<button className="close-btn" onClick={()=>setTrigger(false)} style={{color:'white',borderRadius:'100px',backgroundColor:'black'}}>X</button>
                {props.children}
                <h2 style={{color:'black'}}>Password Recovery Questions</h2>
         <div className="form-group">
          <label htmlFor="userId" className="form-label">user Id</label>
          <input type="number" className="form-control"  id="userId" 
          aria-describedby="userId" name="userId" 
          onChange={(e)=>{setSecurity({...security,userId:e.target.value})}} required />
          
        </div>

        {/* question 1     */}
        <div className="form-group">
          <label htmlFor="question1" className="form-label">Question 1</label>
          
            <p id="question1">What is your first School Name?</p>
           
         </div> 


         <div className="form-group">
                    <input type="text" className="form-control"  id="answer1" 
          aria-describedby="answer1" name="answer1" 
          onChange={(e)=>{setSecurity({...security,securityanswer1:e.target.value})}} required />
                 </div>
         {/* question 2     */}
         <div className="form-group">
          <label htmlFor="question2" className="form-label">Question 2</label>
         
            <p id="question2">What is your favourite pet animal?</p>
            
         </div> 

         <div className="form-group">
                    <input type="text" className="form-control"  id="answer2" 
          aria-describedby="answer2" name="answer2" 
          onChange={(e)=>{setSecurity({...security,securityanswer2:e.target.value})}} required />
                 </div>

         {/* question 3     */}
         <div className="form-group">
          <label htmlFor="question3" className="form-label">Question 3</label>
         
            <p id="question3">What is your Favourite Holiday Destination?</p>
        
         </div> 
          
        <div className="form-group">
                   <input type="text" className="form-control"  id="answer3" 
          aria-describedby="answer3" name="answer3" 
          onChange={(e)=>{setSecurity({...security,securityanswer3:e.target.value})}} required />
          
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">contact</label>
          <input type="number" className="form-control"  id="contact" 
          aria-describedby="contact" name="contact" 
          onChange={(e)=>{setSecurity({...security,contact:e.target.value})}} required />
          
        </div>

               
      
        <button type="submit" className="btn btn-success"  >Submit</button>
         
        
      </form>
      </div>
      </div>
    ):'';
}