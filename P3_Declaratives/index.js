// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/



// const h1=document.createElement("h1")
// h1.textContent="this is the imperative way"
// h1.ClassName="header"
// document.getElementById("root").append(h1)

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const bar=( <nav>
    <h1>this is the title of website </h1>
    <ul>
    <li>pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
)
ReactDOM.render(bar, document.getElementById("root"))