
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for( item of buttons ){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText ; 
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue+=buttonText;
            screen.value += buttonText;
        }
        else if(buttonText == 'AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == 'DEL'){
            screenValue = screenValue.substring(0, screenValue.length-1);
            screen.value = screenValue;
        }
        else if( buttonText=='='){
            let regEx = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g;
            if(regEx.test(screen.value)){
            screen.value = eval(screenValue);
            screenValue = screen.value;}
            else{
               screen.value =  'Enter Valid Expression';
            }
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    })
}