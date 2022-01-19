import React, { useRef, useState } from 'react';
import Input from "../../UI/Input";

import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [isAmountValid, setIsAmountValid] = useState(true);

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setIsAmountValid(false);
        }
        props.addToCart(enteredAmountNum);

        amountInputRef.current.value = '1';
    };

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <Input
                label='Amount'
                ref={amountInputRef}
                input={{
                    id: `amount_${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!isAmountValid && <p>Enter valid number (1-5)</p>}
        </form>
    )
};

export default MealItemForm;