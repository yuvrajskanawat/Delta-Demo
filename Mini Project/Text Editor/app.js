let input=document.querySelector("#text");
let para=document.querySelector("p");
input.addEventListener("input",()=>{
    console.log(input.value);
    para.innerText=input.value
})