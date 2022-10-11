const time = document.querySelector('.time');
const ten_min = document.querySelector('.ten-min');
const thirty_min = document.querySelector('.thirty-min');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn');
const musicOn = document.querySelector('.musicOn');
const musicOff = document.querySelector('.musicOff');

let timer_min = 0;
let timer_sec = 0; 

let audio = new Audio('music.mp3')
function timeButtons(){
    
    ten_min.addEventListener('click' , ()=>{
        timer_min = 10;
        timer_sec = 0;
        if(timer_sec < 10){
            timer_sec = `0${timer_sec}`
        }
        time.innerHTML= `${timer_min}:${timer_sec}`        
    })
    thirty_min.addEventListener('click' , ()=>{
        timer_min = 30;
        timer_sec = 0;
        if(timer_sec < 10){
            timer_sec = `0${timer_sec}`
        }
        time.innerHTML= `${timer_min}:${timer_sec}`      
    })
}

timeButtons()

startBtn.onclick = function() {
        timer_min--
        timer_sec = 59;
        if(timer_sec < 10){
            timer_sec = `0${timer_sec}`
        }
        if(timer_min < 10){
            timer_min = `0${timer_min}`
        }
    int = setInterval(()=>{
        timer_sec--
        time.innerHTML= `${timer_min}:${timer_sec}`

        if(timer_sec< 1){
            timer_min--
            timer_sec=59
        }

        if(timer_min < 0){
            clearInterval(int)
        }
      
       
    }, 1000);
}


stopBtn.addEventListener('click' , ()=>{
    clearInterval(int)
})

resetBtn.addEventListener('click' , ()=>{
    timer_sec= 0;
    timer_min = 0;
    if(timer_sec < 10){
        timer_sec = `0${timer_sec}`
    }
    if(timer_min < 10){
        timer_min = `0${timer_min}`
    }
    time.innerHTML= `${timer_min}:${timer_sec}`
})

musicOn.addEventListener('click' , ()=>{
    audio.play()   
})
musicOff.addEventListener('click' , ()=>{
    audio.pause()   
})