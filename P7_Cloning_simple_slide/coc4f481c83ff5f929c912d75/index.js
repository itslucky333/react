/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from "react"
import ReactDOM from "react-dom"

const a=(
    <>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
    <li>Was first released in 2013 </li>
    <li>Was originally created by jordan walke </li>
    <li>Has well over 100k stars in Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile app</li>
    </ul>
    <p>here is the test text  </p>
    </>
)

ReactDOM.render(a,document.getElementById("root"))