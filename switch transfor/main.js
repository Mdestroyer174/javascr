function num(){

var num = prompt("indica el numero del 1 al 5 (te dara error si pones mas de 5 o letras)");
num = parseInt(num, 10);
 
switch (num) {
    case 1:
        console.log("el num es:" + " " + num);
        Text = "el num es:" + " " + num;
        break;
        case 2:
            console.log("el num es:" + " " + num);
            Text = "el num es:" + " " + num;
        break;
        case 3:
            console.log("el num es:" + " " + num);
            Text = "el num es:" + " " + num;
        break;
        case 4:
            console.log("el num es:" + " " + num);
            Text = "el num es:" + " " + num;
        break;
        case 5:
            console.log("el num es:" + " " + num);
            Text = "el num es:" + " " + num;
        break;
        default:
        console.log("enserio no sabes lo que es un numero ???")
        Text = "tas pasao del 5 ves ? :" + " " + num + " " + " 😪🥱😒🙃";
        break;
}
document.getElementById("demo").innerHTML = Text ;
}