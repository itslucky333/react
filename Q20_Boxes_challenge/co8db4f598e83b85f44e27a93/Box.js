import React from "react"


export default function Box(props){
    console.log(props.on)
    const aa={
      
     backgroundColor: props.on ? "#222222" : "none"
    
    }
    return(
      <div className="box" style={aa}></div>
    )
}