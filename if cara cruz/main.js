function aleatorio (){
var num = Math.round(Math.random());
console.log(num);
return num
}
if (aleatorio() === 1){
    console.log("cara");
}else{
    console.log("cruz")
}