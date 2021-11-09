window.onload = () => {
  const hamburger = document.querySelector('.menubar');
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });
};