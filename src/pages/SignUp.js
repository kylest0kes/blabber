import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateUserInfo from '../scripts/validateInfo';


import './pagestyle.css';

export default function SignUp() {
    const {handleChange, userValues, handleSubmit, errors} = useForm(validateUserInfo);

    return (
        <div>
            <form className="form" id="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input type="text" placeholder="Username" className="form__input" name="username" id="username" value={userValues.username} onChange={handleChange} />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
            
                <div className="form__group">
                    <input type="email" placeholder="Email" className="form__input" name="email" id="email" value={userValues.email} onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form__group">
                    <input type="password" placeholder="Password" className="form__input" name="password" id="password" value={userValues.password} onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form__group">
                    <input type="password" placeholder="Re-enter Password" className="form__input" name="confirmedPassword" id="confirmedPassword" value={userValues.passwordConfirmed} onChange={handleChange}/>
                    {errors.confirmedPassword && <p className="error">{errors.confirmedPassword}</p>}
                </div>

                <div className="su-li-link">
                    <Link to="/login" className="to-login">already have an account?</Link>
                </div>

                <button className="btn" type="submit">sign up</button>
            </form>
        </div>
    )
}
