

var tips = new Array()
var amounts = new Array();

function tipCalculator(bill){

    var tip;
    if(bill < 1000){
        tip = bill * (20/100);
    }
    else if(bill >= 1000 && bill < 1500){
        tip = bill * (15/100);
    }
    else{
        tip = bill * (10/100);
    }

    tips.push(tip);
    amounts.push(bill+tip);

    return tip;
}

console.log('1-tip :'+tipCalculator(1230));
console.log('2-tip :'+tipCalculator(982));
console.log('3-tip :'+tipCalculator(1640));

console.log(tips);
console.log(amounts);
