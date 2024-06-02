import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/login', {
                user_id: userId,
                password
            });
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/'); // Navigate to the home page after successful login
        } catch (err) {
            setError('Tên người dùng hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h2>Login to thread</h2>
                {error && <p className="error">{error}</p>}
                <div>
                    <label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                            placeholder="@Username"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
