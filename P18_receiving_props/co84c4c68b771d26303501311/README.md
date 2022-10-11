1. What do props help us accomplish?
Props helps us to display different cards without hardcoding them 


2. How do you pass a prop into a component?
Its like passing a function


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
No 

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
function Navbar(Props) {

5. What data type is `props` when the component receives it?
its an object