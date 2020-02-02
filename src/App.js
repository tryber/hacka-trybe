import React from 'react';
import FAQ from './components/FAQ'
import faqData from './components/faqData';
import './App.css'

function App() {
  return (
    <div>
      <FAQ questionList={faqData} />
    </div>
  );
}

export default App;