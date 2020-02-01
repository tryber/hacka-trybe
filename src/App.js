import React from 'react';
import FAQ from './components/FAQ'
import faqData from './components/faqData';
import ImageNavDivis from './components/ImageNavDiv'
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <FAQ questionList={faqData} /> */}
      <ImageNavDivis />
    </div>
  );
}

export default App;
