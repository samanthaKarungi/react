function Food() {

    const foodOne = "orange";
    const foodTwo = "orange";


    return (
        <ul>
            <li>Apple</li>
            <li>{foodOne}</li>
            <li>{foodTwo.toLocaleUpperCase()}</li>
        </ul>
    );
}


export default Food