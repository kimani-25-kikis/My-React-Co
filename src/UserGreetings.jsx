
import PropTypes from 'prop-types';

function UserGreetings(props) {
    return (
      props.isLoggedin ? (
        <h2 className="welcome-message">Welcome {props.username}</h2>
      ) : (
        <h2 className="login-prompt">Please Check your Details</h2>
      )
    );
  }
  UserGreetings.propTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
  }
  UserGreetings.defaultProps={
    isLoggedIn: false,
    username: 'Guest',
  }
  
  export default UserGreetings;
  