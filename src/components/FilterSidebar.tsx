import React from 'react';
import { Filter, X } from 'lucide-react';
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
  const categories = [
    'Merit-Based',
    'Need-Based',
    'Field-Specific',
    'Demographic',
    'Athletic',
    'Service',
    'International',
    'Transfer'
  ];

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
          <h3>Filter Scholarships</h3>
        </div>
        {hasActiveFilters && (
          <button className="clear-filters" onClick={clearAllFilters}>
            <X size={16} />
            Clear All
          </button>
        )}
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Category</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={(e) => onCategoryChange(e.target.value)}
            />
            <span className="filter-label">All Categories</span>
          </label>
          {categories.map(category => (
            <label key={category} className="filter-option">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <span className="filter-label">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Award Amount</h4>
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

      <div className="filter-section">
        <h4 className="filter-title">Additional Options</h4>
        <div className="filter-options">
          <label className="filter-option checkbox-option">
            <input
              type="checkbox"
              checked={renewableOnly}
              onChange={(e) => onRenewableChange(e.target.checked)}
            />
            <span className="filter-label">Renewable Only</span>
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