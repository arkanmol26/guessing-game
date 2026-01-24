alert("you have to  guess between 1 to max");
let max=prompt(" please enter maxValue");
let guess=prompt("guess any number in the range you selected");

let prediction=Math.floor(Math.random()*max)+1;
if(guess==prediction){
    alert("yeah! you guessed right");
}
else{
    alert("uffo,galat chun liya aapne");
 
}