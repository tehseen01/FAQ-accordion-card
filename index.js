const toggle = document.querySelectorAll(".drop-down");

toggle.forEach((event) => {
  event.addEventListener("click", () => {
    event.classList.toggle("color");
    event.nextElementSibling.classList.toggle("show");
  });
});
