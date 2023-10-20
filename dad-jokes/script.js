const dadJokeEl = document.querySelector('.dad-joke');
const btnEl = document.querySelector('.btn');

// Promise
// btnEl.addEventListener('click', (e) => {
//   fetch('https://icanhazdadjoke.com/slack')
//     .then((response) => {
//       if (!response.ok) throw new Error('Something went wrong, please try again later');
//       return response.json();
//     })
//     .then((data) => {
//       const joke = data.attachments[0].fallback;
//       dadJokeEl.innerText = joke;
//     })
//     .catch((err) => console.log(err));
// });

// async
btnEl.addEventListener('click', async (e) => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept':'application/json'
      }
    });
    if (!response.ok) throw new Error('Something went wrong, please try again later');
    const data = await response.json();
    console.log(data);
    const joke = data.joke;
    dadJokeEl.innerText = joke;
  } catch(err) {
    console.log(err);
  }
  
});
