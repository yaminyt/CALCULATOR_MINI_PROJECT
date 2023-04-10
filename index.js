// let a = 20;
// let b = 30;
// let c = a * b;
let age = 15 ;

// function hew() {

// if ( age > 18) {
//         console.log( "allow to live alone") ;
//  }
// else {
//         console.log("You have to live with your parents");
// }
     
// }
// hew();

// let allowedToDrink = ( age > 18)? "Allowed to drink, yay!!" : " you have to think about your life first!";
// document.getElementById("Demo").innerHTML= "hello" ;
document.querySelector("#Demo").textContent=" Hey Yamin ! "

// myName=prompt("Enter your name: ");
// console.log("Hi " + myName +",Welcome to Javascript World!");

// myName=prompt("Enter your name: ");
// alert("Hi " + myName +",Welcome to Javascript World!");



// myAge = prompt("Enter your age: ");
// alert( " You are " + myAge + ", Enjoy your life!")

// If else Condition 

let h = 16

function hour() {

if ( h < 18) {
        console.log("Good Day");
} 
else {
        console.log(" good evening ");
}
}
hour();

// Switch Condition 

let grade = "B+" ;

switch (grade) {

        case "A+" :
               console.log("Great Job!")
               break 
        case "A" :
                console.log("Good work!")
                break
        case "B+" :
                console.log("Well done! but still lot to improve")
                break
        default : 
                console.log("Fail!!!")

        }





let run = 90
switch (run) {

        case 50 :
                console.log("Good batting Average")
                break
        case 70 :
                console.log("Better batting Average") 
                break
        case 90 :
                console.log("Best batting average")
                break
        default :
                console.log("Poor batting average")

}        

// Functions  

function amy(n1,n2){

        console.log(n1+n2)
}
amy(17,45)

function mya(n1,n2){

       return (n1+n2)
}
document.getElementById("Demo").innerHTML= mya(17,3)



// function you(f){
//         console.log(f ** 2)
//         console.log(f ** 3)
// }
// you(17)


function arearec(w,l){
        return w*l
}
console.log(arearec(6,3))

function you(w,l){
        return (arearec(w,l) **2)
}
console.log(you(12,34))


function areacir(r){
        return 3.1416*r**2
}
console.log(areacir(3))


function me(r,w,l){
        return (areacir(r) + arearec (w,l) )

}
console.log (me(3,7,9))


let abc = function (len,wd){
        const area = len*wd
        return area
}

console.log(abc(5,7))

const def = (len,wd) =>{
    return len*wd
}

console.log(def(5,7))





// {
//         let y = 5;

// }
// console.log(y);



// function scopeFunction () {
//         let x = 6;  
// }
// console.log(x);


const z = 10;
if (z%2 ==0){
        console.log(z);
        console.log("it is even");
}
console.log(z);



let l = [45,333,18,23,2,45,6,89,09,6734,423434,344545,3434435]
        console.log (l)
document.getElementById('Demo').innerHTML=(l)

console.log(l[1])
l[2]=17;
console.log(l)
console.log(l.length)
// l.push(1745,4517) for adding elements to the list at the end
console.log(l)
// l.pop() for removing the last elements
console.log(l)
// l.shift() for removing the first elements
console.log(l)

// l.unshift(10) for adding the elements to the list at first
console.log(l)

// let n = l.slice(2,6) to create short portion of the list 
console.log(n)


let p = l.slice(3,9)
console.log(p)


// LOOPS

for (let )


