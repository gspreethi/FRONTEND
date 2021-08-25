const uploadid=(id)=>{
    return(dispatch)=>{
        dispatch({
            type:"id",
            payload:id
        })
    }
}

const uploadfirstname=(firstname)=>{
    return(dispatch)=>{
        dispatch({
            type:"firstname",
            payload:firstname
        })
    }
}

const uploadlastname=(lastname)=>{
    return(dispatch)=>{
        dispatch({
            type:"lastname",
            payload:lastname
        })
    }
}

const uploaddob=(dob)=>{
    return(dispatch)=>{
        dispatch({
            type:"dob",
            payload:dob
        })
    }
}

const uploadgender=(gender)=>{
    return(dispatch)=>{
        dispatch({
            type:"gender",
            payload:gender
        })
    }
}


const uploadcontact=(contact)=>{
    return(dispatch)=>{
        dispatch({
            type:"contact",
            payload:contact
        })
    }
}

const uploademail=(email)=>{
    return(dispatch)=>{
        dispatch({
            type:"email",
            payload:email
        })
    }
}

const uploadpassword=(password)=>{
    return(dispatch)=>{
        dispatch({
            type:"passsword",
            payload:password
        })
    }
}


const uploadCatId=(catid)=>{
    return(dispatch)=>{
        dispatch({
            type:"catid",
            payload:catid
        })
    }
}

const uploadCatName=(catname)=>{
    return(dispatch)=>{
        dispatch({
            type:"catname",
            payload:catname
        })
    }
}

const uploadItem=(item)=>{
    return(dispatch)=>{
        dispatch({
            type:"item",
            payload:item
        })
    }
}

const uploadCategory=(category)=>{
    return(dispatch)=>{
        dispatch({
            type:"category",
            payload:category
        })
    }
}


const uploadItemId=(itemid)=>{
    return(dispatch)=>{
        dispatch({
            type:"itemid",
            payload:itemid
        })
    }
}

const uploadItemName=(itemname)=>{
    return(dispatch)=>{
        dispatch({
            type:"itemname",
            payload:itemname
        })
    }
}

const uploadprice=(price)=>{
    return(dispatch)=>{
        dispatch({
            type:"price",
            payload:price
        })
    }
}

const uploadqty=(qty)=>{
    return(dispatch)=>{
        dispatch({
            type:"qty",
            payload:qty
        })
    }
}
const getuserInfo=()=>{
    return(dispatch)=>{
        fetch("http://localhost:8080/get")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                payload:data

            })
        })
    }
}



// const postOrder=(obj)=>{
//     return(dispatch)=>{
//         fetch("http://localhost:8080/giveorder",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(obj)
//         })
//         .then(res=>{
//             console.log(res)
//             console.log("customer has placed the order ")
//         })
//         .then(data=>{
//             dispatch({
//                 type:"post",
//                 payload:obj
//             })
//         })
//     }
// }


// const uploadImageFile=(data)=>{
//     return(dispatch)=>{
//         dispatch({
//             type:"data",
//             payload:data
//         })
//     }
// }

// const postImage=(obj)=>{
//     return(dispatch)=>{
//         fetch("http://localhost:8080/addimage",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(obj)
//         })
//         .then(res=>{
//             console.log(res)
//             console.log("pattern is uploaded by tailor ")
//         })
//         .then(data=>{
//             dispatch({
//                 type:"post",
//                 payload:obj
//             })
//         })
//     }
// }

const postuserInfo=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8080/insert",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
            console.log("New user added in db")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }
}




export default {uploadid,uploadfirstname,uploadlastname,uploadgender,uploaddob,uploadcontact,postuserInfo,getuserInfo,
    uploademail,uploadpassword,uploadCatId,uploadCatName,uploadItem,uploadItemId,uploadItemName,uploadprice,uploadqty,uploadCategory};