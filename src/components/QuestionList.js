import React from "react"
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteClick, onChangeAnswer}) {

  const myQuestions = questions.map(question =>
    <QuestionItem
      key= {question.id}
      question = {question}
      onDeleteClick={onDeleteClick}
      onChangeAnswer={onChangeAnswer}
    />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{myQuestions}</ul>
    </section>
  );
}

export default QuestionList;
