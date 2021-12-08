import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Newcontext from '../Context/Createcontext'
import "../CSS/Login.css"

const Login = () => {
    const navigate = useNavigate();
    const [errormonitor, seterrormonitor] = useState(0)
    const [logincred, setlogincred] = useState({ email: "", password: "" })
    const context = useContext(Newcontext)
    const { login, Pass } = context
    const onchange = (e) => {
        setlogincred({ ...logincred, [e.target.name]: e.target.value })
        seterrormonitor(1);
    }
    const loging = async (e) => {
        if (logincred.email.length !== 0) {
            if (logincred.password.length !== 0) {
                e.preventDefault();
                await login(logincred.email, logincred.password);
                if(Pass())
                {navigate("/blog")}
            }
        }
    }
    return (
        <>
            <div className="LoginBody">
                <div className="Login">
                    <h1>Login:</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" id="Label1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onchange} />
                            { (errormonitor && logincred.email.length === 0) && <div className="warning">Input field is Required </div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" id="Label2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" name="password" onChange={onchange} />
                            { (errormonitor && logincred.password.length === 0) && <div className="warning">Input field is Required </div>
                            }
                        </div>
                        <button className="btn btn-primary" onClick={loging}>Submit</button>
                    </form>
                    <div className="form-helpers">
                        <Link className="btn btn-primary my-4" to="/signup">Create New User</Link>
                    </div>
                </div>
                <div className="loginface">
                    <div className="login-boat">
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/11/54/boat-158936_640.png" alt="Sailing boat" className="Boat" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
