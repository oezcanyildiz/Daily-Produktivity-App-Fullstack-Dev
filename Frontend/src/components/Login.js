import React, { useState } from 'react';
import '../styles/Auth.css';

const Login = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setMessage('Login erfolgreich!');
        // Hier später zur Todo-Seite weiterleiten
      } else {
        setMessage('Login fehlgeschlagen. Bitte überprüfe deine Daten.');
      }
    } catch (error) {
      setMessage('Fehler beim Login. Ist der Server erreichbar?');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Anmelden</h2>
        
        {message && <div className="message-box">{message}</div>}
        
        <div className="form-content">
          <div className="form-group">
            <label>E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="deine@email.de"
            />
          </div>
          
          <div className="form-group">
            <label>Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
            />
          </div>
          
          <button onClick={handleLogin} className="btn-primary">
            Anmelden
          </button>
        </div>
        
        <p className="switch-page">
          Noch kein Konto?{' '}
          <span onClick={onSwitchToRegister}>
            Jetzt registrieren
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;