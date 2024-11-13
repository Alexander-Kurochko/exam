export const customer = {
    name: "Vladimir",
    age: 44,
    friends: ["William", "Margo", "Maria"]
}

const updatedCustomer = {...customer}

updatedCustomer.friends.push("Valera")

console.log(customer.friends[3])

/*Какое значение будет выведено в консоль?*/


