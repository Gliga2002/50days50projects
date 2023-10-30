const fill = document.querySelector('.fill');
const emptyAll = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of emptyAll) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  // kad je dragujes i dalje ostaje u taj box, i da ne bi se videla, samo je stavi invisible
  setTimeout(() => this.className = 'invisible', 0);
}


function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
  console.log('drag over');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
