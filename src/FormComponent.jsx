import React, { useState} from "react"

function FormComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQtyChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} ></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQtyChange} type="number"></input>
            <p>Quantity: {quantity} </p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Add comment here"></textarea>
            <p>Comment: {comment} </p>
        </div>
    );
}



export default FormComponent