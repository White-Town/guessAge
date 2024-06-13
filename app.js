
let previousName = '';
let previousAge = 0;

function getAge() {
  let input = document.querySelector('#inp');
  let text = document.querySelector('.text');
  let name = input.value;

  if (name === "") {
    text.innerText = 'Please enter your valid name';
  } else if (name === previousName) {  //if name is equal to previous name display the same age again
    text.innerText = `Your age is ${previousAge}`;
  } else {
    let age = Math.floor(Math.random() * 100);
    previousName = name;
    previousAge = age;
    text.innerText = `Your age is ${age}`;
  }

  input.value = '';
}