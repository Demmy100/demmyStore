import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
    searchProduct: [],
    searchProductStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        clearSearch: (state, action) => {
            state.searchProduct = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
            state.searchProductStatus = STATUS.LOADING
        })
        .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
            state.searchProduct = action.payload
            state.searchProductStatus = STATUS.SUCCESS
        })
        .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
            state.searchProductStatus = STATUS.FAIL
        })
    }
})

export const {setSearchTerm, clearSearch} = searchSlice.actions;
export const fetchAsyncSearchProduct = createAsyncThunk("product-search/fetch", async(searchTerm) => {
    const response = await fetch(`${BASE_URL}products/search?q=${searchTerm}`)
    const data = await response.json()
    return data.products;
});
export const getSearchProduct = (state) => state.search.searchProduct;
export const getSearchProductStatus = (state) => state.search.searchProductStatus;
export default searchSlice.reducer;
