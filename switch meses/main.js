    function mes(){
    
    var mes = prompt("indica el mes (formato numerico)");

 
switch (mes) {
    case "1":
        console.log("es enero 🥶");
        Text = "es enero 🥶";
        break;
        case "2":
        console.log("es febrero 🥶");
        Text = "es febrero 🥶";
        break;
        case "3":
        console.log("es marzo 🥶");
        Text = "es marzo 🥶";
        break;
        case "4":
        console.log("es abril🌻");
        Text = "es abril 🌻";
        break;
        case "5":
        console.log("es mayo 💮");
        Text = "es mayo 💮";
        break;
        case "6":
        console.log("es junio 🥵🔥🔥");
        Text = "es junio 🥵🔥🔥";
        break;
        case "7":
        console.log("es julio 🥵🔥🔥🔥");
        Text = "es julio 🥵🔥🔥🔥";
        break;
        case "8":
        console.log("es agosto 🥵🔥🔥🔥🔥🔥");
        Text = "es agosto 🥵🔥🔥🔥🔥🔥";
        break;
        case "9":
        console.log("es septiembre 🥵🔥");
        Text = "es septiembre 🥵🔥";
        break;
        case "10":
        console.log("es octubre 🍂");
        Text = "es octubre 🍂";
        break;
        case "11":
        console.log("es noviembre 🥶🍂");
        Text = "es noviembre 🥶🍂";
        break;
        case "12":
        console.log("es diciembre 🥶");
        Text = "es diciembre 🥶";
        break;

    default:
        console.log("que mes ese ese ???")
        Text = "nene como que mes :" + " " + mes + " " + "??? 😒😑😶😥😪🥱😒🫤🙃🙁";
        break;
}
document.getElementById("demo").innerHTML = Text ;
}