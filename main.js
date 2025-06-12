window.greetUser = function() {
      console.log("clicked");  // Should appear in console
      const name = document.getElementById("name").value;
      const last = document.getElementById("lastname").value;
      const p = document.getElementById("password").value;

      const lengthValid = p.length >= 8;
      const lowercaseValid = /[a-z]/.test(p);
      const uppercaseValid = /[A-Z]/.test(p);
      const numberValid = /[0-9]/.test(p);
      const specialCharValid = /[^A-Za-z0-9]/.test(p);

      document.getElementById("length").className = lengthValid ? "valid" : "invalid";
      document.getElementById("letter").className = lowercaseValid ? "valid" : "invalid";
      document.getElementById("capital").className = uppercaseValid ? "valid" : "invalid";
      document.getElementById("number").className = numberValid ? "valid" : "invalid";
      document.getElementById("special").className = specialCharValid ? "valid" : "invalid";

      const allValid = lengthValid && lowercaseValid && uppercaseValid && numberValid && specialCharValid;
      if (allValid) {
        alert(document.getElementById("results").textContent = `Welcome, ${name} ${last}!`);
      } else {
        alert("Please enter password in correct format");
      }
    };

/*


let a = 32;
let b = 4;
let string = 'Prashamsa';
let sum = a + b;
let diff = a - b;
let mul = a * b;
let div = a / b;
let rem = a % b;
let expo = a ** b; // power 
let c = ++a ;  // increase value by 1
let d = --b ;  // decreases value by 1
let num = +String; // change anything into number
let e = -diff;  // make positive number to negative

console.log("sum of two number is", sum);
console.log("diff of two number", diff);
console.log("product of two number", mul);
console.log("division of two number is", div);
console.log ("remainder of two number is", rem);
console.log("the power a by b is", expo);
console.log("the value of c after increment is ", c);
console.log("the value of d after decreament is", d);
console.log(typeof num);
console.log("the value of e is", e);



let a = 12;
let b = 8;
let c = 12;
let d = "avenir";
let e = "avenir";
// equality comparison
console.log( a == b);
console.log(a == c);

// inequality comparison
console.log( a != b);
console.log (a != c);

//strictly equality 
console.log( a === b);
console.log (a === c);
console.log ( d === e);

// strictly unequality
console.log ( a !== b);
console.log (a !== c);
console.log ( a !== d);

// greater than
console.log(a > b);
console.log(b > c);

// lesser than
console.log(a < b);
console.log( a < c);

//greater or equal to
console.log (a >= b);
console.log (b >= c);

//smaller or equal to
console.log(a <= b);
console.log(b <= c);





// logical operator
 let x = true;
 let y = false;
 let z = true;

 //logical not
 console.log(!x);
 console.log(!y);
 console.log(!z);

 //logical and
 console.log(x && y);
 console.log(x && z);

 // logical or
 console.log(x || y);
 console.log(x || z);



 // if statement
 let a = 10;
 if(a % 2 == 0)
 {
    console.log("the number is even",a);
 }

 //if-else

 let b = 33;
 if (b % 2 == 1)
 {
    console.log("the number is odd", b)
 }
 else
 {
    console.log("the number is even", b)
 };
 

 // else if
 let c= 2;
 if (c > 0)
    {
        console.log("the number is positive", c);
    }
    else if (c < 0)
    {
        console.log("the number is negative",c);
    }
    else{
        console.log("the number is zero", c);
    }


//nested if
let age = 12;
let nationality = 'nepali';

if(nationality == 'nepali') {
    if (age >= 18)
    {
        console.log("you can vote");
    }
    else 
    {
        console.log("you are nepali but you are minor");
    }
}
else
{
    console.log("you cant vote denn you are nepali");
}

let Age = 23;
const right = 
(Age >= 18) ? "you are eligible to vote"
: "you are not eligible to vote";
console.log(right);
 
let number = 6;
for( i = 0; i <= 6; i++)
{
    console.log(i);
}

let i= 0;
while ( i < 6)
{
    console.log(i);
    i++;
}


let j = 0;
do{
    console.log(j);
    j++;
} while( j < 6 );




let day = 7;
let dayname;
switch(day) {
    case 1:
        dayname = "Sunday";
        break;
        
    case 2:
        dayname = "Monday";
        break;

    case 3:
        dayname = "Tuesday";
        break;
    case 4:
        dayname = "wednesday";
        break;
    case 5:
        dayname = "thrusday";
        break;
    case 6:
        dayname = "friday";
        break;
    case 7:
        dayname = "Saturday";
        break;
    default:
        dayname = "invalid day";
}
console.log(dayname);

*/