export default function validateUserInfo(userValues) {
    const {username, email, password, confirmedPassword} = userValues
    const complexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let errors = {};

    if(!username || username.trim() == '') {
        errors.username = "Username Required";
    } 

    if(!email) {
        errors.email = "Email Required";
    } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        errors.email = "Must be valid email";
    }

    if(!password) {
        errors.password = "Password Required";
    } else if(password.length < 6 || !complexPass.test(password)) {
        errors.password = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
    }

    if(!confirmedPassword) {
        errors.confirmedPassword = "Please Confirm Password";
    } else if(confirmedPassword !== password) {
        errors.confirmedPassword = "Password do not match";
    }

    return errors;
}