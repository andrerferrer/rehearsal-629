
// select the element
const btn = document.querySelector('#click-me');

// do the callback
const darkModeOn = (event) => {
  // console.log(event);
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
};

// add event listener
btn.addEventListener('click', darkModeOn);
