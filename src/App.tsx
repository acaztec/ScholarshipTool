import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import ScholarshipSearch from './components/ScholarshipSearch';
import './App.css';

export interface Scholarship {
  id: number;
  title: string;
  organization: string;
  amount: string;
  deadline: string;
  status: string;
  gpaRequirement: string;
  applicationRequirements: string;
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    title: "American Agri-Women Helen Whitmore Memorial Convention...",
    organization: "American Agri-Women",
    amount: "$500",
    deadline: "Today",
    status: "Closing today",
    gpaRequirement: "Any",
    applicationRequirements: "Essay(s)"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    month: '',
    education: '2-Year Undergrad Schools'
  });

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main className="main-content">
        <div className="container">
          <div className="content-layout">
            <Sidebar 
              selectedFilters={selectedFilters}
              onFiltersChange={setSelectedFilters}
            />
            <ScholarshipSearch 
              scholarships={scholarships}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;