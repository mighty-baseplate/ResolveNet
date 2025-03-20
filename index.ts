export interface User {
  id: string;
  name: string;
  email: string;
  role: 'resident' | 'authority';
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  imageUrl?: string;
  status: 'Reported' | 'In Progress' | 'Resolved';
  votes: number;
  createdAt: string;
  createdBy: User;
}