//document.write('This is an external javascript file')
// single line comment
/*
this
is 
a 
multi line 
comment.
*/
//document.getElementById('para').innerHTML = 'This is a paragraph'
// var a = 3;
// var name = "Abhi"
// var ch = 'A'
// document.write(a, "<br>")
// document.write(name)
// var t = true
// var f = false
// var fl = 3.14
// document.write(t, f);
// document.write(fl)
// let name = "Abhi Bhaiya"
// let num = 23;
// console.log(name, name)
// console.log(typeof name)
// console.log(typeof num, typeof f, typeof fl)
// const t = 3;
// let t = 3;
// t=2;
// console.log(t)

// Operators in JS
// let 3dhs = 3; // this is not allow => error
// let _bame = 3;
// let nam_age = 3;
// let n1 = 15;
// let n2 = 5;
// console.log(n1 + n2)
// console.log(n1 - n2)
// console.log(n1 * n2)
// console.log(n1 / n2)
// console.log(n1 % n2)

// console.log(n1,n2)
// console.log(n1+n2)
// alert("Do you want to delete this.")
// let age = prompt("enter your age: ")
// console.log("Your age is " ,age)
// console.log(`Your age is ${age}`)

//Project 1:
/*
let foodcost = prompt("Total food cost:")
let no_fr = prompt("No. of freind:")
let per = foodcost/no_fr;
document.write("Per friend pay: RS.", per);
*/
// JavaScript Math Functions

// document.write("sqrt of 64: ", Math.sqrt(64), "<br>");
// document.write("4^2: ", Math.pow(4,2), "<br>");
// document.write("PI= ", (Math.PI).toFixed(2))

// JavaScript String Functions
/*
let name = "AbhiBhaiya"
document.write(name, "<br>")
document.write(name.length, "<br>")
document.write(name.indexOf("Bhaiya"), "<br>")
document.write(name.slice(0,4), "<br>")
document.write(name.slice(4), "<br>")
document.write(name.toUpperCase(), "<br>")
document.write(name.toLowerCase(), "<br>")
document.write(name.charAt(5), "<br>")

*/

// Realation operators in JS : < , >, >=, <= , ==
// let a = 5;
// let c = 8;
// document.write(a<c, "<br>")
// document.write(a>c, "<br>")
// document.write(a>=c, "<br>")
// document.write(a<=c, "<br>")
// document.write(a==c, "<br>")
// console.log(a<c)


// Logical operators in JS : && , || , !=
// let a = 15;
// let c = 1;
// let d = 10;
// document.write(a>d && c>d)
// document.write(a>d || c>d)
// document.write(a!=c)
// document.write(!c)


// increament operators in JS : ++
// let a = 1;
// document.write(a,"<br>")
// a++
// document.write(a,"<br>")
// Decreament operators in JS : --
// let b = 5;
// document.write(b,"<br>")
// b--
// document.write(b,"<br>")


// Conditional Statments in JS

/*
let age = 20;
if(age>=18){
    document.write("You can vote!") // without else
}

if(age>=18){
    document.write("You can vote!") // with else
}
else{
    document.write("You can not vote!")
}

*/

// Looping Statements in JS
// document.write(1)
// document.write(2)
// document.write(3)
// document.write(4)

// for(let i=1; i<=10; i++){
//     document.write(i, "<br>")
// }

// let j = 1;
// while(j<=10){
//     document.write("Abhi Bhaiya ", j, "<br>")
//     j++
// }

// let n = 1;
// do{
//     document.write("hello")
//     n++
// }while(n>10)


// Switch Statements in JS
/*
let age = 20;
switch(age){
    case 18:
        document.write('Your age is ', age)
        break;
    case 20:
        document.write("your age is ", age);
        break;
    case 10:
        document.write("your age is ", age);
        break;
    default:
        document.write("enter valid input")
*/


// Arrays and Objects in JS

let arr = ['abhi', 'ashish', 'ankit', 'preeti']
// let inte = [3,12,1, 9] // array of integers
// document.write(arr)
// document.write(typeof arr)
// document.write(arr[0])
// document.write(arr[1])
// for(let i = 0; i<arr.length; i++){
//     document.write(arr[i], "<br>")
// }
// higher order array method
// arr.map((item)=>{
//     document.write(item + " ")
// })

// let obj = {
//     name:"abhi",
//     age:20,
//     roll:123,
//     city:"Mungeli"
// }

// document.write(obj.name)
// document.write(obj.age)
// document.write(obj.city)


// function sum(a, b){
//     document.write(a+b);
// }
// sum(2,1);

// function gm(){
//     document.write("Good morining!")
// }
// gm()

// const arrowf = ()=>{
//     document.write('hello')
// }
// arrowf()


// DOM Manipulations in JS 

let para = document.getElementById('para')

para.style.color = 'red'
para.style.fontSize = '47px'
para.style.border = '2px solid black'