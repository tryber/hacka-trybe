import React from 'react';
import ImageNavDivis from './components/ImageNavDiv';
import faqData from './components/faqData.js';
import FAQ from './components/FAQ.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <FAQ questionList={faqData}/>
    </div>
  );
}

export default App;
