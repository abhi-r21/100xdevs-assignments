const buttons =document.querySelectorAll(".color-button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {

        const color = event.target.dataset.color;

        document.body.style.backgroundColor = color;
    });
});

console.log(buttons);