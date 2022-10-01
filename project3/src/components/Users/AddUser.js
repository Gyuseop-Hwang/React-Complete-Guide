import React, { useState, useRef } from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('')
  const [isError, setIsError] = useState()
  // const [message, setMessage] = useState('')

  const addUserHandler = (evt) => {
    evt.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      // setIsError(true)
      // setMessage('이름과 나이는 공백이여서는 안 됩니다.')
      setIsError({
        title: '올바르지 않은 입력입니다.',
        message: '이름과 나이는 공백이여서는 안 됩니다.'
      })
      return;
    }
    if (+enteredUserAge < 1) {
      // setIsError(true)
      // setMessage("나이는 0보다 큰 '숫자'이어야 합니다.")
      setIsError({
        title: '나이가 올바르지 않습니다.',
        message: "나이는 0보다 큰 '숫자'이어야 합니다."
      })
      return;
    }
    // props.onAddUser({ name: enteredUserName, age: enteredAge, id: Math.random().toString() })
    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // console.log(enteredUserName, enteredAge);
    // setEnteredUserName('');
    // setEnteredAge('');
  }

  // const userNameChangeHandler = evt => {
  //   setEnteredUserName(evt.target.value)
  // }

  // const ageChangeHandler = evt => {
  //   setEnteredAge(evt.target.value)
  // }

  const errorHandler = () => {
    setIsError();
  }

  return (
    <Wrapper>
      {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} action="">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" /*onChange={userNameChangeHandler} value={enteredUserName}*/ ref={nameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input type="number" id="age" /*onChange={ageChangeHandler} value={enteredAge}*/ ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
  // return (
  //   [
  //     isError && <ErrorModal key="error-modal" title={isError.title} message={isError.message} onConfirm={errorHandler}></ErrorModal>,
  //     <Card key="card" className={classes.input}>
  //       <form onSubmit={addUserHandler} action="">
  //         <label htmlFor="username">Username</label>
  //         <input type="text" id="username" onChange={userNameChangeHandler} value={enteredUserName} />
  //         <label htmlFor="age">Age (years)</label>
  //         <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
  //         <Button type="submit">Add User</Button>
  //       </form>
  //     </Card>
  //   ]
  // )
}



export default AddUser;