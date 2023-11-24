const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const value = e.target.value;
  console.log({ value });
  const valueLength = value.length;
  console.log({ valueLength });
  const blurValue = 20 - valueLength * 2;
  background.style.filter = `blur(${blurValue}px)`;
})
