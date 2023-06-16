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


var number=Math.random()*100;
number=Math.floor(number)+1;

var output=[];
var count=1;

function fizzBuzz(){
    if(count%3===0 && count%5===0){
        
        output.push("FizzBuzz");
        console.log(output);
        count++;
    } 
    else if(count%3===0){
        
        output.push("Fizz");
        console.log(output);
        count++;
    }
    else if(count%5===0){
        
        output.push("Buzz");
        console.log(output);
        count++;
    }
    else {
        
        output.push(count);
        console.log(output);
        count++;
    }
   
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

