function řekniAhoj () {
    console.log("čus");
}


řekniAhoj();
řekniAhoj;

let pozdrav = "Pozdrav!";

function ukažPozdrav() {
    console.log(pozdrav)
}

function testLocal() {
    let localValue = 123;
    console.log(localValue)
}

ukažPozdrav();
testLocal();




if (true) {
 var y = "var blok nerespektuje";
}
console.log(y);

// Parametr & Argument

function sayHello(name) { // name = parametr
    console.log("Ahoj" + name);
}

    sayHello("Alice");

    function addNumber(num1, num2) {
        console.log(num1 + num2);
    }

    addNumber(5,8);