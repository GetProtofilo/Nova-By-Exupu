function openExample(type){
  const modal=document.getElementById('exampleModal');
  const content=document.getElementById('exampleContent');
  if(type==='ui'){
    content.innerHTML=`
      <h2>UI Design Examples</h2>
      <div class="demo-card">Button Ripple Animation<button onclick="alert('Button clicked!')">Click Me</button></div>
      <div class="demo-card">Interactive Cards<div style="display:flex;gap:10px;margin-top:10px;">
        <div style="background:#6e00ff;padding:10px;border-radius:10px;flex:1;text-align:center;">Card 1</div>
        <div style="background:#ff00d4;padding:10px;border-radius:10px;flex:1;text-align:center;">Card 2</div>
        <div style="background:#00ffcc;padding:10px;border-radius:10px;flex:1;text-align:center;">Card 3</div>
      </div></div>
      <div class="demo-card">Animated Form
        <form style="margin-top:10px;">
          <input type="text" placeholder="Name" style="padding:10px;width:100%;margin-bottom:10px;border-radius:10px;border:none;outline:none;">
          <input type="email" placeholder="Email" style="padding:10px;width:100%;margin-bottom:10px;border-radius:10px;border:none;outline:none;">
          <button type="submit" style="padding:10px 20px;border-radius:10px;border:none;background:#6e00ff;color:#fff;cursor:pointer;">Submit</button>
        </form>
      </div>`;
  }else if(type==='web'){
    content.innerHTML=`
      <h2>Web Development Demo</h2>
      <p>Responsive mini webpage with navigation and tabs.</p>
      <div style="background:#2c2c2c;padding:15px;border-radius:10px;margin-top:10px;">
        <nav style="display:flex;gap:10px;">
          <button onclick="alert('Home clicked')">Home</button>
          <button onclick="alert('About clicked')">About</button>
          <button onclick="alert('Contact clicked')">Contact</button>
        </nav>
        <div style="margin-top:10px;padding:10px;background:#1e1e1e;border-radius:10px;">Content Area</div>
      </div>`;
  }else if(type==='animations'){
    content.innerHTML=`
      <h2>Animations Demo</h2>
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:10px;">
        <div style="width:100px;height:100px;background:#6e00ff;border-radius:10px;animation:spin 2s linear infinite;"></div>
        <div style="width:100px;height:100px;background:#ff00d4;border-radius:50%;animation:bounce 1s infinite alternate;"></div>
        <div style="width:100px;height:100px;background:#00ffcc;border-radius:20px;animation:fadeInUp 1s infinite alternate;"></div>
      </div>
      <style>
        @keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes bounce{from{transform:translateY(0);}to{transform:translateY(-30px);}}
      </style>`;
  }else if(type==='sound'){
    content.innerHTML=`
      <h2>Sound Integration Demo</h2>
      <p>Click buttons to hear sounds:</p>
      <button onclick="new Audio('https://www.soundjay.com/button/beep-07.mp3').play();" style="padding:10px 20px;margin:5px;border:none;border-radius:10px;background:#6e00ff;color:#fff;cursor:pointer;">Beep</button>
      <button onclick="new Audio('https://www.soundjay.com/button/button-16.mp3').play();" style="padding:10px 20px;margin:5px;border:none;border-radius:10px;background:#ff00d4;color:#fff;cursor:pointer;">Click</button>
      <p style="margin-top:10px;">Background music is already playing!</p>`;
  }
  modal.style.display='flex';
}

function closeExample(){
  document.getElementById('exampleModal').style.display='none';
}
