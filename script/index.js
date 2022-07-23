

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




// const slider = document.querySelector('.parent');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };
// let stopDragging = function (event) {
//   mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);
