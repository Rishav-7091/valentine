// ===== PHOTOS (USE JPEG FORMAT) =====
const photos = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpeg",
  "photo8.jpeg",
  "photo9.jpeg"
];

// LOAD IMAGES
const gallery = document.getElementById("gallery");

photos.forEach(name => {
  const img = document.createElement("img");
  img.src = "images/" + name;

  // IMPORTANT DEBUG
  img.onerror = function() {
    console.log("Not found:", name);
  };

  gallery.appendChild(img);
});


// ===== START BUTTON LOGIC =====
function startSite() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  // PLAY MUSIC AFTER CLICK
  document.getElementById("song").play();

  createHearts();
}


// ===== GAME =====
function startGame() {
  document.getElementById("gameBox").classList.remove("hidden");
}

function yes() {
  alert("Yay! You made Rishav the happiest person alive ❤️");
}

function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 250 + "px";
  btn.style.top = Math.random() * 250 + "px";
}


// ===== FLOATING HEARTS =====
function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 300);
}
