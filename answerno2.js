class OrderItem {
  constructor(ID, OrderID, ProductID, Price, Qty) {
    this.ID = ID;
    this.OrderID = OrderID;
    this.ProductID = ProductID;
    this.Price = Price;
    this.Qty = Qty;
  }
}

function calculateTotalPrice(orderItems) {
  let totalPrice = 0;
  for (const item of orderItems) {
    totalPrice += item.Price * item.Qty;
  }
  return totalPrice;
}

const item1 = new OrderItem(1, 1, 1, 10, 2);
const item2 = new OrderItem(2, 1, 2, 5, 3);

let orderItems = [];
orderItems.push(item1);
orderItems.push(item2);

const totalPrice = calculateTotalPrice(orderItems);
console.log(totalPrice); // Output: 35
