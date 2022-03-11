const navbottom = document.querySelector("[data-nav-bar-bottom]");
const navbtn = document.querySelector("[data-nav-bar-btn]");
navbtn.addEventListener("click", () => {
  if (navbottom.style.height === "65px") navbottom.style.height = "auto";
  else navbottom.style.height = "65px";
});
