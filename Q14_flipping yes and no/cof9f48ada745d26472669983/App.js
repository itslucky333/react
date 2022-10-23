import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
     const [isGoingOut, func] = React.useState(true)
    let answer = isGoingOut ? "Yes" : "No"
    function changeValue(){
        func(prevCount => !prevCount )
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={changeValue}>
                <h1>{answer}</h1>
            </div>
        </div>
    )
}
