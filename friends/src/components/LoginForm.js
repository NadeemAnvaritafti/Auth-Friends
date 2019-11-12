import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';

const LoginForm = props => {
  
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

            <label>Username:
                <input
                    type="text" 
                    name="username"
                    placeholder="Username" 
                    value={credentials.username} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label>Password:
                <input
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
        </div>
    );
}


export default LoginForm;