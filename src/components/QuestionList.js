import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, removeQuestion, updateQuestion }) {

  const questionItems = questions.map(question => <QuestionItem key={question.id} question={question} removeQuestion={removeQuestion} updateQuestion={updateQuestion} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questionItems }</ul>
    </section>
  );
}

export default QuestionList;
