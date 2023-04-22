import React, { useState, useEffect } from "react"
import AdminNavBar from "./AdminNavBar"
import QuestionForm from "./QuestionForm"
import QuestionList from "./QuestionList"

function App() {
  const [page, setPage] = useState("List")

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
  },[])

  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(deletedQuestion){
    setQuestions(questions.filter(question => question.id !== deletedQuestion.id))
  }

function handleChangeAnswer(alteredQuestion){
  setQuestions(questions.map(question => question.id === alteredQuestion.id ? {...question, correctIndex: alteredQuestion.correctIndex} : question))
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteClick={handleDelete} onChangeAnswer={handleChangeAnswer}/>}
    </main>
  );
}

export default App;
