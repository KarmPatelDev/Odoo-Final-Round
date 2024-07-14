import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import axios from "axios";

const Header = () => {

    const auth = useAuth();

    const handleLogout = async () => {

        try{
            const res = await axios.get(`http://localhost:8081/api/v1/auth/logout`);
        
            if(res.data.success){
                setAuth({
                    ...auth,
                    user: null,
                    token: ""
                });
                localStorage.removeItem("auth");
                toast.success("Logout Successful");
            }
            else{
                toast.error("Logout Unsuccessful");
            }
    
        }
        catch(error){
            toast.error(error);
        }
    
    };

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Library Management</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>);
};

export default Header;