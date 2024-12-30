// document.addEventListener('DOMContentLoaded', () => {
//     alert('Welcome to Docs in a Row Services!');
// });

function wonToDollars(){

    let wonAmount = document.getElementById('wonAmount').value;

    if(wonAmount === '' || isNaN(wonAmount) || wonAmount <= 0){
        document.getElementById('result').innerText = "Please enter a valid amount!";
        return;
    }

    const conversionRate = 0.00068122546;

    let dollarsAmount = wonAmount * conversionRate;

    document.getElementById('result').innerText = `${wonAmount} Won = ${dollarsAmount.toFixed(2)} USD`;
    
}