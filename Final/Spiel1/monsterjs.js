

let triesCounter=1;
let counter=1;

let entfernungZumMonster=Math.random()*90+10;
entfernungZumMonster=Math.round(entfernungZumMonster);

let g;



function changeScreen(readTries){
    if(readTries)
        triesCounter=document.getElementById('tryCounter').value;
        if(triesCounter <=0 || triesCounter >10){
        alert("Gib eine Zahl zwischen 1 und 10 ein");
        } else {
        

       

    screen1.classList.toggle('active');
    screen2.classList.toggle('active');

    let changeRegion=document.getElementById('welt').value
    g=parseFloat(changeRegion);
        }   
}

function addpopUp(text){
    let popUp = document.createElement('div');
    popUp.setAttribute('id', 'addPopUp');
    popUp.append(text);
     document.getElementsByTagName('body')[0].append(popUp);
}

function addpopUp1(text){
    let popUp1 = document.createElement('div');
    popUp1.setAttribute('id', 'addPopUp1');
    popUp1.append(text);
     document.getElementsByTagName('body')[0].append(popUp1);
}
  




function eingabe(){

    if(counter > triesCounter){
        addpopUp1('Du hast ' + triesCounter + ' mal versagt!');
    } else {
    
    let derWinkel = document.getElementById('winkel').value;
    if(derWinkel <1 || derWinkel >90)
        alert("Wähle eine Winkelzahl zwischen 1 und 90 oder das Monster wird dich fressen!!")
        else{
    derWinkel=derWinkel*(Math.PI/180);

    let v0 = document.getElementById('kraft').value;
    
    let wurfweite= ((v0 * v0) * Math.sin(2 * derWinkel))/g;
    wurfweite=Math.round(wurfweite);
   
           

          if(wurfweite==entfernungZumMonster){
            addpopUp('Du hast das Monster erledigt');  
            
         }else{
            let keinTreffer=entfernungZumMonster-wurfweite;
            //keinTreffer=alert(keinTreffer + ' m Entfernung zum Monster! Try again!!');
            document.getElementById('back').innerHTML = (keinTreffer + ' m Entfernung zum Monster! Try again!!');
    
            }
    counter++;

     
    
}          
} 

}







