

let symbolPc;
let symbolUser;
let pcCounter=0;
let userCounter=0;
let winCondition;
let counter;


function changeScreen(){

     counter=document.getElementById('counterInput').value;
    if(counter < 1){
        alert('Bitte geben sie eine positive Zahl ein');
    }else{
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
    }
}

function addPopUp(text, reload = false){
let popUp = document.createElement('div');
popUp.setAttribute('id', 'popUp');
popUp.append(text);

let button=document.createElement('button');
button.setAttribute('id', 'again' );

if(reload)
        button.addEventListener('click', reloadPage);
    else   
        button.addEventListener('click', closePopUp);

    button.append('again');

   
    popUp.append(button);

    document.getElementsByTagName('body')[0].append(popUp);


}

function reloadPage(){
    location.reload();
}

function closePopUp(){
    popUp.remove();
}

function start(symbolUser){
    if(counter>0){

let randomNumber = Math.ceil(Math.random()*3);
if(randomNumber == 1 ){
    symbolPc='STEIN';
    } else if (randomNumber == 2){
    symbolPc='SCHERE';

    }else if (randomNumber == 3){
    symbolPc='PAPIER';
    }



if(symbolUser == symbolPc){
    userCounter++;
    pcCounter++;
    alert('Draw '+ symbolUser +' vs '+ symbolPc);
    document.getElementById('spieler').innerHTML='<strong>' +userCounter+ '</strong>';
    document.getElementById('pc').innerHTML='<strong>' + pcCounter + '</strong>';

}
    else if(symbolUser =='STEIN' && symbolPc =='SCHERE' || symbolUser == 'SCHERE' && symbolPc == 'PAPIER' || symbolUser =='PAPIER' && symbolPc =='STEIN'){
        alert('Du hast Gewonnen ' + symbolUser + ' vs '+ symbolPc);
        userCounter++;
        document.getElementById('spieler').innerHTML='<strong>' +userCounter+ '</strong>';

}
    else if(symbolUser =='STEIN' && symbolPc =='PAPIER' || symbolUser == 'SCHERE' && symbolPc == 'STEIN' || symbolUser =='PAPIER' && symbolPc =='SCHERE'){
        alert('Du hast Verloren ' + symbolUser + ' vs ' + symbolPc);
        pcCounter++;
        document.getElementById('pc').innerHTML='<strong>' + pcCounter + '</strong>';

}
/*else if(symbolUser =='SCHERE' && symbolPc =='PAPIER'){
    alert('Du hast Gewonnen '+ symbolUser + ' vs '+ symbolPc);
    userCounter++;
    document.getElementById('spieler').innerHTML='<strong>' +userCounter+ '</strong>';

}
else if(symbolUser =='SCHERE' && symbolPc =='STEIN'){
    alert('Du hast Verloren '  + symbolUser + ' vs ' + symbolPc);
    pcCounter++;
    document.getElementById('pc').innerHTML='<strong>' + pcCounter + '</strong>';

}
else if(symbolUser =='PAPIER' && symbolPc =='SCHERE'){
    alert('Du hast Verloren '  + symbolUser + ' vs ' + symbolPc);
    pcCounter++;
    document.getElementById('pc').innerHTML='<strong>' + pcCounter + '</strong>';

}else if (symbolUser =='PAPIER' && symbolPc =='STEIN'){
    alert('Du hast Gewonnen '+ symbolUser + ' vs '+ symbolPc);
    userCounter++;
    document.getElementById('spieler').innerHTML='<strong>' +userCounter+ '</strong>';

}*/




counter--;

if(counter == 0){
     
    if(userCounter> pcCounter){
        addPopUp('Du hast gewonnen', true);
    }else if(pcCounter>userCounter){
        addPopUp('Du hast leider verloren', true);
    }else{
        addPopUp('unentschieden', true);
}



}




}
    }


