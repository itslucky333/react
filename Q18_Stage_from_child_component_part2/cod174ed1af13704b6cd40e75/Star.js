import React from "react"
import ReactDOM from "react-dom"

export default function Star(props){
    let starIcon = (props.isFilled) ? "star-filled.png" : "star-empty.png"
    return (
        
          <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                       onClick={props.handleClick}
                    />
    )
}