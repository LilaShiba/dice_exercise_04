function rollDie(){
    let random1 = Math.floor((Math.random() *6 ) + 1);
    let random2 = Math.floor((Math.random() * 6) + 1);
    let tots = random1 + random2
    let firstDie = 'dice-'+random1;
    let secondDie = 'dice-'+random2;
    document.getElementById('first-die').className = firstDie;
    document.getElementById('second-die').className = secondDie;
    document.getElementById('die-txt').textContent = tots
    if (tots === 7 || tots == 11){
        document.getElementById('content').className = 'win';
    } else if(tots === 2){
        document.getElementById('content').className = 'lose';

    }else{
        document.getElementById('content').className = 'norm'
    }
}

document.getElementById('roll-dice').onclick = rollDie;
