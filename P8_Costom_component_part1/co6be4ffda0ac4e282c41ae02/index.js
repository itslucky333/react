/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */


import React from "react"
import ReactDOM from "react-dom"
function Page(){
    return(
    <div>
    <h1>we are learning react</h1>
    <ul>
    <li>it has many users </li>
    <li>it shows many apps </li>
    </ul>
</div>)}

ReactDOM.render(<Page />,document.getElementById("root"))