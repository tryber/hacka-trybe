import React from 'react';

class FAQquestion extends React.Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <div>
          <h3>{questions.question}</h3>
        </div>
        <div>
          <p>{questions.answer}</p>
        </div>
      </div>
    );
  }
}

export default FAQquestion;
