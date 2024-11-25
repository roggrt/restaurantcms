// src/pages/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none' 
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;