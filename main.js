const secondsEl=document.getElementById('seconds')
const tensEl=document.getElementById('tens')
const start=document.querySelector('.start')
const pause=document.querySelector('.stop')
const reset=document.querySelector('.reset')
let seconds=0
let tens=0
let interval
let i=0;
function startTimer(){
  tens++
  if(tens>=100){
    seconds++
    secondsEl.innerHTML=seconds
    tens=0
  }
  tensEl.innerHTML=tens
}
start.addEventListener('click',function(e){
  i++
  if(i==1)  interval=setInterval(startTimer,10)
})
pause.addEventListener('click',function(e){
  clearInterval(interval)
  i=0
})
reset.addEventListener('click',function(e){
  clearInterval(interval)
  seconds=0
  tens=0
  secondsEl.innerHTML="0"
  tensEl.innerHTML="0"
  i=0
})