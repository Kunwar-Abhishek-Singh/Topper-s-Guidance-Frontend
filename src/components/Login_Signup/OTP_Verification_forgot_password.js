import React, { useEffect, useState } from 'react';
import classes from "./OTP_Verification.module.css";
import { forgot_pwd_otpVerify } from '../../API/Apicall';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import login_vector from '../../images/login_vector.svg'
const OTP_Verification_forgot_password = () => {
    const location = useLocation();
    var mob = location.state.mob;

    const [mobile_temp, setMobile_temp] = useState();
    const [otp, setOtp] = useState('');
    const { email } = useParams();
    const [enteredOtp, setEnteredOtp] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setMobile_temp(mob.slice(7, 10))
    }, [])

    const handleComplete = () => {
        console.log('OTP entered:', otp);
        setEnteredOtp(otp);
        console.log("this is after completion")
        console.log(enteredOtp)
    }

    const sendOtpHandler = async (e) => {
        console.log(otp);
        e.preventDefault();
        var otp_data = { "entered_otp": otp, "mobile": mob, "email": email }
        JSON.stringify(otp_data)
        const otp_response = await forgot_pwd_otpVerify(otp_data);
        if (otp_response.data.otp_message) {
            alert("Otp verified successfully")
            navigate(`/forgot_password/${email}/password_update`)
        }
        else {
            alert("Wrong Otp entered!!!")
            return false;
        }

    }
    return (
        <>
            <div className={classes.registration_credentials}>
                <div className={classes.login_vector_img}>
                    <img src={login_vector} alt='login_vector_img' className={classes.login_vector_icon}></img>
                </div>
                <div className={classes.OTP_verification_main_div}>
                    <div>
                        <h4>OTP verification</h4>
                    </div>
                    <div className={classes.input_otp_section}>
                        <div>
                            <p>Enter the OTP sent on your Mobile number ended with *******{mobile_temp}</p>
                        </div>
                        <div>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6} // Specify the number of OTP inputs
                                // separator={<span>-</span>} // Optional separator between OTP inputs
                                renderSeparator={<span>-</span>}
                                isInputNum // Only allow numeric input
                                shouldAutoFocus
                                onComplete={handleComplete}
                                renderInput={(props) => <input {...props} className={classes.otp_field} />}
                            />
                        </div>
                        <div>
                            <button onClick={sendOtpHandler}>Submit</button>
                        </div>

                    </div>
                </div>
            </div >
        </>

    )
}

export default OTP_Verification_forgot_password
