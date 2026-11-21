import { useState } from "react";
import { LoginUser } from "../serves/usapi";
import { RegisterUser } from "../serves/usapi";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login({authSetter}) {

    const [user,setUser]=useState({username:"",password:"",email:""})
    const navigatelink = useNavigate();

    function handleLogin(e)
    {
        debugger
        e.preventDefault();
        LoginUser(user.username, user.password)
            .then(res => {
                authSetter({user:res.data.user,token:res.data.token});
                localStorage.setItem("token", res.data.token);
                navigatelink("/showroom");
            })
            .catch(() => alert("Unauthorized"));
    }

    async function handleRegister()
    {
        const res=await RegisterUser(user);
        if(res.status==201)
        {
          alert("User Registered!");
        }else{
            alert("Could not Register!");
        }

    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                     <div className="card card-body">
                        <h1>Login here!</h1>
                            <form onSubmit={(e) => { handleLogin(e) }}>
                    <div className="mb-3">
                        <label  className="form-label">Username</label>
                        <input type="text" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}} className="form-control" />
                        </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} className="form-control" />
                    </div>
                
                    <button type="submit" className="btn btn-success">Login</button>
                    </form>
                    </div>
                </div>

                <div className="col-md-4 offset-md-4 mt-5">
                     <div className="card card-body">
                        <h1>Register here!</h1>
                    <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label  className="form-label">Username</label>
                        <input type="text" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}} className="form-control" />
                        </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} className="form-control" />
                    </div>
                  <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="text" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control" />
                        </div>
                    <button type="submit" className="btn btn-success">Register</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
