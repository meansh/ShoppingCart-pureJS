var cloth = [
  {
    price: 29,
    title: "T-shirt",
    desc: "For all the women",
    id: 0,
  },
  {
    price: 259,
    title: "Skirt",
    desc: "Sweatshirt",
    id: 1,
  },
  {
    price: 46,
    title: "Frog-face",
    desc: "Insomnia",
    id: 2,
  },
  {
    price: 52,
    title: "Frog-face",
    desc: "Jacket",
    id: 3,
  },
  {
    price: 98,
    title: "Frog-face",
    desc: "Half t shirt",
    id: 4,
  },
  {
    price: 193,
    title: "Frog-face",
    desc: "Blue T's",
    id: 5,
  },
  {
    price: 242,
    title: "Frog-face",
    desc: "Wind Cheater",
    id: 6,
  },
];

var count = 0;
const addToCart = () => {
  if (this.count < 30) this.count += 1;
  else if (this.count >= 30) this.count = 0;

  document.getElementById("addOrRemove").innerHTML = count;
};

const removeFromCart = () => {
  if (this.count > 0) this.count -= 1;
  else if (this.count <= 0) this.count = 0;

  document.getElementById("addOrRemove").innerHTML = count;
};
