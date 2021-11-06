import { useUser } from "hooks/useUser"
import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [, pushLocation] = useLocation()
    const {login, isLogged, isLoginLoading,
        isLoginError} = useUser();

    useEffect(() => {
        if(isLogged) {
            pushLocation("/")
        }
    },[isLogged, pushLocation])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({username, password});
    };

    return (
        <>
        <h2>Login</h2>
        {isLoginLoading && <strong>Checking credentials...</strong>}
        {!isLoginLoading && <form onSubmit={handleSubmit}>
            <input 
            placeholder="username" 
            type="text"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            placeholder="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        }
        {isLoginError && <strong>Invalid credentials</strong>}
        </>
    )
}
export default Login
