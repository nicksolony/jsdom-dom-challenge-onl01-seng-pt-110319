let counter = document.querySelector("#counter");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let likes = document.querySelector("ul.likes");
let like = document.querySelector("#heart");
let pause= document.querySelector("#pause");
let comments=document.querySelector("#list")
let commentsForm=document.querySelector("#comment-form")
let likeCount=0;

function updateCounter(){
  counter.innerText=parseInt(counter.innerText)+1;
};

function decreaseCounter(){
  counter.innerText=parseInt(counter.innerText)-1;
};

function addLike() {
  if (likes.lastChild) {
    let li =document.getElementById(parseInt(counter.innerText));
    if (li) {
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

function addComment(event) {
  event.preventDefault()
  if (commentsForm.comment.value !== "") {
    let p=document.createElement("p");
    p.innerText=commentsForm.comment.value;
    comments.appendChild(p);
    commentsForm.comment.value="";
  };
};

let runTimer = setInterval(updateCounter,1000);
plus.addEventListener("click", updateCounter);
minus.addEventListener("click", decreaseCounter);
like.addEventListener("click",addLike);
commentsForm.submit.addEventListener("click",addComment)


pause.addEventListener("click",function () {
  if (pause.innerText==="pause") {
    clearInterval(runTimer);
    plus.disabled=true;
    minus.disabled=true;
    like.disabled=true;
    commentsForm.submit.disabled=true;
    pause.innerText="resume";
  } else {
    runTimer = setInterval(updateCounter,1000);
    pause.innerText="pause";
    plus.disabled=false;
    minus.disabled=false;
    like.disabled=false;
    commentsForm.submit.disabled=false;
  }
});
