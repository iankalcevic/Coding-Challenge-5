//Task 1 - Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; //Declare an object with three properties
console.log('Name: ${customer.name}'); //Log customer name
console.log('Age: ${customer.age}'); //Log customer age
console.log('Email: ${customer.name}'); //Log customer age

//Task 2 - Object Methods
let order = {
    orderID: 12345,
    totalAmount: 150,
    staus: "Processing",
    
    displayOrder: function() {
        console.log('Order ID: ${this.orderID}, Amount: $${this.totalAmount}, Status: ${this.status}');
    }
}; 
order.displayOrder(); //Log order details

//Task 3 - Array Manipulation
let cartItems = ["Milk", "Bread", "Eggs"]; //Array of three items

cartItems.push("Water"); //Add a new product to array
cartItems.pop(); //Remove last product from array
cartItems.unshift("Ketchup"); //Add new product to the start of array
cartItems.shift(); //Remove first product from array

//Task 4 - Map Method
let prices = [100, 200, 300]; //Declare an array of prices
let discountedPrices = prices.map(price => price * .9); //Applying discount

console.log("Discounted Price:", discountedPrices); //Log discounted price

//Task 5 - Filter Method
let inventory = [5, 0, 12, 8, 0]; //Create array

let availableProducts = inventory.filter(quantity => quantity > 0); //Remove quantities of 0

console.log("Products available:", availableProducts); //Log available products

//Task 6 - Reduce Method
let sales =[500, 300, 200, 400]; //Declare array of sales

let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); //Add up sales

console.log("Total Revenue:", totalRevenue); //Log total revenue

//Task 7 - find() Method
let customers = ["Alice", "Bob", "Charlie", "David"]; //Create array of customers

let locatedCustomer = customers.find(name => name === "Charlie"); //Locate customer Charlie

console.log("Located Customer:", locatedCustomer); //Log located customer

//Task 8 - Function Declaration
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log('Tax: $${tax}');
    return tax;
}; // Calculate tax

calculateTax(100, 0.07); //Numbers for calculating tax

//Task 9 - Function Expression
let applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log('Discounted Price: $${discountedPrice}');

    
//Task 10 - Arrow Function
let calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10);
    console.log("Loyalty Points:", points);
    return points; //Create a loyalty point function
};

calculatePoints(100); //Numbers for points
    return discountedPrice; //Create a function to apply a discount
};

applyDiscount(100, .50); //Numbers for discount
