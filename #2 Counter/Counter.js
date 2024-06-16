    let value = document.getElementById('value');
    let count = 0;

    document.getElementById('plus').addEventListener('click', plus)
    function plus(){
        count += 1;
        value.innerText = count
    }

    document.getElementById('minus').addEventListener('click', minus)
    function minus(){
        count -= 1;
        value.innerText = count
    }

    document.getElementById('reset').addEventListener('click', reset)
    function reset(){
        count = 0;
        value.innerText = count
    }