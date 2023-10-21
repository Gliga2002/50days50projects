
const faqContainerEl = document.querySelector('.faq-container');

faqContainerEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-chevron-down')) e.target.closest('.faq').classList.add('active');
  if (e.target.classList.contains('fa-times')) e.target.closest('.faq').classList.remove('active');
})