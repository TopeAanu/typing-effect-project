const textContainer = document.getElementById("text-container");
const characters = textContainer.getElementsByClassName("character");
let index = 0;

function typewriterEffect() {
  // Make the current character visible
  if (index < characters.length) {
    characters[index].style.opacity = "1";
    index++;
    setTimeout(typewriterEffect, 90);
  } else {
    // Reset all characters to invisible after a delay
    setTimeout(resetCharacters, 1500);
  }
}

function resetCharacters() {
  // Hide all characters
  for (let i = 0; i < characters.length; i++) {
    characters[i].style.opacity = "0";
  }

  // Reset the index and start again after a short delay
  index = 0;
  setTimeout(typewriterEffect, 500);
}

// Start the effect
typewriterEffect();
