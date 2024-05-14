 let amount = 150000
 switch(true){
    case(amount>60000):
        console.log("By iphone");
    break;

    case(amount>10000):
        console.log("By android");
    break;

    case (amount>5000 && amount<1000):
        console.log("By basic");
    break;

    default:
        console.log("you can't afford mobile phone now!");
 }