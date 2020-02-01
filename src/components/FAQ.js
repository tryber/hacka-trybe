import React from 'react';
import FAQquestion from './FAQquestion';

class FAQ extends React.Component {
  render() {
    const { questionList } = this.props;
    console.log(this.props)
    return (
      <div>
        {questionList.map(element => <FAQquestion questions={element} />)}
      </div>
    );
  }
}

export default FAQ;
