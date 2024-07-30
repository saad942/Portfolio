import React from 'react';
import './Alert.css'; // Ensure this path is correct

const Alert = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="alert-close">×</button>
    </div>
  );
};

export default Alert;
