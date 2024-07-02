export const scrollToTop = () => {
  const container = document.querySelector('.MainPage');
  if (container) {
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};