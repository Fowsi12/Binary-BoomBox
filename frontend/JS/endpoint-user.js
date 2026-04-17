const helpBtn = document.getElementById("help-btn");
const helpPopup = document.getElementById("help-popup");
const closeBtn = document.getElementById("close-help");

if (helpBtn && helpPopup && closeBtn) {
  helpBtn.addEventListener("click", () => {
    helpPopup.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    helpPopup.style.display = "none";
  });
}

//Funktion der viser pop up vinduerne fra knapperne på hovedmenuen
function showMenuBox() {
  document.getElementsByClassName("hovedmenubox").style.display = "block"
};