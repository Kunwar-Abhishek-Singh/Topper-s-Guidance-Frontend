import React, { useEffect, useState, CSSProperties } from 'react';
import classes from "./Login_Signup.module.css";
import { register_student_data } from '../../API/Apicall';
import { registration_otp } from '../../API/Apicall';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { jwt_Authenticate } from "../../API/Apicall";
// import FadeLoader from 'react-spinners/FadeLoader';
// import HashLoader from 'react-spinners/HashLoader';
// import ScaleLoader from 'react-spinners/ScaleLoader';
// import ClipLoader from 'react-spinners/ClipLoader';
import MoonLoader from 'react-spinners/MoonLoader';

const LoginSignup = () => {
  const Navigate = useNavigate();
  const initialValues = { firstname: "", lastname: "", email: "", mobile: "", password: "", confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [cookies,  removeCookie] = useCookies(['jwtoken']);
  const [cookieAuthentication, setCookieAuthentication] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const override: CSSProperties = {
    display: "block",
    borderColor: "red",
    marginTop: "50px",
    marginLeft: "80px",
    position: "absolute",
    zIndex: "10000",
    backgroundColor: "none",
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    setFormErrors(validate(formValues));

    if (!formValues.firstname || !formValues.lastname || !formValues.email || !formValues.mobile || !formValues.password || !formValues.confirmpassword || formValues.password !== formValues.confirmpassword || formValues.password.length !== formValues.confirmpassword.length || formValues.password.length < 4) {
      setError(true);
      return false;
    }

    else {
      setIsSubmit(true);
      setLoading(true);
    }

    var otp = ''
    var otpstatus = "false";

    let formdata = new FormData()
    formdata.append("firstname", formValues.firstname)
    formdata.append("lastname", formValues.lastname)
    formdata.append("email", formValues.email)
    formdata.append("mobile", formValues.mobile)
    formdata.append("password", formValues.password)
    formdata.append("confirmpassword", formValues.confirmpassword)
    formdata.append("otp", otp)
    formdata.append("otpstatus", otpstatus)

    let config = {
      'Content-type': 'application/json'
    }
    const response = await register_student_data(formdata, config);
    console.log("this is the server side validation message")
    // console.log(response.data.user_exist_message);
    console.log(response)
    var india_code = 91;
    var mobile_no = "" + india_code + formValues.mobile;


    //mobile_number refetching to server side
    var data = { "mobile_no": mobile_no, "email": formValues.email, "mobile": formValues.mobile }
    JSON.stringify(data)
    if (response.status === 200) {
      setLoading(false);
      const response1 = await registration_otp(data);
      Navigate(`/signup/${formValues.email}`,{state:{mob:formValues.mobile}})
    }
    else {
      setLoading(false);
      setIsAlert(true);
      // alert("User is already registered!!! Either Mobile or Email is Same!!!")
    }
  }
  

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
      Navigate('/')
    }
  }, [cookie_jwt_Authentication])


  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "First name is required !";
    }

    if (!values.lastname) {
      errors.lastname = "Last name is required !";
    }

    if (!values.email) {
      errors.email = "Email is required !";

    }
    else if (!regex.test(values.email)) {
      errors.email = "Invalid email address !"
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required !";
    }
    else if (values.mobile.length < 10) {
      errors.mobile = "Mobile number must be of 10 digits !"
    }

    if (!values.password) {
      errors.password = "Password is required !";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }

    if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Confirm Password not matched, plzz re-enter !";

    }
    else if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required !"
    }

    return errors;
  };


  return (
    <>
      <div className={classes.registration_credentials}>
        <div className={classes.login_vector_img}>
          <img src='./images/login_vector.svg' alt='login_vector_img' className={classes.login_vector_icon}></img>
        </div>
        <div className={classes.registration_form}>
          <div className={classes.registration_heading}><h2>Sign up / Register yourself :-</h2></div>
          {loading ? <div><MoonLoader size={150} color={"blue"} loading={loading} cssOverride={override} className={classes.MoonLoader} />
            <form autoComplete='off' className={classes.loader_effect_form}>

              <div className={classes.resgister_input_form}>
                <input type='text' name='firstname' placeholder='First Name' className={classes.register_input_sections} value={formValues.firstname} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.firstname}</p>

              <div className={classes.resgister_input_form}>
                <input type='text' name='lastname' placeholder='Last Name' className={classes.register_input_sections} value={formValues.lastname} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.lastname}</p>

              <div className={classes.resgister_input_form}>
                <input type='email' name='email' placeholder='Email' className={classes.register_input_sections} value={formValues.email} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.email}</p>
              <div className={classes.resgister_input_form}>
                <div className={classes.mobile_number_enter_section}>
                  <input type='text' placeholder='+91' className={classes.india_code_input_tag} readOnly />
                  <input type='text' name='mobile' placeholder='Mobile' className={classes.register_input_section_mobile} value={formValues.mobile} onChange={handleChange} required />
                </div>
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.mobile}</p>

              <div className={classes.resgister_input_form}>
                <input type='password' name='password' placeholder='Password' className={classes.register_input_sections} value={formValues.password} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.password}</p>
              <div className={classes.resgister_input_form}>
                <input type='password' name='confirmpassword' placeholder='Confirm Password' className={classes.register_input_sections} value={formValues.confirmpassword} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.confirmpassword}</p>
              <div className={classes.create_acc_btn}>
                <button type='submit' onClick={handleSubmit}>Create Account</button>
              </div>
            </form>
          </div>
            :
            <form autoComplete='off'>

              <div className={classes.resgister_input_form}>
                <input type='text' name='firstname' placeholder='First Name' className={classes.register_input_sections} value={formValues.firstname} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.firstname}</p>

              <div className={classes.resgister_input_form}>
                <input type='text' name='lastname' placeholder='Last Name' className={classes.register_input_sections} value={formValues.lastname} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.lastname}</p>

              <div className={classes.resgister_input_form}>
                <input type='email' name='email' placeholder='Email' className={classes.register_input_sections} value={formValues.email} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.email}</p>
              <div className={classes.resgister_input_form}>
                <div className={classes.mobile_number_enter_section}>
                  <input type='text' placeholder='+91' className={classes.india_code_input_tag} readOnly />
                  <input type='text' name='mobile' placeholder='Mobile' className={classes.register_input_sections_mobile} value={formValues.mobile} onChange={handleChange} required />
                </div>
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.mobile}</p>

              <div className={classes.resgister_input_form}>
                <input type='password' name='password' placeholder='Password' className={classes.register_input_sections} value={formValues.password} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.password}</p>
              <div className={classes.resgister_input_form}>
                <input type='password' name='confirmpassword' placeholder='Confirm Password' className={classes.register_input_sections} value={formValues.confirmpassword} onChange={handleChange} required />
              </div>
              <p className={classes.error_msg_mandatory_fields}>{formErrors.confirmpassword}</p>
              <div className={classes.create_acc_btn}>
                <button type='submit' onClick={handleSubmit}>Create Account</button>
              </div>
            </form>

          }

        </div>
      </div >
      {
        isAlert
          ?
          <div className={classes.already_regd_div}>
            <div className={classes.already_regd_popup}>
              <button onClick={() => { setIsAlert(false) }}>✖️</button>

              <h2 className={classes.already_regd_h2}>Already Registered !!!</h2>
              <p className={classes.already_regd_p}>Email or Mobile already registered!!!!</p>
              <button onClick={() => { setIsAlert(false); Navigate('/login') }} className={classes.already_regd_ok_btn}>Login</button>
            </div>
          </div>
          :
          null
      }
    </>
  )
}

export default LoginSignup;

