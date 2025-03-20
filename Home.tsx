import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import IssueCard from '../components/IssueCard';
import { Issue } from '../types';

// Temporary mock data
const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Broken Street Light',
    description: 'Street light at the corner of Main St. and 1st Ave. has been out for a week.',
    location: {
      type: 'Point',
      coordinates: [-73.935242, 40.730610], // New York coordinates
    },
    imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1000',
    status: 'Reported',
    votes: 15,
    createdAt: '2024-02-28T12:00:00Z',
    createdBy: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'resident'
    }
  },
  {
    id: '2',
    title: 'Pothole on Main Street',
    description: 'Large pothole causing traffic and potential vehicle damage.',
    location: {
      type: 'Point',
      coordinates: [-73.935242, 40.730610],
    },
    imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1000',
    status: 'In Progress',
    votes: 25,
    createdAt: '2024-02-27T15:30:00Z',
    createdBy: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'resident'
    }
  }
];

export default function Home() {
  const [issues] = useState<Issue[]>(mockIssues);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredIssues = statusFilter === 'all' 
    ? issues 
    : issues.filter(issue => issue.status === statusFilter);

  const handleVote = (issueId: string) => {
    // TODO: Implement voting functionality
    console.log('Voted for issue:', issueId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Issues</h1>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md py-1 px-2 text-gray-700"
          >
            <option value="all">All Issues</option>
            <option value="Reported">Reported</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIssues.map(issue => (
          <IssueCard 
            key={issue.id} 
            issue={issue} 
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}