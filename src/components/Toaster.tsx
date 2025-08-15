import React, { useEffect, useState } from 'react';
import { X, Clock } from 'lucide-react';
import './Toaster.css';

interface ToasterProps {
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toaster: React.FC<ToasterProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return <Clock size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  return (
    <div className={`toaster toaster-${type} ${isVisible ? 'toaster-visible' : ''}`}>
      <div className="toaster-content">
        <div className="toaster-icon">
          {getIcon()}
        </div>
        <span className="toaster-message">{message}</span>
        <button className="toaster-close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toaster;