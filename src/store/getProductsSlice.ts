import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProduct } from "../api/request.aip.ts";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  images: [index: string];
  price: number;
  counter: number;
};

const localCart = localStorage.getItem("cart");

type ProductsType = {
  items: Array<ProductType>;
  status: string;
  mode: string;
  FilteredCategory: string;
  cart: Array<ProductType>;
};

const initialState: ProductsType = {
  items: [],
  status: "",
  mode: localStorage.getItem("theme") || "light",
  FilteredCategory: localStorage.getItem("category") || "all",
  cart: localCart ? JSON.parse(localCart) : [],
};

export const getProducts = createAsyncThunk(
  "getProducts/getProducts",
  async () => {
    const res = await getProduct.get("", {
      params: {
        limit: 100,
      },
    });
    return await res.data.products;
  },
);

const getProductsSlice = createSlice({
  name: "getProducts",
  initialState,
  reducers: {
    themeChange: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
    filterChange: (state, action: PayloadAction<string>) => {
      state.FilteredCategory = action.payload;
      localStorage.setItem("category", state.FilteredCategory);
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const totalFind = state.cart.find((el) => el.id === action.payload.id);
      if (totalFind) {
        state.cart = state.cart.map((el) => {
          if (totalFind.id !== el.id) return el;
          return {
            ...el,
            counter: el.counter + 1,
          };
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearAllToCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearProductCart: (state, action: PayloadAction<ProductType>) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    minusCounterCart: (state, action: PayloadAction<ProductType>) => {
      if (action.payload.counter > 1) {
        state.cart = state.cart.map((el) => {
          if (el.id !== action.payload.id) return el;
          return {
            ...el,
            counter: el.counter - 1,
          };
        });
      } else {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload.map((el: ProductsType) => ({
          ...el,
          counter: 1,
        }));
        state.status = "fulfilled";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default getProductsSlice.reducer;
export const {
  themeChange,
  filterChange,
  addToCart,
  clearAllToCart,
  minusCounterCart,
  clearProductCart,
} = getProductsSlice.actions;
