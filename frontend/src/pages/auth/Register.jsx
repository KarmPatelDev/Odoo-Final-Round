import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import Layout from "../../components/layouts/Layout";
import './Login-Register.css'; // Import the CSS file (same as for the Login component)

const Register = () => {
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post(`http://localhost:8081/api/v1/auth/register`, {name, emailId, password, confirmPassword, phoneNumber, address, answer});

            if(res.data.success){
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                toast.success(res.data.message);
                navigate(location.state || "/");
            }
            else{
                toast.error(res.data.message);
            }
        }
        catch(error) {
            console.log(error);
            toast.error("Something Went Wrong.");
        }
    };

    return (
        <Layout title={'Register'}>
            <div className="login">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h4 className="login__title">Register Page</h4>
                    <div className="login__content">
                        <div className="login__box">
                            <input type="text" className="login__input" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="email" className="login__input" placeholder="Enter Your Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="password" className="login__input" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="password" className="login__input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="text" className="login__input" placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="text" className="login__input" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="text" className="login__input" placeholder="Enter 4 Digit PIN" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
                        </div>
                    </div>
                    <button type="submit" className="login__button btn btn-primary">Register</button>
                    <div className="login__register">
                        <p>Already registered?</p>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate("/login")}>Login</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
