//const btn = document.querySelector("#btn2");
//const img = document.querySelector("#img");
//const btnoff = document.querySelector("#btn");
const opa = document.querySelector("#img1");

//btn.onclick = function(){
    
//btnoff.ClassList.toggle("hid");
//img.ClassList.toggle("hid");

//}

//document.addEventListener("click", load);

$("#btn").click(() => $("#img , #btn").toggle());
$("#btn1").click(() => $("#img , #btn").toggle());


// $().ready(() => {
//     $("#btn").click(function() {
        
//     ("#btn").click(() => $("#img").show());


//     });
// });

$('#bgopacity').on('input', function (value) {
    $('.imgtra').css({
        opacity: $(this).val() * '.01'
    });
});

