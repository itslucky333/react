document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const {firstName, lastName} = formElements
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
}


//this was the way of submitting form in php. in above program we can see that we are getting element by ID and we are adding event listener, we are calling function and it stores the values enter by the user. we submit that data.
//With react we create the state and state tracks the changes of each key strokes, it stores tje change values