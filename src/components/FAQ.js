import React from 'react';
import FAQquestion from './FAQquestion';
import ListFilter from './ListFilter';

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
    <div>
      <h2>Perguntas</h2>
      {questionList.map(element => <FAQquestion questions={element} />)}
    </div>
  )

  render() {
    const { questionList } = this.props;
    console.log(questionList)
    const { select } = this.state;
    const filterQuestion = (select)&&(questionList.filter((question) => question.tag === select));
    return (
      <div>
        <h2>O que deseja pesquisar?</h2>
        <ListFilter select={select} changeSelectedFilter={(value) => this.changeSelect(value)} />
        {select && this.renderQuestion(filterQuestion)}
      </div>
    );
  }
}

export default FAQ;
