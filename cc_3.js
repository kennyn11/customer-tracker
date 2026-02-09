let customers = [
 {
    name: "Kentrell Gaulden",
    email: "4ktofficial@gmail.com",
    purchases: ["Headphones", "Microphone", "Laptop"]

 },
 {
    name: "Kevin Durant",
    email: "easymoneysniper@outlook.com",
    purchases: ["Basketball","Net", "Shirt"]

 },
 {
    name: "Tim Cheese",
    email: "timthecheesiest@yahoo.com",
    purchases: ["Cheese", "Gloves", "Plastic Bowls"]
 }
]
customers.push({
    name: "John Pork",
    email: "porkyjohn@gmail.com",
    purchases: ["Napkins", "Plates", "Forks"]
})
customers.shift()

customers[0].email = "easymoneysniper@outlook.com";
customers[1].purchases.push("Earbuds")

console.log("Current Customers:")
customers.forEach(customers => {
    let totalnumberPurchases = customers.purchases.length;
    let email = customers.email
    let name = customers.name

    console.log(`Customer Name: ${name}, Customer Email: ${email}, Total Amount Purchased: ${totalnumberPurchases}`)
})

