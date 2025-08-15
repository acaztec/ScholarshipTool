import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Scholarship } from '../App';
import './ScholarshipGrid.css';

interface ScholarshipGridProps {
  scholarships: Scholarship[];
  onSaveScholarship: (scholarship: Scholarship) => void;
}

const ScholarshipGrid: React.FC<ScholarshipGridProps> = ({ scholarships, onSaveScholarship }) => {
  const [sortBy, setSortBy] = React.useState('deadline');
  
  const sortedScholarships = React.useMemo(() => {
    const sorted = [...scholarships];
    
    switch (sortBy) {
      case 'ending-soon':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          return dateA.getTime() - dateB.getTime();
        });
      case 'highest-amount':
        return sorted.sort((a, b) => {
          const amountA = parseInt(a.amount.replace(/[$,]/g, ''));
          const amountB = parseInt(b.amount.replace(/[$,]/g, ''));
          return amountB - amountA;
        });
      case 'deadline':
      default:
        return sorted.sort((a, b) => {
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          return dateA.getTime() - dateB.getTime();
        });
    }
  }, [scholarships, sortBy]);

  return (
    <div className="scholarship-grid">
      <div className="grid-header">
        <h3 className="results-count">
          {sortedScholarships.length} {sortedScholarships.length === 1 ? 'Scholarship' : 'Scholarships'} Found
        </h3>
        <div className="sort-options">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="deadline">Deadline</option>
            <option value="ending-soon">Ending Soon</option>
            <option value="highest-amount">Highest Dollar Amount</option>
          </select>
        </div>
      </div>
      
      {sortedScholarships.length === 0 ? (
        <div className="no-results">
          <h4>No scholarships found</h4>
          <p>Try adjusting your search criteria or filters to find more opportunities.</p>
        </div>
      ) : (
        <div className="grid">
          {sortedScholarships.map(scholarship => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} onSave={onSaveScholarship} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScholarshipGrid;