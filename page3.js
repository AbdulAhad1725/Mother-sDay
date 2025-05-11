const message = `You are the gentle rhythm in every heartbeat, the warmth in every sunrise.  
Your hands have held me through storms and your love has lit up even my darkest days.  
You’ve given me everything — your strength, your stories, your soul — without asking for anything in return.  
Every laugh we’ve shared, every tear you’ve wiped away, lives inside me forever.  
I am who I am because of you.  
This world is better with you in it.  
And I’ll spend my life trying to make you proud.  
I love you, Mama.`;

// Split the message into words
const words = message.split(" ");

// Target the paragraph element where the message will appear
const messageElement = document.getElementById('message');

// Function to type out words one by one, fast and smooth
let i = 0;
function typeWord() {
  if (i < words.length) {
    messageElement.innerHTML += words[i] + " "; // Add the word to the paragraph
    i++;
    setTimeout(typeWord, 300); // Fast typing speed, delay reduced to 300ms
  } else {
    messageElement.innerHTML += `<span class="cursor"></span>`; // Add a blinking cursor at the end
  }
}

// Start typing the message after a brief delay
setTimeout(typeWord, 500); // Start typing after a 500ms delay
