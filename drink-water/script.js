const smallCups = document.querySelectorAll('.cup-small');
const cups = document.querySelector('.cups');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

cups.addEventListener('click', (e) => {
  if (!e.target.hasAttribute('data-id')) return;
  highlightCup(e.target.dataset.id);
});

function highlightCup(id) {
  if (
    smallCups[id].classList.contains('full') &&
    !smallCups[id].nextElementSibling.classList.contains('full')
  )
    id--;

  smallCups.forEach((cup, id2) => {
    if (id2 <= id) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
  }

 


}
// smallCups.forEach((cup, idx) => {
//   cup.addEventListener('click', () => highlightCups(idx));
// });

// function highlightCups(idx) {
//   if (
//     smallCups[idx].classList.contains('full') &&
//     !smallCups[idx].nextElementSibling.classList.contains('full')
//   ) {
//     idx--
//   }

//   smallCups.forEach((cup, idx2) => {
//     if (idx2 <= idx) {
//       cup.classList.add('full');
//     } else {
//       cup.classList.remove('full');
//     }
//   });
// }
