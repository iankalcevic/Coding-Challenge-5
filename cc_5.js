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
