import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    function handleMouseOver(){
        console.log("on mouse over of image")
    }
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={handleMouseOver} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
