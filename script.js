let element1 = document.getElementById('Hehe'), element2 = document.getElementById('button');
let element3 = document.getElementById('number');
let number = 0;
let count = 0;
let click = 0 ;
let control = 0;

function run(){
    if(control ===0){
        count++;
        document.getElementById('Hehe').style.left = count +'px';
        if(count === 1000){
            control =1;
        }
    }else{
        count--;
        element1.style.left = count +'px';
        if(count===0) control =0;
    }
}
function print(){
    console.log('hehe');
}

// var refresh =  setInterval(() =>{
//     run();
//     if(click === 1){
//         clearInterval(refresh);
//     }
// },5);   
start();
element1.onclick = () => {
    if (click === 0) {
        click = 1;
    } else {
        start();
        click = 0;
    }
}

function start(){
    var refresh =  setInterval(() =>{
        run();
        if(click === 1){
            clearInterval(refresh);
        }
    },5);   
}

element2.onclick = () =>{
    number++;
    element3.innerText = 
    `${number}x2 = ${number*2} 
    ${number}x3 = ${number*3}
    ${number}x4 = ${number*4}
    ${number}x5 = ${number*5}
    ${number}x6 = ${number*6}
    ${number}x7 = ${number*7}
    ${number}x8 = ${number*8}
    ${number}x9 = ${number*9}
    ${number}x10 = ${number*10}
                                    `
}
