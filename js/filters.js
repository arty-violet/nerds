
var filtersButton = document.querySelector(".filters__button");
var filtersForm = feedbackPopup.querySelector(".filters");


filtersButton.addEventListener("click", function (evt) {
  evt.preventDefault();
});

filtersForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
