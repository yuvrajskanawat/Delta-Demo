let btns=document.querySelectorAll("button")
// console.dir(btn)
// btn.onclick=()=>{
//     alert("Button was click")
// }
// for(btn of btns){
//     btn.onclick=sayhello;
//     btn.onmouseenter =enter;    
// }

// function sayhello(){
//     alert("Hello!");
// }
// function sayname(){
//     alert("Apna College!");
// }
// // function enter(){
// //     console.log("You've entered on a Button")
// // }


// for(btn of btns){
//     // btn.addEventListener("click",sayhello);
//     btn.addEventListener("dblclick",sayname);
// }



// let para=document.querySelector("p");
// para.addEventListener("click",()=>{
//     console.log("Paragraph was clicked")
// })

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",()=>{
//     console.log("Mouse inside Div");
// })

let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let para=document.querySelector("p");
// btn.addEventListener("click",changecolor);
// para.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);

// function changecolor(){
//      console.log(this.innerText);
//     this.style.backgroundColor="palegreen";
// }
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("Key was Pressed");
// })
// let input=document.querySelector("input");
// input.addEventListener("keyup",function(){
//     console.log("Key was Pressed");
// })
let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log(`Key is ${event.key}`)
//     console.log(`Code is ${event.code}`)
//     // console.log("Key was Pressed");
// })

// input.addEventListener("keydown",function(e){
//     console.log("code =",e.code);
//     if(e.code=="ArrowUp"){
//         console.log("Characterv moves forward")
//     }
//     else if(e.code=="ArrowDown"){
//         console.log("Characterv moves Backward")
//     }
//     else if(e.code=="ArrowLeft"){
//         console.log("Characterv moves Left")
//     }
//     if(e.code=="ArrowRight"){
//         console.log("Characterv moves Right")
//     }
// });
input.addEventListener("keydown",function(e){
    console.log("code =",e.code);
    if(e.code=="KeyU"){
        console.log("Characterv moves Up")
    }
    else if(e.code=="KeyD"){
        console.log("Characterv moves Down")
    }
    else if(e.code=="KeyL"){
        console.log("Characterv moves Left")
    }
    if(e.code=="KeyR"){
        console.log("Characterv moves Right")
    }
});