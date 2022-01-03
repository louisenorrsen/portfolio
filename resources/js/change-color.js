let element = document.getElementById('color-dot')

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function get_random_color() {
    var h = random(1, 360);
    var s = random(0, 50);
    var l = random(0, 50);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

const colorChange = () => {
    element.style.backgroundColor = get_random_color()
}

element.addEventListener('click', colorChange)
