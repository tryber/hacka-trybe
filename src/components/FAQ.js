import React from 'react';
import FAQquestion from './FAQquestion';
import ListFilter from './ListFilter';
import './FAQ.css'

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
    }
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect = (value) => {
    this.setState({ select: value })
  }

  renderQuestion = (questionList) => (
    <div className="question-list">
      {questionList.map(element => <FAQquestion questions={element} />)}
    </div>
  )

  render() {
    const { questionList } = this.props;
    const { select } = this.state;
    const filterQuestion = (select) && (questionList.filter((question) => question.tag === select));
    return (
      <div className="faq-page">
        <div className="list-filter">
          <h2>Dúvidas Frequentes</h2>
          <ListFilter select={select} changeSelectedFilter={(value) => this.changeSelect(value)} />
        </div>
        {select && this.renderQuestion(filterQuestion)}
      </div>
    );
  }
}

export default FAQ;
