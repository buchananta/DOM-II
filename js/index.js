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


//scroll// That's One!
let scrollPosition = document.createElement('p');
document.querySelector('nav').prepend(scrollPosition);
window.addEventListener('scroll', (event) => scrollPosition.textContent = window.scrollY);
//dblclick// Thats Two!
document.querySelector('footer').addEventListener('dblclick', event => window.scrollTo(0,0));
//keydown// That's Three! .. for whatever reason I can only get this to work on the html element?
document.querySelector('html').addEventListener('keydown', event => {
  event.target.style.position = 'relative';
  event.target.style.left = pxmover();
  console.log('keypress');
});
const pxmover = function() {
  let start = 0;
  let inc = 1;
  return () => {
    Math.abs(start) > 10 ? inc *= -1 : {};
    start += inc;
    return `${start}px`;
  }
}();
//mouseover// That's Four!
const images = document.querySelectorAll('img');
images.forEach(elem => elem.addEventListener('mouseover', event => {
  event.target.style.filter = 'contrast(250%)';
  console.log('mouseover');
  setTimeout(() => event.target.style.filter = '', 1000)
}))
//wheel// that's five!
let scroll = 0;
document.querySelector('h1').addEventListener('wheel', event => {
  event.target.style.position = 'relative';
  event.target.style.top = `${scroll+= 6}.px`
  setTimeout(() => {event.target.style.position = 'relative';
              scroll = 0}, 9000);
  console.log(event);
})
//load// that'll be six!
window.onload = (event) => {
  document.querySelector('h1').style.color = '#f60'
}
//focus// seven//huh, tried to do this with images. but I need to add a thing called 'tabindex'
//that's actually really cool. gonna do a tags instead, becuase now I know how it works.
document.querySelectorAll('a').forEach( el => {
  el.addEventListener('focus', event => {
    event.target.style.transform = 'scale(2, 2)';
  });
  el.addEventListener('blur', event => {
    event.target.style.transform = '';
  });
})
//resize, almost there!
window.onresize = (event) => {
  document.querySelectorAll('.btn')[Math.floor(Math.random() * 3)].style.color = rndColor();
  console.log('resize');
}
//select only works in text boxes.
let textArea = document.createElement('input');
textArea.style.transform = 'scale(2)';
textArea.style.display = 'block';
textArea.style.textAlign = 'center';
body.appendChild(textArea);

textArea.addEventListener('select', event => {
  let p = document.createElement('p')
  p.textContent = event.target.value;
  event.target.parentNode.appendChild(p);
  console.log(p);
});
//i'm out of ideas, and I technically have 11-14 because of blur and timeouts and not counting the color changing ones