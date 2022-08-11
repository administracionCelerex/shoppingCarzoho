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
  let totalPrice = shopCar.totalPrice;
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
    let newPrice = itemObj.individualPrice + item.price;
    quantity2 += 1;

    const replaceItem = {
      ...itemObj,
      quantity: quantity2,
      individualPrice: newPrice,
    };

    shopCar.items[itemObjIndex] = replaceItem;

    //const individualPrice = itemObj.individualPrice;
  }

  shopCar.totalPrice = totalPrice;
  shopCar.totalItems = totalItems;
  /* console.log(shopCar); */
};

const enviarAlCRM = (listaProductos, precioTotal, totalItems) => {
  const config = {
    appName: "crm-dev2",
    formName: "shoppincarzoho1",
    data: {
      lista_productos: listaProductos,
      precio: precioTotal,
      total_Items: totalItems,
    },
  };
  //add record API
  ZOHO.CREATOR.API.addRecord(config)
    .then(function (response) {
      //callback block
      console.log(response);
      console.log("registro insertado");
    })
    .catch((err) => {
      console.log(err);
    });
};

function finalizarCompra() {
  console.log(shopCar);
  let listaProductos = "";
  const precioTotal = shopCar.totalPrice;
  const totalItems = shopCar.totalItems;

  for (let index = 0; index < shopCar.items.length; index++) {
    const item = shopCar.items[index];
    listaProductos += item.nameItem + " - " + item.quantity + "\n";
  }

  console.log(listaProductos);
  console.log(precioTotal);
  console.log(totalItems);

  enviarAlCRM(listaProductos, precioTotal, totalItems);
}
