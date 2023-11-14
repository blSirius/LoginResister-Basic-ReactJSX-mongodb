import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            if (!email || !password) {
                console.error('Please provide both email and password');
                // Handle the error, e.g., display an error message to the user
                return;
            }

            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
            });

            if (response.status === 201) {
                console.log('Registration successful');
                // You can redirect to a login page or perform other actions here
            } else {
                console.error('Registration failed');
                // Handle the error, e.g., display an error message to the user
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle the error, e.g., display an error message to the user
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
