let obereGrenze;
let gerateneZahl;
let anzahlDerVersuche;
let counter = 0;
let random;
let trycounter=0;

function start(){
    counter=document.getElementById("try").value;
    if(counter<=0){
        alert('GEBEN SIE EINE ZAHL GRÖßer 0 EIN');
    }else{
         $('#screen1').fadeOut('fast');
         $('#screen2').fadeIn('slow');
         //screen1.classList.add('hidden');
         //screen2.classList.remove('hidden');
       
        }
    }  



function addPopUp(text, reload=false){

    let PopUp=document.createElement('div');
    PopUp.setAttribute('id', 'PopUp');
    PopUp.append(text);

    let button=document.createElement('button');
    button.setAttribute('id', 'ok');

    if(reload)  
        button.addEventListener('click', reloadPage);
    else   
        button.addEventListener('click', closePopUp);

    button.append('ok');

   
    PopUp.append(button);

    document.getElementsByTagName('body')[0].append(PopUp); 
}

function reloadPage(){
    location.reload();
}

function closePopUp(){
    PopUp.remove();
}


function boarder(){
obereGrenze = document.getElementById('grenze').value;
    if(obereGrenze==0){
    alert('GIB EINE ZAHL GRÖßER NULL EIN')
    }else{
    random = Math.round(Math.random() * (obereGrenze));
}
    if(random == 0){
    random = Math.round(Math.random() * (obereGrenze));
}console.log(random);
}

function raten(){

gerateneZahl=document.getElementById('zahl').value;
if(gerateneZahl==random){
        addPopUp('TREFFER',true);
}else if (gerateneZahl < random){
    document.getElementById('output').innerHTML=('!!ZU NIEDRIG!!');
}else if (gerateneZahl>random){
    document.getElementById('output').innerHTML=('!!ZU GROß!!');
    
    
}
counter--;

if(counter==0){
    addPopUp('DU HAST KEINE VERSUCHE MEHR ÜBRIG', true);

} 

   
}
