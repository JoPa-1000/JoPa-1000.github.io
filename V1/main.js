const form = document.getElementById('f');
const inputField = document.getElementById('input-1');
const outputField = document.getElementById('output-t');
outputField.value = inputField.value;

form.addEventListener('input', () => {
    console.log('.');
    outputField.value = inputField.value;
  });