import propTypes from 'prop-types'

function UserGreeting(props) {

    return (props.isLoggedIn ? 
    <h2 className="welcome-message">Welcome {props.username}</h2> : 
    <h2 className="login-prompt">Please Login To Continue</h2>);
}


UserGreeting.proptypes = {
    username: propTypes.string,

}

UserGreeting.defualtProps = {
    username: "Samantha",
}


export default UserGreeting