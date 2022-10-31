#### In this program we are learning about how to handle multiple input areas using a single function
In previous program we handle the form using two fields (first and last name),  with two handle function and two target place, but in case of multiple fields we can't duplicate that amount of data 
 const [firstName, setFirstName] = React.useState("")
 function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
      
      
So we can create an Object instead of handle function.  
 const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )  
    in above lines we made a object with elements called firstName and lastName and state to fix them  
    again,  
    we cant do  function handleChange(event) {
       setFormData(event.target.value)
    } because it will erase our object and set value to simple string  
      
       we have to give Name property so that we can know which input field had triggered our data.  
        function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }