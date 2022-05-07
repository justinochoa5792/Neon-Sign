let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  if (btn.classList.contains("neon")) {
    btn.classList.remove("neon");
    btn.innerHTML = "CLOSED";
  } else {
    btn.classList.add("neon");
    btn.innerHTML = "OPEN";
  }
});
