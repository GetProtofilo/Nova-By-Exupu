function openExample(type){
  const modal=document.getElementById('exampleModal');
  const content=document.getElementById('exampleContent');
  
  if(type==='ui'){
    content.innerHTML=`
      <h2>UI Design - Interactive Dashboard</h2>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;">
        <div style="background:#6e00ff;color:#fff;padding:20px;border-radius:15px;flex:1;text-align:center;transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">Card 1</div>
        <div style="background:#ff00d4;color:#fff;padding:20px;border-radius:15px;flex:1;text-align:center;transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">Card 2</div>
        <div style="background:#00ffcc;color:#000;padding:20px;border-radius:15px;flex:1;text-align:center;transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">Card 3</div>
      </div>
      <div style="margin-top:20px;">
        <button onclick="rippleEffect(this)" style="padding:10px 20px;border:none;border-radius:10px;background:#6e00ff;color:#fff;cursor:pointer;position:relative;overflow:hidden;">Click Me</button>
      </div>
      <div style="margin-top:20px;">
        <form>
          <input type="text" placeholder="Name" style="padding:10px;width:100%;margin-bottom:10px;border-radius:10px;border:none;outline:none;">
          <input type="email" placeholder="Email" style="padding:10px;width:100%;margin-bottom:10px;border-radius:10px;border:none;outline:none;">
          <button type="submit" style="padding:10px 20px;border-radius:10px;border:none;background:#ff00d4;color:#fff;cursor:pointer;">Submit</button>
        </form>
      </div>`;
  }
  
  else if(type==='web'){
    content.innerHTML=`
      <h2>Web Development - Mini Page</h2>
      <div style="background:#2c2c2c;padding:15px;border-radius:10px;margin-top:10px;">
        <nav style="display:flex;gap:10px;margin-bottom:10px;">
          <button onclick="alert('Home clicked')" style="padding:5px 10px;border:none;border-radius:5px;cursor:pointer;">Home</button>
          <button onclick="alert('About clicked')" style="padding:5px 10px;border:none;border-radius:5px;cursor:pointer;">About</button>
          <button onclick="alert('Contact clicked')" style="padding:5px 10px;border:none;border-radius:5px;cursor:pointer;">Contact</button>
        </nav>
        <div style="padding:10px;background:#1e1e1e;border-radius:10px;">Content Area</div>
      </div>`;
  }
  
  else if(type==='animations'){
    content.innerHTML=`
      <h2>Animations Demo</h2>
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:10px;">
        <div style="width:100px;height:100px;background:#6e00ff;border-radius:10px;animation:spin 2s linear infinite;"></div>
        <div style="width:100px;height:100px;background:#ff00d4;border-radius:50%;animation:bounce 1s infinite alternate;"></div>
        <div style="width:100px;height:100px;background:#00ffcc;border-radius:20px;animation:fadeInUpAnim 1s infinite alternate;"></div>
      </div>
      <style>
        @keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes bounce{from{transform:translateY(0);}to{transform:translateY(-30px);}}
        @keyframes fadeInUpAnim{from{opacity:0;transform:translateY(0);}to{opacity:1;transform:translateY(-20px);}}
      </style>`;
  }
  
  else if(type==='sound'){
    content.innerHTML=`
      <h2>Sound Integration Demo</h2>
      <p>Click buttons to play sounds:</p>
      <button onclick="new Audio('https://www.soundjay.com/button/beep-07.mp3').play();" style="padding:10px 20px;margin:5px;border:none;border-radius:10px;background:#6e00ff;color:#fff;cursor:pointer;">Beep</button>
      <button onclick="new Audio('https://www.soundjay.com/button/button-16.mp3').play();" style="padding:10px 20px;margin:5px;border:none;border-radius:10px;background:#ff00d4;color:#fff;cursor:pointer;">Click</button>
      <p style="margin-top:10px;">Background music is playing!</p>
      <div id="visualizer" style="display:flex;gap:2px;margin-top:10px;height:50px;"></div>`;
      
    const viz=document.getElementById('visualizer');
    viz.innerHTML='';
    for(let i=0;i<20;i++){
      let bar=document.createElement('div');
      bar.style.background='#6e00ff';
      bar.style.width='10px';
      bar.style.height=Math.random()*50+'px';
      bar.style.transition='height 0.2s';
      viz.appendChild(bar);
    }
    setInterval(()=>{
      for(let bar of viz.children){
        bar.style.height=Math.random()*50+'px';
      }
    },200);
  }
  
  modal.style.display='flex';
}

function closeExample(){
  document.getElementById('exampleModal').style.display='none';
}

function rippleEffect(el){
  const circle=document.createElement('span');
  circle.style.width=circle.style.height='100px';
  circle.style.position='absolute';
  circle.style.background='rgba(255,255,255,0.4)';
  circle.style.borderRadius='50%';
  circle.style.transform='scale(0)';
  circle.style.left='50%';
  circle.style.top='50%';
  circle.style.pointerEvents='none';
  circle.style.animation='ripple 0.6s linear';
  el.appendChild(circle);
  setTimeout(()=>el.removeChild(circle),600);
}
