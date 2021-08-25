import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
//import axios from 'axios'

export default function AddItem() {
const history=useHistory();
const [item,setItem]=useState({
"itemId":"", 
"itemName":"",
"price":"",
"qty":"",
});

const additem=(e)=>{
    e.preventDefault();
            fetch('http://localhost:8080/setItem',{
                method:'POST',
                body:JSON.stringify(item),
                headers:{'Content-Type':'application/json'},
       
                    })
    
               .then(response=>response.json())
               .then(res=>{
                   setItem(res)
                  
                   alert("Added Item");
                   history.push('AdminPage');
              })
              console.log(item);
     }
    


return (
<div>
<div className="container pt-5">
<div className="row justify-content-sm-center pt-5">
<div className="col-sm-6 shadow round pb-3">
<h1 className="text-center pt-3 text-primary">Add Item</h1>
<form onSubmit={additem}>

<div className="form-group">
<label htmlFor="itemId" className="form-label">Item ID</label>
<input type="number" className="form-control" id="itemId" 
name="itemId" onChange={(e)=>{setItem({...item,itemId:e.target.value})}}/>
</div>

<div className="form-group">
<label htmlFor="itemname" className="form-label">Item Name</label>
<input type="text" className="form-control" id="itemname" 
name="itemname" onChange={(e)=>{setItem({...item,itemName:e.target.value})}}/>
</div>

<div className="form-group">
<label htmlFor="price" className="form-label">Price(Rs/):</label>
<input type="number" id="price" className="form-control"
onChange={(e)=>{setItem({...item,price:e.target.value})}}/>
</div>

<div className="form-group">
<label htmlFor="qty" className="form-label">Quantity:</label>
<input type="number" id="qty" className="form-control"
onChange={(e)=>{setItem({...item,qty:e.target.value})}}/>
</div>
 
<button type="submit" className="btn btn-success">Add Item</button>
</form>
</div>
</div>
</div>
</div>
)
}