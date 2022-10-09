import React from "react"
import ReactDOM from "react-dom"
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */


const text=(
    <div>
    <h1>this is heading 1</h1>
    </div>
    
)
ReactDOM.render(text, document.getElementById("root"))
//document.getElementById("there").append(text)