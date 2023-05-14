import React, { useState } from 'react';
import burgermenu from '../../images/menu-hamburger.jpg'


export default function BurgerMenu({onClick}) {
    return (
        <div onClick={onClick}>
            <img src={burgermenu} alt="burgerMenu" />
        </div>
    );
}