// const users = [
//   {
//     name: "Alice",
//     age: 25,
//     hobbies: ["Reading", "Painting"],
//   },
//   {
//     name: "Bob",
//     age: 30,
//     hobbies: ["Playing guitar", "Cooking"],
//   },
//   {
//     name: "Charlie",
//     age: 22,
//     hobbies: ["Hiking", "Photography"],
//   },
//   {
//     name: "David",
//     age: 28,
//     hobbies: ["Running", "Watching movies"],
//   },
//   {
//     name: "Ella",
//     age: 35,
//     hobbies: ["Traveling", "Knitting"],
//   },
//   {
//     name: "Frank",
//     age: 20,
//     hobbies: ["Gaming", "Drawing"],
//   },
//   {
//     name: "Grace",
//     age: 27,
//     hobbies: ["Singing", "Dancing"],
//   },
//   {
//     name: "Hannah",
//     age: 32,
//     hobbies: ["Cooking", "Yoga"],
//   },
//   {
//     name: "Ian",
//     age: 24,
//     hobbies: ["Playing football", "Reading", "a", "b", "c"],
//   },
//   {
//     name: "Jessica",
//     age: 29,
//     hobbies: ["Writing", "Cycling", "swimming"],
//   },
// ];

// console.log(users);

// const div = document.querySelector("#users");

// for (let i = 0; i < users.length; i++) {
//   let hobbies = "";
//   for (let j = 0; j < users[i].hobbies.length; j++) {
//     hobbies += `<li>${users[i].hobbies[j]}</li>`;
//   }
// div.innerHTML += `
// <h2>Name: ${users[i].name}</h2>
// <h3>Age: ${users[i].age}</h3>
// <h3>Hobbies</h3>
// <ul>${hobbies}</ul>
// <hr/>
// `;
// }
// products = [
//   {
//     name: "Laptop",
//     price: 999.99,
//     description: "Powerful laptop for all your computing needs.",
//   },
//   {
//     name: "Headphones",
//     price: 79.99,
//     description: "High-quality headphones for immersive audio experience.",
//   },
//   {
//     name: "Smartphone",
//     price: 699.99,
//     description: "Advanced smartphone with cutting-edge features.",
//   },
//   {
//     name: "Tablet",
//     price: 449.99,
//     description: "Portable tablet for entertainment and productivity.",
//   },
//   {
//     name: "Smartwatch",
//     price: 249.99,
//     description: "Stay connected and track your fitness with this smartwatch.",
//   },
//   {
//     name: "Gaming Console",
//     price: 399.99,
//     description: "Experience the thrill of gaming with this powerful console.",
//   },
//   {
//     name: "Camera",
//     price: 599.99,
//     description: "Capture life's moments with stunning clarity and detail.",
//   },
//   {
//     name: "Wireless Speaker",
//     price: 129.99,
//     description: "Enjoy your favorite music wirelessly with this speaker.",
//   },
//   {
//     name: "External Hard Drive",
//     price: 129.99,
//     description: "Expand your storage and backup your files with ease.",
//   },
//   {
//     name: "Wireless Mouse",
//     price: 29.99,
//     description: "Navigate your computer with precision and comfort.",
//   },
//   {
//     name: "Printer",
//     price: 199.99,
//     description: "Print documents and photos with exceptional quality.",
//   },
//   {
//     name: "Desk Lamp",
//     price: 49.99,
//     description: "Illuminate your workspace with adjustable brightness.",
//   },
//   {
//     name: "Fitness Tracker",
//     price: 79.99,
//     description: "Monitor your health and track your workouts.",
//   },
//   {
//     name: "Bluetooth Earbuds",
//     price: 99.99,
//     description: "Wireless earbuds for on-the-go audio enjoyment.",
//   },
//   {
//     name: "Portable Charger",
//     price: 39.99,
//     description: "Charge your devices anywhere, anytime.",
//   },
//   {
//     name: "USB Flash Drive",
//     price: 19.99,
//     description: "Store and transfer your files conveniently.",
//   },
//   {
//     name: "Monitor",
//     price: 299.99,
//     description: "Upgrade your display for enhanced productivity.",
//   },
//   {
//     name: "Keyboard",
//     price: 49.99,
//     description: "Type comfortably with this reliable keyboard.",
//   },
//   {
//     name: "Computer Mousepad",
//     price: 9.99,
//     description: "Enhance your mouse precision with this smooth pad.",
//   },
//   {
//     name: "Graphic Tablet",
//     price: 199.99,
//     description: "Express your creativity with this digital drawing tablet.",
//   },
//   {
//     name: "Wireless Router",
//     price: 79.99,
//     description: "Fast and reliable internet connection for your home network.",
//   },
// ];
// const div = document.querySelector("#prodects");
// console.log(products);
const products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful laptop for all your computing needs.",
  },
  {
    name: "Headphones",
    price: 79.99,
    description: "High-quality headphones for immersive audio experience.",
  },
  // Add other products here...
];

const productCardsContainer = document.getElementById("productCards");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const productName = document.createElement("h2");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  card.appendChild(productName);
  card.appendChild(productPrice);
  card.appendChild(productDescription);

  productCardsContainer.appendChild(card);
});
