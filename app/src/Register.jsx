// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleRegister = async () => {
        try {
            if (!email || !password) {
                console.error('Please provide both email and password');
                return;
            }

            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
            });

            if (response.status === 201) {
                console.log('Registration successful');
                navigate('/login')
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <label className="block mb-2">
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full"
                />
            </label>
            <label className="block mb-2">
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full"
                />
            </label>
            <button
                onClick={handleRegister}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
            >
                Register
            </button>
        </div>
    );
};

export default Register;