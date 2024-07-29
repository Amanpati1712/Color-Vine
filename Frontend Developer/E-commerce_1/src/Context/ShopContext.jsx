import { createContext, useContext, useEffect, useState } from "react";
import all_product from '../Component/Assets/all_product'
// import { useNavigate } from "react-router-dom";
 export const ShopContext=createContext(null);

 const getDefaultcart=()=>{
     let cart={}
     for (let index = 0; index < 300+1; index++) {
         cart[index]=0;
        
     }
     return cart
 }

const ShopContextProvider=(props)=>{

// const [all_product,setAll_product]=useState([])
const [cartitem,setCartitem]=useState(getDefaultcart())
const [promo , setPromo]=useState("")
const [size,setSize]=useState('')
// const navigate = useNavigate()

// useEffect(()=>{
//    fetch('http://localhost:4000/allproduct')
//    .then((res)=>res.json()).then((data)=>setAll_product(data))
// },[])

useEffect(()=>{
   
   if(localStorage.getItem("auth-token")){
    console.log("aman Kamdar")
    fetch('http://localhost:4000/getcartitem',{
        method:"POST",
        headers:{
            Accept:"application/form-data",
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':"application/json"
        },
        body:"",
        
       }).then((res)=>res.json()).then((data)=>setCartitem(data))
   }
  
   
},[])


// console.log(cartitem)

const addTocart=(itemId)=>{
    setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(itemId)
    if(localStorage.getItem("auth-token")){
       
       fetch("http://localhost:4000/addtocart",{
         method:"POST",
         headers:{
            Accept:"application/form-data",
           'auth-token':`${localStorage.getItem('auth-token')}`,
           'Content-Type':"application/json",
            },
            body:JSON.stringify({'itemId':itemId})
        }).then((res)=>res.json()).then((data)=>console.log(data))
        
    }
    
    


}
const removeTocart=(itemId)=>{
    setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     if(localStorage.getItem("auth-token"))
        {
   
        fetch("http://localhost:4000/removecartitem",{
         method:"POST",
         headers:{
            Accept:"application/form-data",
           'auth-token':`${localStorage.getItem('auth-token')}`,
           'Content-Type':"application/json",
            },
            body:JSON.stringify({'itemId':itemId})
        }).then((res)=>res.json()).then((data)=>console.log(data.status))
        
    }

}

const getTotal=(()=>{
    if(promo=="Trendycart"){
        let Totalsum=0
    for(const item in cartitem ){
      
        if (cartitem[item]>0){
           const total=all_product.find((product)=>product.id===Number(item))
            Totalsum=(Totalsum+ cartitem[item]*total.new_price)-10;
        }
    }
    return Totalsum;
    }
    else{
        // alert("Put Right Promo")
        let Totalsum=0
    for(const item in cartitem ){
      
        if (cartitem[item]>0){
           const total=all_product.find((product)=>product.id===Number(item))
            Totalsum=Totalsum+ cartitem[item]*total.new_price
        }
    }
    return Totalsum;
    }
})



const cartTotal=()=>{
    let totalno=0
 for(const item in cartitem){

     if(cartitem[item]>0){
        totalno+=cartitem[item];
     }
 }
 return totalno;
}



const code=(data)=>{
    setPromo(data)
    console.log(data)
}





const contextvalue={size,setSize,code,setCartitem,all_product,cartitem,addTocart,removeTocart,getTotal,cartTotal}
return(
    <ShopContext.Provider value={contextvalue}>
        {props.children}
    </ShopContext.Provider>
)

}
export default ShopContextProvider;

