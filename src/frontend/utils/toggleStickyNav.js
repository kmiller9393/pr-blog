export const toggleStickyNav = () => {
  const nav = document.querySelector('.header-nav');
  const header = document.querySelector('.home-header');

  if (nav === null) return;

  let topOfNav = nav.offsetTop;

  let totalHeight = header.offsetHeight;

  if (window.scrollY >= topOfNav) {
    document.body.style.marginTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    nav.style.marginTop = -(nav.offsetHeight + header.offsetHeight) + 'px';
  }

  if (window.scrollY <= totalHeight) {
    document.body.style.marginTop = 0;
    document.body.classList.remove('fixed-nav');
    nav.style.marginTop = 0;
  }
};
