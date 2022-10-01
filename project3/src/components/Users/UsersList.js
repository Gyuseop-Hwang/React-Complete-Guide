import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UserList = props => {


  // const removeUserHandler = (evt) => {
  //   props.onRemoveUser(evt.target.key)
  // }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => {
          return <li key={user.id} /*onClick={removeUserHandler}*/>{user.name} ({user.age} years old)</li>
        })}
      </ul>
    </Card>
  )
}

export default UserList;