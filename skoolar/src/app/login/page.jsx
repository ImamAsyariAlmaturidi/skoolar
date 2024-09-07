"use client"

import { useEffect } from 'react';
import './style.scss';
import { doLoginAsParent, doLoginAsSchool } from './action';

export default function Login() {

  useEffect(() => {
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const userForms = document.getElementById('user_options-forms');

    /**
     * Add event listener to the "Sign Up" button
     */
    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight');
      userForms.classList.add('bounceLeft');
    });

    /**
     * Add event listener to the "Login" button
     */
    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft');
      userForms.classList.add('bounceRight');
    });

    // Cleanup event listeners when component unmounts
    return () => {
      signupButton.removeEventListener('click', () => { });
      loginButton.removeEventListener('click', () => { });
    };
  }, []);

  return (
    <>
      <section className="user">
        <div className="user_options-container bg-[#006CFF]">
          <div className="user_options-text rounded-xl">
            <div className="user_options-unregistered">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                    stroke="#ffffff"
                    strokeWidth="1.344"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>



              <h2 className=" font-base text-2xl mt-3 font-medium">Login as School</h2>

              <button className="user_registered-login" id="signup-button">
                CHANGE
              </button>
            </div>
            <div className="user_options-registered">
              <svg
                height="40px"
                width="40px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffffff;} " }}
                  />{" "}
                  <g>
                    {" "}
                    <path
                      className="st0"
                      d="M180.242,96.435c26.635,0,48.212-21.596,48.212-48.212C228.454,21.578,206.877,0,180.242,0 c-26.644,0-48.222,21.578-48.222,48.223C132.02,74.839,153.598,96.435,180.242,96.435z"
                    />{" "}
                    <path
                      className="st0"
                      d="M222.019,119.275h-42.274h-42.273c-23.362,0-48.78,25.418-48.78,48.79v162.062 c0,11.681,9.464,21.155,21.145,21.155c5.75,0,0,0,14.764,0l8.04,138.212c0,12.43,10.086,22.507,22.515,22.507 c5.246,0,14.918,0,24.589,0c9.672,0,19.343,0,24.589,0c12.429,0,22.515-10.077,22.515-22.507l8.04-138.212 c14.764,0,9.014,0,14.764,0c11.681,0,21.145-9.474,21.145-21.155V168.065C270.799,144.693,245.382,119.275,222.019,119.275z"
                    />{" "}
                    <path
                      className="st0"
                      d="M360.619,224.327c18.441,0,33.377-14.944,33.377-33.368c0-18.45-14.936-33.386-33.377-33.386 c-18.442,0-33.377,14.936-33.377,33.386C327.242,209.383,342.177,224.327,360.619,224.327z"
                    />{" "}
                    <path
                      className="st0"
                      d="M389.543,240.136h-29.266H331.01c-16.17,0-33.764,17.595-33.764,33.783V386.1 c0,8.085,6.552,14.647,14.638,14.647c3.984,0,0,0,10.221,0l5.562,95.678c0,8.598,6.985,15.575,15.593,15.575 c3.624,0,10.321,0,17.018,0c6.697,0,13.393,0,17.017,0c8.608,0,15.594-6.977,15.594-15.575l5.561-95.678c10.221,0,6.237,0,10.221,0 c8.085,0,14.638-6.562,14.638-14.647V273.919C423.307,257.731,405.713,240.136,389.543,240.136z"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>

              <h2 className="font-base text-2xl mt-3 font-medium">Login as Parent</h2>
              <button className="user_registered-login" id="login-button">
                CHANGE
              </button>
            </div>
          </div>
          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <img className='h-10 scale-102' src="https://res.cloudinary.com/dqrmcom6v/image/upload/v1725532172/SKOOLAR_trw2yi.png" alt="" />
              <h2 className="forms_title pl-3">Parent <br /> account</h2>

              {/* Parent Form Login */}
              <form className="forms_form pl-3" action={doLoginAsParent}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="text"
                      name='NISN'
                      placeholder="NISN"
                      className="forms_field-input"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      name='password'
                      type="password"
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">

                  <input
                    type="submit"
                    defaultValue="Log In"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
              {/* Paren Login End */}


            </div>
            <div className="user_forms-signup">
              <img className='h-10 scale-102' src="https://res.cloudinary.com/dqrmcom6v/image/upload/v1725532172/SKOOLAR_trw2yi.png" alt="" />
              <h2 className="forms_title pl-3">School <br /> Account</h2>

              {/* School Login Form */}
              <form className="forms_form pl-3" action={doLoginAsSchool}>
                <fieldset className="forms_fieldset">

                  <div className="forms_field">
                    <input
                      type="text"
                      name='NIK'
                      placeholder="NIK"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      name='password'
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    defaultValue="Sign up"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
              {/* School Login Form End */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
