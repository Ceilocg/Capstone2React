import React, { useState } from 'react';

const StudentRequestForm: React.FC = () => {
  const [request, setRequest] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Request submitted successfully!');
    setRequest('');
  };

  return (
    <div className="request-form-container">
      <h2 className="form-title">Submit Your Request</h2>
      <form className="request-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Request</label>
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="textarea-field"
            required
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default StudentRequestForm;
