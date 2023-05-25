  const ro = ()=>{
 const  sp =  Math.trunc(Math.random()*20)+1;
  return sp;
  }
 let sn = ro()
  console.log(sn)
 
 let score = 20;

 let highsc= 0;
 
 
  document.querySelector('.b2').addEventListener('click',function (){

    const guss =Number( document.querySelector('.in').value);

    score = score -1;
    document.querySelector('.p1').textContent= 'Score:'+'  '+score;
   
    if(!guss){
        
        document.querySelector('.msg').textContent='No Number'
        
        
    }else if(guss===sn){
        document.querySelector('.score').textContent=sn
        document.querySelector('.msg').textContent = 'Correct'
        document.querySelector('body').style.backgroundColor='rgb(36, 176, 61)'


 if(score>= highsc){
    highsc = score
 document.querySelector('.p2').textContent ='Highscore:'+'  '+highsc}
    }
    if(score >=0){
        if(guss>sn){
            document.querySelector('.msg').textContent='to high'
        }
        else if (guss<sn){
            document.querySelector('.msg').textContent='to low'
        }
    }
    else{
        document.querySelector('.msg').textContent='game over';
        
    }

})

document.querySelector('.b1').addEventListener('click',function(){

   sn = ro()
   console.log(sn)
  score = 20;


 document.querySelector('.p1').textContent= 'Score:'+'  '+score;
 document.querySelector('.msg').textContent = 'Start guessing....'
 document.querySelector('.score').textContent='?'
 document.querySelector('body').style.backgroundColor='rgb(37, 28, 28)'

})
