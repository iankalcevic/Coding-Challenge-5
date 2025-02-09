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
