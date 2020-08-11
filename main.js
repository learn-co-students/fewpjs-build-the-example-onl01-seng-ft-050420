document.addEventListener('DOMContentLoaded', function () {
  console.log('zug zug')
})

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')
const likeButtons = document.querySelectorAll('.like')

errorModal.className = 'hidden'

likeButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    mimicServerCall()
      .then(function (response) {
        console.log(response)
        likeHandler(button)
      })
      .catch(function (error) {
        errorHandler(error)
      })
  })
})

function likeHandler(button) {
  if (button.innerHTML.includes('Like!')) {
    button.innerText = `Unlike! ${FULL_HEART}`
    button.className += ' activated-heart' // Is there a better way to do this?
  } else {
    button.innerText = `Like! ${EMPTY_HEART}`
    button.classList.remove('activated-heart')
  }
}

function errorHandler(error) {
  errorModal.innerHTML = `<h2>Error!</h2><p id="modal-message">${error}</p>`
  errorModal.className = 'visible'
  setTimeout(function () {
    errorModal.className = 'hidden'
  }, 5000)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject('Random server error. Try again.')
      } else {
        resolve('Pretend remote server notified of action!')
      }
    }, 300)
  })
}
