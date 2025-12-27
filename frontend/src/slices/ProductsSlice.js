import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],  // Initialize products as empty array
        loading: true,
        error: null
    },
    reducers: {
//         productsRequest(state, action) {
//             return {
//                 ...state,  // Spread the existing state
//                 loading: true,
//                 error: null  // Clear any previous errors
//             }
//         },
//        productsSuccess(state, action) {
//         return {
//             ...state,
//             loading: false,
//             products: action.payload.products,              // <-- only products array here
//             productsCount: action.payload.productsCount,    // <-- add these
//             resPerPage: action.payload.resPerPage,
//             filteredProductsCount: action.payload.filteredProductsCount,
//             error: null
//              };
//         }
// ,
//         productsFailed(state, action) {
//             return {
//                 ...state,  // Spread the existing state
//                 loading: false,
//                 error: action.payload
//             }
//         },
         productsRequest(state) {
      state.loading = true;
      state.error = null;
    },

    productsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount || 0;
      state.resPerPage = action.payload.resPerPage || 0;
      state.filteredProductsCount =
        action.payload.filteredProductsCount || 0;
    },

    productsFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    }
});

const {actions,reducer} = productsSlice;

 export const {productsRequest,productsSuccess,productsFailed} = actions;
 export default reducer;
