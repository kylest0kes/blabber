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

    const [isUserValid, setIsUserValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserValues({
            ...userValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateUserInfo(userValues));
        setIsUserValid(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isUserValid == true) {
            console.log('valid submit')
        }
    }, [errors])

    return { handleChange, userValues, handleSubmit, errors };
}

export default useForm;