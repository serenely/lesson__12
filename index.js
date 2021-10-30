// To String

// 1)

console.log(typeof(String(null)));
console.log(String(null));
console.log(String(4));

// 2) 

console.log(typeof(5 + ''));


const num = 4;

console.log('https://telegram/dialogs' + num);

// To Number

// 1) 

console.log(typeof(Number(4)));

// 2) 
console.log(typeof(+'2'));

//3) 

console.log(typeof(parceInt('15px', 10)));

// To boolean

// 0,'',null,undefined,Nan // Превращается в False

//1) Первый способ логических переобразований

let switcher = null;

if (switcher){
    console.log('Working..');
}

switcher = 2;
if (switcher){
    console.log('Working..');
}

//2)
console.log(typeof(Boolean('4')));
//3)
console.log(typeof(!!'44444'));