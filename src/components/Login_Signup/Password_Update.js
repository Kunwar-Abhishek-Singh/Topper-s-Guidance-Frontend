import classes from "./Login.module.css"
import { useState, useEffect, useContext } from 'react'
import { signin_student_data, updatePassword } from '../../API/Apicall'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader';
import { cookie_validation_context } from '../Context_Component/Context'
import login_vector from '../../images/login_vector.svg'
import { useParams } from "react-router-dom";

const Password_Update = () => {
    const {email} = useParams();
    const location = useLocation();
    const data = useContext(cookie_validation_context)
    const navigate = useNavigate();
    const [isAlert, setIsAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialValues = { password: "", confirm_password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const override: CSSProperties = {
        display: "block",
        borderColor: "red",
        marginTop: "250px",
        marginLeft: "600px",
        position: "absolute",
        zIndex: "10000",
        backgroundColor: "none",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const UpdateHandler = async (e) => {
        setLoading(true)
        if (!formValues.password || !formValues.confirm_password) {
            setLoading(false);
            alert("plzz fill the both fields")
            return false;
        }
        if(formValues.password !== formValues.confirm_password){
            setLoading(false);
            alert("Password and Confirm Password not same!!!")
            return false;
        }
        // setLoading(true);
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(formValues.password)
        console.log(formValues.confirm_password)
        var updation_data = {"email":email, "password":formValues.password, "confirmPassword":formValues.confirm_password}
        JSON.stringify(updation_data)
        const updation_response = await updatePassword(updation_data)
        if(updation_response.data){
            setLoading(false);
            alert("Password Updation Successful")
            navigate("/login")
        }
        else{
            setLoading(false);
            alert("Password updation error")
        }


       
    }
    
    const validate = (values) => {
        const error = {}
        if (!values.password) {
            error.password = "Username must be required!!!"
        }
        if (!values.confirm_password) {
            error.confirm_password = "Password must be required !!!!"
        }
        return error;
    }

    
    return (
        <>
            {loading ?
                <div>
                    <MoonLoader size={150} color={"blue"} loading={loading} cssOverride={override} className={classes.MoonLoader} />
                    <div className={classes.after_login_handler_active_div}>
                        <div className={classes.login_credentials}>
                            <div className={classes.login_vector_img}>
                                <img src={login_vector} alt='login_vector_img' className={classes.login_vector_icon}></img>
                            </div>
                            <div className={classes.LOGIN_verification_main_div}>
                                <div>
                                    <h3>Update Your Password Here :-</h3>
                                </div>
                                <div className={classes.userid_pwd_section}>
                                    <div className={classes.userId_pwd_div}>
                                        <input required className={classes.username_password_tag} type='password' placeholder=' Enter New Password' name='password' value={formValues.password} onChange={handleChange}></input>
                                    </div>
                                    <div className={classes.userId_pwd_div}>
                                        <input required className={classes.username_password_tag} type='password' placeholder=' Confirm New Password' name='confirm_password' value={formValues.confirm_password} onChange={handleChange}></input>
                                    </div>
                                    <div className={classes.login_btn_div}>
                                        {/* <p onClick={forgot_pwd_handler}>Forgot Password !</p> */}
                                        <button onClick={UpdateHandler} className={classes.login_btn}>Update</button>
                                    </div>
                                </div>
                                <div className={classes.want_to_register_div}>
                                    {/* <Link to="/signup" style={{ textDecoration: 'none' }}> <p>New Here, Want to Register !!!</p></Link> */}
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
                :
                <div className={classes.login_credentials}>
                    <div className={classes.login_vector_img}>
                        <img src={login_vector} alt='login_vector_img' className={classes.login_vector_icon}></img>
                    </div>
                    <div className={classes.LOGIN_verification_main_div}>
                        <div>
                            <h3>Update Your Password Here :-</h3>
                        </div>
                        <div className={classes.userid_pwd_section}>
                            <div className={classes.userId_pwd_div}>
                                <input required className={classes.username_password_tag} type='password' placeholder=' Enter New Password' name='password' value={formValues.password} onChange={handleChange}></input>
                            </div>
                            <div className={classes.userId_pwd_div}>
                                <input required className={classes.username_password_tag} type='password' placeholder=' Confirm New Password' name='confirm_password' value={formValues.confirm_password} onChange={handleChange}></input>
                            </div>
                            <div className={classes.login_btn_div}>
                                {/* <p onClick={forgot_pwd_handler}>Forgot Password !</p> */}
                                <button onClick={UpdateHandler} className={classes.login_btn}>Update</button>
                            </div>
                        </div>
                        <div className={classes.want_to_register_div}>
                            {/* <Link to="/signup" style={{ textDecoration: 'none' }}> <p>New Here, Want to Register !!!</p></Link> */}
                        </div>
                    </div>
                    {
                        isAlert ?
                            <div className={classes.invalid_cred_div}>
                                <div className={classes.invalid_cred_popup}>
                                    <button onClick={()=>{setIsAlert(false)}}>✖️</button>
                                    <h2 className={classes.invalid_cred_h2}>Wrong Password Entered</h2>
                                    <p className={classes.invalid_cred_p}>Password and Confirm Password is not same!!!</p>
                                    <button onClick={()=>{setIsAlert(false); formValues.password=""; formValues.confirm_password=""}}  className={classes.invalid_cred_ok_btn}>Re-enter</button>
                                </div>
                            </div>
                            :
                            null
                    }
                </div >
            }
        </>
    )
}
export default Password_Update;

