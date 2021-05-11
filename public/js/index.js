const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
   burger.classList.toggle("is-open");
   nav.classList.toggle("is-open");
});

