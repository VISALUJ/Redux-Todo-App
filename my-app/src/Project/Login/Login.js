import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Log = () => {
    const [input, setinput] = useState({email:'',password:'',})
    const [error, seterror] = useState('')
    
    const handleinput= (e) => {
        setinput({...input,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate()

    const handleSubmitt = (e) => {
        e.preventDefault();
        const{email,password}=input

        if (email == "hello@gmail.com" && password == 123456789) {
            navigate('/New folder/App')
        }
        else {
            seterror("invalid")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitt} >
            <input type="email" value={input.email} name='email' onChange={handleinput} required />
            <input type="Password" value={input.password} name='password' onChange={handleinput} required />
            <button type="submit">Login</button>
            {error && <div style={{ color: "blue" }}>{error}</div>}
            </form>
        </div>
    )
}


export default Log