import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';


import './pagestyle.css';

export default function SignUp() {
    const {handleChange, userValues} = useForm();

    return (
        <div>
            <form className="form" id="form" >
                <div className="form__group">
                    <input type="text" placeholder="Username" className="form__input" name="username" id="username" value={userValues.username} onChange={handleChange} />
                    <small></small>
                </div>
            
                <div className="form__group">
                    <input type="email" placeholder="Email" className="form__input" name="email" id="email" value={userValues.email} onChange={handleChange}/>
                    <small></small>
                </div>

                <div className="form__group">
                    <input type="password" placeholder="Password" className="form__input" name="password" id="password" value={userValues.password} onChange={handleChange}/>
                    <small></small>
                </div>

                <div className="form__group">
                    <input type="password" placeholder="Re-enter Password" className="form__input" name="confirmedPassword" id="confirmedPassword" value={userValues.passwordConfirmed} onChange={handleChange}/>
                    <small></small>
                </div>

                <div className="su-li-link">
                    <Link to="/login" className="to-login">already have an account?</Link>
                </div>

                <button className="btn" type="submit">sign up</button>
            </form>
        </div>
    )
}
