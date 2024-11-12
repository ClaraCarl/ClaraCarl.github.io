const thumbBar = document.querySelector('.thumb-bar');

const filenames = [
  'hikingUp.JPG',
  'tallie.png',
  'duoPeak.png',
  'peakMark.png',
  'view.png',
];

const altTexts = {
  'hikingUp.JPG': 'Photo of Clara hiking up to the peak',
  'tallie.png': 'Tallie mid hike',
  'duoPeak.png': 'Clara and Tallie at the Peak',
  'peakMark.png': 'Peak Marker',
  'view.png': 'View from part way up the mountain',
};

filenames.forEach((imageName) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `js/${imageName}`);
  newImage.setAttribute('alt', altTexts[imageName]);
  thumbBar.appendChild(newImage);
});

function handleImageClick({ target }) {
  displayedImage.setAttribute('src', target.getAttribute('src'));
  displayedImage.setAttribute('alt', target.getAttribute('alt'));
}

const displayedImage = document.querySelector('.displayed-img');

filenames.forEach((imageName) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `js/${imageName}`);
  newImage.setAttribute('alt', altTexts[imageName]);
  thumbBar.appendChild(newImage);
  img.addEventListener('click', handleImageClick);
});

function handleButtonClick() {
  let currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.setAttribute('class', 'light');
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.setAttribute('class', 'dark');
  }
}

btn.addEventListener('click', handleButtonClick);
