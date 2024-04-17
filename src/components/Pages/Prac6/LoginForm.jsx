import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const authenticateUser = async (email, password) => {
        // Эмуляция запроса на сервер для аутентификации
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'user@example.com' && password === 'password') {
                    resolve({ token: 'mock_access_token' });
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1000);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await authenticateUser(email, password);
            // Сохраняем токен доступа в localStorage
            localStorage.setItem('accessToken', result.token);
            // Дополнительные действия при успешной аутентификации
            console.log('Authentication successful:', result);
        } catch (error) {
            console.error('Authentication error:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
