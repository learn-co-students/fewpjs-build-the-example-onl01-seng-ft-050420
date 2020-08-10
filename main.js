// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById('modal')
errorDiv.setAttribute('class', 'hidden')

const heart = document.querySelectorAll(".like-glyph")
for(let x of heart){
  x.addEventListener("click", function(){
    mimicServerCall()
    .then(() => {
      if (x.innerHTML === EMPTY_HEART){
        x.setAttribute('class', 'activated-heart')
        x.innerHTML = FULL_HEART
      } else {
        x.setAttribute("class", '')
        x.innerHTML = EMPTY_HEART
      }
    })
    .catch(function(error){
      const pError = document.getElementById('modal-message')
      pError.innerHTML = error
      errorDiv.setAttribute('class', '')
      setTimeout(function(){
        pError.innerHTML = ""
        errorDiv.setAttribute('class', 'hidden')
      }, 5000)
      console.log(error)
    })
  })
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
