const royaSnake=document.querySelector(".snake");
let snakePosition=0;

document.addEventListener("keydown",(ev)=>{
const{key: eventKey}=ev;
console.log(eventKey)
if(eventKey==="ArrowDown"){
    snakePosition+=100;
    royaSnake.style.top+=`${snakePosition}px`;
}
})