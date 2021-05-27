export default () => {
  const elem = document.createElement('h3');
  elem.textContent = 'Hello World!';
  elem.addEventListener('click', () => {
    alert('Hello Webpack');
  });
  return elem;
}