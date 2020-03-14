'use strict';

let div = document.querySelector('.wraper');
div.style.width = '600px';
div.style.margin = 'auto auto';

let hCenter = document.querySelector('h2');
hCenter.style.textAlign = 'center';
hCenter.style.textDecoration = 'underline';


let span = document.querySelector('#changing');
span.style.fontSize = '72px';

let i = 0;

function changingDate(){
    let colors =  ['yellow', 'blue', 'green', 'red','grey', 'purple','orange'];
    span.style.color = colors[i]; 
    i = (i + 1) % colors.length; 
      
}
setInterval(changingDate, 1000);


function fullDate(){
    let month = 'February';
    let now = new Date();
    let date = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();
    
    return `${month} ${date}, ${year} ${hour}:${min}:${second}`;
}

let unorderList = document.querySelector('ul');
    unorderList.style.listStyle = 'none';


let l = document.querySelectorAll('.color');
l.forEach((lists, i) => {
    lists.style.padding = '10px';
    lists.style.margin = '2px';
    if (i === 0 ){
        lists.style.backgroundColor = 'green';
    }else if(i === 1){
        lists.style.backgroundColor = 'yellow';
    }else{
        lists.style.backgroundColor = 'red';
    }
    
});

let time = document.querySelector('#time').textContent =  fullDate();
let cent = document.querySelector('.cent').style.textAlign = 'center';

let co = document.querySelector('p');

let j = 0;

function pColors(){
    let bColors = ['orange', 'purple', 'grey', 'green','red', 'blue', 'yellow'];
    co.style.color = bColors[j];
    j = (j + 1) % bColors.length; 
    
}

setInterval(pColors, 1000);