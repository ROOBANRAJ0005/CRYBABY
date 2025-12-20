import { productsRequest, productsSuccess, productsFailed,} from "../slices/ProductsSlice";
import api from "../api";


export const getProducts =
  (currentPage = 1, keyword = "", price, category, rating = 0) =>
  async (dispatch) => {
    try {
      dispatch(productsRequest());

      let link = `/products?page=${currentPage}`;

      if (keyword) link += `&keyword=${keyword}`;
      if (category) link += `&category=${encodeURIComponent(category)}`;
      if (rating) link += `&ratings=${rating}`;
      if (price)
        link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`;

      const { data } = await api.get(link);

      dispatch(
        productsSuccess({
          products: data.products,
          productsCount: data.count,
          resPerPage: data.resPerPage,
          filteredProductsCount: data.count,
        })
      );
    } catch (error) {
      dispatch(
        productsFailed(
          error.response?.data?.message || error.message
        )
      );
    }
  };






