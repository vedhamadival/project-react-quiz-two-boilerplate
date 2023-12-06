import { Component } from 'react'
import QuestionData from '../resources/quizQuestion.json'

export default class Quiz extends Component {

    constructor(props) {
      super(props)
      this.state = {
         index:0,
         questions:QuestionData
      }
    }

    handlePrevious = () =>{
        this.setState((prevState) => ({ index:prevState.index-1}))
    }

    handleNext = () => {
        this.setState((prevState) => ({index:prevState.index+1}))
    }

    handleQuit = () =>{
        const confirm =window.confirm("Are you sure you want to quit?")
        confirm?this.setState(({index:0})):null
    }

  render() {
    const { index , questions } = this.state;
    const currentQuestion = questions[index];
    const totalQuestions = questions.length;

    return (
      <>
       <div id="quiz">
        <div id='container'>
            <h1>Question</h1>
            <h4>{index+1} of {totalQuestions}</h4>
            <p>{currentQuestion.question}</p>
            <div id="optionA">
            <button>{currentQuestion.optionA}</button>
            <button>{currentQuestion.optionB}</button>
            </div>
            <div id="optionB">
            <button>{currentQuestion.optionC}</button>
            <button>{currentQuestion.optionD}</button>
            </div>
            <div id="select">
                <button id="prev" onClick={this.handlePrevious} disabled={index==0}>Previous</button>
                <button id="next" onClick={this.handleNext} disabled={index==totalQuestions-1}>Next</button>
                <button id="quit" onClick={this.handleQuit}>Quit</button>
            </div>
        </div>
        </div>
      </>
    )
  }
}