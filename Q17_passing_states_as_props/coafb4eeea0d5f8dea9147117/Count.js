import React from "react"
import ReactDOM from "react-dom"


export default function Count(props){
  console.log("count component render ")
return(
  <div> 
  
 <div className="counter--count">   
                <h1>{props.number}</h1>
            </div> </div>
)           
}