// loading effects
const stories=  document.querySelectorAll('.story');

const observer= new IntersectionObserver((stories)=>{
        stories.forEach((story ) => {
            if(story.isIntersecting){
                story.target.classList.add('show');
            }
            else{
                story.target.classList.remove('show');
            }
        });
    });
   stories.forEach((story) => {
     return observer.observe(story);
   });

  //  Game's-Functioning
const squares=document.querySelectorAll('.square');
const score=document.querySelector('#score');
const time = document.querySelector('#time');
const start_restartbutton=document.querySelector('#start_restart');

let result=0;
score.innerHTML=result;

let countdowntimer=null;
let countdowntime= 60;
let refresh_id=null;
let currently_playing=0;
start_restartbutton.addEventListener('click',start_restart);


function start_restart(){
    //restart cond
    if(currently_playing===1){
        console.log("restarting");
        clearInterval(refresh_id);
        clearInterval(countdowntimer);
        currently_playing=0;
        countdowntime=60;
        result=0;
        score.innerHTML=result;
        start_restart();
    }
    
    else{
        countdowntimer=setInterval(()=>{countdowntime--;time.innerHTML=countdowntime},1000) ;
    
    if(countdowntime!==0){refresh_id=setInterval(()=>{randomSquare(squares)},1000);}
    currently_playing=1;
    start_restartbutton.innerHTML="Restart";
 
    }   }
 


function randomSquare(squares){
    squares.forEach((square) => {
         square.classList.remove('mole')
    });
   let randomSq =  squares[Math.floor(Math.random()*9)];
   randomSq.classList.add('mole');

   randomSq.addEventListener('click',whack);
   setTimeout(()=>{randomSq.removeEventListener('click',whack)},1200);
    
   if(countdowntime===0){clearInterval(refresh_id);
                        clearInterval(countdowntimer);}
            };

function whack(e){
 result++;
 score.innerHTML=result;
}
// randomSquare(squares);

