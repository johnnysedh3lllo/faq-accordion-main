// "use strict";

const card = document.querySelector(".card");
const cardBody = document.querySelector(".card__body");
const cardAnswers = document.querySelectorAll(".card__question__ans");
const cardQuestions = document.querySelectorAll(".card__question");

cardBody.addEventListener("click", function (e) {
  const clickedQuestion = e.target.closest(".card__question");

  if (!clickedQuestion) return;

  const answer = clickedQuestion.querySelector(".card__question__ans");
  const img = clickedQuestion.querySelector("img");

  cardQuestions.forEach((question) => {
    if (question !== clickedQuestion) {
      const otherQuestion = question.querySelector(".card__question__ans");
      const otherQuestionImg = question.querySelector("img");

      otherQuestion.classList.remove("open");
      otherQuestion.classList.add("closed");
      otherQuestionImg.src = "images/icon-plus.svg";
    }
  });

  if (answer.classList.contains("closed")) {
    answer.classList.toggle("closed");
    answer.classList.toggle("open");
    img.src = "images/icon-minus.svg";
  } else {
    answer.classList.toggle("open");
    answer.classList.add("closed");
    img.src = "images/icon-plus.svg";
  }
});
