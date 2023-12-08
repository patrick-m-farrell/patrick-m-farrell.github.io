let draggedElement = null;

function drag(event) {
  draggedElement = event.target;
  event.dataTransfer.setData('text/plain', draggedElement.outerHTML);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const droppable = event.target;

  if (draggedElement) {
    draggedElement.classList.add('enlarged');

    droppable.appendChild(draggedElement);
    draggedElement = null;
  }
}

const userInput = document.getElementById('userInput');
const output = document.getElementById('Output');

$(document).ready(function() {
  $('#button1').click(function() {
    $('.flyer-1').toggle();

    if ($('#flyer-3').css('display') == "block") {
      $('#flyer-3').toggle();
    }
  });

  $('#button2').click(function() {
    $('#flyer-2').toggle();

    if ($('#flyer-1').css('display') == "block") {
      $('#flyer-1').toggle();
    }
  });

  $('#button3').click(function() {
    $('#flyer-3').toggle();

    if ($('#flyer-2').css('display') == "block") {
      $('#flyer-2').toggle();
    }
  });
});