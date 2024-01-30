// "use strict";
const card = document.querySelector(".card");
const cardBody = document.querySelector(".card__body");
const cardQuestions = document.querySelectorAll(".card__question");

const closeQuestion = function (question) {
  question.querySelector(".card__question__ans").classList.remove("open");
  question.querySelector(".card__question__ans").classList.add("closed");
  question.querySelector("img").src = "images/icon-plus.svg";
};

cardBody.addEventListener("click", function (e) {
  const clickedQuestion = e.target.closest(".card__question");

  if (!clickedQuestion) return;

  const answer = clickedQuestion.querySelector(".card__question__ans");
  const img = clickedQuestion.querySelector("img");

  cardQuestions.forEach((question) => {
    if (question !== clickedQuestion) {
      closeQuestion(question);
    }
  });

  if (answer.classList.contains("closed")) {
    answer.classList.toggle("closed");
    answer.classList.toggle("open");
    img.src = "images/icon-minus.svg";
  } else {
    answer.classList.toggle("open");
    answer.classList.toggle("closed");
    img.src = "images/icon-plus.svg";
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("body")) {
    cardQuestions.forEach((question) => {
      closeQuestion(question);
    });
  }
});
