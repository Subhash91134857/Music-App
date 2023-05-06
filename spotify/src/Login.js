import React from 'react'
import "./login.css"
import { loginUrl } from './spotify'

const Login = () => {
    return (
        <div className='login'>
            {/* Spotify Logo */}
            <img src="https://th.bing.com/th/id/OIP.2-yUQBZYAJr16zTesiGqEAHaB7?pid=ImgDet&w=646&h=168&rs=1" alt="" />
            {/* Login with spotify button */}
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login