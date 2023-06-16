import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {

  const [statuses, setStatuses] = useState([
    {
        id: 1,
        question: "How many minutes should I practice?",
        answer: "As a beginner, we suggest that you practice 20 minutes, 5-6 days a week.", 
        display: false
    },
    {
        id: 2,
        question: "How will you know that I am practicing?",
        answer: "We will have weekly playing tests. We will know whether or not you are practicing.",
        display: false
    },
    {
        id: 3,
        question: "Playing in front of everyone makes me nervous. May I play my test in private?",
        answer: "You are now a musician. Musicians perform in front of others. This is good practice for your future performances!",
        display: false
    }
]);

  const toggleDisplay = (id) => {
    const questionStatus = statuses.map((status) => status.id === id ? { ...status, display: !status.display } : status);
    setStatuses(questionStatus)
    console.log(statuses)
    
  }

  return (
    <>
      <div className="App">
        <div className="contentWrapper">
          <h1>Beginning Band FAQ</h1>
          {statuses.map(status => (
            <List key={status.id}
                  status={status}
                  toggleDisplay={toggleDisplay}
                  statuses={statuses}
                  setStatuses={setStatuses} />
          )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
