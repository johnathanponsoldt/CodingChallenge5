// Task 1: Create an Inventory Array of Product Objects

const inventory = [

   { name: 'Mouse', price: 45, quantity: 10 },
   { name: 'Monitor', price: 250, quantity: 5 },
   { name: 'Keyboard', price: 90, quantity: 6 },
   { name: 'Controller', price: 60, quantity: 4 }   
];

// Task 2: Create an Orders Array of Order Objects

const orders = [];
order.push({
    customerName: "Ashley Smith",
    items: [
        {name: "Mouse", quantity: 2},
        {name: "Monitor", quantity: 1}
    ],
    status: "Pending"
});

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, ordereditems) {
    for (let item of ordereditems) {
        const product =inventory.find(p => p.name === item.name);
      if (!product || product.quantity < item.quantity) {
        console.error(`Insufficient stock for ${item.name}`);
        return;
      }
    }
    ordereditems.foreach(item => {
        const product = inventory.find(p => p.name === item.name);
        product.quantity -= item.quantity;
    });
    orders.push({
        customerName: "Ashley Smith",
        items: mouse, monitor
        
    });
    status: "Pending"
    console.log(`Order placed for $(customerName)`);
}

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    return order.items.reduce((total,item) => {
        const product = inventory.find(p => p.name === item.name);
        return total + (product.price * item.quantity);

    });
}

// Task 5: Create a Function to Mark an Order as Completed

function completeorder(customerName) {
    const order =orders.find(customerName);
    if (order) {
        order.status = "Completed";
        console.log(`Order for ${customerName} is now completed`);

    } else {
        console.error(`No order found for ${customerName}`);
    }
}

// Task 6: Create a Function to Check Pending Orders

function checkingPendingOrders(){
    const pendingOrders = orders.filter(order => order.status === 'Pending');
    if (pendingOrders.length === 0) {
        console.log('No Pending Orders');
    } else {
        pendingOrders.forEach(order => {

        })
    }
}
