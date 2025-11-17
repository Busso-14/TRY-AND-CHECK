// CALCULATOR PROGRAM

const myInput = document.getElementById("myInput");

function appendToDisplay(input){
  myInput.value += input;
}
function clearMyInput(){
  myInput.value = "";
}
function calculate(){
  try{
    myInput.value = eval(myInput.value);
  }catch(error){
    myInput.value = "Error"
  }
}