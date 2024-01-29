const textContainer = document.getElementById('text-container');
const characters = textContainer.getElementsByClassName('character');
let index = 0;

function typewriterEffect() {
  if (index < characters.length) {
    characters[index].style.opacity = '1';
    index++;
    setTimeout(typewriterEffect, 90); 
  }
}

typewriterEffect();


// const textContainer = document.getElementById('text-container');
// const characters = textContainer.getElementsByClassName('character');
// let index = 0;

// function typewriterEffect() {
//   if (index >= characters.length) {
//     index = 0; // Reset index to restart the typewriter effect
//     Array.from(characters).forEach(character => {
//       character.style.opacity = '0'; // Reset opacity of all characters
//     });
//   }

//   characters[index].style.opacity = '1';
//   index++;
//   setTimeout(typewriterEffect, 90); // Adjust the delay to control the typing speed
// }

// typewriterEffect();