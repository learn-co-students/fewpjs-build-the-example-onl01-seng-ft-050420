// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const glyphs = document.querySelectorAll('.like-glyph')
const errorModal = document.querySelector('#modal')

document.addEventListener('DOMContentLoaded', loadEvents())

function loadEvents() {
  glyphs.forEach(glyph => glyph.addEventListener('click', likeIt))
}

function likeIt(e) {
  mimicServerCall()
    .then(heartToggle(e))
    .catch(modalToggle)
}

function heartToggle(e) {
  if (e.target.textContent === EMPTY_HEART) {
    e.target.textContent = FULL_HEART
    e.target.classList.add('activated-heart')
  } else {
    e.target.textContent = EMPTY_HEART
    e.target.classList.remove('activated-heart')
  }
}

function modalToggle(error) {
  errorModal.textContent = error;
  errorModal.classList.remove('hidden')
  setTimeout(() => errorModal.classList.add('hidden'), 2000)
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
