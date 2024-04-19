
const opa = document.querySelector("#img1");

document.getElementById("button").onclick = function(){
    var curr_value = document.getElementById('photo').style.transform;
    var new_value = "rotate(30deg)";
    if(curr_value !== ""){
        var new_rotate = parseInt(curr_value.replace("rotate(","").replace(")","")) + 30;
        new_value = "rotate(" + new_rotate + "deg)";

    }
    document.getElementById('photo').style.transform = new_value;
};

$("#btn").click(() => $("#img , #btn").toggle());

$("#btn1").click(() => $("#img , #btn").toggle());


$('#bgopacity').on('input', function (value) {
    $('#imgtra').css({
        opacity: $(this).val() * '.01'
    });
});




