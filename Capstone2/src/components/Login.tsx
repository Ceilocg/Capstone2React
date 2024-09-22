import React, { useState } from 'react';
import schoolLogo from '../assets/images/school-logo.png'; // Adjust the path accordingly

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onStudentAccess: () => void;
  onForgotPassword: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onStudentAccess, onForgotPassword }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="logo-title-container">
        <img 
          src={schoolLogo} 
          alt="Valentina B. Boncan National High School Logo" 
          className="school-logo" 
          style={{ width: '150px', height: 'auto' }} 
        />
        <h2 className="login-title">Valentina B. Boncan NHS</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="login-button" type="submit">Login</button>
      </form>

      <p className="forgot-password-link" onClick={onForgotPassword}>
        Forgot Password?
      </p>

      <hr className="separator" />

      <button className="student-access-button" onClick={onStudentAccess}>
        I am a Student
      </button>
    </div>
  );
};

export default Login;
