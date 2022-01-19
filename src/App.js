import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
    const [isModalActive, setIsModalAcitve] = useState(false);

    const showCartHandler = () => {
        setIsModalAcitve(true);
    };

    const closeCartHandler = () => {
        setIsModalAcitve(false);
    };

    return (
        <CartProvider>
            {isModalActive && <Cart onCloseCart={closeCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
