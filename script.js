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
 "Anjali, my Chinna, I don’t know how to say everything perfectly, so I’m starting with a simple rose. Every time I see you, everything inside me feels calm, safe, and happy. You’ve slowly become a part of my everyday thoughts. Will you accept this rose and let me stay a little closer to your heart?"
 );

 // 2 PROPOSE – PHOTO9 ADDED
 if(step==2)
 m.innerHTML=page(
 "💍 Propose Day",
 "photo9",
 "Chinna, I never planned to fall for someone like this, but I like the way you talk, the way you care, the way even silence with you feels enough. I don’t want perfection just you as you are. Will you let me be yours?"
 );

 // 3 CHOCOLATE
 if(step==3)
 m.innerHTML=page(
 "🍫 Chocolate Day",
 "photo3",
 "Anjali, You make my days sweeter in ways you don’t even notice. A message from you can change my whole mood, your smile stays in my head longer than it should. If love had a taste, it would feel like you. Will you take this little sweetness from me today?"
 );

 // 4 TEDDY
 if(step==4)
 m.innerHTML=page(
 "🧸 Teddy Day",
 "photo4",
 "My Chinna, When you’re not near, I miss the smallest things, your voice, your laughter, your silly talks. I wish I could be there to hold you whenever you need comfort. Until then, imagine this teddy is me, quietly loving you. Will you keep it close for me?"
 );

 // 5 PROMISE – CUSTOMIZED
 if(step==5)
 m.innerHTML=page(
 "🤞 Promise Day",
 "photo5",
 "Anjali, I can’t promise you a fairy tale, but I can promise to be real with you. To stand beside you when you feel low, to listen when you need someone, to love you in simple, honest ways. I really love you, Chinna. Will you trust me with your heart?"
 );

 // 6 HUG
 if(step==6)
 m.innerHTML=page(
 "🤗 Hug Day",
 "photo6",
 "Chinna, Sometimes I just want to hold you and let all my feelings rest in that one moment. No words, no explanations — just us. A hug from you would mean more than any long message I can write. Can I have that hug from you today?"
 );

 // 7 KISS
 if(step==7)
 m.innerHTML=page(
 "💋 Kiss Day",
 "photo7",
 "Anjali, There are feelings I can’t put into sentences. Maybe a small kiss could say them better. Nothing dramatic, just pure love from me to you. Will you let me steal one gentle kiss, Chinna?"
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
   const hearts=["♥️","💖","💕","❤️‍🔥"];
   h.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
   h.style.left=Math.random()*100+"vw";
   h.style.fontSize=(14+Math.random()*16)+"px";
   document.querySelector(".hearts").appendChild(h);
   setTimeout(()=>h.remove(),7000);
 },200);
}

