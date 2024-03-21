const num = ["r","g","b","y"]
const box =[]
const colors =["red", "green", "blue", "yellow"]
let round = 0;
let panel = document.getElementById("result")
let que = []
 let restart = true;

function updateque(){
  let h = Math.random()
  let i = 10;
  h = h*i;
  while(h>=4){
    h = (h - Math.trunc(h))*i;
  }
  h= Math.trunc(h);
  console.log(h);
  que.push(h)
  console.log(que)
  point=0
//   panel.innerText = `Round - ${round+1} || score - ${round}`
  show()
}

function show(){
    let t=1;
que.map(async(i)=>{
    setTimeout(()=>{
        console.log("ll")
        box[i].style.backgroundColor = "black"
},500*t)
   t=t+1;
    setTimeout(()=>{
        console.log("ll")
       box[i].style.backgroundColor = colors[i];
},500*t)
t=t+1;
})

panel.innerText = `Round - ${round+1} || score - ${round}`
}

let point = 0;
function checkresult(x){
   
const n = num.indexOf(x)
console.log(n)
if(n=== que[point]){
    console.log("nice")
   if((point+1) === que.length){
updateque()
round++
  point = -1;
   }
   point++;

}
else{
    if(!(point >= que.length)){
    console.log("game end")
    panel.innerText = `|| game over || scored - ${round} ||| click to restart|||`
    round = 0;
    restart = true
    que =[]
    point =0;
}

}

}

num.map((id)=>{
    box.push(document.getElementById(id))
})

for(let i =0;i<4;i++){
    box[i].style.backgroundColor = colors[i]
}

box.map((target)=>{
    target.addEventListener("click",()=>{
        checkresult(target.id)
        // updateque()
        // show()
    })
})

function start(){
     if (panel.innerText === "get start" || restart){
        restart = false
        panel.innerText = `click on above blink boxes sequently || score - ${round}`
       updateque()
     }
}
panel.addEventListener("click",start)