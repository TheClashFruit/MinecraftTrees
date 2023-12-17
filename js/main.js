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
  }
});