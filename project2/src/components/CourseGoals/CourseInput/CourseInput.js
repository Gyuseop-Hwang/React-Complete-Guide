import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css'
// import './CourseInput.css';

// const FormControl = styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color : ${props => (props.invalid ? 'red' : 'black')}
// }

// & input {
//   display: block;
//   width: 100%;
//   // border: 1px solid #ccc;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background : ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// // &.invalid input {
// //   border-color: red;
// //   background: #ffd7d7;

// // }

// // &.invalid label {
// //   color: red;
// // }
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isInputValid, setIsInputValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };



  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}> */}
      {/* <FormControl className={!isInputValid && 'invalid'}> */}
      {/* <FormControl invalid={!isInputValid}> */}
      <div className={`${styles['form-control']} + ${!isInputValid && styles.invalid}`}>
        {/* <label style={{ color: !isInputValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ backgroundColor: !isInputValid ? '#FDCCC8' : 'white', borderColor: !isInputValid ? 'red' : '#ccc' }} type="text" onChange={goalInputChangeHandler} /> */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
        {/* </div> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
