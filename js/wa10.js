const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = 'Walking through the forest at night with Fred in search of :insertx: when suddenly :inserty: stopped you in your tracks, then :insertz:.';
const insertX = ['berries', 'the Princess', 'the magical herb'];
const insertY = ['the land was covered in a thick fog', 'a witch', 'a faint song started to play'];
const insertZ = ['a clearing appeared', 'your mom called out worriedly', 'you wake up'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Fred', customName.value);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}