function findAveragePhonePrice(phones) {
    if (phones.length === 0) return 0;

    const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0); // phone = phones[0]
    const average = totalPrice / phones.length;

    return average;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones))

console.log(phones[0].model)