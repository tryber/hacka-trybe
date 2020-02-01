import React from 'react';

class FAQquestions extends React.Component {
  render() {
    const { questions } = this.props.questions;
    return (
      <div>
        {questions.map(question => <h4>{question}</h4>)}
      </div>
    )
  }
}

export default FAQquestions;
