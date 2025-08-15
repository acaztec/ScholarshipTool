import React from 'react';
import { BookOpen, DollarSign, FileText } from 'lucide-react';
import './TipsSidebar.css';

interface Tip {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
}

const tips: Tip[] = [
  {
    id: 1,
    thumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    category: 'Grants & Scholarships',
    title: 'What is the difference between a grant and a scholarship?'
  },
  {
    id: 2,
    thumbnail: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    category: 'Application Tips',
    title: 'How to write a compelling scholarship essay'
  },
  {
    id: 3,
    thumbnail: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    category: 'Financial Aid',
    title: 'Understanding FAFSA requirements and deadlines'
  }
];

const TipsSidebar: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Grants & Scholarships':
        return <DollarSign size={16} />;
      case 'Application Tips':
        return <FileText size={16} />;
      case 'Financial Aid':
        return <BookOpen size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  return (
    <div className="tips-sidebar">
      <div className="tips-header">
        <h3 className="tips-title">Latest Tips</h3>
      </div>
      
      <div className="tips-list">
        {tips.map(tip => (
          <div key={tip.id} className="tip-card">
            <div className="tip-thumbnail">
              <img src={tip.thumbnail} alt={tip.title} />
            </div>
            <div className="tip-content">
              <div className="tip-category">
                {getCategoryIcon(tip.category)}
                <span>{tip.category}</span>
              </div>
              <h4 className="tip-title">{tip.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSidebar;