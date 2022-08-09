const shopCar = {
  items: [
    /* {
      id: "123",
      nameItem: "Celuar",
      quantity: 3,
      individualPrice: 300,
    },
    {
      id: "456",
      nameItem: "MAC",
      quantity: 1,
      individualPrice: 300,
    }, */
  ],
  totalPrice: 0,
  totalItems: 0,
};

const agregarCarrito = (item) => {
  console.log(item);
  let quan = 0;
  let priceAux = 0;

  const numElem = shopCar.items.length;

  if (numElem === 0) {
    quan = 1;
    priceAux = item.price;
  }

  const itemaux = {
    id: item.id,
    nameItem: item.name,
    quantity: quan,
    individualPrice: priceAux,
  };
  shopCar.items.push(itemaux);
  console.log(shopCar.items);
};
