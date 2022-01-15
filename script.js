let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");
let results = document.getElementById("result");

function calculate(){
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;
    
    let totalMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * kids);
    let totalBeer = beerPP(duration) * adults;
    let totalJuice = juicePP(duration) / 2 * kids;

    results.innerHTML = `<p>${totalMeat / 1000} kg of meat
    <img src="images/meat.png" style="float:left;width:60px;height:60px;"></p>`;
    results.innerHTML += `<p>${Math.ceil(totalBeer / 330)} bottles of 330ml beer
    <img src="images/beer.png" style="float:left;width:60px;height:60px;"></p>`;
    results.innerHTML += `<p>${Math.ceil(totalJuice / 1000)} bottles of 1lt juice
    <img src="images/juice.png" style="float:left;width:60px;height:60px;"></p>`;
}    
    
    
function meatPP(duration){
    if (duration >= 6){
        return 650;
    }
    else{
        return 400;
    }
}
function beerPP(duration){
    if (duration >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}
function juicePP(duration){
    if (duration >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}
