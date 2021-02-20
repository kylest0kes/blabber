import { useState, useEffect } from 'react';

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
    }

    return { handleChange, userValues, handleSubmit };
}

export default useForm;