var n = Math.random();
n=n*6;//multiply by 6 means that it is the highest random number can be genrated
n=Math.floor(n)+1;//there is +1 because random no. can be 0 but not equal to 1
console.log(n);

// prompt("What is your name?");
// prompt("What is the other name?");

var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1;

if(loveScore===100||loveScore>70){
    console.log(`Sana all ${loveScore}%`);
}
else if(loveScore<=70 && loveScore>=50){
    console.log(`Pwede din ${loveScore}%`);
}
else{
    console.log(`Kawawa man ${loveScore}% lang`);
}

function isLeaf(year){
    if(year%4===0){
        if(year%100===0){
            if (year%400===0) {
                console.log("Leap year");
            } else {
                console.log("Not leap year.");              
            }

        }else{
            console.log("Leap year");
        }
    }else{
        console.log("Not leap year.");
    }
    
}
isLeaf(2100);


var guestList=["Angela","Jack","Pam","James","Lara","Jason"];
var askName;//prompt("What is your name?");
if(guestList.includes(askName)){
    alert(`Welcome ${askName}`);
}else{
    // alert("Your name is not in the guestlist");
}


//push() & pop()
//use modulo for getting the divisible of a number
var output=[];
var count=1;

function fizzBuzz(){
    while(count<=100){
        if(count%3===0 && count%5===0){       
            output.push("FizzBuzz");
        } 
        else if(count%3===0){         
            output.push("Fizz");  
        }
        else if(count%5===0){  
            output.push("Buzz");  
        }
        else {
            output.push(count); 
        }
        
        count++;
    }
    console.log(output);
}
fizzBuzz();


var nameList=["Angela","Ben","Jenny","Michael","Chloe"];
function whosPaying(names){

    var numberOfPeople= nameList.length;
    var randomPersonPosition=Math.floor(Math.random()*numberOfPeople);
    var randomPerson=names[randomPersonPosition];

    console.log(`${randomPerson} is going to buy lunch today!`) ;
}

whosPaying(nameList);

var beers=99;
var numberBeersLeft=beers;
function bottlesOfBeer(){
    var bottleWord="bottles";
    while (numberBeersLeft!==0) {
        if(numberBeersLeft===1){
            bottleWord="bottle"
        }
        console.log(`${numberBeersLeft} ${bottleWord} of beer on the wall, ${numberBeersLeft} ${bottleWord} of beer.`);
        numberBeersLeft--;
        console.log(`Take one down and pass it around, ${numberBeersLeft} ${bottleWord} of beer on the wall.`);
    }
    console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
    console.log(`Go to the store and buy some more, ${beers} bottles of beer on the wall.`);

}
// bottlesOfBeer();

var fibonacciNumber=[];
var i=0;
var first=0;
var second=1;
var third;
function fibonacciGenerator(n){
    
    while(i<n){
       
        fibonacciNumber.push(first);
        third=second;
        first=first+second;
        second=first;
        first=third;
        i++;
    }
    console.log(fibonacciNumber);
}

fibonacciGenerator(10);


var winningCombination=[];
function winningLottoDigits(category){
    let sixDigits=6;
    for (let index = 0; index < sixDigits; index++) {
        var combination=Math.floor(Math.random()*category)+1;
        // winningCombination.push(combination);
        //there's a problem a number can be repeated, it must not repeated(solved)
    if(!winningCombination.includes(combination)){
        winningCombination.push(combination);
        //combination is push to the array if is not the same digit inside the array
    }else{
        //if combination is repeated it will not push it to the array
        //so winningCombination might have less than 6
        sixDigits++;//by adding 1 it will fill the loop until it contains 6 digits
    }

    }
    console.log(winningCombination);
}

var selected=prompt("Select the category where you want to bet? a.6/58 b.6/55 c.6/49 d.6/45 e.6/42");
if(selected==="a"){
    winningLottoDigits(58);
}
else if(selected==="b"){
    winningLottoDigits(55);
}
else if(selected==="c"){
    winningLottoDigits(49);
}
else if(selected==="d"){
    winningLottoDigits(45);
}
else{
    winningLottoDigits(42);
}