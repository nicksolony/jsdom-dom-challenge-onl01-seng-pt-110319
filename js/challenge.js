let counter = document.querySelector("#counter");

let runTimer = setInterval(update_counter,1000);


function update_counter(){
  counter.innerText=parseInt(counter.innerText)+1;
}
