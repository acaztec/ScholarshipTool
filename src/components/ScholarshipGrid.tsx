import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Scholarship } from '../App';
import './ScholarshipGrid.css';

interface ScholarshipGridProps {
  scholarships: Scholarship[];
}

const ScholarshipGrid: React.FC<ScholarshipGridProps> = ({ scholarships }) => {
  return (
    <div className="scholarship-grid">
      <div className="grid-header">
        <h3 className="results-count">
          {scholarships.length} {scholarships.length === 1 ? 'Scholarship' : 'Scholarships'} Found
        </h3>
        <div className="sort-options">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" className="sort-select">
            <option value="deadline">Deadline</option>
            <option value="amount">Award Amount</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      {scholarships.length === 0 ? (
        <div className="no-results">
          <h4>No scholarships found</h4>
          <p>Try adjusting your search criteria or filters to find more opportunities.</p>
        </div>
      ) : (
        <div className="grid">
          {scholarships.map(scholarship => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScholarshipGrid;