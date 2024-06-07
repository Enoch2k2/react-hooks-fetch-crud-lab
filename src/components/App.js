import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function addQuestion(question){
    setQuestions([...questions, question])
  }

  function removeQuestion(id) {
    const filteredQuestions = questions.filter(question => question.id !== id)
    
    setQuestions(filteredQuestions)
  }

  function updateQuestion(updatedQuestion) {
    // update our state replacing the old question with the updatedQuestion

    // [oldObj, oldObj, updatedQuestion, oldObj]

    const updatedQuestions = questions.map(question => {
      if(question.id === updatedQuestion.id) {
        return updatedQuestion
      }

      return question
    })

    setQuestions(updatedQuestions)
  }

  // what do i need to do a fetch?
  useEffect(() => {
    async function getQuestions() {
      const resp = await fetch('http://localhost:4000/questions')
      const data = await resp.json()
      setQuestions(data)
    }

    getQuestions()
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} removeQuestion={removeQuestion} updateQuestion={updateQuestion} />}
    </main>
  );
}

export default App;
