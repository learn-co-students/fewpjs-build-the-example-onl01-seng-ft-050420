// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const displayError = document.getElementById('modal');
displayError.classList.add("hidden");

function listenToCLick() {
  const likeClassArray = document.getElementsByClassName('like');
  for (const likeIcon of likeClassArray) {
    likeIcon.addEventListener('click', likePost);
  }
}


function likePost(e) {
  const node = e.target;
  const heart = node.querySelector('span');
  // debugger
  if (heart.innerText === EMPTY_HEART){
    heart.innerText = FULL_HEART;
    serverFetch();
    heart.classList.add("activated-heart");

  } else {
    heart.innerText = EMPTY_HEART;
    serverFetch();
    heart.classList.remove("activated-heart")
  }
  // debugger
}

function serverFetch() {
  mimicServerCall().catch(function() {
    displayError.classList.remove("hidden");
    window.setTimeout(clearError, 5000)
  });
}
function clearError() {
  displayError.classList.add("hidden")
}

listenToCLick();




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
