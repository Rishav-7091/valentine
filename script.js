let step = 0;

function img(name){
  return "images/" + name;
}

// PRELOAD
["photo1","photo2","photo4","photo5","photo6","photo7","photo8","photo9"]
.forEach(n=>{
  let i=new Image();
  i.src=img(n+".jpeg");
  i.onerror=()=> i.src=img(n+".jpg");
});

function startSite(){
  document.getElementById("startScreen").style.display="none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("song").play();
  createHearts();
  next();
}

function page(title,image,text){

 let imgTag="";

 if(image){
  imgTag=`
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

function next(){
 step++;
 const m=document.getElementById("main");

 // 1 ROSE
 if(step==1)
 m.innerHTML=page(
 "🌹 Rose Day",
 "photo1",
 "Anjali, will you accept my rose and let its fragrance carry the feelings my heart holds?"
 );

 // 2 PROPOSE – PHOTO9 ADDED
 if(step==2)
 m.innerHTML=page(
 "💍 Propose Day",
 "photo9",
 "Anjali, being around you feels peaceful and real. I would love the chance to walk a meaningful part of life with you, sharing smiles and small beautiful moments. Will you accept my proposal?"
 );

 // 3 CHOCOLATE
 if(step==3)
 m.innerHTML=page(
 "🍫 Chocolate Day",
 "photo2",
 "Just like chocolate, you make life sweeter without trying. Will you take this sweetness from me?"
 );

 // 4 TEDDY
 if(step==4)
 m.innerHTML=page(
 "🧸 Teddy Day",
 "photo4",
 "A teddy to remind you that you are cared for even when I’m not near. Will you accept it?"
 );

 // 5 PROMISE – CUSTOMIZED
 if(step==5)
 m.innerHTML=page(
 "🤞 Promise Day",
 "photo5",
 "Anjali, I promise to walk along with you, to be there whenever you need me, to care for you in your happy and difficult days, and to love you with a sincere heart. Will you accept this promise?"
 );

 // 6 HUG
 if(step==6)
 m.innerHTML=page(
 "🤗 Hug Day",
 "photo6",
 "If feelings could be wrapped, they would look like a warm hug. Can I have one from you?"
 );

 // 7 KISS
 if(step==7)
 m.innerHTML=page(
 "💋 Kiss Day",
 "photo7",
 "A gentle kiss carrying all the emotions my words miss. May I?"
 );

 // 8 VALENTINE – FINAL
 if(step==8)
 m.innerHTML=`
 <div class="container">

 <div class="left">
  <img class="dayImage" src="${img("photo8.jpeg")}"
  onerror="this.src='${img("photo8.jpg")}'">
 </div>

 <div class="right">
  <h2>❤️ Valentine’s Day</h2>

  <p>
  Anjali, even from dooron dooron you feel close to my heart.  
  You make my ordinary days beautiful and my silent moments meaningful.
  </p>

  <h3>Will you be my Valentine?</h3>

  <button class="btn" onclick="final()">YES 😍</button>
  <button class="btn no" onmouseover="run(this)">NO 😜</button>
 </div>

 </div>`;
}

function final(){
 alert("Anjali said YES ❤️\nRishav is the luckiest guy on earth!");

 const box=document.createElement("div");

 box.innerHTML=`
 <div style="
 position:fixed;top:0;left:0;width:100%;height:100%;
 background:#fff0f6;display:flex;align-items:center;
 justify-content:center;flex-direction:column;
 font-size:28px;font-family:'Great Vibes';z-index:999;">

 <h1>She Said YES! 💖</h1>

 <p>You just made my heart smile like never before.</p>
 <p>— Yours, Rishav</p>

 </div>`;

 document.body.appendChild(box);

 for(let i=0;i<40;i++) createHearts();
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
