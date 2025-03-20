import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, MapPin } from 'lucide-react';
import { Issue } from '../types';

interface IssueCardProps {
  issue: Issue;
  onVote: (issueId: string) => void;
}

const statusColors = {
  'Reported': 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Resolved': 'bg-green-100 text-green-800'
};

export default function IssueCard({ issue, onVote }: IssueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {issue.imageUrl && (
        <img 
          src={issue.imageUrl} 
          alt={issue.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
          <span className={`px-2 py-1 rounded-full text-sm ${statusColors[issue.status]}`}>
            {issue.status}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{issue.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {`${issue.location.coordinates[1].toFixed(6)}, ${issue.location.coordinates[0].toFixed(6)}`}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => onVote(issue.id)}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{issue.votes} votes</span>
          </button>
          
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(issue.createdAt), { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
}