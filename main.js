const burger = document.querySelector(".burger");
const exx = document.querySelector(".exx");
const tray = document.querySelector(".tray");

burger.addEventListener("click", () => {
    burger.classList.add("hidden");
    tray.classList.add("shown");
})

exx.addEventListener("click", () => {
    burger.classList.remove("hidden");
    tray.classList.remove("shown");
})
