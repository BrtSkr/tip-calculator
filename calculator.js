var fivePerc = document.querySelector('.fivePerc');
var tenPerc = document.querySelector('.tenPerc');
var fifteenPerc = document.querySelector('.fifteenPerc');
var twentyfivePerc = document.querySelector('.twentyfivePerc');
var fiftyPerc = document.querySelector('.fiftyPerc');
var customPerc = document.querySelector('.customPerc')
var customPercValue = parseFloat(document.querySelector('.percentage-input').value)


//Array of every button that is a tip percentage
var tipArray = [fivePerc, tenPerc, fifteenPerc, twentyfivePerc, fiftyPerc, customPerc];


tipArray[0].addEventListener('click', changeActiveClass, false)
tipArray[1].addEventListener('click', changeActiveClass, false)
tipArray[2].addEventListener('click', changeActiveClass, false)
tipArray[3].addEventListener('click', changeActiveClass, false)
tipArray[4].addEventListener('click', changeActiveClass, false)
tipArray[5].addEventListener('click', changeActiveClass, false)



//First it removes active class from every element inside array and then adds it to the clicked one
function changeActiveClass() {
    for(let i=0; i<tipArray.length; i++){
        tipArray[i].classList.remove('active');
    }
       this.classList.add('active'); 
}

//function that calculates both bill and total amount 
function calculate(evt){
    let billAmount = parseFloat(document.querySelector('#bill').value);
    let amountOfPeople = parseInt(document.querySelector("#people").value);
    let tipAmount = document.querySelector("#resultOfTip");
    let totalAmount = document.querySelector('#totalBill');
    let customPercValue = parseFloat(document.querySelector('.percentage-input').value)
    
    //if element inside array has active class
    if(tipArray[0].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.05 * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + (0.05 * billAmount)) * 100) / 100; //total amount of money with tip per person
    }else if(tipArray[1].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.1 * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + (0.1 * billAmount)) * 100) / 100; //total amount of money with tip per person
    }
    else if(tipArray[2].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.15 * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + (0.15 * billAmount)) * 100) / 100; //total amount of money with tip per person
    }
    else if(tipArray[3].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.25 * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + (0.25 * billAmount)) * 100) / 100; //total amount of money with tip per person
    }
    else if(tipArray[4].className.includes('active')){
        tipAmount.innerHTML = Math.round((0.5 * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + (0.5 * billAmount)) * 100) / 100; //total amount of money with tip per person
    }else if(tipArray[5].className.includes('active')){
        tipAmount.innerHTML = Math.round(((customPercValue/100) * billAmount / amountOfPeople) * 100) / 100; //tip amount
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople + ((customPercValue/100) * billAmount)) * 100) / 100; //total amount of money with tip per person
    }
    else{
        tipAmount.innerHTML = 0;
        totalAmount.innerHTML = Math.round((billAmount / amountOfPeople) *100) /100;
    }
}

//resets all inputs to their default values
function resetInputSettings(){
    let billAmount = document.querySelector('#bill');
    let amountOfPeople = document.querySelector("#people");
    billAmount.value = 0; //Default value
    amountOfPeople.value = 1; //Default value
    calculate(); //Executes calculate function to apply current values from inputs
}

//Event listener for executing resetInputSettings for reset button
document.querySelector('.reset-button').addEventListener('click', resetInputSettings);


//Either if you click or type something it checks if the values have changed and calculates current values inside inputs
['click', 'keyup'].forEach(function (handler) {
    document.querySelector('#bill').addEventListener(handler, calculate, false)
    document.querySelector('#people').addEventListener(handler, calculate, false);
    document.querySelector('.percentage-input').addEventListener(handler, calculate, false)
    for(let i=0; i<tipArray.length; i++){
        tipArray[i].addEventListener(handler, calculate, false)
    }
    
})

//Changes style of a custom percentage-button
tipArray[5].addEventListener('click', function () {
    let x = document.querySelector('.percentage-input')
    var y = document.querySelector('.custom-text')
    
    y.style.display = 'none';
    x.style.display = 'block'
    
})
