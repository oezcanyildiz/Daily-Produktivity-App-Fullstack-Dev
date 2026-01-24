import React, { useState } from 'react';
import '../styles/Auth.css';

const Register = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage('Passwörter stimmen nicht überein!');
      return;
    }

    if (password.length < 6) {
      setMessage('Passwort muss mindestens 6 Zeichen lang sein!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setMessage('Registrierung erfolgreich! Du kannst dich jetzt anmelden.');
        setTimeout(() => onSwitchToLogin(), 2000);
      } else {
        setMessage('Registrierung fehlgeschlagen. E-Mail existiert bereits?');
      }
    } catch (error) {
      setMessage('Fehler bei der Registrierung. Ist der Server erreichbar?');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registrieren</h2>
        
        {message && <div className="message-box">{message}</div>}
        
        <div className="form-content">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Dein Name"
            />
          </div>
          
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
          
          <div className="form-group">
            <label>Passwort bestätigen</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
            />
          </div>
          
          <button onClick={handleRegister} className="btn-primary">
            Registrieren
          </button>
        </div>
        
        <p className="switch-page">
          Bereits ein Konto?{' '}
          <span onClick={onSwitchToLogin}>
            Jetzt anmelden
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;