// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");

for (const heart of hearts) {
  heart.addEventListener('click', like); 
};

function like(e){
  let heart = e.target;  
  mimicServerCall()
    .then(function(resp) {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart')
    })
    .catch(function(error){
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(function () {
        document.querySelector('#modal').classList.add('hidden')
      }, 5000)
    });
};







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
