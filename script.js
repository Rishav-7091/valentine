let step = 0;

function startSite() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("song").play();
  createHearts();
  next();
}

function template(title, img, text) {
  return `
    <h2>${title}</h2>

    ${img ? `<img class="dayImage" src="images/${img}">` : ""}

    <div class="textBox">
      <p>${text}</p>

      <button class="btn" onclick="next()">YES 💖</button>
      <button class="btn no" onmouseover="run(this)">NO 😜</button>
    </div>
  `;
}

function next() {
  step++;
  const m = document.getElementById("main");

  // ===== 1. ROSE DAY =====
  if(step==1) {
    m.innerHTML = template(
      "🌹 Rose Day",
      "photo1.jpeg",
      "Anjali, will you accept my rose and let its fragrance carry the feelings I’m too shy to say?"
    );
  }

  // ===== 2. PROPOSE DAY =====
  if(step==2) {
    m.innerHTML = template(
      "💍 Propose Day",
      null,
      "Anjali, my heart found its calm in you. I don’t have grand promises, just a simple wish — to be someone who makes your days lighter and your smiles easier. Will you accept my proposal?"
    );
  }

  // ===== 3. CHOCOLATE DAY =====
  if(step==3) {
    m.innerHTML = template(
      "🍫 Chocolate Day",
      "photo2.jpeg",
      "Just like chocolate, you make everything sweeter without trying. Will you take this sweetness from me?"
    );
  }

  // ===== 4. TEDDY DAY =====
  if(step==4) {
    m.innerHTML = `
      <h2>🧸 Teddy Day</h2>

      <img class="dayImage" src="images/photo4.jpeg">
      <img class="dayImage" src="images/photo9.jpeg">

      <div class="textBox">
        <p>Two teddies, one wish — that you always have something to hold when I’m not around. Will you accept them from me?</p>

        <button class="btn" onclick="next()">YES 💖</button>
        <button class="btn no" onmouseover="run(this)">NO 😜</button>
      </div>
    `;
  }

  // ===== 5. PROMISE DAY (CUSTOMIZED) =====
  if(step==5) {
    m.innerHTML = template(
      "🤞 Promise Day",
      "photo5.jpeg",
      "I don’t promise a perfect journey, Anjali — only that I’ll try to understand you, respect you, and be honest in the moments we share. Will you accept this simple promise from me?"
    );
  }

  // ===== 6. HUG DAY =====
  if(step==6) {
    m.innerHTML = template(
      "🤗 Hug Day",
      "photo6.jpeg",
      "If a hug could speak, it would tell you how safe and special you feel to me. Can I have a warm hug from you?"
    );
  }

  // ===== 7. KISS DAY =====
  if(step==7) {
    m.innerHTML = template(
      "💋 Kiss Day",
      "photo7.jpeg",
      "A tiny kiss carrying all the feelings my words miss. Will you let me steal one?"
    );
  }

  // ===== 8. VALENTINE DAY =====
  if(step==8) {
    m.innerHTML = `
      <h2>❤️ Valentine’s Day</h2>

      <img class="dayImage" src="images/photo8.jpeg">

      <div class="textBox">
        <p>
        Anjali,  
        Even from dooron dooron, you feel close to my heart.  
        You are the reason my life feels beautiful.  
        Every moment with you becomes a memory  
        I never want to lose.
        </p>

        <h3>Will you be my Valentine?</h3>

        <button class="btn" onclick="final()">YES 😍</button>
        <button class="btn no" onmouseover="run(this)">NO 😜</button>
      </div>
    `;
  }
}

function final() {
  alert("You made Rishav the happiest person alive ❤️");
}

function run(b) {
  b.style.position="absolute";
  b.style.left=Math.random()*250+"px";
  b.style.top=Math.random()*250+"px";
}

function createHearts() {
 setInterval(()=>{
   const h=document.createElement("span");
   h.innerHTML="❤️";
   h.style.left=Math.random()*100+"vw";
   document.querySelector(".hearts").appendChild(h);
   setTimeout(()=>h.remove(),7000);
 },300);
}
