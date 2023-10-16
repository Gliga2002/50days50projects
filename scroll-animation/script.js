// const translateLeftContent = document.querySelectorAll('.translate--left');
// const translateRightContent = document.querySelectorAll('.translate--right');
const allContent = document.querySelectorAll('.translate');

const showContent = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
      entry.target.classList.remove('translate--left');
      entry.target.classList.remove('translate--right');
      observer.unobserve(entry.target);
  }
  
};

const contentObserver = new IntersectionObserver(showContent, {
  root: null,
  threshold: 0.2,
});

// translateLeftContent.forEach((content) => contentObserver.observe(content));
// translateRightContent.forEach((content) => contentObserver.observe(content));
allContent.forEach((content) => contentObserver.observe(content))
