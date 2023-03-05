import React, { useEffect } from 'react';
import './style.css';
import toast, { Toaster } from 'react-hot-toast';
import useKeyPress from './useKeyPress';

export default function App() {
  const shiftKey = useKeyPress('Shift');
  const enterKey = useKeyPress('Enter');

  useEffect(() => {
    if (shiftKey && enterKey) {
      toast.success('Enter and shift key pressed!');
    }
  }, [shiftKey, enterKey]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <h1>useKeyPress</h1>
        <span>Algochurn</span>

        <p>Read the description for more information</p>
        {/* Write your code here */}
      </div>
    </div>
  );
}
