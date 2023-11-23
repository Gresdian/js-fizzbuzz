const first_list = document.getElementById('first-list');

for(let i=1; i<=100; i++){
  let value;
  
  if(i%3 == 0  && i%5 == 0){
    value = 'FizzBuzz';
    console.log('FizzBuzz');
  }
  else if(i%5 == 0){
    value = 'Buzz';
    console.log('Buzz');
  }
  else if(i%3 == 0){
    value = 'Fizz';
    console.log('Fizz');
  }
  else{
    value = i;
    console.log(i);
  }
}

let li = document.createElement('li');
li.innerText = value;
first_list.appendChild(li);