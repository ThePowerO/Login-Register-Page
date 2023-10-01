import React, { useState } from 'react';
import './Signup.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ImageL from './assets/img/Site-logo.png';
import ImageBG from './assets/img/BF-BG.png';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    const [rememberMeChecked, setRememberMeChecked] = useState(false);

    const toggleRememberMe = () => {
        setRememberMeChecked(!rememberMeChecked);
    };

    return (
        <div>
            <img className='image-bf' src={ImageBG} />
                <div className='container'>
                <div className='container-box'>
