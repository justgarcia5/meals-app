import React, { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/card-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cardCtx = useContext(CartContext);

    const numberOfCartItem = cardCtx.items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartButton;