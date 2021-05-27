export default () => {
  const elem = document.createElement('h3');
  elem.textContent = 'Hello World!';
  elem.addEventListener('click', () => {
    alert('Hello Webpack');
  });
  console.log('1');
  return elem;
}