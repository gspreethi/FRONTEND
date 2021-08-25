const initialState={id:' ',firstname:' ',lastname:'',dob:'',gender:'',password:' ',contact:' ',email:' ',
                    CatId:' ',CatName:'',item:'',ItemId:'',
                    ItemName:' ',price:' ',qty:' ',Category:' ',getusers:[],post:[],validate:[]}
const loginreducer=(state=initialState,action)=>{
    switch(action.type){
        case "id":return{...state,id:action.payload}
        case "firstname":return{...state,firstname:action.payload}
        case "lastname":return{...state,lastname:action.payload}
        case "dob":return{...state,dob:action.payload}
        case "gender":return{...state,gender:action.payload}
         case "password":return{...state,password:action.payload}
        case "contact":return{...state,contact:action.payload}
        case "email":return{...state,email:action.payload}

        case "CatId":return{...state,CatId:action.payload}
        case "CatName":return{...state,CatName:action.payload}
        case "item":return{...state,item:action.payload}
        
        case "ItemId":return{...state,ItemId:action.payload}
        case "ItemName":return{...state,ItemName:action.payload}
        case "price":return{...state,price:action.payload}
        case "qty":return{...state,qty:action.payload}
        case "Category":return{...state,Category:action.payload}
        case "getusers":return{...state,getusers:action.payload}
        case "post":return{...state,post:action.payload}
        case "validate":return{...state,validate:action.payload}
        default:return state;
    }
}
export default loginreducer;