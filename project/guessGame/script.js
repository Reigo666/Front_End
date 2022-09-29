const guessField=document.querySelector(".guessField")
const guessSubmit=document.querySelector(".guessSubmit")

const guesses=document.querySelector(".guesses")
const lastResult=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")

let randomNumber=Math.floor(Math.random()*100)+1
let guessCount=1

function checkGuess() {
  //得到用户猜的数
  let userGuess=Number(guessField.value);

  if (guessCount===1){
    guesses.textContent="上次猜的数:";
  }
  guesses.textContent+=userGuess+' ';
  //比较数值
  if(userGuess===randomNumber)
  {
    lastResult.textContent="你猜对了";
    lastResult.style.backgroundColor="green";
    lowOrHi.textContent="";
    setGameOver();
  }
  else if(guessCount===10)
  {
    lastResult.textContent="!!!游戏结束!!!";
    setGameOver();
  }
  else
  {
    lastResult.textContent="你猜错了";
    lastResult.style.backgroundColor="red";
    if(userGuess<randomNumber)
    {
      lowOrHi.textContent="你猜低了";
    }
    else if(userGuess>randomNumber)
    {
      lowOrHi.textContent="你猜高了";
    }
  }
  guessField.value='';
  guessCount++;
  guessField.focus();
  console.log(userGuess);
}

guessSubmit.addEventListener('click',checkGuess)

function setGameOver() {
  guessField.disabled=true;
  guessSubmit.disabled=true;
  //创建一个button
  resetButton=document.createElement("button");
  resetButton.textContent="重新开始游戏";
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame)
  console.log("setGameOver");
}

function resetGame() {
  randomNumber=Math.floor(Math.random()*100)+1
  guessCount=1
  let resetParas=document.querySelectorAll(".resultParas p");
  for(let i=0;i<resetParas.length;i++)
  {
    resetParas[i].textContent="";
  }
  
  //删除重新开始游戏button
  resetButton.parentNode.removeChild(resetButton);
  
  //focus
  guessField.value="";
  guessField.focus();

  guessField.disabled=false;
  guessSubmit.disabled=false;
  
  console.log("resetGame");
}