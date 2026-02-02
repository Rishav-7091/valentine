let step = 0;

// SUPPORT BOTH JPG & JPEG
function img(name) {
  return `images/${name}`;
}

// PRELOAD IMAGES TO AVOID DELAY
const allImages = [
 "photo1","photo2","photo4","photo5",
 "photo6","photo7","photo8","photo9"
];

allImages.forEach(n=>{
  let i=new Image();
  i.src=img(n+".jpeg");
  i.onerror=()=> i.src=img(n+".jpg");
});

function startSite() {
  document.getElementById("startScreen").style.display="none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("song").play();
  createHearts();
  next();
}

// LAYOUT BUILDER
function page(title, image, text) {

  let imgTag="";

  if(image){
    imgTag = `
      <div class="left">
        <img class="dayImage" src="${img(image+".jpeg")}"
        onerror="this.src='${img(image+".jpg")}'">
      </div>`;
  }

  return `
  <div class="container">

    ${imgTag}

    <div class="right">
      <h2>${title}</h2>

      <p>${text}</p>

      <button class="btn" onclick="next()">YES 💖</button>
      <button class="btn no" onmouseover="run(this)">NO 😜</button>

    </div>

  </div>`;
}

function next() {
  step++;
  const m=document.getElementById("main");

  // ROSE
  if(step==1)
    m.innerHTML = page(
      "🌹 Rose Day",
      "photo1",
      "Anjali, will you accept my rose and let its fragrance carry the feelings my heart holds for you?"
    );

  // PROPOSE
  if(step==2)
    m.innerHTML = page(
      "💍 Propose Day",
      null,
      "Anjali, being around you feels peaceful and real. I would love the chance to walk a meaningful part of life with you. Will you accept my proposal?"
    );

  // CHOCOLATE
  if(step==3)
    m.innerHTML = page(
      "🍫 Chocolate Day",
      "photo2",
      "Just like chocolate, you make life softer and sweeter. Will you take this sweetness from me?"
    );

  // TEDDY
  if(step==4)
    m.innerHTML = page(
      "🧸 Teddy Day",
      "photo4",
      "A teddy to remind you that you’re cared for even when I’m not near. Will you accept it?"
    );

  // PROMISE – CUSTOMIZED (NO LIFELONG)
  if(step==5)
    m.innerHTML = page(
      "🤞 Promise Day",
      "photo5",
      "I don’t promise forever, Anjali — I promise to be genuine today, to listen better, to care truly, and to value the moments we share. Will you accept this promise?"
    );

  // HUG
  if(step==6)
    m.innerHTML = page(
      "🤗 Hug Day",
      "photo6",
      "If feelings could be wrapped, they would look like a warm hug. Can I have one from you?"
    );

  // KISS
  if(step==7)
    m.innerHTML = page(
      "💋 Kiss Day",
      "photo7",
      "A gentle kiss carrying all the emotions my words can’t hold. May I?"
    );

  // VALENTINE
  if(step==8)
    m.innerHTML = page(
      "❤️ Valentine’s Day",
      "photo8",
      "Anjali, even from dooron dooron you feel close to my heart. You make my ordinary days beautiful. Will you be my Valentine?"
    );
}

function run(b){
  b.style.position="absolute";
  b.style.left=Math.random()*250+"px";
  b.style.top=Math.random()*250+"px";
}

function createHearts(){
 setInterval(()=>{
   let h=document.createElement("span");
   h.innerHTML="❤️";
   h.style.left=Math.random()*100+"vw";
   document.querySelector(".hearts").appendChild(h);
   setTimeout(()=>h.remove(),7000);
 },300);
}
