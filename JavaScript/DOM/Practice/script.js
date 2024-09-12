// let h2=document.querySelector("h2")
// h2.innerHTML = h2 + " from Apna College"

let divs=document.querySelectorAll(".box")
console.log(divs)
// divs[0].innerText="Hello"
// divs[1].innerText="I'm"
// divs[2].innerText="Ranajii"
let idx=1;
for(div of divs){
    div.innerText=`new Unique Value ${idx}`
    idx++;
}