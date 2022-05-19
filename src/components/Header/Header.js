import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <img src={logo} alt="" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/orderReview">Order Review</a>
                    <a href="/manageInventory">Manage Inventory</a>
                    <a href="/logIn">Log In</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;