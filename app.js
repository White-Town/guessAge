let previousName = '';
let previousAge = 0;

function getAge() {
  let input = document.querySelector('#inp');
  let text = document.querySelector('.text');
  let name = input.value.trim(); // Trim spaces

  if (name === "") {
    text.innerText = 'Please enter a valid name';
    return;
  }

  if (name === previousName) {  
    text.innerText = `Your age is ${previousAge}`;
  } else {
    let age = Math.floor(Math.random() * 71) + 10; // Random age between 10-80
    previousName = name;
    previousAge = age;
    text.innerText = `Your age is ${age}`;
  }

  input.value = '';
}
