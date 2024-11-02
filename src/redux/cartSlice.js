import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

// Helper function to clean and convert price to a number
const parsePrice = (price) => {
  return parseFloat(price.trim()) || 0;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const price = parsePrice(newProduct.currentPrice);
      const quantity = newProduct.productQuantity || 1; // Default to 1 if undefined

      let existingProduct = state.products.find((pro) => pro.id === newProduct.id && pro.title == newProduct.title);

      if (existingProduct) {
        existingProduct.productQuantity += quantity;
        state.totalPrice += price * quantity;
      } else {
        // Add new product with calculated totalPrice for that item
        state.products.push({
          ...newProduct,
          productQuantity: quantity,
          totalPrice: price * quantity,
        });
        state.totalPrice += price * quantity;
      }
    },
    removeFromCart: (state, action) => {

      state.products = state.products.filter((item) => item.id !== action.payload.id && item.title !== action.payload.title);
      state.totalPrice -= action.payload.currentPrice * action.payload.productQuantity;
      // deletedProduct = deletedProduct.filter((el=> el.id !=))
    },
    reset: (state) => {
      state.products = [];
      state.totalPrice = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, reset, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
