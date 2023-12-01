var elMenuBtn = document.querySelector(".mode-btn");
var elMenuIcon = document.querySelector(".mode-icon");

elMenuBtn.addEventListener("click", function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");

    elMenuIcon.src = "./images/moon-light-icon.svg";
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");

    elMenuIcon.src = "./images/moon-dark-icon.svg";
  }
});

localStorage.removeItem("theme");
