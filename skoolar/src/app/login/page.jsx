"use client"
import { useEffect } from 'react';
import './style.css';

export default function Login() {
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            container.classList.add('active');
        };

        const handleLoginClick = () => {
            container.classList.remove('active');
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []);

    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Login as Parent</h1>

                        <span className='mb-5'>or use your email for registration</span>
                        <input type="text" placeholder="NISN" />
                        <input type="password" placeholder="Password" />
                        <button type="button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1 className='mb-6'>Login as School</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button type="button">Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="" id="login">
                                Sign In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="" id="register">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
