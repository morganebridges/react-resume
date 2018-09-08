/**
 * Created by morgan on 9/2/18.
 */
import React from 'react';
import '../../App.css';
import './UserDiv.css';
class UserDiv extends React.Component {
    props;
    render () {
        return <div className="userDiv"><h3>UserName: {this.props.userName}</h3></div>;
    }
}
export default UserDiv;