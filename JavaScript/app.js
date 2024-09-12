// Print 1 to 5
// for (let i=1; i<=5;i++){
//     console.log("Apna COllege")
// }


// Calculate sum of first n number
// let a=0;

// for(let i=0;i<=6;i++)
//     {
//         a=a+i;
//     }
// console.log("Sum =",a);

// for(let i=0;i<=6;i++)
//     {
//         console.log("i =",i);
//     }
// console.log("Loop Has Ended");

// for-of-Loop

// let str = "ShriSitaram";
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("String Size =",size);


// for-in Loop
// let student={
//     name: "Yuvraj Singh Kanawat",
//     age: 21 ,
//     cgpa: 7.3 ,
//     isPass: true
// };
// for(let key in student){
//     console.log("key =",key,"& value =", student[key]);
// }
// Practice Qs 1
// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log("num = ",num);
//     }
// }

// Practice Qs 2

// let gamenum = 25;
// let usernum = prompt("Guess the Game Number : ");
// while(usernum != gamenum){
//    usernum = prompt("Guess the Game Number. Guess Again : ");
// }
// console.log("Congratulations, You entered the Right Number");

// Strings

// let str="Sitaram";
// console.log(str[3]);

// let obj ={
//     item: "pen",
//     price: 10 ,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// Template Literals 
// let specialString =`This is a Template Literal ${1+2+3}`;
// console.log(typeof specialString);

// alert("Something is Wrong");

// console.error("There's a Error");
// console.warn("This is a Warning");

// let firstname = prompt("Enter your Name: ");
// console.log(firstname);

// let roll = prompt("Enter your Roll NO.: ");
// console.log(roll);

// let firstname = prompt("Enter your First Name: ");
// let lastname = prompt("Enter your Last Name: ");
// // console.log("Welcome " + firstname + " " + lastname + "!");
// let msg = "Welcome "+ firstname +" "+lastname+ "!";
// alert(msg)


// let str = "ILoveCoding";
// console.log(str);
// console.log(str.replace("Love","Do"));

// let cars =['toyota','gwagon','xuv','maruti','bmw','ferrari'];
// let marks = [99,69,87,42,100];

// let month = ['january','july','march','august'];
// let arr = ['c','c++','html','javascript','python','java','c#','sql'];

// let game = [['x',null,'O'],[null,'X',null],['O',null,'X']];

// let n = prompt("Enter your Number: ");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// Game For Favmovie
// const Favmovie = " Avataar";
// let guess = prompt("Guess my favorite movie: ");
// while((guess != Favmovie) && (guess != "quit")){
//     guess = prompt("Wrong Movie,Please Try Again: ");
// }
// if(guess==Favmovie){
//     console.log("Congrats!")
// }

// let fruits = ['mango','apple','banana','litchi','orange'];
// for(i of fruits){
//     console.log(i);
// }

// for(char of "Yuvraj Singh Kanawat"){
//     console.log(char);
// }

// let heroes = [['ironman','spiderman','thor'],['superman','wonderwoman','flash']];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }
 
// const Post={
//     username :"@ranayuvrajsinghsunariyakheda",
//     content: "This is my First Post",
//     likes: 150,
//     reposts: 5,
//     tags: ["@uvraj.pvtt","@udaipurblog"]
// };

// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };

// const student={
//     name:"Yuvraj Singh Kanawat",
//     age:21,
//     marks:96,
//     city:"Udaipur"
// };
// student.gender="Male";

//  delete student.gender;
//  console.log(student);
// student.friends = ["Sudeep","Kunal","Vyom"];
// console.log(student.friends[2]);
// delete student.friends;
// console.log(student);


// let step1 =Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);

// Math.floor( Math.random() * 10);


//  Guessing Game

// const max = prompt("Enter the Max Number: ");
// // console.log(max);

// const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

// let obj={
//     name:"Yuvraj",
//     address:{
//         city:"Udaipur"
//     }
// }
// console.log(obj.address.city);

// const person = {
//     FirstName : "Yuvraj Singh",
//     LastName : "Kanawat",
//     Age: 21,
//     FullDetail : function(){
//         console.log(`My Name is ${this.FirstName} ${this.LastName} & My Age is ${this.Age} `)
//     }
// }
// console.log(person.FullDetail());

// const companies = ['google','netflix','meta','netflix'];
// const newcompany = companies.filter((company)=>{
//     return company == 'netflix'
// });
// console.log(newcompany);

// if(16=='16')
//     console.log("True");
// else
//     console.log("False");
//  Array Methods
// let arr = [1,2,3,4,5,6];
// arr.push(7);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let newarr = arr.map((a)=>{
//     return a*a;
    
// });
// console.log(newarr);
// let arr = [1,2,3,4,5,6];
// console.log(arr);
// let newarr = arr.map((a)=>{
//     d =  a*a;
//     console.log(`the initial element is ${a} and new element is ${d}`);
//     return d;
// });

// console.log(newarr);


// let arr = [1,2,3,4,5,6];
// let filteredarr = arr.filter((item)=>{
//     return item%2 == 0 ;
// })
// console.log(filteredarr);
// console.log(arr);

// let arr = [1,2,3,4,5,6];
// arr.forEach((item)=>{
//     return item*2;
// })
// console.log(arr);

// For each is a upgraded version of for loop it always return undefined but map return a new array of same length
// filter return a new array of length depends on th condition between empty array to the length of new array


// let arr = [1,2,3,4,5,6];
// let newarr = arr.reduce((acc,curr)=>{
//     return acc * curr;

// },1000)
// console.log(newarr);

