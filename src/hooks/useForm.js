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

    return { handleChange, userValues };
}

export default useForm;