const orders = {};
let total = 0;

function addToOrder(itemName, price) {
    if (orders[itemName]) {
        orders[itemName].qty++;
    } else {
        orders[itemName] = { price, qty: 1 };
    }
    updateOrderUI();
}

function decreaseItem(itemName) {
    if (orders[itemName]) {
        orders[itemName].qty--;
        if (orders[itemName].qty === 0) {
            delete orders[itemName];
        }
        updateOrderUI();
    }
}

function updateOrderUI() {
    const orderList = document.getElementById("order-list");
    const totalDisplay = document.getElementById("total");

    orderList.innerHTML = "";
    total = 0;

    for (let item in orders) {
        const itemTotal = orders[item].price * orders[item].qty;
        total += itemTotal;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item} × ${orders[item].qty} — ₵${itemTotal}
            <button onclick="decreaseItem('${item}')">➖</button>
        `;
        orderList.appendChild(li);
    }

    totalDisplay.textContent = total;
}

/*function sendToWhatsApp() {
    const orderList = document.getElementById("order-list");
    if (!orderList || orderList.children.length === 0) {
        alert("Please select at least one item.");
        return;
    }

    let message = "Hello ESTEESBITES 🍽️\n\n";
    message += "I would like to order:\n";

    for (let item of orderList.children) {
        message += "- " + item.textContent + "\n";
    }

    message += `\nTotal: ₵${total}`;

    const phoneNumber = "233552820935"; 

    const url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}*/
function sendToWhatsApp() {
    const orderList = document.getElementById("order-list");
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const location = document.getElementById("customer-location").value;
    const totalDisplay = document.getElementById("total");

    if (!orderList || orderList.children.length === 0) {
        alert("Please select at least one item 😊");
        return;
    }

    if (!name || !phone || !location) {
        alert("Please fill all customer details 😊");
        return;
    }

    /*if (Object.keys(orders).length === 0) {
        alert("Please select at least one item");
        return;
    }*/

    let message = "Hello ESTEESBITES,\n\n";
    message += `*Customer Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Location:* ${location}\n\n`;

    message += "*Order Details:*\n";
    for (let item of orderList.children) {
        let cleanedText = item.textContent.replace("➖", "").trim();
        message += "-" + cleanedText + "\n";
    }

    message += `\n*Total Amount:* ₵${totalDisplay.textContent}*`;
    message += "\nThank you! 😊";

    const businessPhone = "233552820935"; // CHANGE TO REAL NUMBER
    window.open(`https://wa.me/${businessPhone}?text=${message}`, "_blank");
}