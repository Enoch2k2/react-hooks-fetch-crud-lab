import React from "react";

function QuestionItem({ question, removeQuestion, updateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleAnswerUpdate(event) {
    fetch("http://localhost:4000/questions/" + question.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"correctIndex": event.target.value})
    })
      .then(resp => resp.json())
      .then(updatedQuestion => updateQuestion(updatedQuestion))
  
  }

  function handleClick() {
    // remove from the database
    fetch('http://localhost:4000/questions/' + id, {
      method: "DELETE"
    })
      .then(resp => removeQuestion(id))   
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerUpdate}>{options}</select>
      </label>
      <button onClick={ handleClick }>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
