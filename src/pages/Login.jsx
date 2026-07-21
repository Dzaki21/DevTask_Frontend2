import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const result = await login({
            email,
            password,
        });
        console.log(result)

        if (result.success) {
            localStorage.setItem("token", result.token);
            navigate("/")
        } else {
            alert(result.message)
        }
    }
    return (
        <Login 
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    )
}