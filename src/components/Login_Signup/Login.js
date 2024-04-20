import classes from "./Login.module.css"
import { useState, useEffect, useContext } from 'react'
import { get_single_user_regs_data, registration_otp, signin_student_data } from '../../API/Apicall'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { jwt_Authenticate } from "../../API/Apicall";
import MoonLoader from 'react-spinners/MoonLoader';
import { cookie_validation_context } from '../Context_Component/Context'
import login_img from "../../images/login_vector.svg";

const Login = () => {
    const location = useLocation();
    const data = useContext(cookie_validation_context)
    const navigate = useNavigate();
    const [isAlert, setIsAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['myCookie']);
    const [cookieAuthentication, setCookieAuthentication] = useState(false);
    const initialValues = { username: "", pwd: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    var cookies_token = { "jwtoken": cookies.jwtoken }
    JSON.stringify(cookies_token);

    const cookie_jwt_Authentication = async () => {
        const auth_response = await jwt_Authenticate(cookies_token)
        console.log(auth_response)
        if (auth_response.status === 200) {
            setCookieAuthentication(true)
        }
        else {
            alert("invalid cookies found !!!!")
            removeCookie("jwtoken")
        }
    }

    useEffect(() => {
        if (cookies.jwtoken) {
            cookie_jwt_Authentication()
        }
    }, [])

    useEffect(() => {
        if (cookieAuthentication) {
            navigate('/Topper-s-Guidance-Frontend/')
        }
    }, [cookie_jwt_Authentication])

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

    const LoginHandler = async (e) => {
        if (!formValues.username || !formValues.pwd) {
            return false;
        }
        setLoading(true);
        e.preventDefault();
        setFormErrors(validate(formValues));

        var login_credentials = { "username": formValues.username, "pwd": formValues.pwd }
        JSON.stringify(login_credentials);
        const login_response = await signin_student_data(login_credentials)
        if (login_response.data.login_message) {
            setLoading(false)
            const token_id = login_response.data.token_id
            // alert(token_id)
            setCookie('jwtoken', token_id, {
                path: '/',
                expires: new Date(Date.now() + 233200000)
            });
            if (location.state) {
                navigate(location.state.nextUrl)
            }
            else {
                navigate("/Topper-s-Guidance-Frontend/")
            }
        }
        else {
            setIsAlert(true);
            setLoading(false)
            // alert("Invalid Login Credentials Entered!!!")
            return false;
        }
    }
    
    const validate = (values) => {
        const error = {}
        if (!values.username) {
            error.username = "Username must be required!!!"
        }
        if (!values.pwd) {
            error.pwd = "Password must be required !!!!"
        }
        return error;
    }

    const forgot_pwd_handler = async ()=>{
        setLoading(true);
        console.log("entered into forgot password handler")
        if(!formValues.username){
            alert("plzz enter your user id")
            setLoading(false);
            return false;
        }
        var email = formValues.username;
        JSON.stringify(email);
        const response = await get_single_user_regs_data(email);
        console.log(response)
       
        if(response.data){
            setLoading(false);
            var india_code = 91;
            var mobile_no = ""+india_code+response.data.mobile;
            console.log(mobile_no)
            var data = {"mobile_no": mobile_no, "email": email, "mobile":response.data.mobile}
            JSON.stringify(data)
            const response1 = await registration_otp(data);
            navigate(`/forgot_password/otp_verification/${email}`,{state:{mob:response.data.mobile}})
        }
        else{
            setLoading(false);
            alert("user not found!!!")
        }
    }
    return (
        <>
            {loading ?
                <div>
                    <MoonLoader size={150} color={"blue"} loading={loading} cssOverride={override} className={classes.MoonLoader} />
                    <div className={classes.after_login_handler_active_div}>
                        <div className={classes.login_credentials}>
                            <div className={classes.login_vector_img}>
                                <img src={login_img} alt='login_vector_img' className={classes.login_vector_icon}></img>
                            </div>
                            <div className={classes.LOGIN_verification_main_div}>
                                <div>
                                    <h3>Login Your Details Here :-</h3>
                                </div>
                                <div className={classes.userid_pwd_section}>
                                    <div className={classes.userId_pwd_div}>
                                        <input required className={classes.username_password_tag} type='text' placeholder=' User id or Mobile' name='username' value={formValues.username} onChange={handleChange}></input>
                                    </div>
                                    <div className={classes.userId_pwd_div}>
                                        <input required className={classes.username_password_tag} type='password' placeholder=' Enter Password' name='pwd' value={formValues.pwd} onChange={handleChange}></input>
                                    </div>
                                    <div className={classes.login_btn_div}>
                                        <p onClick={forgot_pwd_handler}>Forgot Password !</p>
                                        <button onClick={LoginHandler} className={classes.login_btn}>Login</button>
                                    </div>
                                </div>
                                <div className={classes.want_to_register_div}>
                                    <Link to="/signup" style={{ textDecoration: 'none' }}> <p>New Here, Want to Register !!!</p></Link>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
                :
                <div className={classes.login_credentials}>
                    <div className={classes.login_vector_img}>
                        <img src={login_img} alt='login_vector_img' className={classes.login_vector_icon}></img>
                    </div>
                    <div className={classes.LOGIN_verification_main_div}>
                        <div>
                            <h3>Login Your Details Here :-</h3>
                        </div>
                        <div className={classes.userid_pwd_section}>
                            <div className={classes.userId_pwd_div}>
                                <input required className={classes.username_password_tag} type='text' placeholder=' User id or Mobile' name='username' value={formValues.username} onChange={handleChange}></input>
                            </div>
                            <div className={classes.userId_pwd_div}>
                                <input required className={classes.username_password_tag} type='password' placeholder=' Enter Password' name='pwd' value={formValues.pwd} onChange={handleChange}></input>
                            </div>
                            <div className={classes.login_btn_div}>
                                <p onClick={forgot_pwd_handler}>Forgot Password !</p>
                                <button onClick={LoginHandler} className={classes.login_btn}>Login</button>
                            </div>
                        </div>
                        <div className={classes.want_to_register_div}>
                            <Link to="/signup" style={{ textDecoration: 'none' }}> <p>New Here, Want to Register !!!</p></Link>
                        </div>
                    </div>
                    {
                        isAlert ?
                            <div className={classes.invalid_cred_div}>
                                <div className={classes.invalid_cred_popup}>
                                    <button onClick={()=>{setIsAlert(false)}}>✖️</button>
                                    <h2 className={classes.invalid_cred_h2}>Wrong Credentials</h2>
                                    <p className={classes.invalid_cred_p}>Invalid User id or Password Entered</p>
                                    <button onClick={()=>{setIsAlert(false); formValues.pwd=""; formValues.username=""}}  className={classes.invalid_cred_ok_btn}>Re-enter</button>
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
export default Login;

