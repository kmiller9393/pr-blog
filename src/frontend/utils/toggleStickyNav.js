export const toggleStickyNav = () => {
  const nav = document.querySelector('.nav-link-container');
  const header = document.querySelector('.home-header');

  if (nav === null || window.innerWidth <= 510) return;

  let topOfNav = nav.offsetTop;

  let headerHeight = header.offsetHeight;

  let navHeight = nav.offsetHeight;

  if (window.scrollY >= topOfNav) {
    header.style.marginBottom = navHeight + 'px';
    document.body.classList.add('fixed-nav');
  }

  if (window.scrollY <= headerHeight) {
    header.style.marginBottom = 0;
    document.body.classList.remove('fixed-nav');
  }
};
