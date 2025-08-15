import React from 'react';
import { Calendar, DollarSign, GraduationCap, Bookmark } from 'lucide-react';
import { Scholarship } from '../App';
import './ScholarshipCard.css';

interface ScholarshipCardProps {
  scholarship: Scholarship;
  onSave: (scholarship: Scholarship) => void;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship, onSave }) => {
  const handleSave = () => {
    onSave(scholarship);
  };

  return (
    <div className="scholarship-card">
      <div className="card-content">
        <h3 className="scholarship-title">{scholarship.title}</h3>
        <p className="scholarship-description">{scholarship.description}</p>

        <div className="scholarship-details">
          <div className="detail-item">
            <DollarSign size={16} className="detail-icon" />
            <span className="detail-label">Amount:</span>
            <span className="detail-value amount">{scholarship.amount}</span>
          </div>

          {scholarship.gpaRequirement && (
            <div className="detail-item">
              <GraduationCap size={16} className="detail-icon" />
              <span className="detail-label">Required GPA:</span>
              <span className="detail-value">{scholarship.gpaRequirement}</span>
            </div>
          )}

          <div className="detail-item">
            <Calendar size={16} className="detail-icon" />
            <span className="detail-label">Deadline:</span>
            <span className="detail-value">{scholarship.deadline}</span>
          </div>
        </div>

        <div className="requirements-section">
          <h4 className="requirements-title">Application Requirements:</h4>
          <ul className="requirements-list">
            {scholarship.requirements.map((requirement, index) => (
              <li key={index} className="requirement-item">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn btn-save" onClick={handleSave}>
          <Bookmark size={16} />
          Save
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;