let step = 0;

function startSite() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("song").play();
  createHearts();
  next();
}

function next() {
  step++;
  const m = document.getElementById("main");

  // helper to build yes/no
  const buttons = `
    <button class="btn" onclick="next()">YES 💖</button>
    <button class="btn no" onmouseover="run(this)">NO 😜</button>
  `;

  // ===== 1. ROSE DAY =====
  if(step==1) {
    m.innerHTML = `
      <h2>🌹 Rose Day</h2>
      <img src="images/photo1.jpeg">
      <p>Anjali, will you accept my rose and let me color your world with love and warmth?</p>
      ${buttons}
    `;
  }

  // ===== 2. PROPOSE DAY =====
  if(step==2) {
    m.innerHTML = `
      <h2>💍 Propose Day</h2>
      <p>Anjali, I may not have perfect words,  
      but my heart knows only one truth —  
      I want to hold your hand through every tomorrow.  
      Will you accept my proposal to walk this life with me?</p>
      ${buttons}
    `;
  }

  // ===== 3. CHOCOLATE DAY =====
  if(step==3) {
    m.innerHTML = `
      <h2>🍫 Chocolate Day</h2>
      <img src="images/photo2.jpeg">
      <p>Life feels sweeter with you in it.  
      Will you take this chocolate and make my days as sweet as your smile?</p>
      ${buttons}
    `;
  }

  // ===== 4. TEDDY DAY =====
  if(step==4) {
    m.innerHTML = `
      <h2>🧸 Teddy Day</h2>
      <img src="images/photo4.jpeg">
      <img src="images/photo9.jpeg">
      <p>Two teddies for the girl who deserves all the cuddles in the world.  
      Will you let me be your forever teddy?</p>
      ${buttons}
    `;
  }

  // ===== 5. PROMISE DAY =====
  if(step==5) {
    m.innerHTML = `
      <h2>🤞 Promise Day</h2>
      <img src="images/photo5.jpeg">
      <p>I promise to respect you, protect your heart,  
      stand beside you in storms,  
      and love you even on ordinary days.  
      Will you accept my promise?</p>
      ${buttons}
    `;
  }

  // ===== 6. HUG DAY =====
  if(step==6) {
    m.innerHTML = `
      <h2>🤗 Hug Day</h2>
      <img src="images/photo6.jpeg">
      <p>If one hug could tell how much I care,  
      it would last forever.  
      Can I have a warm hug from you?</p>
      ${buttons}
    `;
  }

  // ===== 7. KISS DAY =====
  if(step==7) {
    m.innerHTML = `
      <h2>💋 Kiss Day</h2>
      <img src="images/photo7.jpeg">
      <p>A gentle kiss to seal all the love I hold for you.  
      Will you let me steal one sweet kiss?</p>
      ${buttons}
    `;
  }

  // ===== 8. VALENTINE DAY =====
  if(step==8) {
    m.innerHTML = `
      <h2>❤️ Valentine’s Day</h2>
      <img src="images/photo8.jpeg">

      <p>
      Anjali,  
      Even from dooron dooron, you feel close to my heart.  
      You are not just a part of my life,  
      you are the reason my life feels beautiful.  
      Every moment with you becomes a memory  
      I never want to lose.
      </p>

      <h3>Anjali, will you be my Valentine?</h3>

      <button class="btn" onclick="final()">YES 😍</button>
      <button class="btn no" onmouseover="run(this)">NO 😜</button>
    `;
  }
}

function final() {
  alert("You made Rishav the happiest person alive ❤️");
}

// NO button run away
function run(b) {
  b.style.position="absolute";
  b.style.left=Math.random()*250+"px";
  b.style.top=Math.random()*250+"px";
}

// floating hearts
function createHearts() {
 setInterval(()=>{
   const h=document.createElement("span");
   h.innerHTML="❤️";
   h.style.left=Math.random()*100+"vw";
   document.querySelector(".hearts").appendChild(h);
   setTimeout(()=>h.remove(),7000);
 },300);
}
