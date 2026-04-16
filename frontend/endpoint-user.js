// DVALE TILSTAND
let DvaleTiden; //
const DvaleTid = 5000; // 5 sekunder før den går i dvale

function resetTimer() {
  clearTimeout(DvaleTiden); // Stopper den nuværende timer, hvis der er en
  DvaleTiden = setTimeout(designDvale, DvaleTid); // Starter en ny timer, som kalder funktionen 'designDvale' efter 'DvaleTid'
}

function designDvale() {
  document.body.classList.add("Dvale"); // Tilføjer CSS-klassen "Dvale" til <body>
}

function DesignDvale2() {
  document.body.classList.remove("Dvale"); // Fjerner "Dvale"-klassen igen fordi skærmen er blevet vækket af brugeren
  resetTimer(); // starter timeren for at gå i dvale igen, hvis der ikke er nogen aktivitet i det næste minut
}

// Events
["click", "mousemove", "keydown", "touchstart"].forEach((event) => {
  window.addEventListener(event, DesignDvale2); // Kort fortalt: // Når brugeren gør noget, kaldes funktionen 'DesignDvale2'
});

// Lang forklaring: føler den havde brug for en længere forklaring pga jeg havde det svært ved at forstå det selv, så håber det kan hjælpe jer med at forstå.
// Når brugeren klikker, bevæger musen, trykker på en tast eller starter en berøring på skærmen, vil det udløse et event. For hvert af disse events tilføjer vi en event listener til vinduet (window), som lytter/mærker/whatever efter disse specifikke handlinger. Når en af disse handlinger sker, kaldes funktionen 'DesignDvale2', som fjerner "Dvale"-klassen fra <body> og starter timeren igen for at gå i dvale, hvis der ikke er nogen aktivitet i det næste minut - vil det så ske.

resetTimer(); //Her bliver funktionen brugt på linje 4-6, hvilket sørger for at timeren starter med det samme, når skærmen ikke bliver brugt.

// HELP POPUP KNAPPER - LAGT NED EFTER DVALE TILSTAND FOR AT UNDGÅ KONFLIKT MELLEM DE TO. Dvale tilstand er prioriteret over help popup, da dvale tilstand altid har den samme funktion. Knapperne kommer nok til at skabe konflikt senere hen hvis det står ovenover her.

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
