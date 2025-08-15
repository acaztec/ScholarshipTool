import React from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import './FilterSidebar.css';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedAmount: string;
  onAmountChange: (amount: string) => void;
  renewableOnly: boolean;
  onRenewableChange: (renewable: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedAmount,
  onAmountChange,
  renewableOnly,
  onRenewableChange,
}) => {
  const clearAllFilters = () => {
    onCategoryChange('');
    onAmountChange('');
    onRenewableChange(false);
  };

  const hasActiveFilters = selectedCategory || selectedAmount || renewableOnly;

  return (
    <div className="filter-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <Filter size={20} />
          <h3>Refine by:</h3>
        </div>
        {hasActiveFilters && (
          <button className="clear-filters" onClick={clearAllFilters}>
            <X size={16} />
            Clear All
          </button>
        )}
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Month</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Application Deadline Month</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Education</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">School Type</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Grade</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Full-time/Part-time</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Field of Study</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">GPA</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">3.5 and above</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">3.0 - 3.4</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">2.5 - 2.9</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Below 2.5</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Eligibility</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Citizenship</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">State</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Race & Ethnicity</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Athletics & Extracurriculars</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Military</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Ability</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Miscellaneous</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Requirements</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Achievement & Need</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="filter-label">Application Requirements</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Amount</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="amount"
              value=""
              checked={selectedAmount === ''}
              onChange={(e) => onAmountChange(e.target.value)}
            />
            <span className="filter-label">Any Amount</span>
          </label>
          <label className="filter-option">
            <input
              type="radio"
              name="amount"
              value="under-10k"
              checked={selectedAmount === 'under-10k'}
              onChange={(e) => onAmountChange(e.target.value)}
            />
            <span className="filter-label">Under $10,000</span>
          </label>
          <label className="filter-option">
            <input
              type="radio"
              name="amount"
              value="10k-20k"
              checked={selectedAmount === '10k-20k'}
              onChange={(e) => onAmountChange(e.target.value)}
            />
            <span className="filter-label">$10,000 - $20,000</span>
          </label>
          <label className="filter-option">
            <input
              type="radio"
              name="amount"
              value="over-20k"
              checked={selectedAmount === 'over-20k'}
              onChange={(e) => onAmountChange(e.target.value)}
            />
            <span className="filter-label">Over $20,000</span>
          </label>
        </div>
      </div>

      <div className="filter-summary">
        <h4 className="summary-title">Quick Stats</h4>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Total Scholarships</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$135K</span>
            <span className="stat-label">Total Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;