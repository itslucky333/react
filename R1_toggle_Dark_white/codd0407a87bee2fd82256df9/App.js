import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
      const [darkMode, setdarkMode]= React.useState(
        {
            darkMode:true
        }
    )
    function toggleDarkWhite(){
       setdarkMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkWhite} />
            <Main darkMode={darkMode}/>
        </div>
    )
}