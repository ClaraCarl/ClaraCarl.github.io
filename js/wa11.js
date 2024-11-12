const imageNames = ['tallie.png', 'duoPeak.png', 'peakMark.png', 'view.png', 'peakView.png'];

const imageAlts = {
  'tallie.png': 'Tallie mid hike',
  'duoPeak.png': 'Clara and Tallie at the Peak',
  'peakMark.png': 'Peak Marker',
  'view.png': 'View from part way up the mountain',
  'peakView.png': 'View from the peak'
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

imageNames.forEach(name => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${name}`); 
  newImage.setAttribute('alt', imageAlts[name]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', `img/${name}`);
    displayedImg.setAttribute('alt', imageAlts[name]);
  });
});

btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
  }
});