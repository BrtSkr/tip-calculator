var fivePerc = document.querySelector('.fivePerc');
var tenPerc = document.querySelector('.tenPerc');
var fifteenPerc = document.querySelector('.fifteenPerc');
var twentyfivePerc = document.querySelector('.twentyfivePerc');
var fiftyPerc = document.querySelector('.fiftyPerc');
var customPerc = document.querySelector('.customPerc')


var tipArray = [fivePerc, tenPerc, fifteenPerc, twentyfivePerc, fifteenPerc, customPerc];

tipArray[0].onclick = function () {

    for(let i=0; i<tipArray.length; i++){
        tipArray[i].classList.remove('active');
    }
       tipArray[0].classList.add('active'); 
}





function calculate(evt){
    let billAmount = parseFloat(document.querySelector('#bill').value);
    let amountOfPeople = parseInt(document.querySelector("#people").value);
    let tipAmount = document.querySelector("#resultOfTip");

    if(tipArray[0].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.05 * billAmount / amountOfPeople) * 100) / 100;
    }
}


document.querySelector('#people').addEventListener('keyup', calculate);

['click', 'keyup'].forEach(function (handler) {
    document.querySelector('#bill').addEventListener(handler, calculate, false)
    document.querySelector('#people').addEventListener(handler, calculate, false);
})

here.addEventListener('click', function () {
    let billAmount = parseFloat(document.querySelector('#bill').value);
    alert(billAmount)
})