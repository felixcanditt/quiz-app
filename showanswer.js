const knoepfe = document.querySelectorAll('.card__showanswer');
const antworten = document.querySelectorAll('.card__answertext');

knoepfe.forEach((elementinderliste, indexdeselementsinderliste) => {
  elementinderliste.addEventListener('click', () => {
    antworten[indexdeselementsinderliste].classList.toggle('erscheine');
  });
});
