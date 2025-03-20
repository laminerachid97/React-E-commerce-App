import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/login.css"
import { AuthContext } from "../providers/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { users, setUsers } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        ///// check if the user exist before with (token or ...) if he does navigate to the profile page
        // const exist = users.some((user) => user.email === email && user.pwd === pwd);
        // if (exist) {
        //     // navigate('/profile');
        //     console.log(exist)
        // } else {
        //     messageRef.current.innerHTML = "doesn't exist!"
        // }
    }, [])

    const handleLogin = () => {
        if (emailRef && pwdRef) {
            const email = emailRef.current.value;
            const pwd = pwdRef.current.value;
            const exist = users.some((user) => user.email === email && user.pwd === pwd);
            if (exist) {
                
                navigate('/profile');
            } else {
                messageRef.current.innerHTML = "doesn't exist!"
            }
        }

    }

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            {loading ? <div className="loading w-[100px] h-[100px] rounded-[50%]"></div>
                : <div className="w-[400px] border border-black rounded-[15px] bg-orange-500">
                    <h1 className="text-black w-full text-center my-5 p-3 text-2xl font-bold">Login</h1>
                    <div className="w-[90%] h-[50px] relative rounded my-5 mx-auto">
                        <input ref={emailRef} id="email" type="text" className="w-[100%] h-[100%] border border-black rounded-[15px]" placeholder="" />
                        <label id="lab-email" htmlFor="email" className="absolute top-[10px] text-xl text-white left-0 text-left px-4 rounded-[15px]"> Email </label>
                    </div>
                    <div className="w-[90%] h-[50px] relative rounded my-5 mb-0 mx-auto">
                        <input ref={pwdRef} id="pwd" type="text" className="w-[100%] h-[100%] border border-black rounded-[15px]" placeholder="" />
                        <label id="lab-pwd" htmlFor="pwd" className="absolute top-[10px] text-xl text-white left-0 text-left px-4 rounded-[15px]"> Password </label>
                    </div>
                    <div className="w-full h-[50px] relative rounded mt-3">
                        <h1 ref={messageRef} className="message text-black w-full text-center text-xl"></h1>
                    </div>
                    <div className="w-full rounded my-2">
                        <button onClick={handleLogin} className="p-4 w-[300px] bg-black text-white rounded-[15px]">Login</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login;