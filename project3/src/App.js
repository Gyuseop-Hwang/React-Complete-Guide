import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (name, age) => {
    setUsersList(prevState => {
      return [...prevState, { name, age, id: Math.random().toString() }]
    })
  }

  // const removeUserHandler = id => {
  //   setUsersList(prevState => {
  //     return prevState.filter(user => user.id !== id)
  //   })
  // }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} /*onRemoveUser={removeUserHandler}*/></AddUser>
      <UsersList users={usersList} ></UsersList>
    </Fragment>
  );
}

export default App;
