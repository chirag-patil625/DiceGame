var randomNumber1= Math.floor(Math.random(randomNumber1)*6+1);
var randomImage1= document.querySelector(".img1");
randomImage1.setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2= Math.floor(Math.random(randomNumber2)*6+1);
var randomImage2= document.querySelector(".img2");
randomImage2.setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player one wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player two wins";
}else{
    document.querySelector("h1").innerHTML="Tie";
}