import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      let newProduct = action.payload;
      let existProduct = state.products.find((pro) => pro.id == newProduct.id && pro.title == newProduct.title);
      if (!existProduct) {
        state.products.push(newProduct);
      }
    },
    removeFromWishList: (state, action) => {
      const deletedProduct = action.payload;
      state.products = state.products.filter((product) => product.id !== deletedProduct.id && product.title !== deletedProduct.title);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;