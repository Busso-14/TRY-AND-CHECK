//
function calculate(){
  //
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  const num3 = parseFloat(document.getElementById("input13").value);
  const num4 = parseFloat(document.getElementById("input14").value);
  //
  // if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
  //   document.getElementById("NumResult").innerText = "Enter Valid Number!"
  // }
  // if(isNaN(num1) && isNaN(num2) && isNaN(num3) && isNaN(num4)){
  //   document.getElementById("NumResult").innerText = "Enter Valid Number!"
  // }
  //
  const average = (num1 + num2 + num3 + num4) / 4;
  //
  // document.getElementById("NumResult").innerText = average;
  // if(average < 50){
  //   document.getElementById("moralGalinta").innerText = "Bad!"
  // }else if(average >= 85){
  //   document.getElementById("moralGalinta").innerText = "Excellent!"
  // }else if(average < 85 && average >65){
  //   document.getElementById("moralGalinta").innerText = "Great!"
  // }else if(average <65 && average >= 50){
  //   document.getElementById("moralGalinta").innerText = "NOT Bad!"
  // }
}