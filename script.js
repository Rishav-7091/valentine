// ===== PHOTO GALLERY (EDIT ONLY THIS PART) =====

// Just write your photo names here – as many as you want
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg"
];

// AUTO LOAD – NO NEED TO TOUCH THIS
const gallery = document.getElementById("gallery");

photos.forEach(name => {
  const img = document.createElement("img");
  img.src = "images/" + name;
  img.alt = "memory";
  gallery.appendChild(img);
});


// ===== MUSIC =====
function playMusic() {
  document.getElementById("song").play();
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
