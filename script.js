// "use strict";

const cardBody = document.querySelector(".card__body");
const cardAnswer = document.querySelector(".card__question__ans");
const cardQuestion = document.querySelector(".card__question");

cardBody.addEventListener("click", function (e) {
  const clickedQuestion = e.target.closest(".card__question");

  if (clickedQuestion) {
    clickedQuestion
      .querySelector(".card__question__ans")
      .classList.toggle("closed");

    const img = clickedQuestion.querySelector("img");
    img.src = clickedQuestion
      .querySelector(".card__question__ans")
      .classList.contains("closed")
      ? "public/images/icon-plus.svg"
      : "public/images/icon-minus.svg";

    console.log(img);
  }
});
