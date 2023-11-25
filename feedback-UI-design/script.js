const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {

  const ratingContainer = e.target.closest('.rating');
  if (!ratingContainer) return;
  removeActive();
  ratingContainer.classList.add('active');
  const ratingText = ratingContainer.querySelector('small').innerText;
  selectedRating = ratingText;
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove('active')
  }
}
