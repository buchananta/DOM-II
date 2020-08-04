//Stop the navigation items from refreshing the page.
const navElements = document.querySelectorAll('nav a');
navElements.forEach(el => {
  el.addEventListener('click', event => {
    event.preventDefault();
  })
});
//support functions
function rndColor() {
  return 'rgb(' + Math.floor(Math.random() * 256) + ', '
                + Math.floor(Math.random() * 256) + ', '
                + Math.floor(Math.random() * 256) + ')'
}
function rndBackground(event) {
  return event.currentTarget.style['background-color'] = rndColor();
}
//Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
const body = document.querySelector('body');
body.addEventListener('click', event => rndBackground(event));
const header = document.querySelector('header');
header.addEventListener('click', event => {
  rndBackground(event);
  event.stopPropagation();
})