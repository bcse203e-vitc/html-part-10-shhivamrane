function changeColor(color) {
    document.body.style.backgroundColor = color;
}
document.getElementById('redButton').addEventListener('click', function() {
    changeColor('red');
});

document.getElementById('blueButton').addEventListener('click', function() {
    changeColor('blue');
});