import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/card-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cardCtx = useContext(CartContext);
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const { items } = cardCtx;

    const numberOfCartItem = items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;


    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button onClick={props.onClick} className={buttonClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartButton;