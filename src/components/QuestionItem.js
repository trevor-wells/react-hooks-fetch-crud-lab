import React from "react"

export default function QuestionItem({ question, onDeleteClick, onChangeAnswer}) {

  const { id, prompt, answers, correctIndex } = question

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ))

  function handleDeleteClick(){
    onDeleteClick(question)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
  }

  function handleChange(event){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({correctIndex: event.target.value})
    })
    .then(r => r.json())
    .then(data => onChangeAnswer(data))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  )
}