

var modal = document.getElementById("myModal");
var btn = document.getElementById("first");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




const slider = document.querySelector('.parent');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);




const slider1 = document.querySelector('.parent1');
let mouseDown1 = false;
let startX1, scrollLeft1;

let startDragging1 = function (e) {
  mouseDown1 = true;
  startX1 = e.pageX1 - slider1.offsetLeft1;
  scrollLeft1 = slider1.scrollLeft1;
};
let stopDragging1 = function (event) {
  mouseDown1 = false;
};

slider1.addEventListener('mousemove1', (e) => {
  e.preventDefault();
  if(!mouseDown1) { return; }
  const x1 = e.pageX1 - slider1.offsetLeft1;
  const scroll1 = x1 - startX1;
  slider1.scrollLeft1 = scrollLeft1 - scroll1;
});

slider1.addEventListener('mousedown1', startDragging1, false);
slider1.addEventListener('mouseup1', stopDragging1, false);
slider1.addEventListener('mouseleave1', stopDragging1, false);
