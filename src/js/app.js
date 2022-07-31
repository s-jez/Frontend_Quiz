import { questions } from "./questions";
let quizQuestion = document.querySelector(".quiz__question");
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
  p.textContent = currentQuestion[quizQuestionID].question;
  answerA.placeholder = currentQuestion[quizQuestionID].answerA;
  answerB.placeholder = currentQuestion[quizQuestionID].answerB;
  answerC.placeholder = currentQuestion[quizQuestionID].answerC;
  quizQuestion.appendChild(p);
  if (buttonClickedAnswer === currentQuestion[quizQuestionID].correctAnswer) {
    countCorrectAnswers++;
  }
  quizQuestionID++;
};
export const verifyQuestion = () => {
  console.log(buttonClickedAnswer);
  newQuestion();
};
answerA.addEventListener("focus", () => {
  buttonClickedAnswer = answerA.dataset.buttonClicked = "A";
  verifyQuestion();
});
answerB.addEventListener("focus", () => {
  buttonClickedAnswer = answerB.dataset.buttonClicked = "B";
  verifyQuestion();
});
answerC.addEventListener("focus", () => {
  buttonClickedAnswer = answerC.dataset.buttonClicked = "C";
  verifyQuestion();
});
