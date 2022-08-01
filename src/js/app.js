import { questions } from "./questions";
const quizQuestion = document.querySelector(".quiz__question");
let quizQuestionID = 0;
let maxQuizQuestionID = 9;
let currentQuestion = [];
let buttonClickedAnswer = "";
let countCorrectAnswers = 0;
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");

console.log("All questions []: ", questions);
export const newQuestion = () => {
  quizQuestion.innerHTML = "";
  const p = document.createElement("p");
  const span = document.createElement("span");
  questions.forEach((quiz) => {
    if (quiz.id === quizQuestionID) {
      currentQuestion.push(quiz);
    }
  });
  console.log(currentQuestion);
  if (maxQuizQuestionID === quizQuestionID) {
    quizQuestion.textContent = "Thank's for your game!";
    console.log(countCorrectAnswers);
    answerA.remove();
    answerB.remove();
    answerC.remove();
    return;
  }
  span.textContent = currentQuestion[quizQuestionID].category;
  span.style.color = "#777";
  p.textContent = currentQuestion[quizQuestionID].question;
  p.style.marginBottom = "1rem";
  answerA.placeholder = currentQuestion[quizQuestionID].answerA;
  answerB.placeholder = currentQuestion[quizQuestionID].answerB;
  answerC.placeholder = currentQuestion[quizQuestionID].answerC;
  quizQuestion.appendChild(p);
  quizQuestion.appendChild(span);
};
answerA.addEventListener("click", () => {
  buttonClickedAnswer = answerA.dataset.buttonClicked = "A";
  if (buttonClickedAnswer === currentQuestion[quizQuestionID].correctAnswer) {
    quizQuestionID++;
    newQuestion();
  } else {
    return;
  }
});
answerB.addEventListener("click", () => {
  buttonClickedAnswer = answerB.dataset.buttonClicked = "B";
  if (buttonClickedAnswer === currentQuestion[quizQuestionID].correctAnswer) {
    quizQuestionID++;
    newQuestion();
  } else {
    return;
  }
});
answerC.addEventListener("click", () => {
  buttonClickedAnswer = answerC.dataset.buttonClicked = "C";
  console.log(currentQuestion[quizQuestionID].correctAnswer);
  console.log(buttonClickedAnswer);
  if (buttonClickedAnswer === currentQuestion[quizQuestionID].correctAnswer) {
    quizQuestionID++;
    newQuestion();
  } else {
    return;
  }
});
