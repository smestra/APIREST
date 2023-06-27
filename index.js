"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.json());
var productsDB = [
    {
        productName: "Led Zeppelin tshirt",
        itemNumber: "0987654321",
        size: "large",
        listingCategory: "Apparel",
    },
    {
        productName: "Vans sneakers",
        itemNumber: "0987654322",
        size: "9.5",
        listingCategory: "Shoes",
    },
];
app.get("/products/:itemNumber", function (request, response) {
    var itemNumber = request.params.itemNumber;
    var result = productsDB.filter(function (item) { return item.itemNumber === itemNumber; });
    response.json(result);
});
app.post("/products/:itemNumber", function (request, response) {
    var body = request.body;
    productsDB.push(body);
    response.send("the product information has been saved correctly");
});
app.put("/products/:itemNumber", function (request, response) {
    var itemNumber = request.params.itemNumber;
    var body = request.body;
    var productsIndex = productsDB.findIndex(function (item) { return item.itemNumber === itemNumber; });
    console.log("productsIndex", productsIndex);
    productsDB[productsIndex] = body;
    response.send("listing information updated successfully");
});
app.delete("/products/:itemNumber", function (request, response) {
    var itemNumber = request.params.itemNumber;
    var result = productsDB.filter(function (item) { return item.itemNumber !== itemNumber; });
    productsDB = result;
    response.json("Listing information removed successfully");
});
app.listen(PORT, function () {
    console.log("ejecucion en localhost: " + PORT);
});
