let counter = 12;
let position;
let rightNumber;
let random;
let random2;
let random3;






 random = Math.ceil(Math.random()*(9-1)) +1;
 random2 = Math.ceil(Math.random()*(9-1)) +1;
 random3 = Math.ceil(Math.random()*(9-1)) +1;
 
 console.log(random, random2, random3);

 function guess(){
     
    

        let number1 = document.getElementById('code').value;
        let number2 = document.getElementById('code1').value;
        let number3 = document.getElementById('code2').value;
      
        console.log(number1, number2, number3);
    
        if(number1 == random && number2 == random2 && number3==random3){
            
            $('#img1').attr('src', 'Image/Haken-300x286.png' );
            $('#img2').attr('src', 'Image/Haken-300x286.png' );
            $('#img3').attr('src', 'Image/Haken-300x286.png' );
            $('.button').remove('.button');
            $('#runde').remove('#runde');
            $('p').remove('p');
            $('h2').text('Du hast es geschafft!! Gratulation');
            $('h2').css('text-aligne', 'center');
            $('#button2').css('display', 'block');
            $('#img1').css({
                'height' : '350px',
                'width' : '350px'});
            $('#img2').css({
                    'height' : '350px',
                    'width' : '350px'});
            $('#img3').css({
                        'height' : '350px',
                        'width' : '350px'});
    
            
    
        }else if(number1 !=random && number2 !=random2 && number3 !=random3){
                     //console.log('complete fail');
                     $('#img1').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                     $('#img2').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                     $('#img3').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
    
        }else if(number1 == random && number2 ==random2){
                    //console.log('erste und zweite Stelle getroffen');
                    $('#img1').attr('src', 'Image/Haken-300x286.png' );
                    $('#img2').attr('src', 'Image/Haken-300x286.png' );
                    $('#img3').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
    
        }else if(number1 == random && number3==random3){
                   //console.log('erste und dritte Stelle getroffen');
                    $('#img1').attr('src', 'Image/Haken-300x286.png' );
                    $('#img2').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                    $('#img3').attr('src', 'Image/Haken-300x286.png' );
        }else if (number2==random2 && number3==random3){
                    //console.log('zweite und dritte Stelle getroffen');
                    $('#img1').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                    $('#img2').attr('src', 'Image/Haken-300x286.png' );
                    $('#img3').attr('src', 'Image/Haken-300x286.png' );
                   
        }else if(number3==random3){
                    
                    //console.log('dritte Stelle getroffen');
                    $('#img1').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                    $('#img3').attr('src', 'Image/Haken-300x286.png' );
                    $('#img2').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                   
        }else if(number1==random){
                    
                    $('#img1').attr('src', 'Image/Haken-300x286.png' );
                    $('#img2').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                    $('#img3').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
         
        }else if(number2 == random2){
                    
                    $('#img1').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
                    $('#img2').attr('src', 'Image/Haken-300x286.png' );
                    $('#img3').attr('src', 'Image/istockphoto-1162439646-1024x1024.jpg');
         
        }
         counter--;
         document.getElementById('runde').innerHTML='<strong>' +counter+ '</strong>'; 
           // $(counter).replaceWith(counter2);

    if(counter == 0){
        $('.button').remove('.button');
        $('#runde').remove('#runde');
        $('#img1').css({
            'height' : '350px',
            'width' : '350px'});
        $('#img2').css({
                'height' : '350px',
                'width' : '350px'});
        $('#img3').css({
                    'height' : '350px',
                    'width' : '350px'});
        $('p').remove('p');
        $('h2').text('Du hast Versagt!! Die Welt ist dem Untergang geweiht!!');
        $('#button2').css('display', 'block');
    
 }


}
function restart(){
    location.reload();

 }


    


 

 
