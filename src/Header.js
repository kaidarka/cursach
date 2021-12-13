import React from 'react';
import logo from './image/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="topbar">
                <div className="topbar-tittle_text">
                    <img src={logo} alt="Abobuilding"/>
                </div>
                <div className="topbar-button">
                    <div><a href="#">главная</a></div>
                    <div><a href="#">новости</a></div>
                    <div><a href="#">контакты</a></div>
                    <div><a href="#">войти</a></div>
                </div>
            </div>
            <div className="search-block">
                <div className="search">
                    <div className="search-room">1 комната</div>
                    <div className="search-price">цена</div>
                    <div className="search-subway">метро</div>
                </div>
            </div>
        </header>)
};

export default Header;