// src/components/dashboard/DataManagement.tsx
import React from 'react';

const DataManagement: React.FC = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title">Data Management</h3>
        <p className="card-text">
          Manage your data here. You can add, edit, or delete records from the system.
        </p>
        <button className="btn btn-primary">Add New Data</button>
        <button className="btn btn-warning ms-2">Edit Data</button>
        <button className="btn btn-danger ms-2">Delete Data</button>
      </div>
    </div>
  );
};

export default DataManagement;
