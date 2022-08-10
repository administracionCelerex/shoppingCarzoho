const shopCar = {
  items: [
    /* {
      id: "001",
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
  /*  console.log(item); */
  let quan = 0;
  let priceAux = 0;

  const numElem = shopCar.items.length;
  let totalPrice = shopCar.totalItems;
  let totalItems = shopCar.totalItems;

  totalPrice += item.price;
  totalItems += 1;

  const itemaux = {
    id: item.id,
    nameItem: item.name,
    quantity: quan,
    individualPrice: priceAux,
  };

  
  const itemObj = shopCar.items.find((item2) => {
    return item2.id === item.id;
  });

  const itemObjIndex = shopCar.items.findIndex((item2) => item2.id === item.id);

  if (!itemObj) {
    //no hay nada en item object no existealgo previo

    quan = 1;
    priceAux = item.price;
    itemaux.quantity = quan;
    itemaux.individualPrice = priceAux;
    shopCar.items.push(itemaux);
  } else {
    //si existe
    let quantity2 = itemObj.quantity;
    quantity2 += 1;

    const replaceItem = { ...itemObj, quantity: quantity2 };

    shopCar.items[itemObjIndex] = replaceItem;

    //const individualPrice = itemObj.individualPrice;
  }

  shopCar.totalPrice = totalPrice;
  shopCar.totalItems = totalItems;
  console.log(shopCar);
};
