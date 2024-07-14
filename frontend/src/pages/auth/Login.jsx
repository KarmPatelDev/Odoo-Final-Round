import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import Layout from "../../components/layouts/Layout";
import './Login-Register.css'; // Import the CSS file

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post(`http://localhost:8081/api/v1/auth/login`, {emailId, password});
            
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
        <Layout title={'Login'}>
            <div className="login">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h4 className="login__title">Login Page</h4>
                    <div className="login__content">
                        <div className="login__box">
                            <input type="email" className="login__input" placeholder="Enter Your Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="password" className="login__input" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <button type="submit" className="login__button btn btn-primary">Login</button>
                    <div className="login__forgot">
                        <button type="button" className="" onClick={() => navigate("/forgot-password")}>Forgot Password</button>
                    </div>
                    <div className="login__register">
                        <p>Not registered yet?</p>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate("/register")}>Register</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
