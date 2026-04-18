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

// SHOW HOVEDMENU POPUP BOXES //
function showPopularSongsBox() {
      document.getElementById("popularSongsBox").style.display = ("block");
  }
function showGenreBox() {
      document.getElementById("genreBox").style.display = ("block")
  }
function showSongCataBox() {
      document.getElementById("songCataBox").style.display = ("block")
  }
function showFeelingLuckyBox() {
      document.getElementById("feelingLuckyBox").style.display = ("block")
  }
  // HIDE ALL POPUP BOXES //
function hideAllBoxes() {
  document.getElementById("popularSongsBox").style.display = "none";
  document.getElementById("genreBox").style.display = "none";
  document.getElementById("newReleasesBox").style.display = "none";
  document.getElementById("feelingLuckyBox").style.display = "none";
}