import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/dashboard/dashboard';
import StudentRequestForm from './components/StudentRequestForm';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  // Handles login
  const handleLogin = (email: string, password: string) => {
    // Dummy authentication (replace with real logic)
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setUserEmail(email);
    } else {
      alert('Invalid credentials!');
    }
  };

  // Handles logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  // Handles student access (bypass login for students)
  const handleStudentAccess = () => {
    setIsStudent(true);
  };

  // Handles forgot password (simple alert for now)
  const handleForgotPassword = () => {
    alert('Password recovery flow triggered!');
  };

  return (
    <div>
      {isStudent ? (
        <StudentRequestForm />
      ) : isLoggedIn ? (
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      ) : (
        <Login
          onLogin={handleLogin}
          onStudentAccess={handleStudentAccess}
          onForgotPassword={handleForgotPassword}
        />
      )}
    </div>
  );
};

export default App;
