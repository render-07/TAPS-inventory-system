import { GET_SUPPLIERS, SUPPLIERS_LOADING } from "./types";
import axios from "axios";

export const getSuppliers = () => (dispatch) => {
  dispatch(setSuppliersLoading());
  axios
    .get("https://technocashierautomatedproduct.herokuapp.com/api/suppliers")
    .then((res) =>
      dispatch({
        type: GET_SUPPLIERS,
        payload: res.data,
      })
    );
};

export const setSuppliersLoading = () => {
  return {
    type: SUPPLIERS_LOADING,
  };
};
