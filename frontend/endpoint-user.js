const helpBtn = document.getElementById("help-btn");
const helpPopup = document.getElementById("help-popup");
const closeBtn = document.getElementById("close-help");

helpBtn.addEventListener("click", () => {
  helpPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  helpPopup.style.display = "none";
});

function showBox() {
    document.getElementsByClassName("hovedmenubox").style.display = "block"
}
function hideBox() {
    document.getElementById("hjem").styl
}