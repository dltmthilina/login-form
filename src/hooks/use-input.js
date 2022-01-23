import {useState} from 'react';

const useInput = (validateValue) =>{

    const [enteredValue, setEnteredValue] = useState("");
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && valueIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
    
      const inputBlurHandler=()=>{
        setValueIsTouched(true)
      }

      const reset=()=>{
          setEnteredValue('');
          setValueIsTouched('');
      };

    return{
        value:enteredValue,
        hasError,
        isValid:enteredValueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;