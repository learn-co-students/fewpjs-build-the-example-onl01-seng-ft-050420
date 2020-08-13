// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('.like')

likeButtons.forEach((btn) => {
  btn.addEventListener('click', like)
})

function like(e) {
  mimicServerCall()
    .then(() => {
      let heart = e.target.parentElement.parentElement.querySelector('.like-glyph')
      if (heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART
      } else {
        heart.innerText = EMPTY_HEART
      }

    })
    .catch(() => {
      let errorModal = document.querySelector('#modal')
      errorModal.classList.remove('hidden')
      setTimeout(() => {
        errorModal.classList.add('hidden')
      }, 5000)
    })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url='http://mimicServer.example.com', config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) reject('Random server error. Try again.')
      else resolve('Pretend remote server notified of action!')
    }, 300)
  })
}
