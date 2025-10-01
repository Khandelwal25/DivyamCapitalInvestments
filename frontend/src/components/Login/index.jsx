import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate("/");
    };

    return(
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md">
            <h2 className="text-2xl mb-4">Login</h2>
            <input type="email" placeholder="Email" value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className = "border w-full p-2 mb-2" required
             />

             <input type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} className="border w-full p-2 mb-2" required 
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
        </form>
    );
}

export default Login;