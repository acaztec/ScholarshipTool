import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Scholarship } from '../App';
import './ScholarshipSearch.css';

interface ScholarshipSearchProps {
  scholarships: Scholarship[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ScholarshipSearch: React.FC<ScholarshipSearchProps> = ({ 
  scholarships, 
  searchTerm, 
  onSearchChange 
}) => {
  return (
    <div className="scholarship-search">
      <div className="search-header">
        <h2 className="search-title">Scholarship results</h2>
        <div className="search-controls">
          <div className="search-input-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort</span>
            <ChevronDown size={16} className="sort-chevron" />
          </div>
        </div>
      </div>

      <div className="scholarship-results">
        {scholarships.map(scholarship => (
          <div key={scholarship.id} className="scholarship-card">
            <div className="scholarship-header">
              <h3 className="scholarship-title">{scholarship.title}</h3>
              <div className="scholarship-status">
                <span className="status-badge closing">Closing today</span>
                <span className="deadline">Deadline: {scholarship.deadline}</span>
              </div>
            </div>
            
            <div className="scholarship-organization">
              {scholarship.organization}
            </div>
            
            <div className="scholarship-amount">
              {scholarship.amount}
            </div>
            
            <div className="scholarship-details">
              <div className="detail-row">
                <span className="detail-label">Required GPA:</span>
                <span className="detail-value">{scholarship.gpaRequirement}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Application Requirements:</span>
                <span className="detail-value">{scholarship.applicationRequirements}</span>
              </div>
            </div>
            
            <div className="scholarship-actions">
              <button className="save-btn">Save</button>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-tips">
        <div className="tips-header">
          <span className="tips-title">LATEST TIPS</span>
        </div>
        <div className="tip-card">
          <div className="tip-image">
            <div className="tip-icon">💡</div>
          </div>
          <div className="tip-content">
            <span className="tip-category">GRANTS & SCHOLARSHIPS</span>
            <h4 className="tip-title">What Is the Difference Between a Scholarship and a Grant?</h4>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-image">
            <div className="tip-icon">📚</div>
          </div>
          <div className="tip-content">
            <span className="tip-category">SCHOLARSHIPS</span>
            <h4 className="tip-title">Scholarship Tips</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSearch;