import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import Layout from "../../components/layouts/Layout";
import "../../styles/auth.css";

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
            <div className="login">
                <div className="login__form" >
                <form onSubmit={handleSubmit}>
                    <h4 className="login__title">Login Page</h4>
                    <div className="login__content">
                        <div className="login__box">
                            <input type="email" className="login__input" placeholder="Enter Your Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required/>
                        </div>
                        <div className="login__box">
                            <input type="password" className="login__input" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <button type="submit" className="login__button">Login</button>

                   
                </form>
                <div className="login__forgot">
                        <Link to="/forgot-password" className="for-btn">Forgot Password</Link>
                    </div>
                    
                <div className="login__register">
                    <p>If You Don't Have An Account?</p>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/register")}>Register</button>
                </div>
                </div>
            </div>
    );
};

export default Login;
