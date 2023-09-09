let images = ["dice-1.svg",
"dice-2.svg",
"dice-3.svg",
"dice-4.svg",
"dice-5_1.svg",
"dice-6.svg"];
let dice=document.querySelectorAll("img");
function roll(){
   let dieOneValue = Math.floor(Math.random()*6 + 1);
   console.log(dieOneValue);
   document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
}