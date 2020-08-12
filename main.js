// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")
const modal = document.getElementById("modal")
modal.className += 'hidden'

likeButtons.forEach(button => {
  button.addEventListener('click', e => {
    mimicServerCall()
      .then(response => console.log(response))
      .catch(error => {
        modal.innerText = error
        modal.classList.remove('hidden')
        setTimeout(function(){ modal.className += 'hidden'}, 5000);
      })
    if (button.innerText === EMPTY_HEART) {
      button.classList.add("activated-heart");
      button.innerText = FULL_HEART;
    } else {
      button.classList.remove('activated-heart');
      button.innerText = EMPTY_HEART;
    }
  })
});





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
