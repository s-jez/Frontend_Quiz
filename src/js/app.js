import { questions } from "./questions";
const quizQuestion = document.querySelector(".quiz__question");
const quizInfo = document.querySelector(".quiz__info");

let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");

let quizQuestionID = 0;
let maxQuizQuestionID = 9;
let currentQuestion = [];
let buttonClickedAnswer = "";

let countCorrectAnswers = 0;

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
    quizInfo.textContent = "Correct answers: " + countCorrectAnswers + "/9";
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
  let correctAnswer = currentQuestion[quizQuestionID].correctAnswer;
  console.log(correctAnswer);
  if (buttonClickedAnswer === correctAnswer) {
    quizInfo.textContent = "";
    quizQuestionID++;
    countCorrectAnswers++;
    newQuestion();
  } else {
    quizInfo.textContent = "This is a wrong answer!";
    countCorrectAnswers--;
    switch (correctAnswer) {
      case "A":
        console.log(correctAnswer);
        break;
      case "B":
        console.log(correctAnswer);
        break;
      case "C":
        console.log(correctAnswer);
        break;
    }
    return;
  }
});
answerB.addEventListener("click", () => {
  buttonClickedAnswer = answerB.dataset.buttonClicked = "B";
  let correctAnswer = currentQuestion[quizQuestionID].correctAnswer;
  if (buttonClickedAnswer === correctAnswer) {
    quizInfo.textContent = "";
    quizQuestionID++;
    countCorrectAnswers++;
    newQuestion();
  } else {
    quizInfo.textContent = "This is a wrong answer!";
    countCorrectAnswers--;
    switch (correctAnswer) {
      case "A":
        console.log(correctAnswer);
        break;
      case "B":
        console.log(correctAnswer);
        break;
      case "C":
        console.log(correctAnswer);
        break;
    }
    return;
  }
});
answerC.addEventListener("click", () => {
  buttonClickedAnswer = answerC.dataset.buttonClicked = "C";
  let correctAnswer = currentQuestion[quizQuestionID].correctAnswer;
  if (buttonClickedAnswer === correctAnswer) {
    quizInfo.textContent = "";
    quizQuestionID++;
    countCorrectAnswers++;
    newQuestion();
  } else {
    quizInfo.textContent = "This is a wrong answer!";
    countCorrectAnswers--;
    newQuestion();
    switch (correctAnswer) {
      case "A":
        console.log(correctAnswer);
        break;
      case "B":
        console.log(correctAnswer);
        break;
      case "C":
        console.log(correctAnswer);
        break;
    }
    return;
  }
});
