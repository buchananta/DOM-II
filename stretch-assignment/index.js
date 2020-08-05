import gsap from "gsap";
const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  block.addEventListener('click', event => {
    event.target.parentNode.insertBefore(event.target, event.target.parentNode.firstChild);
  })
  block.addEventListener('mousedown', event => {
    const element = block;
    event.target.style.position = 'relative';
    element.interval = setInterval(() => {
      element.style.left = `${Number(element.style.left.split('p')[0]) + 1}px`;
    }, 20)
  })
  block.addEventListener('mouseup', event => {
    clearInterval(block.interval);
  })
  block.addEventListener('mouseout', event => {
    if (block.interval) clearInterval(block.interval);
  })
}
)
