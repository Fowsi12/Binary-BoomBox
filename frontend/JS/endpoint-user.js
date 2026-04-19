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
  const box = document.getElementById("popularSongsBox")
    box.style.display = ("block");
    /* timeout funktion så browseren når at render ændring 
    på display og opacity og derefter laver transition til opacity 1*/
    setTimeout(function () { 
    box.style.opacity = ("1");
    }, 5);
}
function showGenreBox() {
  const box = document.getElementById("genreBox")
    box.style.display = ("block");
    setTimeout(function () { 
    box.style.opacity = ("1");
    }, 5);
}
function showSongCataBox() {
  const box = document.getElementById("songCataBox")
    box.style.display = ("block");
    setTimeout(function () { 
    box.style.opacity = ("1");
    }, 5);
}
function showFeelingLuckyBox() {
  const box = document.getElementById("feelingLuckyBox")
    box.style.display = ("block");
    setTimeout(function () { 
    box.style.opacity = ("1");
    }, 5);
 }
  // HIDE ALL HOVEDMENU POPUP BOXES //
function hideAllBoxes() {
  document.getElementById("popularSongsBox").style.display = "none";
  document.getElementById("genreBox").style.display = "none";
  document.getElementById("newReleasesBox").style.display = "none";
  document.getElementById("feelingLuckyBox").style.display = "none";
}

