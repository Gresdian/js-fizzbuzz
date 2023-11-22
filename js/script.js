const first_list = document.getElementById('first-list');

for(let i=1; i<=100; i++){
    let Fizz , Buzz , FizzBuzz;
    let li = `<li id="item-${i}">${i}</li>`;
    first_list.innerHTML += li;
    
    if(i%15 == 0){
      FizzBuzz = li ;
      li.setAttribute('id',`list-item-${i}`);
      FizzBuzz.innerHTML = `FizzBuzz ${i}`;
    }
}