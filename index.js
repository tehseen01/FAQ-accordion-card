const toggle = document.querySelectorAll(".toggle");

toggle.forEach((event) => {
  event.addEventListener("click", () => {
    event.classList.toggle("color");
    event.nextElementSibling.classList.toggle("show");
  });
});
