// const name = "beka";
// console.log(name);
// const number = 1;
// console.log(number);

// const age = 31;
// const totalPrice = 200.74;
// const userName = "Beka";
// const message = "privet Beka";
// const isOpen = true;
// // const shouldConfirm = false;

// alert(123); /*uvedomlenie ot saita*/
// prompt("k.,k.") vvod danix
// confirm(123); vibor da ili net

// let age = prompt("12");
// age = Number(age);
// console.log(age);
// console.log(typeof age);

// let userName = prompt(1);
// userName = Number(userName);
// console.log(userName);
// console.log(typeof userName);

// let elementWidth = "40px";
// elementWidth = "20000.01121121212121";
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementheight = "200.65px";
// elementheight = Number.parseFloat(elementheight);
// console.log(elementheight);

// let salary = 200.222;
// salary = salary.toFixed();
// salary = Number(salary);
// console.log(salary);

// let price = 500.259;
// price = price.toFixed(1);
// price = Number(price);
// console.log(price);

// let price = 200.12123;

// price = Number(price.toFixed(2));
// console.log(price);

// console.log(Math);
// преобразить  степен !!!
// const base = 2;
// const power = 5;
// const result = Math.pow(2, 5);
// console.log(result);
// ** - stepern

// tu davcert peremenebs ciprit mogvcems im ciprs rac ceria
// let base = prompt("napishi chislo");
// base = Number(base);
// console.log(base);

// let power = prompt("pishi stepen");
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// const max = 10;
// const min = 1;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));

// const colors = ["red", "orange", "blue"];
// const max = colors.length - 1;
// const min = 0;
// const result = Math.round(Math.random() * (max - min) + min);
// const color = colors[result];
// console.log(color);
// document.body.style.backgroundColor = color;

// const message = "v etoi strake3 25 simbolov";
// console.log(message.length);

// const firstName = "beka";
// const lastName = "sharvashidze";
// const fullName = firstName + ' ' + lastName;
// // console.log(fullName);

// const room = 2;
// const type = 'VIP';

// const message = `ia ${firstName} ${lastName} zaseliaus v ${room}`;
// console.log(message);

// const number = 5;
// const message = 'i kuplu 5 sht';
// const result = `i kuplu ${number} sht`;
// console.log(result);


// let brand = 'samSung';
// // brand = 'SAMSUNG'
// // console.log(brand[5]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);


// const beka = 'keti';
// const keti = 'beka';

// const string1 = 'liza da beka';
// const string2 = 'liza da keti';
// const string3 = 'liza da moni';
// const string4 = 'BEKA da moni';
// const normalizedString4 = string4.toLowerCase();



// console.log(string1.includes(beka));
// console.log(string2.includes(beka));
// console.log(string3.includes(beka));
// console.log(normalizedString4.includes(keti));

// kogda sravnenie to aperandi vsegda privoditsya k chislu!!
// console.log('10' > 3)

// ispolzovat tolko strogoe ravenstvo ( === )
// const isEqual = 4 === 4;
// console.log(isEqual);

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(false));



// // console.log(5 && 1 && 'hellow' && 3);
//   && logicheskoe (i)
// do pervovo false esli net fals to napasledni true

// console.log(0 || 0 || 5 || false)
//  logicheski aperator || (ili)
//  ishet do pervoi pravdi i ostonovlivaetsya



// console.log(!1)
// logicheskoe ne (!) privodit vse k pravde




// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`chislo ${number} popodaet li do x1&`, number > x1 && number < x2);




// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(canOpenChat);



// const subcription = 'pro';
// const sub = 'vip';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('est dostup', canAccessContent);


// if (false) {
//     console.log(22)
// }
// if (5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }


// const balance = 1000;
// const massage = balance >= 0 ? 'da' : 'net';
// console.log(massage);
// ternarni aperator!



// const stars = 1;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     default:
//         console.log('takovo net');
// }

// console.log(price);


// const option = 1;
// let massage = '';

// switch (option) {
//     case 1:
//         massage = 'vi mojete zabrat tavar';
//         break;
//     case 2:
//         massage = 'kurier dostavit';
//         break;
//     case 3:
//         massage = 'pasilka budet';
//         break;
//     default:
//         massage = 'meneger perezvonit';
        

// }
// console.log(massage);

// цикл for
// for (let i = 0; i < 10; i += 1){
//     console.log(i);
// }

// console.log('net ili da');


// const minSalary = 100;
// const maxSalary = 1000;
// const people = 4;
// let totalSalary = 0;

// for (let i = 1; i <= 2; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работник ${i}-${salary}`);
//     totalSalary += salary;

// }

// console.log('totalSalary:', totalSalary);


// const min = 6;
// const max = 13;
// const people = 6;
// let total = 0;

// for (i = 1; i <= people; i += 1){
//     const totalPrice = Math.round(Math.random() * (max - min) + min);

//     console.log(`itog:${ i }`, totalPrice);
//     total += totalPrice;

// }
// console.log('itog', total)



// const min = 0;
// const max = 5;
// let total = 0;


// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('ne chetnoe:', i);
//         continue;
//     }
    
//     console.log("chetnoe:", i);
//     total += i;
// }

// console.log('itog:', total);


// let totalSpent = 6000;
// let payment = 500;
// let discount = 0;
//  if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('bronzovi partnior 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('serebreni partnior, skidka 5%')
//     discount = 0.05;
// } else if(totalSpent >=5000){
//     console.log('zolotoi partnior, skidka 10%')
//     discount = 0.1;

//  } else {
//      console.log('ne partnior skidki net');
// }
// payment -= payment * discount;

// console.log(`oformlyaem zakaz na summu ${payment} so skidkoi ${discount*100}%`);
// totalSpent += payment;
// console.log(`itog: ${totalSpent}`);



// const friends = ['beka', 'keti', 'liza','moni','giji'];

// // console.log(friends);
// console.table(friends);
// // console.log(friends[0]);
// friends[0] = 'bekakaibichia';
// console.table(friends);


// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 20;
// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;
// console.log(a);
// console.log(b);

// a[0] = 200;
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log([1, 2, 3] !== [1, 2, 3]);



// const friends = ["beka", "keti", "liza", "moni", "giji"];
// // console.table(friends);
// // const lastIndex = friends.length - 1;
// // for (let i = 0; i <= lastIndex; i += 1){
// //     // console.log(friends[i]);
// //     friends[i] += '-1';
// //     // friends[i] += '123';


// // }

// for (const friend of friends) {
//     console.log(friend);


// }
// // console.table(friends);




// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;


// // for (let i = 0; i < cart.length; i += 1){
// //     console.log(cart[i]);

// //     total += cart[i];
    
// // }
// console.log(total);

// for (value of cart) {
//     total += value;

// }
// console.log(cart);


// const numbers = [1, 5, 8, 9, 12, 4, 15];
// let total = 0;





