const API_URL = 'http://localhost:8080/api/auth';

// Login - Sendet Daten an Backend
export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login fehlgeschlagen');
  }

  const data = await response.json();
  
  // Token speichern (falls Backend ein JWT zurückgibt)
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  
  return data;
};

// Register - Sendet Registrierungsdaten an Backend
export const register = async (name, email, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error('Registrierung fehlgeschlagen');
  }

  return await response.json();
};

// Logout - Löscht Token und User-Daten
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Gibt aktuellen Token zurück
export const getToken = () => {
  return localStorage.getItem('token');
};

// Gibt aktuellen User zurück
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

// Prüft ob User eingeloggt ist
export const isAuthenticated = () => {
  return getToken() !== null;
};