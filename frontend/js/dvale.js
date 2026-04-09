let idleTimer;
const idleTime = 60000; // 10 seconds

function resetTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(goIdle, idleTime);
}

function goIdle() {
  document.body.classList.add("idle");
}

function wakeUp() {
  document.body.classList.remove("idle");
  resetTimer();
}

// Events
["click", "mousemove", "keydown", "touchstart"].forEach((event) => {
  window.addEventListener(event, wakeUp);
});

// Start timer
resetTimer();
