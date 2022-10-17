import React from "react"
import ReactDOM from "react-dom"

export default function Header(){
    return(
        <div className="header">
        <img src="../images/troll-face.png" className="header--image" />
        <h2 className="header--title">Meme Generator </h2>
        <h4 className="header--project"> React-course project 3 </h4>
        </div>
    )
}