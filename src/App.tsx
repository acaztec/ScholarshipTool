import React, { useState } from 'react';
import Header from './components/Header';
import ScholarshipGrid from './components/ScholarshipGrid';
import FilterSidebar from './components/FilterSidebar';
import Footer from './components/Footer';
import './App.css';

export interface Scholarship {
  id: number;
  title: string;
  description: string;
  amount: string;
  deadline: string;
  category: string;
  requirements: string[];
  renewable: boolean;
  gpaRequirement?: string;
  fieldOfStudy?: string;
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    title: "Presidential Merit Scholarship",
    description: "Awarded to incoming freshmen with exceptional academic achievement and leadership potential.",
    amount: "$25,000",
    deadline: "March 1, 2024",
    category: "Merit-Based",
    requirements: [
      "Minimum 3.8 GPA",
      "SAT score of 1400+ or ACT score of 32+",
      "Demonstrated leadership experience",
      "Community service involvement"
    ],
    renewable: true,
    gpaRequirement: "3.5",
    fieldOfStudy: "All majors"
  },
  {
    id: 2,
    title: "Need-Based Grant",
    description: "Financial assistance for students demonstrating significant financial need.",
    amount: "$15,000",
    deadline: "April 15, 2024",
    category: "Need-Based",
    requirements: [
      "Complete FAFSA application",
      "Demonstrate financial need",
      "Maintain satisfactory academic progress",
      "Enrolled full-time"
    ],
    renewable: true,
    gpaRequirement: "2.5",
    fieldOfStudy: "All majors"
  },
  {
    id: 3,
    title: "STEM Excellence Award",
    description: "Supporting students pursuing degrees in Science, Technology, Engineering, and Mathematics.",
    amount: "$20,000",
    deadline: "February 15, 2024",
    category: "Field-Specific",
    requirements: [
      "Declared STEM major",
      "Minimum 3.5 GPA in math and science courses",
      "Research experience preferred",
      "Faculty recommendation required"
    ],
    renewable: true,
    gpaRequirement: "3.3",
    fieldOfStudy: "STEM fields"
  },
  {
    id: 4,
    title: "First-Generation College Student Scholarship",
    description: "Supporting students who are the first in their family to attend college.",
    amount: "$12,500",
    deadline: "March 31, 2024",
    category: "Demographic",
    requirements: [
      "First-generation college student",
      "Minimum 3.0 GPA",
      "Essay submission required",
      "Financial need consideration"
    ],
    renewable: true,
    gpaRequirement: "3.0",
    fieldOfStudy: "All majors"
  },
  {
    id: 5,
    title: "Athletic Achievement Scholarship",
    description: "Recognizing outstanding athletic performance and academic excellence.",
    amount: "$18,000",
    deadline: "January 31, 2024",
    category: "Athletic",
    requirements: [
      "Varsity sport participation",
      "Minimum 3.2 GPA",
      "Coach recommendation",
      "Commitment to team participation"
    ],
    renewable: true,
    gpaRequirement: "3.0",
    fieldOfStudy: "All majors"
  },
  {
    id: 6,
    title: "Community Service Leadership Award",
    description: "Honoring students with exceptional commitment to community service and social impact.",
    amount: "$10,000",
    deadline: "April 1, 2024",
    category: "Service",
    requirements: [
      "200+ hours of community service",
      "Leadership role in service organization",
      "Minimum 3.0 GPA",
      "Service portfolio submission"
    ],
    renewable: true,
    gpaRequirement: "3.0",
    fieldOfStudy: "All majors"
  },
  {
    id: 7,
    title: "International Student Excellence Grant",
    description: "Supporting outstanding international students in their academic journey.",
    amount: "$22,000",
    deadline: "February 28, 2024",
    category: "International",
    requirements: [
      "International student status",
      "Minimum 3.5 GPA or equivalent",
      "English proficiency scores",
      "Cultural contribution essay"
    ],
    renewable: true,
    gpaRequirement: "3.3",
    fieldOfStudy: "All majors"
  },
  {
    id: 8,
    title: "Transfer Student Success Scholarship",
    description: "Assisting transfer students in their transition and continued academic success.",
    amount: "$7,500",
    deadline: "May 1, 2024",
    category: "Transfer",
    requirements: [
      "Transfer student with 24+ credits",
      "Minimum 3.25 GPA from previous institution",
      "Academic transcript review",
      "Enrollment verification"
    ],
    renewable: false,
    fieldOfStudy: "All majors"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [renewableOnly, setRenewableOnly] = useState(false);

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || scholarship.category === selectedCategory;
    
    const matchesAmount = !selectedAmount || (() => {
      const amount = parseInt(scholarship.amount.replace(/[$,]/g, ''));
      switch (selectedAmount) {
        case 'under-10k': return amount < 10000;
        case '10k-20k': return amount >= 10000 && amount <= 20000;
        case 'over-20k': return amount > 20000;
        default: return true;
      }
    })();
    
    const matchesRenewable = !renewableOnly || scholarship.renewable;
    
    return matchesSearch && matchesCategory && matchesAmount && matchesRenewable;
  });

  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="main-content">
        <div className="content-wrapper">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedAmount={selectedAmount}
            onAmountChange={setSelectedAmount}
            renewableOnly={renewableOnly}
            onRenewableChange={setRenewableOnly}
          />
          <ScholarshipGrid scholarships={filteredScholarships} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;