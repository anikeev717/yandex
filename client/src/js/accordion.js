const accordion = [...document.getElementsByClassName("qa__accordion")];
accordion.forEach((question) => {
  question.addEventListener("click", () => {
    accordion.forEach((nextquestion) => {
      if (question == nextquestion) return;
      const nextanswer = nextquestion.lastElementChild;
      if (nextanswer.classList.contains("accordion__answer--is-active")) {
        nextanswer.classList.remove("accordion__answer--is-active");
      }
    });
    const answer = question.lastElementChild;
    answer.classList.toggle("accordion__answer--is-active");
  });
});
