import { BsFillShieldLockFill} from "react-icons/bs";


import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import LogoImg from "../Logo.jpg";
import App from "../App";
import Bgimg from "../Bg.jpg";

const Signup = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,"recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
              <div>
                {user ? (
                  <App/>
                ) : (
                <div>  
                  <div className="header"> 
                    <img className="header-img" src={LogoImg} alt="Logo" /> 
                    <h1 className="font-semibold text-2xl">Election 2024</h1>
                  </div>
                  <div className="bg-container"> 
                    <img className="bg-img" src={Bgimg} alt="Background" />
                    <div className="text-overlay">
                      <div className="white-bg">
                        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                          <h1 className="welcome-message">Welcome to the voting application</h1>
                          {showOTP ? (
                            <>
                              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                <BsFillShieldLockFill size={30} />
                              </div>
                              <label htmlFor="otp" className="font-bold text-xl text-white text-center">
                              <h1 className="welcome-message2">Enter OTP</h1> 
                              </label>
                              <OtpInput
                                className="opt-container"
                                value={otp}
                                onChange={setOtp}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                                
                              ></OtpInput>
                              <button
                                onClick={onOTPVerify}
                                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                              >
                                {loading}
                                <button className="login-button">Verify OTP</button>
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                              <h1 className="welcome-message2">Enter Your Phone Number</h1>
                              </div>
                              <PhoneInput country={"in"} value={ph} onChange={setPh} />
                              <button
                                onClick={onSignup}
                                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                              >
                                {loading}
                                <button className="login-button">Send code via SMS</button>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>  
                )}
              </div>
      <Analytics />
      <SpeedInsights />   
    </div> 
  );
};

export default Signup;
