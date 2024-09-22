import React, { useState } from 'react';

const ReportGeneration: React.FC = () => {
  const [reports, setReports] = useState<string[]>([]);

  const generateReport = () => {
    setReports(['Report 1: Details', 'Report 2: Details']);
  };

  return (
    <div>
      <h2>Report Generation</h2>
      <button className="btn btn-primary" onClick={generateReport}>
        Generate Reports
      </button>
      {reports.length > 0 && (
        <ul className="mt-3">
          {reports.map((report, index) => (
            <li key={index}>{report}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportGeneration;
