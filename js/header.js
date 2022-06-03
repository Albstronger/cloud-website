window.addEventListener('load', function(event) {
    generateBulbs(window.innerHeight / 15);
});

let background = document.getElementById('background');

function generateBulbs(count) {
    if (count <= 0) {
        return;
    }

    for (let i = 0; i < count; i++) {
        let bulb = document.createElement('div');
        bulb.classList.add('bulb');
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                bulb.classList.add('red-bulb');
                break;
            case 1:
                bulb.classList.add('dark-orange-bulb');
                break;
            case 2:
                bulb.classList.add('light-orange-bulb');
                break;
            case 3:
                bulb.classList.add('yellow-bulb');
                break;
        }
        let width = Math.floor(Math.random() * 36) + 24;
        bulb.style.width = width + 'rem';
        bulb.style.height = Math.floor(Math.random() * 9) + 1 + 'rem';
        bulb.style.top = Math.floor(Math.random() * 100) + '%';
        bulb.style.left = -(Math.floor(Math.random() * 100) + width) * 1.5 + 'rem';
        bulb.setAttribute('speed', Math.floor(Math.random() * 20) + 10);

        background.appendChild(bulb);
    }
}

let intervalID = setInterval(function() {
    let bulbs = document.getElementsByClassName('bulb');

    for (let i = 0; i < bulbs.length; i++) {
        let bulb = bulbs[i];
        let computedStyle = window.getComputedStyle(bulb, null);

        bulb.style.left =
            parseFloat(computedStyle.getPropertyValue('left')) +
            bulb.getAttribute('speed') * 0.1 +
            'px';

        if (
            parseFloat(computedStyle.getPropertyValue('left')) -
            parseFloat(computedStyle.getPropertyValue('width')) >
            window.innerWidth
        ) {
            background.removeChild(bulb);
            generateBulbs(1);
        }
    }
}, 10);