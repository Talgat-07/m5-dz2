import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProduct } from "../api/request.aip.ts";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  images: [index: string];
  price: number;
};

type ProductsType = {
  items: Array<ProductType>;
  status: string;
  mode: string;
  FilteredCategory: string;
};

const initialState: ProductsType = {
  items: [],
  status: "",
  mode: localStorage.getItem("theme") || "light",
  FilteredCategory: "all",
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default getProductsSlice.reducer;
export const { themeChange, filterChange } = getProductsSlice.actions;
