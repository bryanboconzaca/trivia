import React, { Component } from 'react';



class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightAnswer: false
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(clickAnswer, correctAns) {
    console.log(clickAnswer, correctAns)
    if (correctAns == clickAnswer) {
      this.setState({rightAnswer: true})
    }
    else (
      this.setState({rightAnswer: false})
    )
  }
  showRightAns() {
    if (this.state.rightAnswer) {
      return <text>Correct</text>
    }
    else {
      return <text>INCORRECT</text>
  }
  }
  render() {
    return (
      <div>
        <div>
          {this.props.question}
          <button onClick={() => {
            this.onClick(this.props.answer1, this.props.correctAns)
          }}>{this.props.answer1}</button>
          <button onClick={() => {
            this.onClick(this.props.answer2, this.props.correctAns)
          }}>{this.props.answer2}</button>

        </div>{
        this.showRightAns()
        }
        </div>
    );
  }
}

export default Question;