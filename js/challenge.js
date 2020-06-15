let counter = document.querySelector("#counter");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let likes = document.querySelector("ul.likes");
let like = document.querySelector("#heart");
let pause= document.querySelector("#pause");
let likeCount=0;
let status = 1;


function updateCounter(){
  counter.innerText=parseInt(counter.innerText)+1;
};

function decreaseCounter(){
  counter.innerText=parseInt(counter.innerText)-1;
};

function addLike() {
  if (likes.lastChild) {
    let li = likes.lastChild;
    if (li.id===counter.innerText) {
      likeCount++;
      li.innerText=`${li.id} has been liked ${likeCount} times`;
    } else {
      likeCount=1;
      let li = document.createElement("li");
      li.id=parseInt(counter.innerText);
      li.innerText=`${li.id} has been liked 1 time`;
      likes.appendChild(li);
    }

  } else {
    likeCount=0;
    let li = document.createElement("li");
    li.id=parseInt(counter.innerText);
    likeCount++;
    li.innerText=`${parseInt(counter.innerText)} has been liked 1 time`;
    likes.appendChild(li);
  }
};


function controlTimer() {


}

let runTimer = setInterval(updateCounter,1000);
plus.addEventListener("click", updateCounter);
minus.addEventListener("click", decreaseCounter);
like.addEventListener("click",addLike);
pause.addEventListener("click",function () {
  if (runTimer>0) {
    clearInterval(runTimer);
    runTimer=0;
    pause.innerText="resume";
  } else {
    runTimer = setInterval(updateCounter,1000);
    pause.innerText="pause";
  }
});
