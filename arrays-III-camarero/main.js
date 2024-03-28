// --------------------------------------------------------------------

// const comida = [];

//     comida.push("🍔", "🌭", "🍟", "🍟"); 
//     comida.splice(4, 2, "🧋", "🧋");

// console.log(comida);


// --------------------------------------------------------------------

// const comida = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 

//     comida.reverse();
    
//     comida.unshift("🍸");
    
//     console.log(comida);

// --------------------------------------------------------------------

// const tick01 = ['🍺', '🍺', '🥜']; 

// const tick02 = ['🍺', '🥪', '🥙']; 

// const combotick = tick01.concat(tick02);
// console.log(combotick);

// const combotick2 = [...tick01, ...tick02];
// console.log(combotick2);

// const combotick3 = [];
// const x = combotick3.push(tick01, tick02);
// console.log(combotick3);

// const combotick4 = [];
// for (let i = 0; i < tick01.length; i++) {
// 	combotick4.push(tick01[i]);
// }
// for (let i = 0; i < tick02.length; i++) {
// 	combotick4.push(tick02[i]);
// }
// console.log(combotick4);


// combotick4.shift();
// combotick4.pop();
// console.log(combotick4);

// --------------------------------------------------------------------

// const shake = ['🥛', '🍓', '🍌'];

// shake.join(" + ");
// console.log(shake.join(" + "));
// // Expected output: 🥛+🍓+🍌

// --------------------------------------------------------------------

// const tickets = [1, 100000, 21, 30, 4]

// const ordertick = tickets.sort((a, b) => a - b);

// console.log(ordertick);

// --------------------------------------------------------------------

// const ticket01 = ['☕', '☕', '☕', '☕'];
// const ticket02 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

// const tickcheck1 = ticket01.every((element) => element === '☕');
// const tickcheck2 = ticket01.every((element) => element === '☕');

// console.log(tickcheck1);
// console.log(tickcheck2);

// --------------------------------------------------------------------

// const ticket03 = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

// const tpd1 = ticket03.slice(2, 6);
// const tpd2 = ticket03.slice(1, 5);
// const tpd3 = ticket03.slice(0, 7);
// const tpd4 = ticket03.splice (3, 1);

// tpd1.splice(1, 2);
// tpd2.splice(1, 2);
// tpd2.reverse();
// tpd3.splice(1, 5);

// console.log(" ticket primera persona " + tpd1);
// console.log(" ticket segunda persona " + tpd2);
// console.log(" ticket tercera persona " + tpd3);
// console.log(" restante: " + tpd4);

// --------------------------------------------------------------------

const drinksConsumed = [
    { nombre: 'Alice', bebida: '🍹', hora: '18:30:00' },
    { nombre: 'Bob', bebida: '🍷', hora: '19:15:00' },
    { nombre: 'Charlie', bebida: '🍹', hora: '20:00:00' },
    { nombre: 'Alice', bebida: '🍸', hora: '21:45:00' },
    { nombre: 'Bob', bebida: '🥂', hora: '22:30:00' },
    { nombre: 'Charlie', bebida: '🍵', hora: '23:15:00' },
    { nombre: 'Alice', bebida: '🍹', hora: '03:30:00' },
    { nombre: 'Bob', bebida: '🍺', hora: '04:15:00' },
    { nombre: 'Charlie', bebida: '🍸', hora: '05:00:00' },
  ];

function findFirstOccurrenceIndexAndPerson(array, targetDrink) {
	// Find the first occurrence of targetDrink using indexOf
	const firstOccurrenceIndex = array
		.map((item) => item.bebida)
		.indexOf(targetDrink);

	if (firstOccurrenceIndex !== -1) {
		const personName = array[firstOccurrenceIndex].nombre;
		console.log(
			`First occurrence of ${targetDrink} found by ${personName} at index: ${firstOccurrenceIndex}`
		);
	} else {
		console.log(`${targetDrink} not found in the array.`);
	}
}



// Usage of the function with the drinksConsumed array and targetDrink '🍹'
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🍹");
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🥂");
findFirstOccurrenceIndexAndPerson(drinksConsumed, "☕");



