import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
    const [isModalActive, setIsModalAcitve] = useState(false);

    const showCartHandler = () => {
        setIsModalAcitve(true);
    };

    const closeCartHandler = () => {
        setIsModalAcitve(false);
    };

    return (
        <React.Fragment>
        {isModalActive && <Cart onCloseCartHandler={closeCartHandler} />}
        <Header onShowCartHandler={showCartHandler} />
        <main>
            <Meals />
        </main>
        </React.Fragment>
    );
}

export default App;
