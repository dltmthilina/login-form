import { useState } from "react";
import './UserInput.css';
import useInput from '../hooks/use-input';

const UserInputs = () => {

  const {
    
      value:enteredFirstName,
      hasError:firstNameHasError,
      isValid:firstNameIsValid,
      valueChangeHandler:firstNameChangeHandler,
      inputBlurHandler:firstNameBlurHandler,
      reset:resetNameInput
  
  } = useInput(value => value.trim());


  const {
    
    value:enteredEmail,
    hasError:emailHasError,
    isValid:emailIsValid,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput

} = useInput(value => value.trim().includes("@"));

    
    /* const [enteredFirstName, setEnteredFirstName] = useState("");
    const [firstNameTouched, setFirstNameTouched] = useState(false); */

   /*  const [enteredEmail, setEnteredEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false); */
    
    /* const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
    const firstNameInvalid = !enteredFirstNameIsValid && firstNameTouched */

  /*   const enteredEmailIsValid = enteredEmail.trim()!== "" && enteredEmail.includes("@");
    const emailInvalid = !enteredEmailIsValid && emailTouched */


  let formIsValid= false;
  if(firstNameIsValid && emailIsValid){
    formIsValid = true;
  }


  /* const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  }; */

  /* const firstNameBlurHandler=()=>{
    setFirstNameTouched(true);
  }; */

  /* const emailChangeHandler=(event)=>{
    setEnteredEmail(event.target.value);
  }; */
  /* const emailInputBlurHandler=()=>{
    setEmailTouched(true);
  }; */

  
  const submitHandler =  (event) =>{
      event.preventDefault();
      

      if(firstNameHasError && emailHasError){
        return;
      };
      
      resetNameInput();
      resetEmailInput();
    
  };

  
  const nameInputClasses = firstNameHasError  ?  'new-userinput invalid': 'new-userinput'
  const emailInputClasses = emailHasError ?  'new-userinput invalid': 'new-userinput'

  return (
    <form className="form" onSubmit={submitHandler}>

        <h1>Login Form</h1>

            <div className={nameInputClasses}>
                <label htmlFor="firstname">FirstName</label>
                <input
                id="firstname"
                types="text"
                onChange={firstNameChangeHandler}
                value={enteredFirstName}
                onBlur={firstNameBlurHandler}
                />
            </div>
            {firstNameHasError && <p className="error-text">First Name must not be empty</p>}

            <div className={emailInputClasses}>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                types="text"
                onChange={emailChangeHandler}
                value={enteredEmail}
                onBlur={emailBlurHandler}
                />
            </div>
            {emailHasError && <p className="error-text">Email is not valid</p>}


         

            <div className="form-action">
                <button disabled={!formIsValid} type="submit">Submit</button>
            </div>

    </form>
  );
};

export default UserInputs;
