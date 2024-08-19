
//Ex.1 

let temperature = 26;


if (0 >= temperature) {
    console.log("îngheț");
}
else if (10 >= temperature  && temperature > 0) {
    console.log("frig");
}
else if (25 >= temperature && temperature >= 11) {
    console.log("moderat");
}
else if (temperature > 25) {
    console.log("cald");
}



//Ex. 2

let day;
day = 7;

if (day == 1) {
    console.log("Luni")
}
else if (day == 2) {
    console.log("Marți")
}
else if (day == 3) {
    console.log("Miercuri")
}
else if (day == 4) {
    console.log("Joi")
}
else if (day == 5) {
    console.log("Vineri")
}
else if (day == 6) {
    console.log("Sâmbătă")
}
else if (day == 7) {
    console.log("Duminică")
}


//Ex. 3

let number;
number = 2225;
if (number % 2 === 0) {
    console.log("par")
}
else {
    console.log("impar")
}


//Ex. 4

let purchaseAmount = 121;
let totalPrice;

if(purchaseAmount >= 100) {
    purchaseAmount = purchaseAmount * 0.90;
    totalPrice = purchaseAmount * 1.05;
}
else {
    totalPrice = purchaseAmount * 1.05;
}
console.log(totalPrice.toFixed(2));


//Ex. 5

let password = "abcdefg";

if (password.length >= 12 && /[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) ) {
    console.log("Parola este foarte sigura");
} 
else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) )  {
    console.log("Parola este sigura");
} 
else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Parola este slaba");
} 
else {
    console.log("Parola este nesigura");
}


//Ex. 6

let numar = 25;
if (numar < 1) {
    console.log("Nu este prim")
} 
else {
    for(let i = 2; i <= Math.sqrt(numar); i++) {
        if (numar % i ===0) {
            console.log("Nu este prim")
        }
        else {
            console.log("Este prim")
        }
    }
}


//Ex. 7

let side1, side2, side3;
side1 = 3;
side2 = 4;
side3 = 5;

if (side1 + side2 > side3 && side1+ side3 > side2 && side2+ side3 > side1) {
    console.log("Este un triunghi");
}
else {
    console.log("Nu este un triunghi");
}

if (side1**2 + side2**2 == side3**2 || side1**2 + side3**2 == side2**2 || side2**2 + side3**2 == side1**2) {
    console.log("Este un triunghi dreptunghic");
}
else {
    console.log("Nu este triunghi dreptunghic(sau poate nici nu este un triunghi)");
}