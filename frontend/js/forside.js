// Fake data (indtil vi bruger SQL)
const songs = [
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Lose Yourself", artist: "Eminem" },
  { title: "Titanium", artist: "David Guetta" },
  { title: "HUMBLE.", artist: "Kendrick Lamar" },
  { title: "One Dance", artist: "Drake" },
];

// Kø af sange der skal afspilles
const queue = [
  { title: "Starboy", artist: "The Weeknd" },
  { title: "SICKO MODE", artist: "Travis Scott" },
];

// gengiver en liste af sange i et HTML-element med det givne ID
function gengivSangene(list, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  // ^oven på her^(container.innerHTML = "") Rydder indholdet af containeren, så vi starter med en tom liste, inden vi tilføjer sangene.

  // For hver sang i listen opretter vi et nyt <div>-element, tilføjer klassen "song" til det, og sætter dets indhold til sangens titel og kunstner. Til sidst tilføjer vi dette <div> til containeren.
  list.forEach((song) => {
    const div = document.createElement("div");
    div.classList.add("song");

    // opretter elementer til sangens titel og kunstner
    const title = document.createElement("strong");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.textContent = song.artist;

    // Tilføjer titel og kunstner til sang-div'en, og derefter tilføjer sang-div'en til containeren
    div.appendChild(title);
    div.appendChild(artist);
    container.appendChild(div);
  });
}

// Start
gengivSangene(songs, "recent-songs");
gengivSangene(queue, "kø");
