let element = document.getElementById('Hehe');
let count = 0;
let click = 0 ;
let control = 0;

function run(){
    if(control ===0){
        console.log(count);
        count++;
        document.getElementById('Hehe').style.left = count +'px';
        if(count === 1000){
            control =1;
        }
    }else{
        console.log(count);
        count--;
        element.style.left = count +'px';
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
element.onclick = () => {
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
