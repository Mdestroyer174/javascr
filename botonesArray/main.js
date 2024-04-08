const moñecos = ['🥵', '🌅', '🌶️', '🥛', '🍙', '🃏', '🍟', '🍓', '🌅', '🦼', '☕'];
const btnp =  document.getElementById('cubitron');
function losmoñecos (chuky){
    const random = moñecos[Math.floor(Math.random()* moñecos.length)];
    const span = document.createElement("span");
    span.textContent=random;
    span.classList.add('emoticono');

    if(chuky === 'push'){
    btnp.appendChild(span);


    }else if(chuky === 'unshift'){
        btnp.insertBefore(span, btnp.firstChild);


    }
 
}


//  const btnu =  document.getElementById('container #unshif');
// // unshif.onclick = function (){
// //     moñecos.unshift('🦼');
// //     console.log(moñecos);
// // }


//  const btnpo =  document.getElementById('container #pop');
// // pop.onclick = function (){
// //     moñecos.pop();
// //     console.log(moñecos);
// // }

//  const btns =  document.getElementById('container #shif');
// // shif.onclick = function (){
// //     moñecos.shift();
// //     console.log(moñecos);
// // }


//  const num = document.getElementById('tenta');
// // const btnsum = document.getElementById('container #inser');

//  inser.onclick = function()
    
// //     moñecos.splice(num.value, 0, '🍙');
// //     console.log(moñecos);


// // }
//  const num2 = document.getElementById('tenta2');
// // const btnres = document.getElementById('container #remo');

// // remo.onclick = function(){
    
// //     moñecos.splice(num2.value, 1, );
// //     console.log(moñecos);
  

// // }

// // const final = document.getElementById('result');
// // function losmoñecos(){
// //     moñecos.forEach(final => {
// //        document.getElementById('result').innerHTML = final;
// //     });
// //  };





