//oneKilometer =  1000 meter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var meter = kilometerToMeter(2)
console.log(meter);


// Price: watch 50, Mobile 100, Leptop 500;

function budgetCalculator(Watch, Mobile , Leptop){

    var price1 = Watch * 50;
     var price2 = Mobile * 100;
      var price3 = Leptop * 500;
    var totalCost=price1+price2+price3;
     
    return totalCost;
         
   }
   var result = budgetCalculator(2, 2, 1);
   console.log(result)


   const str = 'Kalam; Balam; Jalam; Karim; Abusayed, JahangirAlam';
   function megaFriend (str){
       const strArray = str.split(' ');
       const sortedStrArray = strArray.sort(
           (strA, strB) => {
               return strB.length - strA.length;
           }
       );
       return sortedStrArray[0];
   } 
   console.log(megaFriend(str));



function hotelCost(day){
    var cost = 0;
    if(day <= 5){
        cost = day * 100;
    }
    else if (day <= 7){
        var firstPart = 5 * 100;
        var remaining = day -5;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 5 *100;
        var secondPart = 2 * 80;
        var remaining = day - 7;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var dayCount = hotelCost(10);
console.log(dayCount);
