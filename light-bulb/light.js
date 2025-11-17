const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const imgElement = document.getElementById("img");

onBtn.addEventListener("click", ()=> handleClick("on"));
offBtn.addEventListener("click", ()=> handleClick("off"));

function handleClick(action){
  switch(action){
    case 'on': {
      imgElement.setAttribute("src", "./b-onn.png");
      break;
    }
    default:{
      imgElement.setAttribute("src", "./b-Off.png");
    }
  }
}