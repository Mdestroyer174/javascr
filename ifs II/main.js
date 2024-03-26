function nums (num1, num2, num3){

 var numeros = num1 + num2 + num3;

 return numeros
}
function nombres ( nombre, ap1, ap2){

    var person = nombre + ap1 + ap2;

    return person
}

function mayor (nume1, nume2){

    if (nume1 > nume2){
        console.log(nume1 + "es mayor que" + nume2 )
   
    }else if( nume2 > nume1){

        console.log( nume2 + "es mayor que" + nume1)

    }

}

mayor(7, 5);
console.log(nombres("michi", "garcia", "duran"));
console.log(nums(4, 5, 1));


