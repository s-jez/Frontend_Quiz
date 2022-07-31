import { questions } from "./questions";
let quizQuestion = document.querySelector(".quiz__question");
let quizQuestionID = 0;
let currentQuestion = [];

console.log("All questions []: ", questions);
export const newQuestion = () => {
  let answerA = document.getElementById("answerA");
  let answerB = document.getElementById("answerB");
  let answerC = document.getElementById("answerC");
  const p = document.createElement("p");
  questions.forEach((quiz) => {
    if (quiz.id === quizQuestionID) {
      currentQuestion.push(quiz);
    }
  });
  console.log(currentQuestion);
  p.textContent = currentQuestion[quizQuestionID].question;
  answerA.placeholder = currentQuestion[quizQuestionID].answerA;
  answerB.placeholder = currentQuestion[quizQuestionID].answerB;
  answerC.placeholder = currentQuestion[quizQuestionID].answerC;
  quizQuestion.appendChild(p);
};
