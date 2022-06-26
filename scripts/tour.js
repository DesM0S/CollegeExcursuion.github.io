//слайды
let slides = document.querySelectorAll(".tour-slide");

// определение на какой слайд нужно переключиться
let tourButtonWhere = 0;

// переход по слайдам -- вперед
let tourButtonNext = document.querySelectorAll(".tour-btn");
openResult(tourButtonNext);

//переход по слайдам -- назад
let tourButtonBack = document.querySelectorAll(".tour-btn--back");
openResult(tourButtonBack);

let tourInfo = document.querySelectorAll(".tour-btn-info");
openResult(tourInfo);

const handleClickContainerSlide = (targetModal) => {
  if (targetModal) {
    targetModal.classList.remove("tour-info-modal--active");
  }
};

Array.from(document.querySelectorAll(".tour-info-modal")).forEach(modal => {
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  })
})

//переход по слайдам
function openResult(el) {
  el.forEach((e) => {
    e.addEventListener("click", function (event) {
      event.stopPropagation();

      const element = e;
      const parentElement = element.offsetParent;
      let modal = parentElement.querySelector(".tour-info-modal");
      console.log(element, parentElement, modal);
      parentElement.addEventListener("click", () =>
        handleClickContainerSlide(modal)
      );

      let a = element.dataset.tourInfoSlide;
      tourButtonWhere = element.dataset.toutWhere;

      slides.forEach((e) => {
        if (e.dataset.tourSlide === tourButtonWhere) {
          e.classList.add("tour-slide--active");
        } else if (e.dataset.tourSlide === a) {
          modal.classList.toggle("tour-info-modal--active");
        } else {
          e.classList.remove("tour-slide--active");
        }
      });
    });
  });
}