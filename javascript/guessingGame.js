
let n = Math.ceil(Math.random() * 10);
console.log(n)
let num = prompt("Guess the number");
while (true) {
    if (num == "q") {
        alert("Bye");
        break;
    } else if (num == n) {
        alert("Guess is correct!! Random number = "+n);
        console.log("Guess is correct!! Random number = ",n);
        break;
    } else {
        alert("Wrong Guess");
        if(n > num) {
            alert("Random number is greater than the entered number")
        } else {
            alert("Random number is less than the entered number")
        }
        num = prompt("Guess the number");
    }
}
alert("Game Over")
