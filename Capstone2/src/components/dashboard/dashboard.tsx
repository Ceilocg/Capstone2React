// src/components/dashboard/dashboard.tsx
import React, { useState } from 'react';
import Notifications from './Notifications';
import UserManagement from './UserManagement';
import FormTemplates from './FormTemplates';
import ReportGeneration from './ReportGeneration';
import DataManagement from './DataManagement';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userEmail, onLogout }) => {
  const [activeComponent, setActiveComponent] = useState<string>('dashboard');
  const { hasPermission } = useUserContext();  // Use permissions from context

  // Render components based on activeComponent and permissions
  const renderComponent = () => {
    switch (activeComponent) {
      case 'userManagement':
        return hasPermission(Permissions.AddUser) ? <UserManagement /> : <p>Access Denied</p>;
      case 'formTemplates':
        return hasPermission(Permissions.ViewFormTemplates) ? <FormTemplates /> : <p>Access Denied</p>;
      case 'reportGeneration':
        return <ReportGeneration />;
      case 'dataManagement':
        return hasPermission(Permissions.ManageData) ? <DataManagement /> : <p>Access Denied</p>;
      default:
        return <h2>Dashboard Home</h2>;
    }
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">3</span>
            </a>
            <Notifications />
          </li>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="https://via.placeholder.com/150" className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              <a href="#" className="d-block">{userEmail}</a>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setActiveComponent('dashboard')}>
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              {hasPermission(Permissions.AddUser) && (
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={() => setActiveComponent('userManagement')}>
                    <i className="nav-icon fas fa-users"></i>
                    <p>User Management</p>
                  </a>
                </li>
              )}
              {hasPermission(Permissions.ViewFormTemplates) && (
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={() => setActiveComponent('formTemplates')}>
                    <i className="nav-icon fas fa-edit"></i>
                    <p>Form Templates</p>
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setActiveComponent('reportGeneration')}>
                  <i className="nav-icon fas fa-file-alt"></i>
                  <p>Report Generation</p>
                </a>
              </li>
              {hasPermission(Permissions.ManageData) && (
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={() => setActiveComponent('dataManagement')}>
                    <i className="nav-icon fas fa-database"></i>
                    <p>Data Management</p>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">{renderComponent()}</div>
        </section>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">Contact</div>
        <strong>
          Copyright &copy; 2024
        </strong> Valentina B. Boncan National High School. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
