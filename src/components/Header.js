import React, {useContext} from 'react';
import logo from '../image/logo.svg';
import Filter from "./Filter";
import {Button} from "antd";
import {Context} from "../index";
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";
import {NavLink} from "react-router-dom";
import {ADD_ROUTE} from "../utils/consts";

const Header = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
        <header className="header">
            <div className="topbar">
                <div className="topbar-tittle_text">
                    <img src={logo} alt="Abobuilding"/>
                </div>
                <div className="topbar-button">
                    <div><a href="/">главная</a></div>
                    <div><a href="/">новости</a></div>
                    <div><a href="/">контакты</a></div>
                    {!user ?
                        (<Button  type="primary" onClick={login}>Войти</Button>)
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
            <Filter/>
        </header>
    )
};

export default Header;