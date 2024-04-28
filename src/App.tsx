import React from 'react';
import './App.css';
import './async/services/getData';
import { Card } from './ui/components/Card';

const App: React.FC = () => {
  return (
    <>
      <h2>LAB DATA - FETCHING - TSX</h2>
      <Card />
    </>
  );
};

export default App;