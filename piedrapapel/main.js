function juego(){

    const player = prompt(' 🪨, ✂️, 📃 ?');
    const bot = ['🪨','✂️','📃'];
    const random = bot[Math.floor(Math.random()* bot.length)];

if(player === random){

    alert( ' el jugador ha sacado: ' + player + ' el bot ha sacado: ' + random + ' empate 🤨');

} if(player === '🪨'){
    if(random === '✂️'){
        alert( player + ' gana a ' + random + ' jugador gana 😎 ');
        juego();
    }else{
        alert( random + ' gana a ' + player + ' bot gana 🤪 ');
        juego();
    }

}if(player === '📃'){
    if(random === '🪨'){
        alert( player + ' gana a ' + random + ' jugador gana 😎 ');
        juego();
    }else{
        alert( random + ' gana a ' + player + ' bot gana 🤪 ');
        juego();
    }

}if(player === '✂️'){
    if(random === '📃'){
        alert( player + ' gana a ' + random + ' jugador gana 😎 ');
        juego();
    }else{
        alert( random + ' gana a ' + player + ' bot gana 🤪 ');
        juego();

    }

}


}



function menu(){
    
    var menu = prompt("Quieres jugar ?");

 
switch (menu) {
    case "si":
        juego();
        break;
        case "no":
        console.log("entonces pa que le das ???");
        alert('entonces pa que le das ???');
        break;
        case "polla":
            alert('tu puta madre 👉👌')
        break;
       
}
}

