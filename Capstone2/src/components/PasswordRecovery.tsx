import React, { useState } from 'react';

interface PasswordRecoveryProps {
  onClose: () => void;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Password recovery email sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="password-recovery-container">
      <h2>Password Recovery</h2>
      <form className="password-recovery-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Send Recovery Email</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default PasswordRecovery;
