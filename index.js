function getPin(){
    const pin = Math.round(Math.random()  * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('3digit pin and calling again', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
    // console.log('Pin generate');
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        // console.log(number);
        if(number == 'C')
        calcInput.value = '';
    }
else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    // console.log(newCalc);
    calcInput.value = newNumber;
}

})

function verifyPin(){
    // console.log('verfied');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');

    if(pin == typedNumbers){
    //    console.log('Pin Matched YAY'); 
        successMessage.style.display = 'block';
        failError.style.display = 'none'
    }
    else{
        console.log('Opps');
        successMessage.style.display = 'none';
        failError.style.display = 'block'
    }
}

















