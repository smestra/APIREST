import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

interface products {
  productName: string;
  itemNumber: string;
  size: string;
  listingCategory: string;
}

let productsDB: products[] = [
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

  {
    productName: "Louisville Slugger Bat",
    itemNumber: "0987654323",
    size: "33 in",
    listingCategory: "Sport implements"
  },
];

app.get("/products/:itemNumber", function (request, response) {
  const itemNumber = request.params.itemNumber;
  const result = productsDB.filter((item) => item.itemNumber === itemNumber);
  response.json(result);
});

app.post("/products/:itemNumber", function (request, response) {
  const body = request.body;
  productsDB.push(body);
  response.send("the product information has been saved correctly");
});

app.put("/products/:itemNumber", function (request, response) {
  const itemNumber = request.params.itemNumber;
  const body = request.body;
  const productsIndex = productsDB.findIndex(
    (item) => item.itemNumber === itemNumber
  );
  console.log("productsIndex", productsIndex);
  productsDB[productsIndex] = body;
  response.send("listing information updated successfully");
});

app.delete("/products/:itemNumber", function (request, response) {
  const itemNumber = request.params.itemNumber;
  const result = productsDB.filter((item) => item.itemNumber !== itemNumber);
  productsDB = result;
  response.json("Listing information removed successfully");
});

app.listen(PORT, function () {
  console.log("ejecucion en localhost: " + PORT);
});
