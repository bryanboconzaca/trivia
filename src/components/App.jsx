import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question"

class App extends Component {

  render() {
    return (
      <div>
        <Question
          question="What day is ?"
          answer1="day"
          answer2="tomorrow" 
          correctAns="day" />
        <Question
          question="What day is Christmas?"
          answer1="day"
          answer2="tmmr" />
        <Question
          question="What day is Christmas?"
          answer1="day"
          answer2="tmmr" />
        <Question
          question="What day is Christmas?"
          answer1="day"
          answer2="tmmr" />
      </div>

    );
  }
}

export default App;


{/* <div className="app">
Trivia!
hi

</div> */}