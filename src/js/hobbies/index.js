import React, { Component } from 'react';
import UserContainer from "./UserContainer";
import HobbyContainer from "./HobbyContainer";
import { connect } from 'react-redux';

class UserHobbies extends Component {
  render() {
    const {curUser} = this.props;
    return (
      <div className="user-hobby-container">
        <h2>Users' Hobby List</h2>
        <div className="user-hobby-wrapper">
          <div className="user-hobby-header">User Hobbies</div>
          <div className="user-hobby-body">
            <div className="hobby-left">
              <UserContainer />
            </div>
            <div className="hobby-right">
              {curUser.info && <HobbyContainer />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  curUser: state.User.curUser
});

export default connect(mapStateToProps)(UserHobbies);
