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
  setTimeout(function () {
    const box = document.getElementById("popularSongsBox");
    box.style.display = ("block");
      setTimeout(function () { 
      box.style.opacity = ("1");
      }, 300);
  }, 100); /*timeout så man kan se knappen reagere inden popup vises + browseren kan nå at render inden den fader*/
};
function showGenreBox() {
  setTimeout(function () {
    const box = document.getElementById("genreBox");
    box.style.display = ("block");
      setTimeout(function () { 
      box.style.opacity = ("1");
      }, 300);
  }, 100);
};
function showSongCataBox() {
  setTimeout(function () {
    const box = document.getElementById("songCataBox");
    box.style.display = ("block");
      setTimeout(function () { 
      box.style.opacity = ("1");
      }, 300);
  }, 100);
};
function showFeelingLuckyBox() {
  setTimeout(function () {
    const box = document.getElementById("feelingLuckyBox");
    box.style.display = ("block");
      setTimeout(function () { 
      box.style.opacity = ("1");
      }, 300);
  }, 100);
};
            // HIDE ALL HOVEDMENU POPUP BOXES //
function hideAllMainBoxes() {
  const boxes = [
    document.getElementById("popularSongsBox"),
    document.getElementById("genreBox"),
    document.getElementById("songCataBox"),
    document.getElementById("feelingLuckyBox"),
  ];
  boxes.forEach(function(box) {
    setTimeout(function () {
      box.style.opacity = ("0");
    }, 200); /* timeout så man kan se knappen reagere ud inden popup skjules*/
    setTimeout(function () {
      box.style.display = "none";
    }, 500); /*timeout på fade out*/
  });
}

            // ADD TO BASKET //
let basketAmount = 0
console.log("Current basket count: " + basketAmount)
function addToBasket() {
  console.log("Song added to basket")
  console.log("Current amount in basket: " + basketAmount)
  basketAmount++;
  document.getElementById("amountInCart").innerHTML = basketAmount;
}

            // SHOW & HIDE BASKET //
/*Når man trykker på Vis kurv, vises en popup menu og tekst ændres til "Skjul kurv"
Når man trykker på Skjul kurv, skjules popup menu og tekst ændres til "Vis kurv"
|| cartPopup === "" fordi man kan risikere at JS læser "" fra Css indtil første gang man interagerer*/
function showHideBasket() {
  const cartPopup = document.getElementById("cartPopup").style.display;
    if (cartPopup === "none" || 
        cartPopup === "") {
        document.getElementById("cartPopup").style.display = "block";
        document.getElementById("cartbuttonText").innerHTML = "Skjul kurv:&nbsp;"
    } else if (cartPopup === "block") {
        document.getElementById("cartPopup").style.display = "none";
        document.getElementById("cartbuttonText").innerHTML = "Vis kurv:&nbsp;"
    }
}