function Button() {

    const handleClick = (name) => console.log(`${name} stop clicking me`);
// when a button is wrapped in parantheses it is called immediately
// so to prevent that functionality, wrap it in a callback.

    return(
        <button className="button" onClick={() => handleClick("samaaa")}>Click Me!</button>
    );
};
export default Button;
