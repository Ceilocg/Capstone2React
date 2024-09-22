import React from 'react';

const Notifications: React.FC = () => {
  const notifications = [
    { id: 1, message: 'New user registered!' },
    { id: 2, message: 'Report generated successfully.' },
    { id: 3, message: 'System update available.' },
  ];

  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
      {notifications.map((notification) => (
        <a href="#" className="dropdown-item" key={notification.id}>
          {notification.message}
        </a>
      ))}
    </div>
  );
};

export default Notifications;
