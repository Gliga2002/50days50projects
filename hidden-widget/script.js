const searchContainer = document.querySelector('.search');

searchContainer.addEventListener('click', function (e) {
  const targetEl = e.target;
  if (!targetEl.closest('.btn')) return;
  const searchContainer = targetEl.closest('.search');
  searchContainer.classList.toggle('active');

  if(searchContainer.classList.contains('active')) {
    const inputEl = searchContainer.firstElementChild;
    inputEl.focus();
  }

});
