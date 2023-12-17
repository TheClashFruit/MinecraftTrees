const $ = _ => document.querySelector(_);

const maxSelection = $('#selector').children.length - 1;

let currentSelection = -1;

document.addEventListener('keydown', e => {
  switch(e.key) {
    case 'ArrowRight':
      if (currentSelection >= maxSelection)
        currentSelection = -1;

      $('#selector').children[++currentSelection].focus();

      break;
    case 'ArrowLeft':
      if (currentSelection <= 0)
        currentSelection = maxSelection + 1;

      $('#selector').children[--currentSelection].focus();

      break;
    case 'Enter':
      if ($('#selector').children[0].style.color === 'red') {
        window.location.href = 'https://www.google.com';
      } else {
        window.location.href = 'https://www.youtube.com';
      }
      break;
  }
});