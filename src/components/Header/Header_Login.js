import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import classes from "./Header_Login.module.css";
import FirstPage from '../../Pages/First_page/First_page';

const HeaderLogin = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginDetails, setLoginDetails] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    // var localStorageData = JSON.parse(localStorage.getItem('name'));
    const storedEmail = "aksgaya6@gmail.com";
    const storedPassword = "asdfg";
    const submitLoginDetails = (e) => {
        e.preventDefault();
        const newLoginDetails = { Email_or_Phone: emailOrPhone, Password: loginPassword };
        setLoginDetails([...loginDetails, newLoginDetails]);
        console.log(loginDetails);

        if (loginPassword === storedPassword && emailOrPhone === storedEmail) {

            setIsSubmit(true);

        };
        // if{
        //     setIsSubmit(true);
        //     window.localStorage.setItem("isLoggedIn", true);

        // }



        setEmailOrPhone("");
        setLoginPassword("");


    }
    useEffect(() => {
        if (emailOrPhone === storedEmail && loginPassword === storedPassword) {

            console.log(isSubmit);
        }

    }, [isSubmit, emailOrPhone, loginPassword]);

    // const initialValues={emailOrPhone:"", loginPassword:""};
    // const [formValues, setFormValues] = useState(initialValues);
    // const [isLoggedin, setIsLoggedin] = useState(false);
    // const [formErrors, setFormErrors] = useState({});

    // const handleChange = (e) =>{
    //     const{ name, vlaue} = e.target;
    //     setFormValues({...formValues,[name]:value});
    //     console.log(formvalues);
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsLoggedin(true);
    // };
    // useEffect(() =>{
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length===0 && isLoggedin){
    //         console.log(formvalues);
    //     }
    // },[formErrors, formvalues, isLoggedin]);

    // const validate = (values) => {
    //     const errors = {}
    //     const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     let retrieveFormValues = JSON.parse(localStorage.getItem('name'));
    //     if(values.emailOrPhone !== retrieveFormValues.){
    //         errors.emailOrPhone = "Email is not matching !";
    //     }

    // }


    return (
        <>

            {isSubmit ? (<div><FirstPage /></div>) : (
                <div className={classes.login_header_container}>


                    <div className={classes.login_header}>
                        <div className={classes.login_header_logo}>
                            <img src='./images/pinnacle (2).png' alt='pinnacle_logo_img'></img>
                        </div>
                        <div>
                            <form autoComplete='off' onSubmit={submitLoginDetails}>
                                <div className={classes.login_header_credential_input}>

                                    <div className={classes.login_header_input_email}>
                                        <input type='input' placeholder='Email id or Phone' value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
                                    </div>
                                    <div className={classes.login_header_input_password}>
                                        <input type='input' placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />

                                        <p>Forgot Password ?</p>
                                    </div>
                                    <div className={classes.login_header_submit_button}>
                                        <button type='submit'>Login</button>
                                    </div>

                                    <div className={classes.home_icon_button_login_header}><Link to="/"><FaHome size="35px" className={classes.faHomeicon} /></Link></div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>)}

        </>
    )
}

export default HeaderLogin;


