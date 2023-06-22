let turn = 'x';
let title = document.querySelector('.title');
let squares = [];
let box = document.querySelectorAll('.square')[0]

function end(num1,num2,num3){
turn = '';
title.innerHTML = `${squares[num1]} winner`
title.style.background='blue';
document.getElementById('item' + num1).style.background='blue';
document.getElementById('item' + num2).style.background='blue';
document.getElementById('item' + num3).style.background='blue';
setInterval(function(){title.innerHTML += '.'},1000);
setTimeout(function(){location.reload()},4000);
function nowin(){winner()};
document.getElementById('noWay').remove();
}

function noWay(){
turn = '';
for(let i = 1; i<10; i++){
  squares[i] = document.getElementById('item'+ i).innerHTML;
  }
  box0 = document.querySelectorAll('.square')[0];
  box1 = document.querySelectorAll('.square')[1];
  box2 = document.querySelectorAll('.square')[2];
  box3 = document.querySelectorAll('.square')[3];
  box4 = document.querySelectorAll('.square')[4];
  box5 = document.querySelectorAll('.square')[5];
  box6 = document.querySelectorAll('.square')[6];
  box7 = document.querySelectorAll('.square')[7];
  box8 = document.querySelectorAll('.square')[8];
  
  title.style.background ='red';
  title.style.boxShadow ='0 0 50px red';
  box0.style.background ='red';
  box0.style.boxShadow ='0 0 50px red';
  box1.style.background ='red';
  box1.style.boxShadow ='0 0 50px red';
  box2.style.background ='red';
  box2.style.boxShadow ='0 0 50px red';
  box3.style.background ='red';
  box3.style.boxShadow ='0 0 50px red';
  box4.style.background ='red';
  box4.style.boxShadow ='0 0 50px red';
  box5.style.background ='red';
  box5.style.boxShadow ='0 0 50px red';
  box6.style.background ='red';
  box6.style.boxShadow ='0 0 50px red';
  box7.style.background ='red';
  box7.style.boxShadow ='0 0 50px red';
  box8.style.background ='red';
  box8.style.boxShadow ='0 0 50px red';
  title.innerHTML = 'NO WAY';
  setInterval(function(){title.innerHTML += '.'},1000);
  setTimeout(function(){location.reload()},4000);
  }

function winner()
{
for(let i = 1; i<10; i++){
  squares[i] = document.getElementById('item'+ i).innerHTML;
  }
  if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
  {
  end(1,2,3);
  }
  else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '')
  {
  end(4,5,6);
  }
  else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')
  {
  end(7,8,9);
  }
  else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
  {
  end(1,4,7);
  }
  else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '')
  {
  end(2,5,8);
  }
  else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '')
  {
  end(3,6,9);
  }
  else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '')
  {
  end(1,5,9);
  }
  else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '')
  {
  end(3,5,7);
  }
}

function game(id){
  let element = document.getElementById(id);
  if(turn === 'x' && element.innerHTML == ''){
  element.innerHTML = 'x';
  turn = 'o';
  title.innerHTML = 'O TURN';
  }
else if (turn === 'o' && element.innerHTML == ''){
  element.innerHTML = 'o';
  turn = 'x';
  title.innerHTML = 'X TURN';
  }
  winner();
}
