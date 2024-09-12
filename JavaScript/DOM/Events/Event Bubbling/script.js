let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");
div.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Div was Clicked");
})
ul.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("UL was Clicked");
})
for (li of lis){
li.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Li was Clicked");
})}