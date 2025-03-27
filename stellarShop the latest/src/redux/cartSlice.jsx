import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
  const newItem = action.payload;
  const itemIndex = state.products.findIndex((item) => item.id === newItem.id);
  
  const price = Number(newItem.price); // Ensure it's a number
  const quantity = Number(newItem.quantity); // Ensure it's a number

  if (itemIndex !== -1) {
    state.products[itemIndex].quantity += quantity; 
    state.products[itemIndex].totalPrice += price * quantity;
  } else {
    state.products.push({
      id: newItem.id,
      name: newItem.name,
      price: price,
      quantity: quantity,
      totalPrice: price * quantity,
      image: newItem.image,
    });
  }

  state.totalPrice += price * quantity;
  state.totalQuantity += quantity;
},


    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem && quantity > 0) {
        state.totalQuantity += quantity - findItem.quantity;
        state.totalPrice += (quantity - findItem.quantity) * findItem.price;
        findItem.quantity = quantity;
        findItem.totalPrice = findItem.price * quantity;
      }
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
