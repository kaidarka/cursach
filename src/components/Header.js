import React, {useContext} from 'react';
import logo from '../image/logo.svg';
import {Button} from "antd";
import {Context} from "../index";
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";
import {NavLink} from "react-router-dom";
import {ADD_ROUTE, MAIN_ROUTE} from "../utils/consts";

const Header = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
        //TODO стилизовать меню и кнопки, добавить шрифты
        //TODO бордер у картинок, стиль у кнопок, можно ещё растянуть картинки, чтобы они по высоте
        <header className="header">
            <div className="topbar">
                <NavLink to={MAIN_ROUTE}>
                    <div className="topbar-tittle_text">
                        <img src={logo} alt="Abobuilding"/>
                    </div>
                </NavLink>
                <div className="topbar-button">
                    <div><a href="/">Главная</a></div>
                    <div><a href="/">Новости</a></div>
                    <div><a href="/">Контакты</a></div>
                    {!user ?
                        (<Button id="topbar-login"  type="primary" onClick={login}>Войти</Button>)
                    :(
                        <>
                            <NavLink to={ADD_ROUTE}>
                                <Button>Добавить объявление</Button>
                            </NavLink>
                            <Button onClick={() => auth.signOut()}>Выйти</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
};

export default Header;