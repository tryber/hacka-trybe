import React from 'react';

class FAQanswers extends React.Component {
  render() {
    const { answers } = this.props.answers;
    return (
      <div>
        {answers.map(answer => <p>{answer}</p>)}
      </div>
    )
  }
}

export default FAQanswers;
