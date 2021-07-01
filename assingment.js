 //  https://github.com/shohrab11/jsassignmentJs
 
 function kilometerToMeter(kilometer)
{
    if(kilometer < 0){
        console.log("kilometer Can not  be negative number");
    }else{
        var meter = kilometer * 1000;
    }
    
    return meter;
}
kilometerToMeter(5); 




 function bugetCalculator(watch,phone,laptop){
    if(watch < 0 || phone <0 || laptop < 0 ){
        console.log(" watch, phone, laptop value can not be negative");
    }
    else{

    watchPrice = 50 * watch;
    phonePrice = 100 * phone;
    laptopPrice = 500 * laptop;
    var budget = watchPrice  +  phonePrice + laptopPrice;
    return budget;
    }
    
   
}
bugetCalculator(1,4,6);  




function holtelCost(days){
    if(days < 0 ){
     console.log("Days can not be negative");
    }
    else{
        var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var fristPartCost = 10 *100;
        var remaining = days - 10;
        var secoundPartCost = remaining * 80;
        cost = fristPartCost + secoundPartCost;
    }
    else if(days > 20 && days <=100){
        var fristPartCost = 10 *100;
        var secoundPartCost = 10 * 80;
        var remaining = days - 20;
        var thirdPartCost = remaining * 50;
        cost = fristPartCost + secoundPartCost + thirdPartCost;

    } 
    return cost;

    }
    
}
holtelCost(4);
 



function megaFriend(str){
    
        var bigFriend = '';
    str.map(function(arr){

        if(arr.length > bigFriend.length){
            bigFriend =  arr;
        }
    })
    
    return bigFriend;
      
}

var friendList = ["shohrab","shakil","sumon","shaju","Sajal","Shakhu","Somrat","Mahfuzur Rahman"];
megaFriend(friendList);