 const container = document.querySelector('.container');
 
 container.addEventListener("mouseover", function (e) {
  const hoverSection = e.target;
  console.log(e)
  if (hoverSection.classList.contains('left')) {
    container.classList.remove('hover--right');
    container.classList.add('hover--left')
  }

  if (hoverSection.classList.contains('right')) {
    container.classList.remove('hover--left');
    container.classList.add('hover--right')
  }
 })


