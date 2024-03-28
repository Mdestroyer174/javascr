import foods from "./foods.mjs";

const getAllCategories = [...new Set(foods.map(food => food.category))];

console.log(getAllCategories);
//Expected output: [ 'Fast Food', 'Italian', 'Mexican', 'Healthy', 'Japanese' ]

const checkItExistsCategory = (category) => getAllCategories.includes(category);
console.log(checkItExistsCategory("Italian")); // Print true
console.log(checkItExistsCategory("Spanish")); // Print false

const findCategory = (category) => foods.filter((food) => (food.category === category));
console.log(findCategory('Fast Food'));

const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

// Function to calculate the total of the ticket
const calculateTotalTicket = (ticket, foods) =>
	ticket
		// Find the food corresponding to the icon
		.map((item) => foods.find((food) => food.icon === item)) 
		// Filter out items that were not found
		.filter(Boolean) 
		// Sum up the prices
		.reduce((total, food) => total + food.price, 0); 

// Calculate the total of the ticket
const totalTicket = calculateTotalTicket(ticket, foods);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);