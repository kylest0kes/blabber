import React from 'react';
import { Link } from 'react-router-dom';

import './pagestyle.css';

export default function LogIn() {
    return (
        <div>
            <form className="form">
                <div className="form__group">
                    <input type="email" placeholder="Email" className="form__input" />
                </div>

                <div className="form__group">
                    <input type="password" placeholder="Password" className="form__input" />
                </div>

                <div className="su-li-link">
                    <Link to="/" className="to-login">new here?</Link>
                </div>

                <button className="btn" type="button">log in</button>
            </form>
        </div>
    )
}
