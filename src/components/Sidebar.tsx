import React from 'react';
import { ChevronDown, X } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  selectedFilters: {
    month: string;
    education: string;
  };
  onFiltersChange: (filters: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedFilters, onFiltersChange }) => {
  const clearAllFilters = () => {
    onFiltersChange({ month: '', education: '' });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Refine by:</h3>
        <button className="clear-all" onClick={clearAllFilters}>
          Clear all (2)
        </button>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-icon">📅</span>
          <span className="filter-title">MONTH</span>
          <ChevronDown size={16} className="chevron" />
        </div>
        <div className="filter-content">
          <select 
            className="filter-select"
            value={selectedFilters.month}
            onChange={(e) => onFiltersChange({...selectedFilters, month: e.target.value})}
          >
            <option value="">Application Deadline Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-icon">🎓</span>
          <span className="filter-title">EDUCATION</span>
          <ChevronDown size={16} className="chevron" />
        </div>
        <div className="filter-content">
          <div className="selected-filter">
            <span>2-Year Undergrad Schools</span>
            <X size={16} className="remove-filter" />
          </div>
          <div className="grade-section">
            <label className="grade-label">Grade</label>
            <select className="grade-select">
              <option>Select Grade</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;