import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    const [lastName,setLastName]=React.useState("")
    function handleFirstChange(event) {
        setFirstName(event.target.value)
    }
    function handleLastChange(event){
        console.log(event.target.value)
        setLastName(event.target.value)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstChange}
            />
            <hr />
             <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastChange}
            />
        </form>
    )
}
