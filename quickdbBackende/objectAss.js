// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const inventory = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 },
    { name: 'Mango', price: 4, quantity: 15 }
  ];
  
  for (let i=0; i<inventory.length; i++){
      inventory[i].price*=2;
  }
  
  console.log("inventory after step 1", inventory);
  
  for (let  i=0; i<inventory.length; i++){
      while(inventory[i].quantity>5){
          inventory[i].quantity-=5;
      }
  }
  
  console.log('After Step 2 (Reduce quantity):', inventory);
  
  
  const itemUnderPrice= [];
  
  for (const item of inventory){
      if (item.price<5){
          itemUnderPrice.push(item);
      }
  }
  
  console.log("Item under price", itemUnderPrice);
  
  let totalItems = 0;
  for (const index in inventory) {
    totalItems += inventory[index].quantity;
  }
  console.log('After Step 4 (Total quantity):', `Total Items: ${totalItems}`);
  
  // Step 5: Recreate inventory with markup
  const newInventory = [];
  for (let i = 0; i < inventory.length; i++) {
    newInventory.push({
      name: `${inventory[i].name} `,
      price: parseFloat((inventory[i].price * 1.1).toFixed(1)),
      quantity: inventory[i].quantity
    });
  }
  console.log('After Step 5 (Recreate inventory with markup):', newInventory);
  
 