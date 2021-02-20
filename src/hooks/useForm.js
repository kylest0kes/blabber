import { useState, useEffect } from 'react';
import validateUserInfo from '../scripts/validateInfo';

const useForm = () => {
    const [userValues, setUserValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmedPassword: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserValues({
            ...userValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        setErrors(validateUserInfo(userValues));
    }

    return { handleChange, userValues, handleSubmit, errors };
}

export default useForm;