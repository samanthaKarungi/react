import React, {useState } from "react"

function Mycomponent() {
    const [name, setName] = useState("Guest"); // stateful variable and stater function
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Samantha");
    }

    const incrementAge =() => {
        setAge(age + 1);
    };

    const toggleEmployedStatus =() => {
        setIsEmployed(!isEmployed);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Name</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
    );
}

export default Mycomponent