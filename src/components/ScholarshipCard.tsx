import React from 'react';
import { Calendar, DollarSign, GraduationCap, RefreshCw, ExternalLink } from 'lucide-react';
import { Scholarship } from '../App';
import './ScholarshipCard.css';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Merit-Based': '#10b981',
      'Need-Based': '#3b82f6',
      'Field-Specific': '#8b5cf6',
      'Demographic': '#f59e0b',
      'Athletic': '#ef4444',
      'Service': '#06b6d4',
      'International': '#84cc16',
      'Transfer': '#f97316'
    };
    return colors[category as keyof typeof colors] || '#6b7280';
  };

  return (
    <div className="scholarship-card">
      <div className="card-header">
        <div 
          className="category-badge"
          style={{ backgroundColor: getCategoryColor(scholarship.category) }}
        >
          {scholarship.category}
        </div>
        {scholarship.renewable && (
          <div className="renewable-badge">
            <RefreshCw size={14} />
            Renewable
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 className="scholarship-title">{scholarship.title}</h3>
        <p className="scholarship-description">{scholarship.description}</p>

        <div className="scholarship-details">
          <div className="detail-item">
            <DollarSign size={16} className="detail-icon" />
            <span className="detail-label">Award Amount:</span>
            <span className="detail-value amount">{scholarship.amount}</span>
          </div>

          <div className="detail-item">
            <Calendar size={16} className="detail-icon" />
            <span className="detail-label">Deadline:</span>
            <span className="detail-value">{scholarship.deadline}</span>
          </div>

          {scholarship.gpaRequirement && (
            <div className="detail-item">
              <GraduationCap size={16} className="detail-icon" />
              <span className="detail-label">Min GPA:</span>
              <span className="detail-value">{scholarship.gpaRequirement}</span>
            </div>
          )}

          {scholarship.fieldOfStudy && (
            <div className="detail-item">
              <span className="detail-label">Field:</span>
              <span className="detail-value">{scholarship.fieldOfStudy}</span>
            </div>
          )}
        </div>

        <div className="requirements-section">
          <h4 className="requirements-title">Requirements:</h4>
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
        <button className="btn btn-primary">
          Apply Now
          <ExternalLink size={16} />
        </button>
        <button className="btn btn-secondary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;