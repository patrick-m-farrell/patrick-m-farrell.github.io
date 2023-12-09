const Left = document.querySelector('.left');
const Right = document.querySelector('.right');

Left.addEventListener('scroll', function (e) {
    Right.scrollTop = this.scrollTop;
  });
  
Right.addEventListener('scroll', function (e) {
    Left.scrollTop = this.scrollTop;
  });

  const draggableElements = document.querySelectorAll('.draggable');

draggableElements.forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', '')
    element.classList.add('dragging');
  });

  element.addEventListener('dragend', () => {
    element.classList.remove('dragging');
  });
});


$('.drag').find('.draggable-item').draggable({
});
