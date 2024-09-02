const burgerButton = document.querySelector(".burger-button")
const closeButton = document.querySelector(".mobile-menu__close-button")
const mobileMenu = document.querySelector(".mobile-menu")
const categories = document.querySelectorAll(".categories__button")
const categoriesItems = document.querySelectorAll(".categories__item")

burgerButton.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu--open")
})

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu--open")
})

const testimonialsSlider = new Swiper(".slider__inner", {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  spaceBetween: 20,
  slidesPerView: "auto",
})

if (categoriesItems.length !== 0) {
  document.querySelector(".categories__buttons").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return false

    let target = event.target
    let filterTag = event.target.dataset.filter;

    categories.forEach(item => item.classList.remove("categories__button--active"))
    target.classList.add("categories__button--active")

    categoriesItems.forEach(item => {
      item.classList.remove("categories__item--hide")

      if (!item.dataset.tag.includes(filterTag) && filterTag !== "all") {
        item.classList.add("categories__item--hide")
      }
    })
  })
}