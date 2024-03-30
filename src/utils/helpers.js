export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
export const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

export function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
export function getObjEmail(frontObj, backObj){
  const pizzasItems = frontObj.cart.map((pizza, index) =>
      `${index+1}) pizza: ${pizza.name}, size:  ${pizza.size}, quantity: ${pizza.quantity}, total price: ${pizza.totalPrice}`).join('\n');
  const date = new Date();

  return {
    createdAt: date.toLocaleDateString() + ' at ' + date.toLocaleTimeString(),
    estimatedDelivery: backObj.estimatedDelivery ?? null,
    id: backObj.id,
    customer: frontObj.customer,
    phone: frontObj.phone,
    address: frontObj.address,
    pizzas: pizzasItems,
    priority: frontObj.priority,
    priorityPrice: frontObj.priorityPrice,
    totalPrice: frontObj.totalPrice
  }
}