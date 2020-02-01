import React from 'react';
import FAQ from './components/FAQ'
import faqData from './components/faqData';

function App() {
  return (
    <div className="App">
      <FAQ questionList={faqData} />
    </div>
  );
}

export default App;
