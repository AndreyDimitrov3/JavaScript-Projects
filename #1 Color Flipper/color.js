document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById('btn');
    let body = document.getElementById('body');
    const assets = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    btn.addEventListener('click', color);
    function color() {
        let randomColor = [];
        while(randomColor.length < 6) {
            randomColor.push(assets[randomNumber()])
        }

        document.getElementById('value').innerText = '#' + randomColor.join('');
        body.style.backgroundColor = '#' + randomColor.join('');
    }
    
    function randomNumber() {
        return Math.floor(Math.random() * assets.length)
    }
})
