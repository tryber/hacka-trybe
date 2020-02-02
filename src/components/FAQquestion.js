import React from 'react';
import './FAQquestion.css';

class FAQquestion extends React.Component {
  render() {
    const { questions, indexSelect, index, change } = this.props;
    return (
      <div className='FAQquestion'>
        <div value={index} onClick={() => change(index)} className="questions-question">
          <label>{questions.question}</label>
        </div>
        {(indexSelect === index) && <div className="questions-answer">
          <p>{questions.answer}</p>
        </div>}
      </div>
    );
  }
}

export default FAQquestion;
