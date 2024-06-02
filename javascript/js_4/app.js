let favMovie = "Avatar";
let m = prompt("Enter Movie Name:");
while (favMovie != m && m != "quit") {
    m = prompt("Enter Movie Name:");
}
if (m == favMovie) {
    alert("Movie name is correct");
} else {
    alert("You quit!");
}