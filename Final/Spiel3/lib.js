function addPopUp(text, reload = false) {
    //<div id="popUp">du hast gewonnen <button>ok</button></div>
    //clickhandler / Eventlistener
    // css - absolute

    let popUp=document.createElement('div');
    popUp.setAttribute('id', 'popUp');
    popUp.append(text);
   
    let button=document.createElement('button');

    if(reload)  //reload == true
        button.addEventListener('click', reloadPage);
    else   
        button.addEventListener('click', closePopUp);

    button.append('ok');

   
    popUp.append(button);

    document.getElementsByTagName('body')[0].append(popUp); //tag name liefert immer array
}

function reloadPage(){
    location.reload();
}

function closePopUp(){
    popUp.remove();
}