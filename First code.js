 let Firstname = "Jonas";
 console.log(Firstname);

 Firstname = "mini";
 console.log(Firstname);


 var creditcard = 50000;
 var gucci = 5000;
 var prada = 4000;
 var jpg = 3000;
 var total = gucci + prada + jpg;
 var Vtotal = total / 100;
 var Gtotal = Vtotal * 12;

 console.log(Gtotal);


 if (gucci > prada || jpg > prada){
     console.log("Gucci is Best");
 }
 else{
    console.log("hello " + 12 * 2 + " world");
 }

 let typo = "Legal";

 // Typeof keyword discribes the type of value in the console
 let $name = 'name';
 console.log(typeof $name);

let fame = false;

if(fame == 1){
    console.log("Hello World");
}
else{
    console.log("bye");
}

let student;
console.log(student);

student = "23";
console.log(student);


// Var is a traditonal ay of declaring a variable
var studeny = 23;
console.log(studeny);

studeny = "huz";
console.log(studeny);

// using const keyword we cannot change the value of var
const smot = "string";
console.log(smot);
/*
smot = 23;
console.log(smot);
 */
const img = "man";

let man = ["Shaik", "mohammed"];
console.log(man);
man.join();
console.log(man);



const $jpg = ["mallick", "clacki"];

 //document.getElementById("head").innerHTML = $jpg.join(" and ");
/*
 let m = document.getElementById("many");



console.log();
*/

const today = 2050;
let sarah = 1999;
let $mano = 2001;
console.log(today - $mano + " this"); 
console.log(today);

console.log($jpg.join(" and "));
console.log(today - 1999 > today - 2001);
console.log(2 ** 5);
console.log(typeof $jpg);


// assignment operators
let xy = 68 / 2; // 68/2 = 34
xy += 34; // this xy is has the previous value xy = xy + 34 = 68
xy *= 2; // this operator multiplies with the previous value that is xy = xy * 2 = 136
xy /= 2; // this operator divides the previous value with 2
xy++; // xy = xy + 1 adds the value with one
xy--; // xy = xy - 1 subtracts the value with one

console.log(xy);
let Mm = 23;
let hh = Mm *= 2;
console.log(hh);
hh = Mm * 2;

// comparision operators
let wolf = 1;
let dog = 0;

console.log(dog < wolf); // this operator finds the greatest value from those

const lg = dog >= wolf; // type of value is boolean

if(wolf > dog){
    console.log("hurry");
}


// Operator precedence
let tot = 50;
let j = 5;
let k = 3;
console.log(tot - 5 > tot - 3);// In this operator maths operators first get operated and then the comparision operator is used 

let x, y;
//      <-   <-   <- 
x = y = 10 + 34 - 23;// left to right approch is use by javascript where it starts solving from left .because the assignment operator has less precedence than mathematical operators 
console.log(x, y); // x = y = 10 , x = 10, y = 10


console.log((4 + 6) / 2); // here if we use the brackets on what numbers we want to be done first 


// Exericise to calculate mark and john's BMI(Body Mass Index)

// store the values first
let Mark_height = 1.6;
let Mark_weight = 78;
let John_height = 1.95;
let John_weight = 92;
                    //same as  Mark_height * Mark_height
let Mark_BMI = Mark_weight / Mark_height ** 2;
console.log(Mark_BMI);


let John_BMI = John_weight / (John_height * John_height);
console.log(John_BMI + "kg");

//Both In same Line
console.log("marks BMI " + Mark_BMI, "John's BMI " + John_BMI );

//Normal Way of comparing and getting answer
let markheigherBMI = (Mark_BMI > John_BMI);
console.log(markheigherBMI);


//conditional if statement
if(Mark_BMI > John_BMI){
    console.log("Mark has more BMI than John");
}

// 2nd problem values are different but the variable names are same
Mark_height = 1.88;
Mark_weight = 95;
John_height = 1.76;
John_weight = 85;

 John_BMI = John_weight / (John_height * John_height);
 console.log(`John's BMI 2- ${John_BMI}`);

 Mark_BMI = Mark_weight / (Mark_height * Mark_height);
 console.log(`Mark's BMI 2- ${Mark_BMI}`);

const $myName = "Shaik";
const $myDob = 1994;
const $occup = 'teacher';
const $currentyear = 2021;
// normal way of formating output
const $huz = "I'm " + $myName + " I am " + ($currentyear - $myDob) + " and I'm a teacher in Softwares";
console.log($huz);

// this is a new and clean way of presenting output where we don't use any plus sign but instead if we want a variable to be declared we should declare it within ${variable name} 
//${variable name} the flowerbrackets and a dollor sign before we can even use mathematical expressions
const $huznew = `I'am ${$myName}, I am ${$currentyear - $myDob} and I'm a ${$occup} in softwares`;
console.log($huznew );

//format the output by using the traditional way
console.log("when is the party \n Hello\t World" );

//here by use the template string we can take the string to next line without using the keywords like \n for newline \t for tabular space
console.log(`World 
Jpg
                PPh`);

//ensuring wheater john is eligble of get a driving license using if else

const minAge = 18;
const JohnAge = 17;

if(JohnAge >= minAge){
    console.log(`john you are eligible to apply for Driving License`);
}
else if(JohnAge < minAge){
    console.log(`Sorry john your are just ${JohnAge} so you can't get one 🎆`);

}

let family ={
    dad : "jpg",
    mom : "png"
};
console.log(typeof family);

// Another type of conditional Statement
let manyBirth = 1995;
// undefinded because we will can the century as per the condition in if statement
let century;
// if the century variable was not defined outside the statement then we could'nt have accessed the var
if(manyBirth < 2000){
    // A New varible defined inside the if statement cannot be used outside the statement 
   century = 20;
   console.log(century);
   let mai = 33
} else{
    century = 21;
    console.log(century);
}
console.log(`You were born in ${century} Century `);
// a new variable was declared inside the statement but it can't be accessed
//console.log(mai);

 Mark_height = 1.6;
 Mark_weight = 78;
 John_height = 1.95;
 John_weight = 92;
                    //same as  Mark_height * Mark_height
Mark_BMI = Mark_weight / Mark_height ** 2;
console.log("Marks BMI " + Mark_BMI);


 John_BMI = John_weight / (John_height * John_height);
console.log("John's BMI " + John_BMI);
// Value takes is of 
// The values for the parameter in this branching is already declared in 
//Mark_BMI = 100; by increasing the mark's bmi to 100 we can display else statement
console
if(Mark_BMI > John_BMI){
    console.log(`Mark's BMI is ${Mark_BMI} and has the higher BMI than John's ${John_BMI}`);
}
else {
   console.log(`John's BMI is ${John_BMI}. John has the Higher BMI than Mark's ${Mark_BMI}`)
}

let mami = 23;
let jami = "23";
let jojo = jami + mami;
console.log(jojo);
Number(jami);

//Type Conversion 

// By adding Number function we can convert string into
console.log(Number(jami) + mami);

//by using String function we can convert number to string
console.log(String(mami));


// Type coercion in this javascript automatically Converts number into strings 
console.log('Manu ' + 23 + ' children');

// It even works with Template literals
console.log(`Manu 23 children`);


// If you use + sign in a console or variable the javascript converts number into string
// As given above in line 272

// when you use mathematical operators other than + then javascript identifies it as a math operation
console.log('23' * '2'); // 46
console.log('23' - '2'); // 21
// same with different operators 

//In the below console first javascript add up number to string and then in after subtracting in the other line it converts to number
let n = 1 + '1'; // 11 as string
n = n - 1; // it converts "11" to 11 and subtract it with 1
console.log(n); // 10

// Convertion to boolean 
// In boolean their are five false values = 0, '', undefined, null, NaN(Not a number)
console.log(Boolean(NaN));

let mam;
console.log(void(mam));


let height; // here height is not defined so it uses 2nd statement 
height = 23; // if you comment out 23 it will display 1st statement
if(height){
    console.log("Height is Defined");
}
else{
    console.log("define the height bro");
}

// But the problem with the boolean is if the value is 0 but the value will be false because even 0 comes under false values
// so most don't use it
// We can fix it by using Comparision operator

// == vs === 
//  === Strict equal. Here this comparsion strictly Checks the value and it does not perform coercion 
let age = 23;

// it checks both the sides and then executes the statement 
// if statement without else can be written without a flower bracket 
if(age === 23) console.log(`you can apply for Id card`);
age = '23';
console.log(age === 23); // It gives false value because coercion was not done here

// == loose equal operator just checks the value and converts it into string or number based on the type
// 23 declared as a string
age = "23";
console.log(age == 23); // it gives a true boolean value because javascript converted the string into number
age = 23
console.log(age == "23"); // here string get converted into number
// loose operator is a very practice to use because i brings alot of bugs. So try to avoid it actual think that it does not exist

// Prompt takes input from the webpage
// declaring a prompt in a variable will allow use to store the value. Direct prompt does not store value

// direct prompt value will be not shown in the console
prompt(`Whats your Age Buddy`);

// by default prompt takes string as input even if it is a number because we are avoiding to use == the javascript don't converts 
// the string to number but we have to use this number() to convert string without using == loose equal 

let $agepp = Number(prompt(`Tell your age`));

if($agepp === 18){
       alert(`You are Eligible`);
       console.log(`Eligible`);
} else{
    alert(`you are not eligible`);
    console.log(`Eligible`);
}

// not equal to operater !== is used when we don't want our input to be the that condition ex below
let $and = 23;
// it executes when 12 is not equal to 23 
// can test it buy commenting out the number function
// it has to != loose which does cocercion and another is !== strict which does not do cocercion
// here this if !== is used i displays the statement when the value is not equal to the input or value
if ($agepp !== 18){
    console.log(`Our numbers don't match `);
}

let $mao = 23 > 23;
console.log(typeof $mao);


//Boolean Logics are used to compare and combine the condition or boolean values it uses true and false  values to solve problems
// And, OR and NOT 
// &&   ||      !
// NOT ! is used to invert the true to false or False to true
// In this excersice we are comparing mobile phone brands and create a if else statement and using this Boolean logic operator
let samsung = 15;
let apple =  14;
let oppo = 10;


// And operator && in and operator value is true only if both the sides are true. Even if one side is false then its false ( True && True ) = true  ( True && false ) = false
// below ever example their is boolean form
console.log(samsung > apple && samsung > oppo); // true because both the conditions are true
//          (true && true) = true
console.log(apple > samsung && apple > oppo); // = false here one condition is true but not total true because and operator is used 
//          (false && true) = false
console.log(oppo > samsung && oppo > apple);  // = false because no condition is true
//          (false && false) = false

// OR || in or operator atleast if one side is true then its true and if both sides are false then its false. (True || false ) = true, (false || false) = false

console.log(samsung > apple || samsung > oppo); // = true because both are true
//          (true || true) = true
console.log(apple > samsung || apple > oppo); // = true because one condition is true because apple's value is greater than oppo's
//          (false || true) = true
console.log(oppo > samsung || oppo > apple); // = false because neither samsung is value is less than oppo nor apple's so its false
//          (false || false) = false


console.log(oppo > apple || !oppo > samsung);
