import axios from "axios";
import useHttp from "../../hooks/http";
import stabApi from "../axios.config";

export interface ProductsAPIResponse {
    qty_expected:        number;
    item_id:             number;
    container_id:        number;
    family:              string;
    color:               string;
    name:                string;
    price_vip:           number;
    price_esp:           number;
    price_container:     number;
    minimum_sales_units: number;
    container_number:    string;
    arrival_warehouse:   Date;
    status:              string;
    type:                string;
    images:              string;
    size:                string;
}

const URL_PRODUCTS = '/containerToApp/';


const getProducts = async () => {;
    try {

        const response = await stabApi.get('URL_PRODUCTS');
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
    }
  };


  export const ProductsService = Object.freeze({
    getProducts
  });
  