const elDice = document.getElementById('dice');
const elBtn = document.getElementById('btn');

elBtn.addEventListener('click',()=>{
  const randomNum = Math.floor(Math.random()*6)+1;
  elDice.innerHTML = randomNum;
})