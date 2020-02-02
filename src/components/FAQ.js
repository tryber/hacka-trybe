import React from 'react';
import FAQquestion from './FAQquestion';
import ListFilter from './ListFilter';
import './FAQ.css'

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'Dicas',
      indexSelect: 0,
    }
    this.changeSelect = this.changeSelect.bind(this);
    this.changeindexSelect = this.changeSelect.bind(this);
  }

  changeSelect = (value) => {
    this.setState({ select: value })
  }

  changeIndexSelect = (value) => {
    this.setState({ indexSelect: value })
  }

  renderQuestion = (questionList, indexSelect) => (
    <div className="question-list">
      {questionList.map((element, index) => <FAQquestion index={index} change={(value) => this.changeIndexSelect(value)} indexSelect={indexSelect} questions={element} />)}
    </div>
  )


  render() {
    const { questionList } = this.props;
    const { select, indexSelect } = this.state;
    const filterQuestion = (select) && (questionList.filter((question) => question.tag === select));
    return (
      <div className="faq-page">
        <div className="list-filter">
          <ListFilter select={select} changeSelectedFilter={(value) => this.changeSelect(value)} />
        </div>
        {select && this.renderQuestion(filterQuestion, indexSelect)}
      </div>
    );
  }
}

export default FAQ;
