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
                    <form className='form'>
                        <img className='logo-site' src={ImageL} />
                        <h1>Login</h1>
                        <div className='input-box'>
                            <span className='icon'><i className="bi bi-envelope"></i></span>
                            <input type="email" name='email' placeholder='Email' required />
                        </div>
                        <div className='input-box'>
                            <span className='icon'><i className="bi bi-key"></i></span>
                            <input type="password" name='password' placeholder='Password' required />
                        </div>
                        <div id='settings-create' className="d-flex justify-content-between align-items-center">
                            <div>
                                <input
                                    type='checkbox'
                                    name='rememberme'
                                    className='remember-me'
                                    checked={rememberMeChecked}
                                />
                                    <span className='remember-me-span' onClick={toggleRememberMe}>
                                        Remember me
                                    </span>
                            </div>
                            <Link to='/register'> - Don't have an account?</Link>
                        </div>
                        <button className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default Login;
