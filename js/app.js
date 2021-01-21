//GenBuzz
let myNumber = 3;

if (typeof myNumber === 'number') { 
    if (myNumber % 3 === 0 && myNumber % 5 === 0) {
        console.log('GenBuzz');
    } else if (myNumber % 3 === 0){
        console.log('Gen');
    } else if (myNumber % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(myNumber);
    };
} else {
    console.log('This is not a number.');
};

//E-Commerce
let item ='Socks';

switch (item) {
    case 'shoes':
        console.log('shoes are $50');
        break;
        case 'Jeans':
        console.log('Jeans are $25');
        break;
        case'Hat':
         console.log('Hats are $12');
         break;
         case'Socks':
         console.log('Socks are $2');
         break;
         default:
             console.log('Invalid Item');
             break;
}

//Random Integer
console.log(Math.floor(Math.random() * 50) + 50);