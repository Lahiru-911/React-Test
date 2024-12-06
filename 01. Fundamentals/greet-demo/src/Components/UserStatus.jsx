import React from 'react'

const UserStatus = (props) => {
  

  if (props.loggedIn && props.isAdmin) {
    return <div>Welcome admin</div>;
  } else {
    <div>Welcome user</div>;
  }
}

export default UserStatus

const loggedIn = {false}
const isAdmin = {}