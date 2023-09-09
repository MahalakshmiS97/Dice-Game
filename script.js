let images = ["dice-1.PNG","dice-1.PNG",
"dice-2.PNG",
"dice-3.PNG",
"dice-4.PNG",
"dice-5.PNG",
"dice-6.PNG"];
var playing=true;
var currentscore, sum=0, sum1=0, currentscore1;
let dice=document.querySelectorAll("img");
function roll(){
   let p1value = Math.floor(Math.random()*6+1);
   console.log(p1value);
   document.querySelector("#die-1").setAttribute("src", images[p1value]);
   currentscore=p1value;
   if(sum>=30){
    document.querySelector("#result").innerHTML="Player 1 Wins";
 }
 else{
   sum = sum + currentscore;
   document.querySelector("#p1total").innerHTML=sum;
 }
}

function roll1(){
    let p2value = Math.floor(Math.random()*6);
    console.log(p2value);
    document.querySelector("#die-1").setAttribute("src", images[p2value]);
    currentscore1=p2value;
    if(sum1>=30){
        document.querySelector("#result").innerHTML="Player 2 Wins";
    }
    else{
   sum1 = sum1 + currentscore1;
   document.querySelector("#p2total").innerHTML=sum1;
    }
 }
 function reset(){
    currentscore=0;
    currentscore1=0;
    document.querySelector("#p1total").innerHTML=currentscore;
    document.querySelector("#p2total").innerHTML=currentscore1;
 }
