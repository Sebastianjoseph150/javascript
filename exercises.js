console.log("connected with external js file")

//var a = 1;
//var b = 2;

/*
if(a+b>4){
    console.log(a+b);
}
else if(a+b<1){
    console.log(a+b);
}
else   
    console.log(a+b);
*/

/*
for (var num=0;num<11;num=num+2){
    console.log(num);
}
*/

//for each
/*
let fruits = ['apple','peach','orange']
fruits.forEach(item => console.log(item));
*/

//for of
/*
let fruits = ['apple','peach','orange']
for (item of fruits){
    console.log(item);
}
*/

//for in
/*
let fruits = ['apple','peach','orange']
for (item in fruits){
    console.log(item);
}
*/

//while
/*
var i=0;
while (i<5){
    console.log("current value of i:" +i);
    i++;
}
*/

/*
var a=2, b=5;
console.log("a+b :" +(10+5));
console.log("a-b: " +(10-5));
console.log("a*b: " +(10*5));
*/

//shift operators
/*
var a=8, b=2;
console.log("a<<b: "+(a<<b));
console.log("a>>b: "+(a>>b));
*/

//relational operators

/*
console.log('2=="2":'+(2=="2"));
console.log('2==="2":'+(2==="2"));
console.log('2!="2":'+(2!="2"));
console.log('2!=="2":'+(2!=="2"));
console.log('2>"2":'+(2>"2"));
*/

//bitwise operators

/*
var a=8,b=2;
console.log('a&b:'+(a&b));
console.log('a|b:'+(a|b));
console.log('a^b:'+(a^b));
console.log('~a:'+(~a));
*/

//logical operators

/*
var a=true,b=false;
console.log('a&&b:'+(a&&b)); //logical AND
console.log('a||b:'+(a||b)); //logical OR
console.log('!a:'+(!a));     //logical not
*/

//Assignment & Ternary

/*
var a=2;
console.log(a);
console.log((a==2)?console.log("ok"):console.log("not ok"));
*/

/*
const weather="sunny";
function changeWeather(){
    weather="rainy";
    console.log("changed weather:"+weather);
}
changeWeather();
console.log("original weather:"+weather);
*/

//block scope

/*
for(var n =0;n<5;n++)
   console.log(n);

console.log(n);


for(const n =0;n<5;n++)
   console.log(n);

console.log(n);
*/


//let Declaration

//const keyword

/*
const a =10;
a=100;
*/



//Data types

//primitive

//non primitive


/*
var s1 ="hello world";
console.log(s1);

var s2 ='hello world';
console.log(s2);

var age =20;
var s3 ='Abhin is ${age}';
console.log(s3);
*/

//non primitive- object

/*
var fruits ={
    'apple':'red',
    'watermelon':'green',
    'mango':'yellow'
};
console.log(fruits['apple']);
*/ 


//Arrays

/*
var a =[1,'true','hello']
console.log(a[2])
*/

//Array methods
//push and pop

/*
var arr =[1,2,3,4,5];
console.log(arr[2]);

var arr1 =[2,34,5,66,77];
console.log(arr[4]);

arr.push("faizan");

arr.push("taz");

console.log(arr.pop());

arr.unshift(1000);
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());
*/

//Array methods - splice

/*
let arr =[1,2,3,4,5];
arr.splice(1,3,"hello");   /add 
console.log(arr)
*/

/*
let arr =[1,2,3,4,5];
arr.splice(1,3);         //delete
console.log(arr)
*/


//Array methods - Slice


/*
let arr = [1,2,3,4,5];
let arr1 =arr.slice(1,3);
console.log(arr1)
*/

//function


/*
function print(){
    console.log("happy");
}
print();
*/


//IIFE

/*
(function(a ,b)
{
    console.log(a+b);
}
)(4,4);
*/



//some methods of functions //call , bind , apply

//call and apply

/*
function print()
{
    console.log("hello")
}
print.call();
print.apply();
*/

/*
let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name + " is eating" + a +" "+ b);
    }
};
let human={
    name: 'Ravi',
}
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
*/

//Bind

/*
let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name + " is eating" + a +" "+ b);
    }
};
let human={
    name: 'Ravi',
}

let human_eat=animal.eat.bind(human);
human_eat(5,'apples');
*/

//this keyword

/*
function prnt(){
    console.log(this);
}
prnt();
*/


//Arrow function

/*
const obj = {
    name: 'sam',
    sing(){
        console.log('a',this);
        var anotherfunction =()=>{
            console.log('b',this)
        }
        anotherfunction();
    }
}
obj.sing();
*/

//Higher order functions
/*
function canVote(age)
{
    return age>=18;
    
};
function canDrive(age)
{
    return age>=16;
};
function canMarry(age)
{
    return age>=21;
};
console.log(canDrive(11));
console.log(canVote(21));
console.log(canMarry(12));
*/


//OOPs - object oriented programming

//Encapsulation

/*
class student{
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }
    attendance(){
        console.log(this.name+" is present")
    }
}
var adam = new student(23,'Adam');
adam.attendance()
*/

//Abstraction

//inheritance

/*
class Fruit{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    grow(){
          console.log(this.color+"fruit growing.....");
    }
}
*/

/*
class Fruits
{
    constructor()
    {
        console.log("parent cons");
    }
}
class Apple extends Fruits
{
    constructor()
    {
        super();
        console.log("child cons");
    }
}
let obj = new Apple();
*/


//polymorphism   //overloading and overriding
//overloading

/*
class Father{
    constructor(name){
        this.name=name;
    }
    display(){console.log("i am "+this.name);}
    display(vehicle){console.log("i am driving"+vehicle);}
}
var alex=new Father('alex');
alex.display('bike')
*/

//Overriding

/*
class Father{
    display(){console.log("I am father!");}
    address(){console.log("I live in india");}
}

class Child extends Father{
    display(){console.log("I am child!");}
}
var sam = new Child();
sam.address()
sam.display()
*/


//Exception Handling       //try  catch   throw   finally

/*
try{
    console.log(a);
}
catch(error){
    console.log("we got an error-->"+error);
}
*/


/*
function isEligibleToVote(age){
    if(age<18)
    try{
        throw new Error("You are under age!");
    }
    catch(error){
        console.log(error);
    }
    else
    console.log("You are an eligible voter!");
}
isEligibleToVote(13)
*/

//prompt //alert

/*
var age = prompt("please enter your age:");

if(age>1)
  alert("hello haii");
*/


//Querying the DOM

//document.getElementById

/*
console.log("connected");

var head = document.getElementById("heading")
console.dir(head);
*/


//document.getElementsByClassName

/*
console.log("connected");

var list_of_hobbies = document.getElementsByClassName("hobby");
console.log(list_of_hobbies);
*/


// document.getElementsByTagName

/*
console.log("connected");

var list_of_para = document.getElementsByTagName("p");
console.log(list_of_para);

console.log(list_of_para[0]);
*/


//document.querySelector()

/*
console.log("connected");

var list = document.querySelector('.hobby');

console.log(list);
*/

/*
console.log("connected");

function change(id){
    id.innerHTML = "Clicked"
}
*/


/*
console.log("Connected");

var button = document.querySelector('button');
button.addEventListener('click',function(){
    console.log("button was clicked");
})
*/


/*
let add = function(a,b){
    console.log(a+b);
}
let addBy10 = add.bind(this,10);
addBy10(2)
*/



/*
let add = function(x){
    return function(y)
    {
        console.log(x+y);
    }
}

let addby5 = add(5);
addby5(2);
addby5(5);
addby5(10);
*/


/*
let mul = function(x,y)
{
    console.log(x*y);
}
let mulBy10 = mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);
*/

/*
let mul = (x) => console.log(x*y);
let mul10 = mul(10);

mulBy10(8);
mulBy10(9);
mulBy10(10);
*/

//advanced array function


/*
let arr=[1,2,3,4];
let newarr=[];
arr.forEach((num)=>{newarr.push(num*2);});
console.log(newarr)

let newarr1=arr.map(num=>num*2)
newarr1
*/

//filter

/*
let arr=[13,50,21,45,39,16];
let filterarr=arr.filter(num=>num>20);
console.log(filterarr)
*/

