function openExample(type) {
  const modal = document.getElementById('exampleModal');
  const content = document.getElementById('exampleContent');

  if(type === 'ui') {
    content.innerHTML = `
      <h2>UI Design Examples</h2>
      <div class="demo-card">Button Hover Animation</div>
      <div class="demo-card">Interactive Cards</div>
      <div class="demo-card">Forms & Layouts</div>`;
  } else if(type === 'web') {
    content.innerHTML = `
      <h2>Web Development</h2>
      <p>Responsive HTML, CSS, JS projects with modern features and clean UI.</p>`;
  } else if(type === 'animations') {
    content.innerHTML = `
      <h2>Animations</h2>
      <p>Hover effects, smooth transitions, keyframe animations, and interactive elements.</p>`;
  } else if(type === 'sound') {
    content.innerHTML = `
      <h2>Sound Integration</h2>
      <p>Background music and interactive sound effects. Play/pause with your click!</p>`;
  }

  modal.style.display = 'flex';
}

function closeExample() {
  document.getElementById('exampleModal').style.display = 'none';
}
